r"""自動挑選下一天的 3 題（1 易 1 中 1 難、盡量不同單元），寫入 data/releases.json。

用法：
    python tools/pick_batch.py                          # 只建議（dry run）
    python tools/pick_batch.py --apply                  # 實際寫入 releases.json
    python tools/pick_batch.py --apply --days 5         # 一次排 5 天（接在最後一批之後）
    python tools/pick_batch.py --apply --fill-gaps      # 補回排程中間的缺日（全部，由早到晚）
    python tools/pick_batch.py --apply --date 2026-10-01  # 指定某一天
    python tools/pick_batch.py --apply --renumber       # 把批次編號按日期重排（編號＝第 N 天）

設計：
  * 只從「已有解答、且尚未排進任何 release」的題池挑（學生不會看到「解答待更新」）
  * 優先 1 易 / 1 中 / 1 難；某個難度沒貨時，用最近的難度補上（並在輸出提醒）
  * 同一天盡量不要三個同單元
  * 日期接在已有排程之後（若全部已過期，就從今天開始）
  * **缺日**：預設模式只會往後排（例：已有 10-10，下一次就是 10-11），中間的
    10-01~10-05 要靠 --fill-gaps 或 --date 才會補回。補出的批次編號接在最後
    （日期排序後仍會顯示在正確的日子）。
"""
from __future__ import annotations

import argparse
import datetime
import io
import json
import os
import re
import sys

DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BANK = os.path.join(BASE, "data", "bank.json")
SOLUTIONS = os.path.join(BASE, "data", "solutions.json")
RELEASES = os.path.join(BASE, "data", "releases.json")

WANT = [1, 2, 3]          # 易 / 中 / 難


def load(path: str, default):
    if not os.path.exists(path):
        return default
    return json.load(open(path, encoding="utf-8-sig"))


def pick_day(pool: list[dict]) -> list[dict]:
    """從題池挑 3 題：1 易 1 中 1 難，盡量不同單元。"""
    chosen: list[dict] = []
    used_units: set[int] = set()
    remaining = list(pool)
    for diff in WANT:
        cands = [q for q in remaining if q["difficulty"] == diff]
        if not cands:                       # 該難度沒貨 → 用最接近的難度補
            cands = sorted(remaining, key=lambda q: abs(q["difficulty"] - diff))
        if not cands:
            break
        fresh = [q for q in cands if (q.get("topic") or {}).get("unit") not in used_units]
        q = (fresh or cands)[0]             # 題池已按題號排序，取第一題（最舊的優先）
        chosen.append(q)
        remaining.remove(q)
        used_units.add((q.get("topic") or {}).get("unit"))
    return chosen


def title_of(batch: list[dict], lang: str) -> str:
    """由當天三題的單元名合成標題（例：圓的基本性質 · 軌跡 · 三角學續論）。"""
    names = []
    for q in batch:
        t = q.get("topic") or {}
        n = t.get(lang) or t.get("en") or t.get("zh")
        if n and n not in names:
            names.append(n)
    return " · ".join(names[:3]) or ("Daily practice" if lang == "en" else "每日練習")


def renumber(releases: list[dict]) -> list[tuple[dict, object, int]]:
    """把批次編號按日期重排（最早 = 1），使「批次 N」＝第 N 天。

    回傳 [(entry, 舊編號, 新編號)]；entry 是原字典（就地修改）。
    """
    changed: list[tuple[dict, object, int]] = []
    for i, r in enumerate(sorted(releases, key=lambda x: x["date"]), 1):
        old = r.get("batch")
        r["batch"] = i
        if old != i:
            changed.append((r, old, i))
    return changed


def main() -> int:
    ap = argparse.ArgumentParser(description="自動挑選下一批每日三題")
    ap.add_argument("--apply", action="store_true", help="寫入 data/releases.json")
    ap.add_argument("--days", type=int, default=1, help="要排幾天（預設 1；--fill-gaps 時忽略）")
    ap.add_argument("--fill-gaps", action="store_true",
                    help="補回排程中間的缺日（首批日期 ~ 已排最後日期／今天之間，由早到晚全部補）")
    ap.add_argument("--date", default="", help="指定日期 YYYY-MM-DD（該日不可已有批次）")
    ap.add_argument("--renumber", action="store_true",
                    help="把批次編號按日期重排（最早 = 1）；可單獨使用，或用來修正補缺日後的編號")
    args = ap.parse_args()

    bank = load(BANK, {"questions": []})
    solutions = load(SOLUTIONS, {"solutions": {}}).get("solutions", {})
    doc = load(RELEASES, {"version": 1, "releases": []})
    releases = doc.setdefault("releases", [])

    released = {i for r in releases for i in r.get("ids", [])}
    pool = [q for q in bank["questions"] if q["id"] in solutions and q["id"] not in released]
    print(f"題池：{len(pool)} 題可排（已解答且未發佈）；已排 {len(releases)} 批")

    today = datetime.date.today()
    used_dates = {r.get("date") for r in releases if r.get("date")}
    known = sorted(used_dates)
    last_date = datetime.date.fromisoformat(known[-1]) if known else None
    first_date = datetime.date.fromisoformat(known[0]) if known else None

    # ── 決定這次要排哪些日期 ──
    if args.renumber and not (args.fill_gaps or args.date):
        plan = []                       # --renumber 單獨使用＝只重編號，不排新批次
        print("（--renumber 單獨使用：只重排批次編號，不排新批次）")
    elif args.date:
        if not DATE_RE.match(args.date):
            print("[停止] --date 格式應為 YYYY-MM-DD")
            return 1
        d0 = datetime.date.fromisoformat(args.date)
        plan = [(d0 + datetime.timedelta(days=i)).isoformat() for i in range(max(1, args.days))]
        clash = [d for d in plan if d in used_dates]
        if clash:
            print(f"[停止] {'、'.join(clash)} 已經有批次，不能重複排")
            return 1
    elif args.fill_gaps:
        end = max(today, last_date or today)
        first = first_date or today
        span = (end - first).days
        plan = [(first + datetime.timedelta(days=i)).isoformat() for i in range(span + 1)]
        plan = [d for d in plan if d not in used_dates]
        if not plan and not args.renumber:
            print("[完成] 排程由首批到最後一天連續，沒有缺日 —— 不需要補。")
            return 0
        if plan:
            print(f"缺日 {len(plan)} 天：{'、'.join(plan)}")
    else:
        start = max(today, last_date) if last_date else today
        plan = [(start + datetime.timedelta(days=i + 1)).isoformat() for i in range(args.days)]

    if plan and not pool:
        print("[停止] 沒有可排的題目——請先補新試卷或先解題。")
        return 1

    next_batch = max((r.get("batch") or 0 for r in releases), default=0)
    if plan:
        print(f"本次排定：{'、'.join(plan)}")

    made = []
    for date in plan:
        batch = pick_day(pool)
        if len(batch) < 3:
            print(f"[警告] {date} 只夠挑 {len(batch)} 題（題池快用完）")
        for q in batch:
            pool.remove(q)
        next_batch += 1
        entry = {
            "date": date,
            "batch": next_batch,
            "title": {"en": title_of(batch, "en"), "zh": title_of(batch, "zh")},
            "ids": [q["id"] for q in batch],
        }
        made.append(entry)
        codes = "、".join(q.get("code") or q["id"] for q in batch)
        print(f"  {date} 批次 {next_batch}: {codes}  ← {entry['title']['zh']}")
        if not pool:
            print("  （題池已空）")
            break

    if args.renumber:
        # 先算出重排後的編號（dry run 只印不動檔）
        changes = renumber(releases + made)
        if changes:
            print(f"批次編號按日期重排（最早 = 1）：{len(changes)} 個變更")
            for r, old, new in changes:
                print(f"  {r['date']}  批次 {old} → {new}")
        else:
            print("批次編號已經是按日期順序（最早 = 1），無需變更。")
    elif args.fill_gaps and len(made) > 1:
        print(f"註：補回的批次編號接在最後（{made[0]['batch']}~{made[-1]['batch']}），"
              "日期排序後仍會顯示在正確的日子。")

    if args.apply:
        releases.extend(made)
        if args.renumber:
            renumber(releases)
        releases.sort(key=lambda r: r["date"])
        with open(RELEASES, "w", encoding="utf-8") as f:
            json.dump(doc, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print(f"已寫入 {RELEASES}（現有 {len(releases)} 批）")
        print("下一步：python tools\\make_site_data.py && node tools\\site_check.js && node tools\\smoke_test.js，然後 git push")
    else:
        print("（dry run：未寫入。要寫入請加 --apply）")
    return 0


if __name__ == "__main__":
    sys.exit(main())

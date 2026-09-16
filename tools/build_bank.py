r"""建立題庫 data/bank.json。

輸入：paper2025.json（AI 視覺轉寫：stem_text / stem_latex / figure / options / notes）
輸出：data/bank.json —— 加入 id、難度、topic（中英）、建議時間、stem 行內數學 HTML、圖表描述

設計原則（見專案約定）：
  * bank.json = 自動生成的「題目資料」，可隨時重建
  * solutions.json = 人工/AI 編輯的「答案與解答」，永不覆蓋
  * 題目只英文；解答中英雙語
"""
from __future__ import annotations

import io
import json
import os
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TRANSCRIPTS = os.path.join(BASE, "data", "transcripts")   # 每份 AI 轉寫 = 一個檔案（檔名即 paper id）
OUT_DIR = os.path.join(BASE, "data")
OUT = os.path.join(OUT_DIR, "bank.json")

# ---------- 分類：依香港高中數學課程「學習單元」(Learning Units) ----------
# 0 = Junior Math（不屬於以下 20 個高中單元的題目）
UNITS: dict[int, tuple[str, str]] = {
    0: ("Junior Math", "初中數學"),
    1: ("Quadratic Equations in One Unknown", "一元二次方程"),
    2: ("Functions and Graphs", "函數與圖像"),
    3: ("Exponential and Logarithmic Functions", "指數與對數函數"),
    4: ("More about Polynomials", "多項式續論"),
    5: ("More about Equations", "方程續論"),
    6: ("Variations", "變分"),
    7: ("Arithmetic and Geometric Sequences", "等差等比數列"),
    8: ("Inequalities and Linear Programming", "不等式與線性規劃"),
    9: ("More about Graphs of Functions", "函數圖像續論"),
    10: ("Equations of Straight Lines", "直線方程"),
    11: ("Basic Properties of Circles", "圓的基本性質"),
    12: ("Loci", "軌跡"),
    13: ("Equations of Circles", "圓的方程"),
    14: ("More about Trigonometry", "三角學續論"),
    15: ("Permutations and Combinations", "排列與組合"),
    16: ("More about Probability", "概率續論"),
    17: ("Measures of Dispersion", "離差的度量"),
    18: ("Uses and Abuses of Statistics", "統計的應用與誤用"),
    19: ("Further Applications", "進一步應用"),
    20: ("Inquiry and Investigation", "探究與研究"),
}

# 關鍵詞 → 單元（順序有意義：越具體越前）。這是給「新試卷」用的預設分類，
# 個別題目可用 data/overrides.json 的 "unit" 覆寫。
UNIT_RULES: list[tuple[list[str], int]] = [
    (["committee", "working group", "selected from", "how many different", "number of ways"], 15),
    (["probability", "randomly chosen", "randomly drawn", "expected number", "number of tokens"], 16),
    (["standard score", "variance", "standard deviation", "inter-quartile", "quartile", "dispersion"], 17),
    (["abuse", "misleading", "misuse", "statistical chart"], 18),
    (["locus", "loci", "moving point"], 12),
    (["log_{", "\\log", "exponential"], 3),
    (["interest rate", "compounded", "per annum"], 3),
    (["equation of c", "centre of the circle", "cuts the x-axis at the points"], 13),
    (["tangent to the circle", "diameter of the circle", "angle in the same segment", "cyclic"], 11),
    (["straight line", "equations of l", "perpendicular to each other", "in-centre"], 10),
    (["polar coordinates", "sine", "cosine", "tangent", "sector", "angle between", "\\tan", "\\sin", "\\cos"], 14),
    (["regular tetrahedron"], 14),
    (["system of inequalities", "linear programming", "greatest value of", "solution of \\d+y"], 8),
    (["arithmetic sequence", "geometric sequence", "nth term", "is a geometric sequence"], 7),
    (["varies directly", "varies inversely", "varies jointly"], 6),
    (["l.c.m.", "h.c.f.", "is a factor of", "remainder theorem", "\\equiv", "(x+8)(x+a)"], 4),
    (["f(x)", "p(x)", "f(", "function of", "graph of y", "values of x"], 2),
    (["quadratic", "solve the equation x^{2}", "the equation x^{2}+", "roots of"], 1),
    (["change of subject", "simultaneous", "standard form"], 5),
]

HARD_MARKERS = [
    "regular tetrahedron", "locus", "in-centre", "standard score", "variance",
    "system of inequalities", "greatest value", "\\tan^{3}", "hexadecimal",
    "complex", "l.c.m.", "trapezium", "angle bisector", "rhombus",
    "polar coordinates", "equilateral", "inter-quartile", "recurrence",
]
EASY_MARKERS = [
    "nearest dollar", "range of values", "solve the equation", "algebraic identities",
]

# ---------- 行內數學偵測（把英文文字裡的公式整段包成 $...$）----------
# 逐個 token 包裝會令一條公式被拆成幾段渲染（字體不一致），所以要先找出
# 「連續的數學 token」再整體包起來。
MATH_CHARS = re.compile(r"^[0-9A-Za-z(){}\[\]+\-*/=<>^_.,:'\\| ]+$")
STRONG_MARK = re.compile(r"[\^_\\]")
CMP_ONLY = re.compile(r"^(=|<|>|\\le|\\ge|\\neq|\\approx)$")
NUM_STRONG = re.compile(r"^[-+]\d+(\.\d+)?$|^\d+\.\d+$")
NUM_PLAIN = re.compile(r"^\d+$")
SINGLE_LETTER = re.compile(r"^[A-Za-z]$")
TRAILING_PUNCT = re.compile(r"[.,;:]+$")


def _is_math_token(tok: str, strong_only: bool = False) -> bool:
    core = tok.strip()
    if not core or not MATH_CHARS.match(core):
        if not core.startswith("\\"):     # 例外：\le 之類的 LaTeX 命令
            return False
    core_nb = core.lstrip("\\")
    if STRONG_MARK.search(core) or NUM_STRONG.match(core) or CMP_ONLY.match(core):
        return True
    if any(ch.isdigit() for ch in core_nb) and any(ch in "+-*/" for ch in core_nb):
        return True
    if not strong_only and (NUM_PLAIN.match(core) or SINGLE_LETTER.match(core)):
        return True   # 只有緊貼其他數學 token 時才會被合併
    return False


def mathify(text: str) -> str:
    """英文原文 → HTML，其中公式整段用 $...$ 包住交給 KaTeX 行內渲染。

    例：'Solve the equation x^{2}+4x=k^{2}-2k-3.' →
        'Solve the equation $x^{2}+4x=k^{2}-2k-3$.'
    """
    s = text
    s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    s = s.replace("$", "&dollar;")                              # 貨幣符號不當定界符
    s = s.replace("\\begin{cases}", "").replace("\\end{cases}", "")
    s = s.replace("\\\\", "<br>")                               # LaTeX 換行
    s = s.replace("\n", "<br>")

    parts = re.split(r"(\s+)", s)                               # 保留空白
    strong = [_is_math_token(p, strong_only=True) for p in parts]
    weak = [_is_math_token(p) for p in parts]

    # 弱數學 token（單字母、純整數）只在緊鄰強數學 token 時才算數學
    is_math: list[bool] = []
    for i, p in enumerate(parts):
        if not weak[i]:
            is_math.append(False)
            continue
        if strong[i]:
            is_math.append(True)
            continue
        left = i - 2 >= 0 and (strong[i - 2] or is_math[i - 2])
        right = i + 2 < len(parts) and strong[i + 2]
        is_math.append(bool(left or right))

    out: list[str] = []
    buf: list[str] = []   # 連續數學 token（含其間空白）
    i, n = 0, len(parts)
    while i < n:
        part = parts[i]
        if is_math[i]:
            buf.append(part)
            i += 1
            continue
        # 兩個數學 token 之間的空白要留在同一段公式內
        if buf and part.strip() == "" and i + 1 < n and is_math[i + 1]:
            buf.append(part)
            i += 1
            continue
        if buf:
            out.append(_flush_math(buf))
            buf = []
        out.append(part)
        i += 1
    if buf:
        out.append(_flush_math(buf))
    return "".join(out)


def _flush_math(buf: list[str]) -> str:
    """把一段連續的數學 token 合成一個 $...$（尾隨標點留在外面）。"""
    chunk = "".join(buf)
    lead = chunk[: len(chunk) - len(chunk.lstrip())]
    body = chunk.strip()
    tail = ""
    m = TRAILING_PUNCT.search(body)
    if m:
        tail = m.group(0)
        body = body[: m.start()]
    if not body:
        return chunk
    return f"{lead}${body}${tail}"


def topic_of(unit: int) -> dict:
    en, zh = UNITS.get(unit, UNITS[0])
    return {"unit": unit, "en": en, "zh": zh}


def pick_unit(q: dict) -> int:
    """依關鍵詞推斷學習單元；判斷不了就歸 Junior Math（0）。"""
    hay = " ".join([
        str(q.get("stem_text") or ""),
        str(q.get("stem_latex") or ""),
        str(q.get("figure") or ""),
        " ".join(str(v) for v in (q.get("options") or {}).values()),
    ]).lower()
    for keys, unit in UNIT_RULES:
        if any(k.lower() in hay for k in keys):
            return unit
    return 0


def pick_difficulty(no: int, q: dict) -> int:
    d = 1 if no <= 15 else (2 if no <= 30 else 3)
    hay = " ".join([
        str(q.get("stem_text") or ""), str(q.get("stem_latex") or ""),
        str(q.get("figure") or ""),
    ]).lower()
    if any(m in hay for m in HARD_MARKERS):
        d = min(3, d + 1)
    if any(m in hay for m in EASY_MARKERS):
        d = max(1, d - 1)
    return d


TIME_BY_DIFFICULTY = {1: 60, 2: 90, 3: 120}


def main() -> int:
    os.makedirs(OUT_DIR, exist_ok=True)
    if not os.path.isdir(TRANSCRIPTS):
        print(f"缺少轉寫目錄 {TRANSCRIPTS}")
        return 1

    papers = []
    for name in sorted(os.listdir(TRANSCRIPTS)):
        if not name.lower().endswith(".json"):
            continue
        paper_id = os.path.splitext(name)[0]          # 檔名 = 試卷 id，如 2025-p2
        src = json.load(open(os.path.join(TRANSCRIPTS, name), encoding="utf-8"))
        papers.append((paper_id, src))

    questions = []
    for paper_id, src in papers:
        for q in src.get("questions", []):
            no = int(q["question_number"])
            qid = f"{paper_id}-q{no:02d}"
            diff = pick_difficulty(no, q)
            stem_text = (q.get("stem_text") or "").strip()
            stem_latex = (q.get("stem_latex") or "").strip() or None

            questions.append({
                "id": qid,
                "no": no,
                "paper": paper_id,
                "section": q.get("section"),
                "images": [f"images/questions/{qid}.png"],
                "topic": topic_of(pick_unit(q)),
                "difficulty": diff,
                "timeSec": TIME_BY_DIFFICULTY[diff],
                "stem": {
                    "text": stem_text or None,          # 英文原文（含行內 LaTeX）
                    "html": mathify(stem_text) if stem_text else None,
                    "latex": stem_latex,                # 顯示用數學式
                },
                "figure": (q.get("figure") or "").strip() or None,
                "notes": (q.get("notes") or "").strip() or None,
                "options": {L: ((q.get("options") or {}).get(L) or None) for L in "ABCD"},
                "transcribedBy": src.get("transcribedBy", "ai-vision"),
                "classifiedBy": "auto-rules",          # 分類為自動推斷，可在 overrides.json 覆寫
            })

    # 人工覆寫（data/overrides.json）：Work Buddy 或老師可修正自動分類結果
    ov_path = os.path.join(OUT_DIR, "overrides.json")
    n_ov = 0
    if os.path.exists(ov_path):
        overrides = json.load(open(ov_path, encoding="utf-8")).get("overrides", {})
        by_id = {q["id"]: q for q in questions}
        for qid, ov in overrides.items():
            q = by_id.get(qid)
            if not q:
                print(f"[warn] overrides: {qid} 不在題庫中")
                continue
            for key in ("difficulty", "timeSec"):
                if key in ov:
                    q[key] = ov[key]
            if "unit" in ov:
                q["topic"] = topic_of(ov["unit"])
            if "topic" in ov:
                q["topic"] = ov["topic"]
            q["classifiedBy"] = "manual-override"
            n_ov += 1
        if n_ov:
            print(f"已套用 {n_ov} 條人工覆寫")

    papers_meta = [
        {
            "id": pid,
            "name": src.get("exam") or pid,
            "nameZh": src.get("examZh") or "",
            "lang": "en",
            "sourcePdf": src.get("sourcePdf"),
            "questions": len(src.get("questions", [])),
        }
        for pid, src in papers
    ]
    bank = {
        "version": 1,
        "papers": papers_meta,
        "questions": questions,
    }
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(bank, f, ensure_ascii=False, indent=2)

    # 統計
    dist: dict[int, int] = {}
    topics: dict[str, int] = {}
    for q in questions:
        dist[q["difficulty"]] = dist.get(q["difficulty"], 0) + 1
        topics[q["topic"]["en"]] = topics.get(q["topic"]["en"], 0) + 1
    print(f"已寫入 {OUT}：{len(questions)} 題")
    print(f"難度分布: {dict(sorted(dist.items()))}")
    print("主題分布:")
    for t, n in sorted(topics.items(), key=lambda kv: -kv[1]):
        print(f"  {t}: {n}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

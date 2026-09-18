#!/usr/bin/env python3
"""自學追上站維護平台 · 自我測試（本機 API 冒煙測試）

會自己起一個測試用的面板行程（預設 8799，不開瀏覽器），測完自動關閉，
並且**保證把編輯過的內容還原**（用 JSON 物件比對，最後再核對檔案是否回到原狀）。

為什麼要有一支測試：面板會直接改 data/learn/*.json —— 這是學生看的內容來源。
之前用 PowerShell 測 API 時，中文被 PowerShell 的編碼轉成 `?` 而寫壞了檔案，
所以改用 Python urllib（明確 UTF-8）做真正的來回驗證。

用法
    python tools/learn_panel_test.py
    python tools/learn_panel_test.py --port 8799 --keep-log
"""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEARN_DATA = os.path.join(BASE, "data", "learn")
TEST_TOPIC = "ws01"
MARKER = "（編輯器自我測試）"


def req(url: str, payload: dict | None = None, timeout: int = 120) -> tuple[int, dict]:
    data = json.dumps(payload, ensure_ascii=False).encode("utf-8") if payload is not None else None
    r = urllib.request.Request(
        url, data=data,
        headers={"Content-Type": "application/json; charset=utf-8"} if data else {})
    try:
        with urllib.request.urlopen(r, timeout=timeout) as resp:
            return resp.status, json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode("utf-8") or "{}")


def read_json(name: str):
    with open(os.path.join(LEARN_DATA, name), encoding="utf-8-sig") as f:
        return json.load(f)


def write_json(name: str, obj) -> None:
    path = os.path.join(LEARN_DATA, name)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write("\n")


def node_exe() -> str:
    for cand in (os.environ.get("NODE_EXE"),
                 r"C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe"):
        if cand and os.path.exists(cand):
            return cand
    return "node"


def main(argv: list[str] | None = None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:                                         # noqa: BLE001
        pass
    ap = argparse.ArgumentParser(description="維護平台 API 自我測試")
    ap.add_argument("--port", type=int, default=8799)
    ap.add_argument("--keep-log", action="store_true", help="保留測試產生的審計記錄")
    args = ap.parse_args(argv)

    base = f"http://127.0.0.1:{args.port}"
    py = sys.executable or "python"
    proc = subprocess.Popen([py, os.path.join(BASE, "tools", "learn_panel.py"),
                             "--no-browser", "--port", str(args.port)],
                            cwd=BASE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    fails = 0

    def ok(cond, label):
        nonlocal fails
        print(("  PASS  " if cond else "  FAIL  ") + label)
        if not cond:
            fails += 1

    original = read_json("concepts.json")
    pub_path = os.path.join(LEARN_DATA, "publish.json")
    original_pub = read_json("publish.json") if os.path.exists(pub_path) else None
    log_before = read_json("edit_log.json").get("entries", []) if os.path.exists(
        os.path.join(LEARN_DATA, "edit_log.json")) else []

    try:
        # 等伺服器起來
        up = False
        for _ in range(30):
            time.sleep(0.4)
            try:
                code, _ = req(base + "/api/status", timeout=5)
                if code == 200:
                    up = True
                    break
            except Exception:                                 # noqa: BLE001
                continue
        if not up:
            print("✗ 面板起不來（port %d 被佔用？）" % args.port)
            return 1

        print("\n— 讀取 —")
        code, bundle = req(base + "/api/edit?topic=" + TEST_TOPIC)
        ok(code == 200 and bundle.get("ok"), "GET /api/edit 回傳課題內容")
        ok(len(bundle.get("cards", [])) > 0 and len(bundle.get("mc", [])) > 0,
           "包含概念卡與 MC 題（%d 卡 / %d MC）" % (len(bundle.get("cards", [])), len(bundle.get("mc", []))))

        card = bundle["cards"][0]
        orig_body = card["body"]["zh"]
        # 刻意加入 {{math:0}} 定位標記：驗證「帶標記的正文」也能儲存（面板不應誤擋）
        test_body = orig_body + "\n" + MARKER + "\n{{math:0}}"

        print("\n— 儲存（UTF-8 來回）—")
        patch = {"title": card["title"], "math": card.get("math") or [],
                 "warn": card.get("warn") or {}, "vocab": card.get("vocab") or [],
                 "body": {"zh": test_body}}
        code, res = req(base + "/api/edit", {"kind": "card", "id": card["id"], "patch": patch})
        ok(code == 200 and res.get("ok"), "合法修改可以儲存（checksOk=%s）" % res.get("checksOk"))
        ok(res.get("checksOk") is True, "儲存後自動跑「生成 + 結構檢查」且通過")
        on_disk = read_json("concepts.json")
        disk_card = next(c for c in on_disk["cards"] if c["id"] == card["id"])
        ok(MARKER in disk_card["body"]["zh"], "中文正確寫入檔案（沒有變成 ? 或亂碼）")
        ok("{{math:0}}" in disk_card["body"]["zh"], "定位標記 {{math:0}} 也能儲存")
        ok(disk_card["title"]["zh"] == card["title"]["zh"], "其他欄位沒有被破壞")

        print("\n— 驗證會擋錯 —")
        code, res = req(base + "/api/edit", {"kind": "card", "id": card["id"],
                                             "patch": {**patch, "body": {"zh": "太短"}}})
        ok(code == 400 and res.get("errors"), "正文太短被擋下：" + str(res.get("errors")))
        code, res = req(base + "/api/edit", {"kind": "card", "id": card["id"],
                                             "patch": {**patch, "body": {"zh": orig_body + " $x+1"}}})
        ok(code == 400 and any("$" in e for e in res.get("errors", [])), "未成對的 $ 被擋下")
        code, res = req(base + "/api/edit", {"kind": "card", "id": "no-such-card", "patch": patch})
        ok(code == 400, "不存在的 id 被擋下")
        code, res = req(base + "/api/edit", {"kind": "solution", "id": bundle["mc"][0]["id"],
                                             "patch": {"steps": [{"title": {"zh": "x"}, "math": "x",
                                                                  "zh": "太短"}], "tip": {"zh": ""}}})
        ok(code == 400 and any("太短" in e for e in res.get("errors", [])),
           "題解步驟太短被擋下")

        print("\n— 還原 —")
        code, res = req(base + "/api/edit", {"kind": "card", "id": card["id"], "patch": {
            "title": card["title"], "math": card.get("math") or [],
            "warn": card.get("warn") or {}, "vocab": card.get("vocab") or [],
            "body": {"zh": orig_body}}})
        ok(code == 200 and res.get("ok"), "改回原狀成功")
        ok(read_json("concepts.json") == original, "檔案內容與測試前完全相同（物件比對）")

        print("\n— 課題開關 —")
        code, res = req(base + "/api/hold", {"topic": TEST_TOPIC, "hold": True})
        ok(code == 200 and res.get("ok"), "可以暫緩課題")
        code, res = req(base + "/api/hold", {"topic": TEST_TOPIC, "hold": False})
        ok(code == 200 and res.get("ok"), "可以恢復課題")

        print("\n— 編輯器前端（jsdom：語法、清單、表單、預覽）—")
        r = subprocess.run([node_exe(), os.path.join(BASE, "tools", "learn_editor_test.js"), base],
                           cwd=BASE, capture_output=True, text=True, encoding="utf-8",
                           errors="replace", timeout=180)
        tail = [ln for ln in (r.stdout or "").splitlines() if ln.strip()]
        passed = len([ln for ln in tail if "PASS" in ln])
        failed = [ln for ln in tail if "FAIL" in ln]
        ok(r.returncode == 0, "編輯器測試全過（%d 項）" % passed)
        for ln in failed[:8]:
            print("        " + ln.strip())
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=8)
        except subprocess.TimeoutExpired:
            proc.kill()
        # 還原課題開關檔（測試切換過開關會改到 updatedAt）
        if original_pub is not None and read_json("publish.json") != original_pub:
            write_json("publish.json", original_pub)
            print("（已還原 publish.json）")
        # 清掉測試寫入的審計記錄（保留真實記錄）
        log_path = os.path.join(LEARN_DATA, "edit_log.json")
        if not args.keep_log and os.path.exists(log_path):
            log = read_json("edit_log.json")
            keep = [e for e in log.get("entries", []) if e not in log_before]
            entries = [e for e in log.get("entries", []) if e in log_before]
            if keep and len(entries) != len(log.get("entries", [])):
                log["entries"] = entries or log_before
                with open(log_path, "w", encoding="utf-8") as f:
                    json.dump(log, f, ensure_ascii=False, indent=1)
                    f.write("\n")
                print("（已清掉 %d 筆測試審計記錄）" % len(keep))

    print("\n" + ("%d test(s) FAILED" % fails if fails else "all panel tests passed"))
    return 1 if fails else 0


if __name__ == "__main__":
    raise SystemExit(main())

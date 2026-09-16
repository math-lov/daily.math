r"""本機控制面板（僅 127.0.0.1，零額外依賴）。

用途：老師在自己的電腦上
  1) 上載新試卷（PDF + Gemini 整卷 JSON）→ 切題 → 入庫
  2) 看題庫／解答／驗算覆蓋率、需目視確認清單
  3) 解題隊列（產生待解清單與可複製的提示詞，交給 CodeBuddy 自動化）
  4) 一鍵發佈：跑完檢查後 git commit + push（GitHub Pages 自動上線）

啟動：
    雙擊 start-panel.bat      （或 python tools\panel_server.py --port 8787）
"""
from __future__ import annotations

import io
import json
import os
import re
import subprocess
import sys
import threading
import urllib.parse
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

# 控制台訊息一律英文（cmd/PowerShell 的 codepage 對中文不友善）；
# 網頁介面仍是中文（瀏覽器用 UTF-8，沒有這個問題）。
if hasattr(sys.stdout, "buffer"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PY = sys.executable
PANEL_HTML = os.path.join(BASE, "tools", "panel", "index.html")
DATA = os.path.join(BASE, "data")
INBOX = os.path.join(BASE, "inbox")
RUN_LOCK = threading.Lock()


# ───────────────────────── 小工具 ─────────────────────────
def load(name: str, default):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        return default
    try:
        return json.load(open(path, encoding="utf-8-sig"))
    except Exception as e:  # noqa: BLE001
        print(f"[warn] cannot read {name}: {e!r}")
        return default


def node_exe() -> str:
    for cand in (
        os.environ.get("NODE_EXE"),
        r"C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe",
    ):
        if cand and os.path.exists(cand):
            return cand
    return "node"


def run(cmd: list[str], timeout: int = 900) -> dict:
    """執行外部指令並回傳 {cmd, code, out}。"""
    shown = " ".join(cmd if cmd[0] != PY else ["python"] + cmd[1:])
    print(f"$ {shown}")
    try:
        p = subprocess.run(
            cmd, cwd=BASE, capture_output=True, text=True,
            encoding="utf-8", errors="replace", timeout=timeout,
        )
        out = (p.stdout or "") + (p.stderr or "")
        print(out.strip()[-2000:])
        return {"cmd": shown, "code": p.returncode, "out": out.strip()}
    except subprocess.TimeoutExpired:
        return {"cmd": shown, "code": -1, "out": f"[timeout] exceeded {timeout}s"}
    except FileNotFoundError as e:
        return {"cmd": shown, "code": -1, "out": f"[command not found] {e}"}


def py_tool(*args: str) -> list[str]:
    return [PY, os.path.join("tools", args[0]), *args[1:]]


def verify_coverage() -> dict:
    """讀 verify_answers.py 的 CHECKS 表（純文字解析）。

    不用 import：該模組載入時會重新包裝 sys.stdout，會干擾本程式的輸出。
    """
    path = os.path.join(BASE, "tools", "verify_answers.py")
    try:
        src = open(path, encoding="utf-8").read()
    except OSError as e:
        return {"checked": [], "count": 0, "error": repr(e)}
    block = re.search(r"CHECKS\s*=\s*\{(.*?)\n\}", src, re.S)
    ids = re.findall(r'"([A-Za-z0-9\-]+-q\d+)"', block.group(1) if block else src)
    uniq = sorted(set(ids))
    return {"checked": uniq, "count": len(uniq)}


def status() -> dict:
    bank = load("bank.json", {"questions": [], "papers": []})
    sol = load("solutions.json", {"solutions": {}}).get("solutions", {})
    rel = load("releases.json", {"releases": []}).get("releases", [])
    qs = bank.get("questions", [])
    by_id = {q["id"]: q for q in qs}

    solved = set(sol)
    cov = verify_coverage()
    checked = set(cov["checked"])
    unsolved = [
        {"id": q["id"], "code": q.get("code"), "no": q["no"],
         "topic": (q.get("topic") or {}).get("zh") or (q.get("topic") or {}).get("en"),
         "difficulty": q.get("difficulty"),
         "hasFigure": bool(q.get("figure"))}
        for q in qs if q["id"] not in solved
    ]
    merged: dict[str, dict] = {}
    for qid, e in sol.items():
        if e.get("review"):
            merged.setdefault(qid, {"id": qid, "code": (by_id.get(qid) or {}).get("code"), "why": []})
            merged[qid]["why"].append(e["review"])
    for q in qs:
        if q.get("notes"):
            merged.setdefault(q["id"], {"id": q["id"], "code": q.get("code"), "why": []})
            merged[q["id"]]["why"].append(f"轉寫備註：{q['notes']}")
    reviews_done = load("reviews.json", {"reviews": {}}).get("reviews", {})
    review = [
        {"id": k, "code": v["code"], "why": " ／ ".join(v["why"])}
        for k, v in sorted(merged.items()) if k not in reviews_done
    ]
    confirmed = [
        {"id": k, "code": (by_id.get(k) or {}).get("code"), "verdict": v.get("verdict"),
         "note": v.get("note"), "at": v.get("at")}
        for k, v in sorted(reviews_done.items())
    ]
    pooled = [q for q in qs if q["id"] in solved]
    released_ids = {i for r in rel for i in r.get("ids", [])}
    pool_by_diff = {1: 0, 2: 0, 3: 0}
    for q in pooled:
        if q["id"] not in released_ids:
            pool_by_diff[q.get("difficulty", 2)] = pool_by_diff.get(q.get("difficulty", 2), 0) + 1

    releases = []
    for r in rel:
        releases.append({
            "date": r.get("date"), "batch": r.get("batch"),
            "title": (r.get("title") or {}).get("zh") or (r.get("title") or {}).get("en"),
            "ids": r.get("ids", []),
            "codes": [(by_id.get(i) or {}).get("code") for i in r.get("ids", [])],
            "allSolved": all(i in solved for i in r.get("ids", [])),
        })

    queue = load("queue.json", {"ids": [], "createdAt": None})
    ver = load(os.path.join("ai", "answer_verification.json"), {})
    return {
        "papers": bank.get("papers", []),
        "totals": {
            "questions": len(qs), "solved": len(solved), "unsolved": len(unsolved),
            "releases": len(rel), "releasedQuestions": len(released_ids),
            "verifyChecks": cov["count"],
        },
        "pool_by_diff": pool_by_diff,
        "unsolved": unsolved,
        "review": review,
        "confirmed": confirmed,
        "releases": releases,
        "queue": {"ids": queue.get("ids", []), "createdAt": queue.get("createdAt")},
        "verification": {
            "asOf": ver.get("generatedAt"),
            "unverified": ver.get("unverified", []),
            "failed": [r for r in ver.get("results", []) if not r.get("ok")],
        },
        "paths": {"inbox": INBOX, "transcripts": os.path.join(DATA, "transcripts")},
    }


def save_upload(parsed, body: bytes) -> dict:
    q = urllib.parse.parse_qs(parsed.query)
    kind = (q.get("kind") or [""])[0]
    name = os.path.basename((q.get("name") or [""])[0])
    if not name:
        return {"ok": False, "error": "缺少 name 參數"}
    if kind == "pdf":
        os.makedirs(INBOX, exist_ok=True)
        dst = os.path.join(INBOX, name)
    elif kind == "transcript":
        if not name.lower().endswith(".json"):
            return {"ok": False, "error": "轉寫檔必須是 .json"}
        os.makedirs(os.path.join(DATA, "transcripts"), exist_ok=True)
        dst = os.path.join(DATA, "transcripts", name)
        try:
            json.loads(body.decode("utf-8-sig"))
        except Exception as e:  # noqa: BLE001
            return {"ok": False, "error": f"JSON 解析失敗：{e}"}
    elif kind == "figures":
        os.makedirs(os.path.join(INBOX, "figures"), exist_ok=True)
        dst = os.path.join(INBOX, "figures", name)
    else:
        return {"ok": False, "error": f"未知的 kind：{kind}"}
    with open(dst, "wb") as f:
        f.write(body)
    return {"ok": True, "saved": os.path.relpath(dst, BASE), "bytes": len(body)}


ACTIONS = {
    "cut": lambda p: [
        py_tool("cut_questions.py", "--pdf", p["pdf"], "--paper", p["paper"]),
    ],
    "ingest": lambda p: [
        py_tool("build_bank.py"),
        py_tool("validate_bank.py"),
        py_tool("make_site_data.py"),
    ],
    "check": lambda p: [
        py_tool("validate_bank.py"),
        py_tool("verify_answers.py", "--json"),
        py_tool("audit_crops.py", "--strict"),
        [node_exe(), os.path.join("tools", "site_check.js")],
        [node_exe(), os.path.join("tools", "katex_check.js")],
        [node_exe(), os.path.join("tools", "smoke_test.js")],
    ],
    "publish": lambda p: [
        py_tool("validate_bank.py"),
        py_tool("verify_answers.py"),
        py_tool("audit_crops.py", "--strict"),
        py_tool("make_site_data.py"),
        [node_exe(), os.path.join("tools", "site_check.js")],
        [node_exe(), os.path.join("tools", "katex_check.js")],
        [node_exe(), os.path.join("tools", "smoke_test.js")],
        ["git", "add", "-A"],
        ["git", "commit", "-m", f"發布：批次 {p.get('batch') or ''}（本機面板）".strip()],
        ["git", "push"],
    ],
    "pick": lambda p: [py_tool("pick_batch.py", "--apply")],
    "review": lambda p: [py_tool("review_sheet.py", "--open")],
    "queue": lambda p: [],          # 由 handler 直接處理
}


class Handler(BaseHTTPRequestHandler):
    server_version = "HKDSE-Panel/1.0"

    def log_message(self, fmt, *args):  # 靜音預設 access log
        pass

    # ── 回應工具 ──
    def _send(self, obj, code: int = 200, ctype: str = "application/json; charset=utf-8"):
        body = obj if isinstance(obj, bytes) else json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    # ── GET ──
    def do_GET(self):  # noqa: N802
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path in ("/", "/index.html", "/panel/"):
            if not os.path.exists(PANEL_HTML):
                return self._send({"error": "缺少 tools/panel/index.html"}, 500)
            with open(PANEL_HTML, "rb") as f:
                return self._send(f.read(), 200, "text/html; charset=utf-8")
        if parsed.path in ("/review", "/review/"):
            # 複核清單：不存在就即時生成，然後回傳（頁面用相對路徑 ../images/…，
            # 所以下面也要提供 /images/ 靜態路由）
            sheet = os.path.join(BASE, "review", "review_sheet.html")
            if not os.path.exists(sheet):
                r = run(py_tool("review_sheet.py"))
                if r["code"] != 0:
                    return self._send({"ok": False, "error": r["out"]}, 500)
            with open(sheet, "rb") as f:
                return self._send(f.read(), 200, "text/html; charset=utf-8")
        if parsed.path.startswith("/images/"):
            full = os.path.normpath(os.path.join(BASE, parsed.path.lstrip("/")))
            allowed = os.path.normpath(os.path.join(BASE, "images"))
            if (full.startswith(allowed) and os.path.isfile(full)
                    and full.lower().endswith((".png", ".jpg", ".jpeg", ".webp"))):
                ctype = "image/png" if full.lower().endswith(".png") else "image/jpeg"
                with open(full, "rb") as f:
                    return self._send(f.read(), 200, ctype)
            return self._send({"ok": False, "error": "image not found"}, 404)
        if parsed.path == "/api/status":
            return self._send({"ok": True, "status": status()})
        if parsed.path == "/api/prompt":
            path = os.path.join(BASE, "prompts", "automation_solver_prompt.txt")
            txt = open(path, encoding="utf-8").read() if os.path.exists(path) else "（缺少提示詞檔）"
            return self._send({"ok": True, "prompt": txt})
        return self._send({"ok": False, "error": "not found"}, 404)

    # ── POST ──
    def do_POST(self):  # noqa: N802
        parsed = urllib.parse.urlparse(self.path)
        length = int(self.headers.get("Content-Length") or 0)
        body = self.rfile.read(length) if length else b""
        q = urllib.parse.parse_qs(parsed.query)

        if parsed.path == "/api/upload":
            return self._send(save_upload(parsed, body))

        if parsed.path == "/api/action":
            name = (q.get("name") or [""])[0]
            params = {k: v[0] for k, v in q.items() if k != "name"}
            if name == "setcode":
                # 把卷別代碼寫進轉寫檔（非歷年卷顯示用，如 MOCK-A → MOCK-A-Q03）
                pid, code = params.get("paper", ""), params.get("code", "")
                path = os.path.join(DATA, "transcripts", f"{pid}.json")
                if not os.path.exists(path):
                    return self._send({"ok": False, "error": f"找不到 {os.path.relpath(path, BASE)}"}, 400)
                doc = json.load(open(path, encoding="utf-8-sig"))
                doc["paperCode"] = code
                with open(path, "w", encoding="utf-8") as f:
                    json.dump(doc, f, ensure_ascii=False, indent=1)
                return self._send({"ok": True, "steps": [
                    {"cmd": f"寫入 paperCode={code} → data/transcripts/{pid}.json", "code": 0,
                     "out": "請按「合併入庫」重建題庫"}
                ]})
            if name == "queue":
                bank = load("bank.json", {"questions": []})
                sol = load("solutions.json", {"solutions": {}}).get("solutions", {})
                ids = [x["id"] for x in bank["questions"] if x["id"] not in sol]
                payload = {"ids": ids, "createdAt": None}
                import datetime
                payload["createdAt"] = datetime.datetime.now().isoformat(timespec="seconds")
                with open(os.path.join(DATA, "queue.json"), "w", encoding="utf-8") as f:
                    json.dump(payload, f, ensure_ascii=False, indent=2)
                return self._send({"ok": True, "steps": [
                    {"cmd": "寫入 data/queue.json", "code": 0,
                     "out": f"待解題目 {len(ids)} 題：" + (", ".join(ids) if ids else "（無）")}
                ]})
            if name not in ACTIONS:
                return self._send({"ok": False, "error": f"未知動作 {name}"}, 400)
            if not RUN_LOCK.acquire(blocking=False):
                return self._send({"ok": False, "error": "已有動作執行中，請稍候"}, 409)
            try:
                steps, ok = [], True
                for cmd in ACTIONS[name](params):
                    r = run(cmd)
                    steps.append(r)
                    if r["code"] != 0:
                        ok = False
                        break
                return self._send({"ok": ok, "steps": steps})
            finally:
                RUN_LOCK.release()

        return self._send({"ok": False, "error": "not found"}, 404)


def main() -> int:
    import argparse

    ap = argparse.ArgumentParser(description="HKDSE 本機控制面板")
    ap.add_argument("--port", type=int, default=8787)
    ap.add_argument("--no-browser", action="store_true")
    args = ap.parse_args()

    httpd = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    url = f"http://127.0.0.1:{args.port}/"
    print(f"Panel is running at {url}   (press Ctrl+C to stop)")
    if not args.no_browser:
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nPanel stopped.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

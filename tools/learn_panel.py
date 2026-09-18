#!/usr/bin/env python3
"""自學追上站 · 本機維護平台（127.0.0.1:8788）

與每日三題站的面板（tools/panel_server.py，8787）**完全獨立**：
不同的資料層（data/learn/）、不同的工作流（docx 抽取 → 覆核 → 生成 → 發佈）、
不同的埠。兩者可同時開，互不干擾。

功能
  1. 總覽：課題／題數／待覆核／檢查狀態；課題「發佈／暫緩」開關
  2. 覆核清單：列出 review 旗標未清的題目（嵌圖公式、可疑轉寫），逐題「通過」或「保留」；
     通過會清掉旗標並寫入審計記錄 data/learn/review_log.json
  3. 一鍵發佈：make_learn_data → learn_check → learn_katex_check → learn_smoke_test
     → git add / commit / push（任何一步失敗即中止）
  4. 本機預覽：/site/… 直接serve learn/ 前端，改完馬上用手機／瀏覽器看

用法
    雙擊 start-learn-panel.bat
    或 python tools\\learn_panel.py --port 8788
"""

from __future__ import annotations

import argparse
import datetime
import json
import os
import subprocess
import sys
import threading
import urllib.parse
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEARN_DATA = os.path.join(BASE, "data", "learn")
LEARN_SITE = os.path.join(BASE, "learn")
DATA_FILES = ("bank.json", "lessons.json", "concepts.json", "solutions.json", "publish.json")


def py_exe() -> str:
    for cand in (os.environ.get("PY_EXE"),
                 r"C:\Users\t073\.workbuddy\binaries\python\envs\default\Scripts\python.exe"):
        if cand and os.path.exists(cand):
            return cand
    return sys.executable or "python"


def node_exe() -> str:
    for cand in (os.environ.get("NODE_EXE"),
                 r"C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe"):
        if cand and os.path.exists(cand):
            return cand
    return "node"


PY = py_exe()
NODE = node_exe()


# ── 檔案讀寫 ────────────────────────────────────────────────────────────
def load(name: str, default=None):
    path = os.path.join(LEARN_DATA, name)
    try:
        with open(path, encoding="utf-8-sig") as f:
            return json.load(f)
    except FileNotFoundError:
        return {} if default is None else default
    except Exception as e:                                    # noqa: BLE001
        print(f"[warn] cannot read {name}: {e!r}")
        return {} if default is None else default


def save(name: str, obj) -> None:
    path = os.path.join(LEARN_DATA, name)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write("\n")


def now_iso() -> str:
    return datetime.datetime.now().isoformat(timespec="seconds")


def run(cmd: list[str], timeout: int = 900) -> dict:
    """執行外部指令並回傳 {cmd, code, out}。"""
    shown = " ".join(cmd if cmd[0] != PY else ["python"] + cmd[1:])
    print(f"$ {shown}")
    try:
        p = subprocess.run(cmd, cwd=BASE, capture_output=True, text=True,
                           encoding="utf-8", errors="replace", timeout=timeout)
        out = ((p.stdout or "") + (p.stderr or "")).strip()
        print(out[-2000:])
        return {"cmd": shown, "code": p.returncode, "out": out}
    except subprocess.TimeoutExpired:
        return {"cmd": shown, "code": -1, "out": f"[timeout] exceeded {timeout}s"}
    except FileNotFoundError as e:
        return {"cmd": shown, "code": -1, "out": f"[command not found] {e}"}


def py_tool(*args: str) -> list[str]:
    return [PY, os.path.join("tools", args[0]), *args[1:]]


# ── 資料彙整 ────────────────────────────────────────────────────────────
def status() -> dict:
    bank = load("bank.json", {"questions": []})
    lessons = load("lessons.json", {"topics": [], "assessments": []})
    concepts = load("concepts.json", {"cards": []})
    sols = (load("solutions.json", {"solutions": {}}) or {}).get("solutions") or {}
    pub = load("publish.json", {"holdTopics": []})

    questions = bank.get("questions", [])
    by_id = {q.get("id"): q for q in questions}
    sols_for = {qid: s for qid, s in sols.items()}

    topics = []
    for t in lessons.get("topics", []):
        ids, cards = [], 0
        for les in t.get("lessons", []):
            cards += len(les.get("conceptCards", []))
            ids += les.get("longQuestionIds", [])
            ids += [x for page in les.get("mcPages", []) for x in page]
        mc = [i for i in ids if (by_id.get(i) or {}).get("type") == "mc"]
        lng = [i for i in ids if (by_id.get(i) or {}).get("type") == "long"]
        topics.append({
            "id": t.get("id"),
            "stage": t.get("stage"),
            "name": t.get("name", {}),
            "source": t.get("source"),
            "cards": cards,
            "mc": len(mc),
            "long": len(lng),
            "missingSolutions": [i for i in ids if i not in sols_for],
            "held": t.get("id") in (pub.get("holdTopics") or []),
        })

    # 待覆核（review 旗標未清）
    needs_review = []
    for q in questions:
        if q.get("review"):
            needs_review.append({
                "id": q.get("id"), "code": q.get("code"), "topic": q.get("topic"),
                "type": q.get("type"), "source": q.get("source"),
                "reason": q.get("review"),
                "stem": ((q.get("stem") or {}).get("text") or "")[:140],
                "hasSolution": q.get("id") in sols_for,
            })

    referenced: set[str] = set()
    for t in lessons.get("topics", []):
        for les in t.get("lessons", []):
            referenced |= set(les.get("longQuestionIds", []))
            referenced |= {x for page in les.get("mcPages", []) for x in page}
    orphans = [q.get("id") for q in questions if q.get("id") not in referenced]

    return {
        "topics": topics,
        "stages": lessons.get("stages", []),
        "needsReview": needs_review,
        "orphans": orphans,
        "holdTopics": pub.get("holdTopics") or [],
        "counts": {
            "questions": len(questions),
            "mc": sum(1 for q in questions if q.get("type") == "mc"),
            "long": sum(1 for q in questions if q.get("type") == "long"),
            "solutions": len(sols),
            "cards": len(concepts.get("cards", [])),
            "missingSolutions": len([q for q in questions if q.get("id") not in sols_for]),
        },
        "generated": load_meta(),
        "reviewLog": (load("review_log.json", {"entries": []}) or {}).get("entries", [])[-8:],
        "generatedAt": now_iso(),
    }


def load_meta() -> dict:
    """讀生成物 learn/data/meta.js（最後一次生成的資訊）。"""
    path = os.path.join(LEARN_SITE, "data", "meta.js")
    try:
        with open(path, encoding="utf-8") as f:
            txt = f.read()
        head = txt.split("=", 1)[1].rsplit(";", 1)[0]
        return json.loads(head)
    except Exception:                                         # noqa: BLE001
        return {}


CHECKS = [
    ("生成資料（make_learn_data）", lambda: [PY, "tools/make_learn_data.py"]),
    ("結構與課程合規（learn_check）", lambda: [PY, "tools/learn_check.py"]),
    ("LaTeX 逐條解析（learn_katex_check）", lambda: [NODE, "tools/learn_katex_check.js"]),
    ("學生流程（learn_smoke_test）", lambda: [NODE, "tools/learn_smoke_test.js"]),
]


def run_checks() -> dict:
    results = []
    for name, mk in CHECKS:
        r = run(mk())
        results.append({"name": name, "cmd": r["cmd"], "code": r["code"],
                        "ok": r["code"] == 0, "out": r["out"][-4000:]})
        if r["code"] != 0:
            break                      # 失敗即停，避免拿壞資料去發佈
    return {"ok": all(x["ok"] for x in results), "steps": results, "at": now_iso()}


def git_state() -> dict:
    r = run(["git", "status", "--porcelain"])
    changed = [ln for ln in (r["out"] or "").splitlines() if ln.strip()]
    b = run(["git", "rev-parse", "--abbrev-ref", "HEAD"])
    return {"branch": (b["out"] or "").strip(), "changed": changed, "count": len(changed)}


def publish(message: str, push: bool) -> dict:
    checks = run_checks()
    if not checks["ok"]:
        return {"ok": False, "stage": "checks", "checks": checks}
    steps = [checks]
    r = run(["git", "add", "-A"])
    steps.append({"name": "git add", "code": r["code"], "ok": r["code"] == 0, "out": r["out"]})
    if r["code"] != 0:
        return {"ok": False, "stage": "git add", "steps": steps}
    st = git_state()
    if st["count"] == 0:
        return {"ok": True, "stage": "no-change", "steps": steps,
                "message": "沒有任何改動，不用發佈。"}
    cm = ["git", "commit", "-m", message or "Learn: 內容更新（本機面板）"]
    r = run(cm)
    steps.append({"name": "git commit", "code": r["code"], "ok": r["code"] == 0, "out": r["out"]})
    if r["code"] != 0:
        return {"ok": False, "stage": "git commit", "steps": steps}
    if push:
        r = run(["git", "push"], timeout=300)
        steps.append({"name": "git push", "code": r["code"], "ok": r["code"] == 0, "out": r["out"]})
        if r["code"] != 0:
            return {"ok": False, "stage": "git push", "steps": steps}
    return {"ok": True, "stage": "pushed" if push else "committed", "steps": steps}


# ── HTML ────────────────────────────────────────────────────────────────
CSS = """
:root{--p:#2B6CB0;--a:#319795;--bg:#F7FAFC;--line:#E2E8F0;--tx:#1A202C;--mu:#4A5568;
--ok:#38A169;--warn:#DD6B20;--err:#E53E3E}
*{box-sizing:border-box}
body{margin:0;padding:24px;font-family:system-ui,"Microsoft JhengHei",sans-serif;
line-height:1.7;color:var(--tx);background:var(--bg)}
h1{font-size:22px;margin:0 0 4px}h2{font-size:16px;margin:26px 0 10px;color:var(--mu)}
a{color:var(--p)}
.wrap{max-width:900px;margin:0 auto}
.top{display:flex;align-items:center;gap:12px;margin-bottom:18px;flex-wrap:wrap}
.badge{background:#EBF8FF;color:var(--p);border-radius:999px;padding:2px 10px;font-size:12px;font-weight:700}
.card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:12px;
box-shadow:0 1px 2px rgba(0,0,0,.04)}
.row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.spacer{flex:1}
button{font:inherit;font-size:14px;padding:9px 16px;border-radius:999px;border:1px solid var(--line);
background:#fff;cursor:pointer}
button:hover{border-color:#CBE3F7}
button.primary{background:linear-gradient(135deg,var(--p),var(--a));color:#fff;border-color:transparent;font-weight:600}
button.danger{border-color:#FEB2B2;color:var(--err)}
button:disabled{opacity:.5;cursor:default}
table{width:100%;border-collapse:collapse;font-size:14px}
th,td{text-align:left;padding:8px 6px;border-bottom:1px solid var(--line);vertical-align:top}
th{color:var(--mu);font-size:13px;font-weight:600}
.k{font-family:Consolas,monospace;font-size:13px;background:#EDF2F7;border-radius:6px;padding:1px 6px}
.ok{color:var(--ok);font-weight:700}.warn{color:var(--warn);font-weight:700}.err{color:var(--err);font-weight:700}
.muted{color:var(--mu);font-size:13px}
pre{background:#1A202C;color:#E2E8F0;border-radius:10px;padding:12px;overflow:auto;font-size:12.5px;
max-height:340px;white-space:pre-wrap}
.pill{font-size:12px;border-radius:999px;padding:2px 9px;border:1px solid var(--line)}
.pill.held{background:#FFFAF0;border-color:#FBD38D;color:#9C4221}
.pill.live{background:#F0FFF4;border-color:#9AE6B4;color:#22543D}
.tag{font-size:12px;background:#FFF5F5;border:1px solid #FEB2B2;color:var(--err);border-radius:999px;padding:1px 8px}
.rq{border-left:4px solid var(--warn);background:#FFFAF0;border-radius:0 10px 10px 0;padding:10px 12px;margin:8px 0}
input[type=text]{font:inherit;font-size:14px;padding:8px 12px;border-radius:8px;border:1px solid var(--line);min-width:220px}
nav a{margin-right:12px;font-size:14px}
"""


def page(title: str, body: str) -> bytes:
    html = f"""<!DOCTYPE html>
<html lang="zh-Hant"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · 自學追上站維護平台</title><style>{CSS}</style></head>
<body><div class="wrap">
<div class="top">
  <div><h1>自學追上站 · 維護平台</h1>
  <div class="muted">本機專用（127.0.0.1:8788）· 與每日三題站的面板完全分開</div></div>
  <div class="spacer"></div>
  <nav><a href="/">總覽</a><a href="/review">覆核清單</a>
  <a href="/site/index.html" target="_blank">本機預覽 ↗</a>
  <a href="http://127.0.0.1:8787/" target="_blank">每日站面板 ↗</a></nav>
</div>
{body}
</div></body></html>"""
    return html.encode("utf-8")


def render_index(st: dict, git: dict, last_check: dict | None) -> bytes:
    c = st["counts"]
    rows = []
    for t in st["topics"]:
        name = (t["name"] or {})
        pill = ('<span class="pill held">暫緩</span>' if t["held"]
                else '<span class="pill live">已發佈</span>')
        warn = ""
        if t["missingSolutions"]:
            warn = f'<div class="muted err">缺少題解：{", ".join(t["missingSolutions"])}</div>'
        rows.append(
            f"<tr><td><b>{name.get('zh','')}</b><div class='muted'>{name.get('en','')}"
            f"<br>{t.get('source','')}</div></td>"
            f"<td>Stage {t.get('stage')}<br><span class='muted'>概念卡 {t['cards']}<br>"
            f"示範 {t['long']} · MC {t['mc']}</span></td>"
            f"<td>{pill}</td>"
            f"<td><button onclick=\"toggleHold('{t['id']}', {str(not t['held']).lower()})\">"
            f"{'恢復發佈' if t['held'] else '暫緩發佈'}</button></td></tr>{warn}")
    review_rows = "".join(
        f"<tr><td><span class='k'>{r['id']}</span><div class='muted'>{r.get('source') or ''}</div></td>"
        f"<td><span class='tag'>{r.get('reason')}</span></td>"
        f"<td class='muted'>{r['stem']}</td></tr>"
        for r in st["needsReview"][:20]) or "<tr><td colspan='3' class='muted'>沒有待覆核題目 ✓</td></tr>"

    log_rows = "".join(
        f"<tr><td class='muted'>{e.get('at','')}</td><td><span class='k'>{e.get('qid','')}</span></td>"
        f"<td>{e.get('action','')}</td><td class='muted'>{e.get('note','')}</td></tr>"
        for e in reversed(st.get("reviewLog") or [])) or \
        "<tr><td colspan='4' class='muted'>尚無覆核記錄</td></tr>"

    gen = st.get("generated") or {}
    check_html = ""
    if last_check:
        okall = last_check.get("ok")
        items = "".join(
            f"<div>{'<span class=ok>✓</span>' if s['ok'] else '<span class=err>✗</span>'} {s['name']}</div>"
            for s in last_check["steps"])
        check_html = f"<div class='card'><b>最後一次檢查</b> {last_check.get('at','')}"
        check_html += "<div>" + ("<span class='ok'>全部通過</span>" if okall
                                 else "<span class='err'>有失敗，已中止</span>") + "</div>"
        check_html += items
        if not okall:
            bad = [s for s in last_check["steps"] if not s["ok"]][0]
            check_html += f"<pre>{bad['out']}</pre>"
        check_html += "</div>"

    body = f"""
<div class="card row">
  <div><b>題目 <span class="k">{c['questions']}</span></b>
    <div class="muted">MC {c['mc']} · 長題 {c['long']} · 題解 {c['solutions']} · 概念卡 {c['cards']}</div></div>
  <div style="margin-left:22px"><b>待覆核 <span class="{'warn' if st['needsReview'] else 'ok'}">{len(st['needsReview'])}</span></b>
    <div class="muted">未清的 review 旗標不會出站</div></div>
  <div style="margin-left:22px"><b>孤兒題 <span class="k">{len(st['orphans'])}</span></b>
    <div class="muted">未編入任何課</div></div>
  <div class="spacer"></div>
  <div class="muted">最後生成：{gen.get('generatedAt','—')}<br>
    上次擋下題目：{len(gen.get('blockedQuestions') or [])} 題</div>
</div>

<h2>課題開關</h2>
<div class="card"><table>
<tr><th>課題</th><th>內容</th><th>狀態</th><th>操作</th></tr>
{''.join(rows) or '<tr><td colspan=4 class=muted>尚無課題</td></tr>'}
</table>
<div class="muted" style="margin-top:8px">暫緩的課題不會輸出到 learn/data/（學生看不到），
舊資料檔會被自動清除。改完記得按下面「重新生成 + 檢查」。</div></div>

<h2>待覆核（review 旗標）</h2>
<div class="card"><table>
<tr><th>題目</th><th>原因</th><th>題幹</th></tr>{review_rows}
</table>
<div class="row" style="margin-top:10px">
  <a href="/review"><button class="primary">開啟覆核清單 →</button></a>
  <span class="muted">逐題「通過」後旗標才會清除，題目才可以出站。</span>
</div></div>

<h2>發佈</h2>
<div class="card">
  <div class="row">
    <button class="primary" onclick="runChecks()">重新生成 + 檢查</button>
    <input type="text" id="msg" placeholder="commit 訊息（可留空）" style="flex:1">
    <button onclick="doPublish(true)">一鍵發佈（含 push）</button>
    <button onclick="doPublish(false)">只 commit</button>
  </div>
  <div class="muted" style="margin-top:8px">
    流程：生成資料 → 結構／課程合規 → KaTeX → 學生流程，全過才 commit／push。
    任何一步失敗即中止（不會把壞資料推上線）。
  </div>
  <div class="muted" style="margin-top:6px">
    Git：分支 <span class="k">{git.get('branch','?')}</span> ·
    未提交改動 <b>{git.get('count',0)}</b> 個
  </div>
  <div id="out" style="margin-top:12px"></div>
</div>
{check_html}

<h2>覆核記錄（最近 8 筆）</h2>
<div class="card"><table>
<tr><th>時間</th><th>題目</th><th>動作</th><th>備註</th></tr>{log_rows}</table></div>

<script>
function show(t){{document.getElementById('out').innerHTML='<pre>'+t+'</pre>';}}
async function api(path, body){{
  const r = await fetch(path, {{method:'POST', headers:{{'Content-Type':'application/json'}},
    body: JSON.stringify(body||{{}})}});
  return await r.json();
}}
async function toggleHold(id, hold){{
  const r = await api('/api/hold', {{topic:id, hold:hold}});
  alert(r.ok ? (hold ? '已暫緩 '+id+'，請按「重新生成 + 檢查」' : '已恢復 '+id+'，請按「重新生成 + 檢查」')
             : '失敗：'+JSON.stringify(r));
  location.reload();
}}
async function runChecks(){{
  show('執行中…（約 20–60 秒）');
  const r = await api('/api/check');
  show(r.steps.map(s=>((s.ok?'✓ ':'✗ ')+s.name+'\\n'+s.out)).join('\\n\\n'));
  location.reload();
}}
async function doPublish(push){{
  if(!confirm(push ? '跑檢查 → commit → push，確定？' : '跑檢查 → commit（不 push），確定？')) return;
  show('執行中…');
  const r = await api('/api/publish', {{push:push, message:document.getElementById('msg').value}});
  show((r.ok ? '完成：'+r.stage : '中止於：'+r.stage) + '\\n\\n' +
       (r.steps||[]).map(s=>((s.ok===false?'✗ ':'✓ ')+s.name+'\\n'+s.out)).join('\\n\\n'));
}}
</script>"""
    return page("總覽", body)


def render_review(st: dict) -> bytes:
    if not st["needsReview"]:
        return page("覆核清單", "<div class='card'><b class='ok'>✓ 沒有待覆核的題目</b>"
                                "<div class='muted'>所有 review 旗標都已清除。"
                                "<br><a href='/'>← 回總覽</a></div></div>")
    cards = []
    for r in st["needsReview"]:
        cards.append(f"""
<div class="card">
  <div class="row"><span class="k">{r['id']}</span>
    <span class="k">{r.get('code')}</span>
    <span class="tag">{r.get('reason')}</span>
    <div class="spacer"></div>
    <span class="muted">{r.get('source') or ''}</span></div>
  <div class="rq"><b>題幹</b><div>{r['stem'] or '<span class="muted">（空）</span>'}</div></div>
  <div class="row">
    <input type="text" id="note-{r['id']}" placeholder="備註（例：對照原圖已確認）" style="flex:1">
    <button class="primary" onclick="decide('{r['id']}', 'approve')">通過（清除旗標）</button>
    <button onclick="decide('{r['id']}', 'keep')">保留（仍需修正）</button>
  </div>
</div>""")
    body = f"""
<div class="card">
  <b>共 {len(st['needsReview'])} 題待覆核</b>
  <div class="muted">這些題目的內容未經人工確認，因此不會出站。
  「通過」代表你已對照原始教材確認轉寫無誤（清除 review 旗標並留下審計記錄）；
  「保留」會把備註寫進記錄，旗標不清除。
  <br><b>提醒</b>：標記 <span class="tag">embed-fig</span> 的題目，原式在 Word 裡是圖片，
  請先開 <span class="k">data/learn/raw/media/&lt;CODE&gt;/…png</span> 對照。</div>
</div>
{''.join(cards)}
<script>
async function decide(qid, action){{
  const note = (document.getElementById('note-'+qid)||{{}}).value || '';
  if(action==='approve' && !confirm('確認已對照原始教材，'+qid+' 的轉寫無誤？')) return;
  const r = await fetch('/api/review', {{method:'POST', headers:{{'Content-Type':'application/json'}},
    body: JSON.stringify({{qid:qid, action:action, note:note}})}}).then(x=>x.json());
  if(!r.ok){{ alert('失敗：'+JSON.stringify(r)); return; }}
  location.reload();
}}
</script>"""
    return page("覆核清單", body)


# ── HTTP ────────────────────────────────────────────────────────────────
LAST_CHECK: dict | None = None
LOCK = threading.Lock()
STATIC_TYPES = {".html": "text/html; charset=utf-8", ".js": "application/javascript; charset=utf-8",
                ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
                ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
                ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2",
                ".woff": "font/woff", ".ttf": "font/ttf", ".md": "text/plain; charset=utf-8"}


class Handler(BaseHTTPRequestHandler):
    server_version = "Learn-Panel/1.0"

    def log_message(self, fmt, *args):                        # 靜音 access log
        pass

    def _send(self, obj, code: int = 200, ctype: str = "application/json; charset=utf-8"):
        body = obj if isinstance(obj, bytes) else json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _json_body(self) -> dict:
        try:
            n = int(self.headers.get("Content-Length") or 0)
            return json.loads(self.rfile.read(n).decode("utf-8")) if n else {}
        except Exception:                                     # noqa: BLE001
            return {}

    def do_GET(self):  # noqa: N802
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        if path in ("/", "/index.html"):
            return self._send(render_index(status(), git_state(), LAST_CHECK),
                              200, "text/html; charset=utf-8")
        if path in ("/review", "/review/"):
            return self._send(render_review(status()), 200, "text/html; charset=utf-8")
        if path == "/api/status":
            return self._send(status())
        if path == "/api/git":
            return self._send(git_state())
        if path.startswith("/site/"):
            return self._static(LEARN_SITE, path[len("/site/"):])
        if path.startswith("/media/"):
            return self._static(os.path.join(LEARN_DATA, "raw", "media"), path[len("/media/"):])
        return self._send({"ok": False, "error": "not found: " + path}, 404)

    def _static(self, root: str, rel: str):
        full = os.path.normpath(os.path.join(root, rel))
        if not full.startswith(os.path.normpath(root)) or not os.path.isfile(full):
            return self._send({"ok": False, "error": "not found"}, 404)
        ext = os.path.splitext(full)[1].lower()
        ctype = STATIC_TYPES.get(ext, "application/octet-stream")
        with open(full, "rb") as f:
            return self._send(f.read(), 200, ctype)

    def do_POST(self):  # noqa: N802
        global LAST_CHECK
        path = urllib.parse.urlparse(self.path).path
        body = self._json_body()

        if path == "/api/hold":
            with LOCK:
                pub = load("publish.json", {"holdTopics": []})
                hold = {str(x) for x in (pub.get("holdTopics") or [])}
                tid = str(body.get("topic") or "")
                if not tid:
                    return self._send({"ok": False, "error": "missing topic"}, 400)
                if body.get("hold"):
                    hold.add(tid)
                else:
                    hold.discard(tid)
                pub["holdTopics"] = sorted(hold)
                pub["updatedAt"] = now_iso()
                save("publish.json", pub)
            return self._send({"ok": True, "holdTopics": sorted(hold)})

        if path == "/api/review":
            qid = str(body.get("qid") or "")
            action = str(body.get("action") or "")
            note = str(body.get("note") or "")
            if not qid or action not in ("approve", "keep"):
                return self._send({"ok": False, "error": "bad request"}, 400)
            with LOCK:
                bank = load("bank.json", {"questions": []})
                hit = None
                for q in bank.get("questions", []):
                    if q.get("id") == qid:
                        hit = q
                        break
                if hit is None:
                    return self._send({"ok": False, "error": "question not found"}, 404)
                if action == "approve":
                    hit["review"] = None
                    hit["reviewedAt"] = now_iso()
                    hit["reviewedBy"] = "teacher-panel"
                    save("bank.json", bank)
                log = load("review_log.json", {"entries": []})
                log.setdefault("entries", []).append({
                    "at": now_iso(), "qid": qid, "action": action, "note": note,
                    "by": "teacher-panel",
                })
                save("review_log.json", log)
            return self._send({"ok": True, "qid": qid, "action": action})

        if path == "/api/check":
            with LOCK:
                LAST_CHECK = run_checks()
            return self._send(LAST_CHECK)

        if path == "/api/publish":
            with LOCK:
                res = publish(str(body.get("message") or ""), bool(body.get("push")))
                LAST_CHECK = (res.get("steps") or [{}])[0] if res.get("steps") else LAST_CHECK
            return self._send(res)

        return self._send({"ok": False, "error": "not found: " + path}, 404)


def main(argv: list[str] | None = None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:                                         # noqa: BLE001
        pass
    ap = argparse.ArgumentParser(description="自學追上站本機維護平台")
    ap.add_argument("--port", type=int, default=8788)
    ap.add_argument("--no-browser", action="store_true")
    args = ap.parse_args(argv)

    httpd = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    url = f"http://127.0.0.1:{args.port}/"
    print(f"自學追上站維護平台：{url}")
    print(f"  資料層：{os.path.relpath(LEARN_DATA, BASE)}")
    print(f"  前端預覽：{url}site/index.html")
    print("  Ctrl+C 結束")
    if not args.no_browser:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n再見")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

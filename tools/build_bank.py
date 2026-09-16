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
SRC = os.path.join(BASE, "paper2025.json")
OUT_DIR = os.path.join(BASE, "data")
OUT = os.path.join(OUT_DIR, "bank.json")

PAPER_ID = "2025-p2"

# ---------- 分類規則（順序有意義：越具體越前）----------
# (關鍵詞列表, topic 英文, topic 中文)
TOPIC_RULES: list[tuple[list[str], str, str]] = [
    (["regular tetrahedron", "angle between pq"], "3-D Geometry", "立體幾何"),
    (["i^{", "complex number"], "Complex Numbers", "複數"),
    (["hexadecimal", "_{16}", "e000000000000"], "Number Systems", "數制"),
    (["\\log", "log_{"], "Logarithms", "對數"),
    (["committee", "working group", "selected from", "how many different"], "Counting", "計數"),
    (["probability", "randomly chosen", "expected number of tokens", "number of tokens"], "Probability", "概率"),
    (["standard score", "variance", "inter-quartile", "quartile", "median", "mode", "bar chart", "following data"], "Statistics", "統計"),
    (["tangent to the circle", "diameter of the circle", "circle abcd"], "Circles", "圓"),
    (["sector omn", "\\tan", "\\sin", "\\cos", "triangle wxy", "\\angle bfd"], "Trigonometry & Geometry", "三角與幾何"),
    (["straight line", "locus", "polar coordinates", "centre of the circle", "equation of c"], "Coordinate Geometry", "坐標幾何"),
    (["arithmetic sequence", "geometric sequence", "nth term"], "Sequences", "數列"),
    (["varies directly", "varies inversely"], "Variation", "變分"),
    (["interest rate", "compounded", "per annum"], "Percentage & Interest", "百分數與利息"),
    (["system of inequalities", "greatest value of", "4y+1"], "Inequalities & L.P.", "不等式與線性規劃"),
    (["l.c.m.", "is a factor of", "remainder"], "Polynomials", "多項式"),
    (["\\equiv", "factoriz", "(x+8)(x+a)"], "Algebraic Identities", "代數恆等式"),
    (["parallelogram", "rhombus", "trapezium", "rectangle", "square", "quadrilateral"], "Geometry", "幾何"),
    (["area of", "volume", "cylinder", "sphere", "perimeter", "cm}^{2}", "cm}^{3}"], "Mensuration", "度量與面積體積"),
    ([":", "ratio"], "Ratios", "比例"),
    (["^{"], "Indices & Exponents", "指數運算"),
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

# 行內 LaTeX 片段（包成 $...$ 交給 KaTeX）
MATH_TOKEN = re.compile(
    r"\\(?!begin\b|end\b)[a-zA-Z]+"
    r"(?:_\{[^{}]*\}|\^\{[^{}]*\})*"
    r"(?:\{[^{}]*\})*"
    r"|[\w\)\]](?:\^\{[^{}]*\}|_\{[^{}]*\})+"
)


def mathify(text: str) -> str:
    """純文本 + 行內 LaTeX → HTML（$...$ 包住數學，其餘做 HTML 轉義）。"""
    s = text
    s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    s = s.replace("$", "&dollar;")
    s = s.replace("\\begin{cases}", "").replace("\\end{cases}", "")
    s = s.replace("\\\\", "<br>")
    s = MATH_TOKEN.sub(lambda m: "$" + m.group(0) + "$", s)
    s = s.replace("\n", "<br>")
    return s


def pick_topic(q: dict) -> tuple[str, str]:
    hay = " ".join([
        str(q.get("stem_text") or ""),
        str(q.get("stem_latex") or ""),
        str(q.get("figure") or ""),
        " ".join(str(v) for v in (q.get("options") or {}).values()),
    ]).lower()
    for keys, en, zh in TOPIC_RULES:
        if any(k.lower() in hay for k in keys):
            return en, zh
    return "Algebra", "代數"


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
    src = json.load(open(SRC, encoding="utf-8"))
    os.makedirs(OUT_DIR, exist_ok=True)

    questions = []
    for q in src["questions"]:
        no = int(q["question_number"])
        qid = f"{PAPER_ID}-q{no:02d}"
        topic_en, topic_zh = pick_topic(q)
        diff = pick_difficulty(no, q)
        stem_text = (q.get("stem_text") or "").strip()
        stem_latex = (q.get("stem_latex") or "").strip() or None

        questions.append({
            "id": qid,
            "no": no,
            "section": q.get("section"),
            "images": [f"images/questions/{qid}.png"],
            "topic": {"en": topic_en, "zh": topic_zh},
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
            "transcribedBy": "gemini-vision",
            "classifiedBy": "auto-rules",          # 分類為自動推斷，可在 solutions.json 覆寫
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
            if "topic" in ov:
                q["topic"] = ov["topic"]
            q["classifiedBy"] = "manual-override"
            n_ov += 1
        if n_ov:
            print(f"已套用 {n_ov} 條人工覆寫")

    bank = {
        "version": 1,
        "paper": {
            "id": PAPER_ID,
            "name": "2025 HKDSE Mathematics Compulsory Part Paper 2",
            "nameZh": "2025 DSE 數學 必修部分 卷二",
            "lang": "en",
            "sourcePdf": "p2.pdf",
        },
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

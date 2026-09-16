r"""獨立驗算：用程式重新解一次題目，核對 data/solutions.json 的答案。

為什麼要另寫一份：解答是「人／AI 寫的」，驗算必須用**另一條路徑**算出來，
不能只是把同一個推理重念一次。這裡對每題用數值／代數方法求出答案，
再逐個選項比對，確認只有一個選項對得上，且與 solutions.json 的 answer 相同。

用法：
    python tools/verify_answers.py            # 驗算所有已登記的題目
    python tools/verify_answers.py --json     # 額外輸出機器可讀結果

未登記驗算方法的題目會被列為「未驗算」（不影響退出碼，但會提醒）。
"""
from __future__ import annotations

import argparse
import io
import json
import os
import re
import sys
from decimal import Decimal, ROUND_HALF_UP

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# ───────────────────────── LaTeX → Python 表達式 ─────────────────────────
def to_py(tex: str) -> str:
    """把試卷裡常見的簡單 LaTeX 轉成可 eval 的 Python 表達式。"""
    s = tex
    s = s.replace("\\left", "").replace("\\right", "")
    s = s.replace("\\cdot", "*").replace("\\times", "*").replace("\\div", "/")
    s = s.replace("\\le", "<=").replace("\\ge", ">=").replace("\\neq", "!=")
    s = s.replace("\\;", " ").replace("\\,", " ").replace("\\quad", " ").replace("\\!", "")
    s = s.replace("\\text{ or }", " or ")
    s = s.replace("−", "-").replace("–", "-")
    # \frac{a}{b} → ((a)/(b))，允許單層大括號
    while "\\frac" in s:
        i = s.index("\\frac")
        j = s.index("{", i)
        depth, k = 0, j
        while True:
            if s[k] == "{":
                depth += 1
            elif s[k] == "}":
                depth -= 1
                if depth == 0:
                    break
            k += 1
        num = s[j + 1 : k]
        j2 = s.index("{", k)
        depth, k2 = 0, j2
        while True:
            if s[k2] == "{":
                depth += 1
            elif s[k2] == "}":
                depth -= 1
                if depth == 0:
                    break
            k2 += 1
        den = s[j2 + 1 : k2]
        s = s[:i] + f"(({num})/({den}))" + s[k2 + 1 :]
    s = s.replace("\\pi", "pi")
    s = s.replace("{", "(").replace("}", ")")
    s = s.replace("^", "**")
    s = re.sub(r"\\[a-zA-Z]+", "", s)          # 清掉剩下的 LaTeX 命令
    s = s.replace(" ", "")
    # 隱式乘法：數字/右括號 後面接 字母/左括號
    s = re.sub(r"(?<=[0-9\)])(?=[a-zA-Z(])", "*", s)
    s = re.sub(r"(?<=[a-zA-Z])(?=\()", "*", s)   # (x+1)(x-1) 這類
    return s


def ev(expr: str, **env):
    py = to_py(expr)
    return eval(py, {"__builtins__": {}, "pi": 3.141592653589793, "sqrt": lambda v: v ** 0.5}, env)


def close(a, b, rel: float = 1e-9) -> bool:
    """相對容差比較（(27x)^5 這種數值可達 1e17，絕對容差會失效）。"""
    return abs(a - b) <= rel * max(1.0, abs(a), abs(b))


def words(tex: str) -> str:
    return tex.replace(" ", "").replace("\n", "")


# ───────────────────────── 各題驗算方法 ─────────────────────────
def q01(options):
    """(27x)^5 / (3x^-2)^4 → 用 x = 2,3,5 數值比對（相對容差）。"""
    hits = []
    for L, tex in options.items():
        ok = all(close(ev("\\frac{(27x)^{5}}{(3x^{-2})^{4}}", x=x), ev(tex, x=x)) for x in (2, 3, 5))
        if ok:
            hits.append(L)
    return hits, "(27x)^5/(3x^{-2})^4 evaluated at x=2,3,5"


def q02(options):
    """36-(3m+4n)^2 → 用 (m,n) 樣本比對每個選項。"""
    hits = []
    for L, tex in options.items():
        ok = all(abs(ev("36-(3m+4n)^{2}", m=m, n=n) - ev(tex, m=m, n=n)) < 1e-6
                 for m, n in ((1, 1), (2, -3), (-1.5, 0.5)))
        if ok:
            hits.append(L)
    return hits, "36-(3m+4n)^2 compared with each option at 3 sample points"


def q03(options):
    """比較係數：8+a = 5a → a=2；b = 15a - 8a = 14。"""
    a = None
    for cand in (x / 100 for x in range(-2000, 2001)):
        if abs((8 + cand) - 5 * cand) < 1e-9:
            a = cand
            break
    b = 15 * a - 8 * a
    hits = [L for L, tex in options.items() if abs(ev(tex) - b) < 1e-9]
    return hits, f"solved a={a}, b=15a-8a={b}"


def q04(options):
    """(3c+1)(d-4) = 2d(5c-1) → c = (3d-4)/(7d+12)；用 d 樣本比對。"""
    hits = []
    for L, tex in options.items():
        ok = True
        for d in (1, 2, 0.5, -3):
            c_exact = (3 * d - 4) / (7 * d + 12)
            if abs(ev("(3c+1)(d-4)", c=c_exact, d=d) - ev("2d(5c-1)", c=c_exact, d=d)) > 1e-9:
                ok = False
                break
            if abs(ev(tex, d=d) - c_exact) > 1e-9:
                ok = False
                break
        if ok:
            hits.append(L)
    return hits, "solved c=(3d-4)/(7d+12) and checked the equation at d=1,2,0.5,-3"


def q05(options):
    """x^2+4x = k^2-2k-3：把每個選項的兩個根代回原方程，只有全對的才命中。"""
    hits = []
    for L, tex in options.items():
        # 選項格式如 "x=k-3 \\text{ or } x=-k-1"；先按 or 切開再接 Python 表達式
        parts = [p for p in re.split(r"\\text\{\s*or\s*\}|\bor\b", tex) if p.strip()]
        if len(parts) != 2:
            continue
        cands = []
        for p in parts:
            p = words(p)
            p = p[p.index("=") + 1:] if "=" in p else p
            cands.append(p)
        ok = True
        for k in (0, 1, -2, 3.5):
            for cand in cands:
                x = ev(cand, k=k)
                if not close((x ** 2 + 4 * x), (k ** 2 - 2 * k - 3)):
                    ok = False
        if ok:
            hits.append(L)
    return hits, "substituted both roots of each option back into x^2+4x=k^2-2k-3"


def q06(options):
    """「準確至 2 位小數」的真實取值範圍：用 Decimal 半上進位逐點比對。"""
    def rounds_to_567(v: str) -> bool:
        return Decimal(v).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP) == Decimal("5.67")

    grid = [Decimal(x) / 10000 for x in range(56630, 56760, 1)]
    truth = {v: rounds_to_567(str(v)) for v in grid}

    hits = []
    for L, tex in options.items():
        m = re.match(r"^([\d.]+)\s*(\\le|<)\s*x\s*(\\le|<)\s*([\d.]+)$", words(tex))
        if not m:
            continue
        lo, op_lo, op_hi, hi = Decimal(m.group(1)), m.group(2), m.group(3), Decimal(m.group(4))
        ok = True
        for v, want in truth.items():
            inside = (v >= lo if op_lo == "\\le" else v > lo) and (v <= hi if op_hi == "\\le" else v < hi)
            if inside != want:
                ok = False
                break
        if ok:
            hits.append(L)
    return hits, "compared each interval against Decimal half-up rounding to 2 d.p."


def q07(options):
    """4y+1 < 5y-3 <= 8y-9：在網格上求真實解集，與各選項比對。"""
    truth = {y: (4 * y + 1 < 5 * y - 3 <= 8 * y - 9) for y in [x / 2 for x in range(-30, 30)]}
    hits = []
    for L, tex in options.items():
        m = re.match(r"^y\s*(\\ge|\\le|>|<)\s*(-?[\d.]+)$", words(tex))
        if not m:
            continue
        op, val = m.group(1), float(m.group(2))
        f = {">": lambda a, b: a > b, "<": lambda a, b: a < b,
             "\\ge": lambda a, b: a >= b, "\\le": lambda a, b: a <= b}[op]
        if all(f(y, val) == want for y, want in truth.items()):
            hits.append(L)
    return hits, "solved the compound inequality on a half-integer grid"


def _numeric(options, value, tol=1e-9):
    """回傳與 value 相符的選項字母清單。"""
    return [L for L, tex in options.items() if abs(ev(tex) - value) < tol]


def q08(options):
    """f(x)=x^2+7x+k, f(4)+f(-4)=38 → 2k+32=38。"""
    k = None
    for cand in (x / 100 for x in range(-1000, 1001)):
        f = lambda t: t ** 2 + 7 * t + cand
        if abs(f(4) + f(-4) - 38) < 1e-9:
            k = cand
            break
    return _numeric(options, k), f"solved k={k}"


def q09(options):
    """p(x)=nx^3-3nx+36，x+3 為因式 → n，再求 p(3)。"""
    n = None
    for cand in (x / 100 for x in range(-2000, 2001)):
        p = lambda t: cand * t ** 3 - 3 * cand * t + 36
        if abs(p(-3)) < 1e-9:
            n = cand
            break
    p3 = n * 27 - 3 * n * 3 + 36
    return _numeric(options, p3), f"solved n={n}, p(3)={p3}"



def q12(options):
    """z = k x^3 / y^2。"""
    k = None
    for cand in (x / 100 for x in range(0, 2001)):
        if abs(cand * 27 / 36 - 3) < 1e-9:
            k = cand
            break
    z = k * 125 / 4
    return _numeric(options, z), f"solved k={k}, z={z}"


def q13(options):
    """a_{n+2}=2a_{n+1}+a_n, a_2=3, a_5=41 → a_6。"""
    a2 = 3
    a3 = None
    for cand in (x / 100 for x in range(-10000, 10001)):
        a4 = 2 * cand + a2
        if abs(2 * a4 + cand - 41) < 1e-9:
            a3 = cand
            break
    a4 = 2 * a3 + a2
    a6 = 2 * 41 + a4
    return _numeric(options, a6), f"solved a3={a3}, a4={a4}, a6={a6}"


def q29(options):
    """柱狀圖：books→teachers 為 3→4, 4→8, 5→6, 6→2, 7→2，求四分位距。"""
    data = [3] * 4 + [4] * 8 + [5] * 6 + [6] * 2 + [7] * 2
    n = len(data)
    def quartile(p):
        pos = (n + 1) * p
        lo = int(pos)
        hi = min(lo + 1, n)
        frac = pos - lo
        return data[lo - 1] * (1 - frac) + data[hi - 1] * frac
    iqr = quartile(0.75) - quartile(0.25)
    return _numeric(options, iqr), f"n={n}, Q1={quartile(0.25)}, Q3={quartile(0.75)}, IQR={iqr}"


CHECKS = {
    "2025-p2-q01": q01, "2025-p2-q02": q02, "2025-p2-q03": q03, "2025-p2-q04": q04,
    "2025-p2-q05": q05, "2025-p2-q06": q06, "2025-p2-q07": q07, "2025-p2-q08": q08,
    "2025-p2-q09": q09, "2025-p2-q12": q12, "2025-p2-q13": q13, "2025-p2-q29": q29,
}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    bank = json.load(open(os.path.join(BASE, "data", "bank.json"), encoding="utf-8-sig"))
    solutions = json.load(open(os.path.join(BASE, "data", "solutions.json"), encoding="utf-8-sig"))["solutions"]
    by_id = {q["id"]: q for q in bank["questions"]}

    fails, unverified, results = [], [], []
    print(f"{'id':<16} {'answer':<7} {'verified':<9} note")
    print("-" * 100)
    for qid in sorted(solutions, key=lambda i: by_id[i]["no"]):
        q, sol = by_id[qid], solutions[qid]
        fn = CHECKS.get(qid)
        if not fn:
            unverified.append(qid)
            print(f"{qid:<16} {sol['answer']:<7} {'—':<9} no independent check registered")
            continue
        hits, note = fn(q["options"])
        verdict = "OK" if hits == [sol["answer"]] else "MISMATCH"
        if verdict != "OK":
            fails.append((qid, hits, sol["answer"]))
        print(f"{qid:<16} {sol['answer']:<7} {verdict:<9} {note}  → matches {hits}")
        results.append({"id": qid, "answer": sol["answer"], "computed": hits, "ok": verdict == "OK"})

    print("-" * 100)
    print(f"已驗算 {len(results)} 題：通過 {len(results) - len(fails)}、失敗 {len(fails)}；未登記驗算 {len(unverified)} 題")
    for qid, hits, ans in fails:
        print(f"  [ERROR] {qid}: 程式算得 {hits}，solutions.json 寫 {ans}")
    if unverified:
        print("  未驗算：" + ", ".join(unverified))

    if args.json:
        path = os.path.join(BASE, "data", "ai", "answer_verification.json")
        os.makedirs(os.path.dirname(path), exist_ok=True)
        json.dump({"results": results, "unverified": unverified}, open(path, "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
        print(f"  明細：{os.path.relpath(path, BASE)}")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())

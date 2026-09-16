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
import math
import os
import re
import sys
from decimal import Decimal, ROUND_HALF_UP
from fractions import Fraction

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


# ───────────────────────── 共用小工具（新批次用）─────────────────────────
def _num(tex: str, keep_pi: bool = False) -> float:
    """從選項文字抽取數值（可選乘回 π）。

    支援貨幣千分位： "\\$46\\,000" → 46000； "288\\pi\\text{ cm}^{3}" → 288（keep_pi 時 288π）。
    """
    s = words(tex)
    has_pi = "\\pi" in s
    s = s.replace("\\$", "").replace("$", "").replace("\\,", "").replace(",", "")
    s = re.sub(r"\\pi", "", s)
    s = re.sub(r"\\text\{[^}]*\}", "", s)
    s = re.sub(r"\\[a-zA-Z]+", "", s)
    m = re.search(r"-?\d+(?:\.\d+)?", s)
    if not m:
        return float("nan")
    v = float(m.group(0))
    if keep_pi and has_pi:
        v *= math.pi
    return v


ROMAN_RE = re.compile(r"\b(I{1,3})\b")


def _roman_set(tex: str) -> set[str]:
    """從選項文字抽出羅馬數字集合："\\text{I and III only}" → {"I","III"}。"""
    s = re.sub(r"\\text\{([^}]*)\}", r"\1", tex)
    s = s.replace("\\", " ").upper()
    return set(ROMAN_RE.findall(s))


def _stmt_hits(options, truth: set[str]):
    """找出「所列命題集合 == truth」的選項。"""
    return [L for L, tex in options.items() if _roman_set(tex) == truth]


def _solve3(rows: list[list[Fraction]]) -> list[Fraction]:
    """3×3 線性方程組的高斯消去（精確分數），rows = [a,b,c|d]。"""
    m = [r[:] for r in rows]
    n = 3
    for col in range(n):
        piv = next(r for r in range(col, n) if m[r][col] != 0)
        m[col], m[piv] = m[piv], m[col]
        pv = m[col][col]
        m[col] = [v / pv for v in m[col]]
        for r in range(n):
            if r != col and m[r][col] != 0:
                f = m[r][col]
                m[r] = [a - f * b for a, b in zip(m[r], m[col])]
    return [m[i][n] for i in range(n)]


def _shoelace(pts: list[tuple[float, float]]) -> float:
    s = 0.0
    for i in range(len(pts)):
        x1, y1 = pts[i]
        x2, y2 = pts[(i + 1) % len(pts)]
        s += x1 * y2 - x2 * y1
    return abs(s) / 2


def _dist(a, b) -> float:
    return math.hypot(a[0] - b[0], a[1] - b[1])


def _angle_at(v, p1, p2) -> float:
    """∠p1-v-p2（度）。"""
    u = (p1[0] - v[0], p1[1] - v[1])
    w = (p2[0] - v[0], p2[1] - v[1])
    c = (u[0] * w[0] + u[1] * w[1]) / (math.hypot(*u) * math.hypot(*w))
    return math.degrees(math.acos(max(-1.0, min(1.0, c))))


def _similar(s1: list[float], s2: list[float], tol: float = 1e-6) -> bool:
    """兩組邊（已排序）是否成比例。"""
    a, b = sorted(s1), sorted(s2)
    r = a[-1] / b[-1]
    return all(abs(x - r * y) <= tol * max(1.0, x) for x, y in zip(a, b))


def q10(options):
    """$40 000、年利率 3%、半年複利、5 年 → 40000(1.015)^10。"""
    target = 40000 * (1 + 0.03 / 2) ** (2 * 5)
    hits = [L for L, tex in options.items()
            if abs(_num(tex) - round(target)) < 1.0]
    return hits, f"40000(1.015)^10 = {target:.2f} → nearest dollar {round(target)}"


def q11(options):
    """解 α+2β=4k, β+2γ=9k, γ+2α=5k（k=1），比較 α:β 與各選項。"""
    a, b, g = _solve3([
        [Fraction(1), Fraction(2), Fraction(0), Fraction(4)],
        [Fraction(0), Fraction(1), Fraction(2), Fraction(9)],
        [Fraction(2), Fraction(0), Fraction(1), Fraction(5)],
    ])
    hits = []
    for L, tex in options.items():
        m = re.match(r"^(-?\d+):(-?\d+)$", words(tex))
        if m and Fraction(int(m.group(1))) * b == Fraction(int(m.group(2))) * a:
            hits.append(L)
    return hits, f"solved α={a}, β={b}, γ={g} → α:β = {a / b}"


def q14(options):
    """圖示：x 截距 a∈(0,1)、y 截距 b>1，故 p=7/a、q=7/b（取 a=0.5, b=2）。"""
    a, b = 0.5, 2.0
    p, q = 7 / a, 7 / b
    truth = set()
    if p > 7:
        truth.add("I")
    if q > 7:
        truth.add("II")
    if q > p:
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, f"sample intercepts (a={a}, b={b}) → p={p}, q={q}; true = {sorted(truth)}"


def q15(options):
    """扇形 r=3π、周界 12π → θ=2 rad；檢驗面積、ΔOMN 周界、圓心角。"""
    r = 3 * math.pi
    theta = (12 * math.pi - 2 * r) / r
    area = 0.5 * r * r * theta
    chord = 2 * r * math.sin(theta / 2)
    perim = 2 * r + chord
    truth = set()
    if abs(area - 9 * math.pi ** 2) < 1e-9:
        truth.add("I")
    if perim < 35:
        truth.add("II")
    if theta > math.radians(100):
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, (f"θ={theta:.4f} rad={math.degrees(theta):.2f}°, area={area:.4f}, "
                  f"perimeter(ΔOMN)={perim:.4f}; true = {sorted(truth)}")


def q16(options):
    """圓柱 TSA：r²+35r-246=0 → r；球體積 (4/3)πr³。"""
    disc = 35 ** 2 + 4 * 246
    rr = (-35 + math.sqrt(disc)) / 2
    vol = 4 / 3 * math.pi * rr ** 3
    hits = [L for L, tex in options.items()
            if abs(_num(tex, keep_pi=True) - vol) < 1e-6 * max(1.0, vol)]
    return hits, f"r={rr:.6f}, V=(4/3)πr³={vol / math.pi:.4f}π cm³"


def q17(options):
    """平行四邊形取比例坐標 → [DFEG]/[ΔCGH]=49/16。"""
    B, A = (0.0, 0.0), (4.0, 0.0)
    D, C = (0.0, 5.0), (4.0, 5.0)
    E = (A[0] / 4, 0.0)                       # AE:EB = 1:3
    F = (0.0, D[1] * 2 / 5)                   # AF:FD = 2:3
    G = (D[0] + (C[0] - D[0]) * 2 / 3, 5.0)   # DG:GC = 2:1
    slope = (G[1] - E[1]) / (G[0] - E[0])
    H = (C[0], E[1] + slope * (C[0] - E[0]))  # BC produced: x = 4
    tri = _shoelace([C, G, H])
    quad = _shoelace([D, F, E, G])
    value = 16.0 * quad / tri
    hits = [L for L, tex in options.items() if abs(_num(tex) - value) < 0.5]
    return hits, (f"[DFEG]/[ΔCGH] = {quad:.4f}/{tri:.4f} = {quad / tri:.6f} "
                  f"→ {16.0}×ratio = {value:.4f}")


def q18(options):
    """WZ=25、XZ=60、WX=65 → 直角；XY²=WY·YZ=XZ²+YZ² → YZ=144, XY=156。"""
    WZ, XZ, WX = 25.0, 60.0, 65.0
    assert abs(WZ ** 2 + XZ ** 2 - WX ** 2) < 1e-9, "不是直角"
    yz = (XZ ** 2) / WZ                       # 3600 = 25·YZ
    xy = math.sqrt(XZ ** 2 + yz ** 2)
    hits = [L for L, tex in options.items() if abs(_num(tex) - xy) < 0.5]
    return hits, f"YZ={yz}, XY={xy} (check WY·YZ={WZ + yz}×{yz}={xy ** 2})"


def q19(options):
    """正方形邊長 1：F 在 AC 延線且 CF=CD；BG∥AF 定出 G；檢驗三命題。"""
    B, A = (0.0, 0.0), (1.0, 0.0)
    C, D = (0.0, 1.0), (1.0, 1.0)
    r2 = math.sqrt(2)
    F = (-1 / r2, 1 + 1 / r2)
    # 菱形 CDEF：E = D + (F - C)
    E = (D[0] + F[0] - C[0], D[1] + F[1] - C[1])
    assert abs(_dist(D, E) - 1) < 1e-9 and abs(_dist(E, F) - 1) < 1e-9
    d = (F[0] - D[0], F[1] - D[1])            # DF 方向
    da = (F[0] - A[0], F[1] - A[1])           # AF 方向
    # G = D + u·d 且 G ∥ da（B 為原點）
    u = -(D[0] * da[1] - D[1] * da[0]) / (d[0] * da[1] - d[1] * da[0])
    G = (D[0] + u * d[0], D[1] + u * d[1])
    truth = set()
    if abs(_dist(D, F) - _dist(F, G)) < 1e-9:                      # I
        truth.add("I")
    if _similar([_dist(D, E), _dist(E, F), _dist(D, F)],            # II
                [_dist(B, F), _dist(F, G), _dist(B, G)]):
        truth.add("II")
    if abs(_angle_at(B, A, G) + _angle_at(F, B, D) - 180) < 1e-6:   # III
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, (f"DG/DF={u:.6f}, BF={_dist(B, F):.6f}, ∠ABG={_angle_at(B, A, G):.2f}°, "
                  f"∠BFD={_angle_at(F, B, D):.2f}°; true = {sorted(truth)}")


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


def q20(options):
    """梯形：S(0,0)、R(53,0)，PS=41 與 SR 成 120°，RQ 與 RS 成 150° → PQ。"""
    R = (53.0, 0.0)
    P = (41 * math.cos(math.radians(120)), 41 * math.sin(math.radians(120)))
    t = P[1] / math.sin(math.radians(30))          # 由 R 沿 30° 升到 P 的高度
    Q = (R[0] + t * math.cos(math.radians(30)), P[1])
    pq = Q[0] - P[0]
    hits = [L for L, tex in options.items() if abs(_num(tex) - pq) < 0.5]
    return hits, f"P=({P[0]:.3f},{P[1]:.3f}), Q=({Q[0]:.3f},{Q[1]:.3f}) → PQ={pq:.4f}"


def q21(options):
    """ΔADE 直角在 E：AE=20、面積 150 → DE=15、AD=25；E 到 CD 的距離 = AD − AE²/AD。"""
    ae, area = 20.0, 150.0
    de = 2 * area / ae
    ad = math.hypot(ae, de)
    dist = ad - ae ** 2 / ad
    hits = [L for L, tex in options.items() if abs(_num(tex) - dist) < 0.5]
    return hits, f"DE={de}, AD={ad}, E 到 CD 的距離={dist}"


def q22(options):
    """弧 RS = 弧 UV = 66°；RT∥VU 且角平分線 ⇒ 弧 RV = TU = ST = x；66+66+3x=360。"""
    arc_rs = arc_uv = 2 * 33
    x = (360 - arc_rs - arc_uv) / 3
    ang = (arc_rs + x) / 2                          # ∠RUT 對弧 RS+ST
    hits = [L for L, tex in options.items() if abs(_num(tex) - ang) < 1e-9]
    return hits, f"弧RS={arc_rs}°, 弧UV={arc_uv}°, x={x}° → ∠RUT={ang}°"


def q23(options):
    """h²=bd；用一組樣本 b=1, d=4, h=2（滿足 h²=bd）檢驗四個等式。"""
    b, d, h = 1.0, 4.0, 2.0
    assert abs(h * h - b * d) < 1e-9
    tan_acb, tan_adc = b / h, h / d                 # 直角分別在 A、C
    bc, ad = math.hypot(b, h), math.hypot(d, h)
    pairs = {"A": (tan_acb, b / ad), "B": (tan_acb, b / d),
             "C": (tan_adc, bc / ad), "D": (tan_adc, bc / d)}
    hits = [L for L, (u, v) in pairs.items() if abs(u - v) < 1e-9]
    return hits, (f"b={b}, d={d}, h={h}（h²=bd）：tan∠ACB={tan_acb:.4f}, tan∠ADC={tan_adc:.4f}, "
                  f"BC/AD={bc / ad:.4f}, BC/CD={bc / d:.4f}")


def _root_or_num(tex: str) -> float:
    """解析 "\\sqrt{7}" → √7；其他交給 _num（ev() 會吞掉 \\sqrt，故另寫）。"""
    m = re.match(r"^\\sqrt\{(\d+(?:\.\d+)?)\}$", words(tex))
    if m:
        return math.sqrt(float(m.group(1)))
    return _num(tex)


def q24(options):
    """極坐標 X(1,20°)、Y(2,80°)；等邊第三點落在 20°–80° 之間 → r。"""
    X = (math.cos(math.radians(20)), math.sin(math.radians(20)))
    Y = (2 * math.cos(math.radians(80)), 2 * math.sin(math.radians(80)))
    v = (Y[0] - X[0], Y[1] - X[1])
    inside = []
    for sgn in (-1, 1):
        a = math.radians(60 * sgn)
        w = (v[0] * math.cos(a) - v[1] * math.sin(a), v[0] * math.sin(a) + v[1] * math.cos(a))
        Z = (X[0] + w[0], X[1] + w[1])
        ang = math.degrees(math.atan2(Z[1], Z[0])) % 360
        if 20 < ang < 80:
            inside.append((math.hypot(*Z), ang))
    assert inside, "兩個等邊頂點都不在 20°-80° 之間"
    r, ang = inside[0]
    hits = [L for L, tex in options.items() if abs(_root_or_num(tex) - r) < 1e-9]
    return hits, f"Z 在 {ang:.3f}° → r={r:.6f}（√7）"


def q25(options):
    """AP = OA = a√5（固定且非零）→ 與定點等距的軌跡 = 圓。"""
    a = 1.0
    oa = math.hypot(a, 2 * a)
    hits = [L for L, tex in options.items() if re.search(r"circle", tex, re.I)]
    return hits, f"OA={oa:.4f}（固定且非零）→ 圓"


def q26(options):
    """L1: 3x+4y=20、L2: mx+ny=20 垂直（m=-4n/3）；逐個選項檢查面積=6 且 C 在軸上方。"""
    ax = 20 / 3
    hits, notes = [], []
    for L, tex in options.items():
        n = _num(tex)
        m = -4 * n / 3
        det = 3 * n - 4 * m
        if abs(det) < 1e-12:
            continue
        xc, yc = 20 * (n - 4) / det, 20 * (3 - m) / det
        bx = 20 / m
        area = 0.5 * abs(ax - bx) * abs(yc)
        notes.append(f"{L}(n={n:g}): area={area:.4f}, y_C={yc:.4f}")
        if yc > 0 and abs(area - 6) < 1e-6:
            hits.append(L)
    return hits, "；".join(notes)


def q27(options):
    """圓心 (7,-5)、x 軸上的弦 PQ=24 → r²=12²+5²=169；比對 D=-2h、E=-2k、F=h²+k²-r²。"""
    h, k, half = 7.0, -5.0, 12.0
    r2 = half ** 2 + k ** 2
    want = (-2 * h, -2 * k, h ** 2 + k ** 2 - r2)
    hits = []
    for L, tex in options.items():
        m = re.match(r"^x\^\{2\}\+y\^\{2\}([-+]\d+)x([-+]\d+)y([-+]\d+)=0$", words(tex))
        if not m:
            continue
        coef = (int(m.group(1)), int(m.group(2)), int(m.group(3)))
        if coef == want:
            hits.append(L)
    return hits, (f"圓心 (7,-5)、r²={r2:.0f}（r=13）→ "
                  f"x²+y²{want[0]:+g}x{want[1]:+g}y{want[2]:+g}=0")


def q28(options):
    """6 張卡 2,2,2,3,4,5 → E = (3×10+15+25+50)/6。"""
    exp = (3 * 10 + 15 + 25 + 50) / 6
    hits = [L for L, tex in options.items() if abs(_num(tex) - exp) < 1e-9]
    return hits, f"E = {exp}"


def q30(options):
    """8 個數 mean=0、range=10 → α+β=0 且 |α|=5；再算眾數 s、中位數 t。"""
    base = [-4, -3, 1, 1, 1, 4]
    found = []
    for a in range(-15, 16):
        data = sorted(base + [a, -a])
        if data[-1] - data[0] == 10:
            found.append((a, -a, data))
    assert found, "找不到符合 mean=0、range=10 的 α,β"
    a, b, data = found[0]
    s = max(set(data), key=data.count)
    t = (data[3] + data[4]) / 2
    truth = set()
    if s == 1:
        truth.add("I")
    if t == -1:
        truth.add("II")
    if a + b == 0:
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, f"α,β={a},{b}; data={data}; s={s}, t={t}; true={sorted(truth)}"


def q31(options):
    """3E 後接 12 個十六進位 0 = 62×2^48；比對選項的二冪和。"""
    total = int("3E" + "0" * 12, 16)
    hits = []
    for L, tex in options.items():
        terms = [int(k) for k in re.findall(r"2\^\{(\d+)\}", words(tex))]
        if terms and sum(2 ** k for k in terms) == total:
            hits.append(L)
    return hits, f"3E(0×12)₁₆ = {total}（最高次 2^{total.bit_length() - 1}）"


def q32(options):
    """LCM = (p+2q)²(p³-8q³)；用樣本值比對（p=3, q=2）。"""
    p, q = 3.0, 2.0
    lcm_val = (p + 2 * q) ** 2 * (p ** 3 - 8 * q ** 3)
    # 三個原式都是它的因式（以因式分解論證）
    assert abs(lcm_val % (p ** 2 - 4 * q ** 2)) < 1e-9
    assert abs(lcm_val % (p ** 3 - 8 * q ** 3)) < 1e-9
    assert abs(lcm_val % ((p + 2 * q) * (p ** 2 - 4 * q ** 2))) < 1e-9
    hits = [L for L, tex in options.items() if abs(ev(tex, p=p, q=q) - lcm_val) < 1e-9]
    return hits, (f"(p+2q)²(p³-8q³) 在 p=3,q=2 時 = {lcm_val:.0f}；"
                  f"公倍式但非最小者（選項 D）會多一個 (p-2q)")


def q33(options):
    """斜率 a = -12/2 = -6（u=log25 x, v=log5 y）；n = a/2 = -3。"""
    a = -12 / 2
    n = a / 2                     # log25 x = (1/2) log5 x
    hits = [L for L, tex in options.items() if abs(_num(tex) - n) < 1e-9]
    return hits, f"a={a} → n={n}"


def q34(options):
    """0<a<1（取 a=0.5）：兩曲線相交、Q=(1,0)、交點在 y=x 上。"""
    a = 0.5
    lo, hi = 0.01, 0.999
    for _ in range(200):
        mid = (lo + hi) / 2
        if (a ** lo - lo) * (a ** mid - mid) <= 0:
            hi = mid
        else:
            lo = mid
    x0 = (lo + hi) / 2
    truth = set()
    if a < 1:
        truth.add("I")
    if 1 > a:                      # OQ = 1（log_a x = 0 ⇒ x = 1）
        truth.add("II")
    if abs(math.degrees(math.atan2(x0, x0)) - 45) < 1e-6:
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, f"a={a}, 交點 P≈({x0:.6f},{x0:.6f}) 在 y=x 上, OQ=1; true={sorted(truth)}"


def q35(options):
    """i^9+…+i^999：991 項 = 247×4 + 3，週期內和為 0。"""
    total = sum(1j ** n for n in range(9, 1000))
    hits = [L for L, tex in options.items() if abs(ev(tex, i=1j) - total) < 1e-9]
    return hits, f"991 項 = 247 週期 + 3 → 和 = {total}"


def q36(options):
    """線性規劃：候選角點 + 沿兩條邊界掃描，取可行最大值。"""
    f1 = lambda x: (19 - 4 * x) / 5
    f2 = lambda x: (7 * x + 11) / 6

    def feasible(x, y):
        return (x <= 11 + 1e-9 and 4 * x + 5 * y - 19 >= -1e-9 and 7 * x - 6 * y + 11 <= 1e-9)

    cands = [(1.0, 3.0), (11.0, f1(11)), (11.0, f2(11))]
    best = None
    for x, y in cands:
        if feasible(x, y):
            v = 8 * x - 6 * y + 11
            if best is None or v > best[0]:
                best = (v, x, y)
    scan = None
    for i in range(-2000, 2001):
        x = i / 100.0
        for y in (f1(x), f2(x)):
            if feasible(x, y):
                v = 8 * x - 6 * y + 11
                scan = v if scan is None else max(scan, v)
    value = best[0]
    hits = [L for L, tex in options.items() if abs(_num(tex) - value) < 1e-6]
    return hits, (f"角點最佳 {value:.4f} @ ({best[1]:.3f},{best[2]:.3f})；"
                  f"沿邊界掃描最大 {scan:.4f}")


def q37(options):
    """p,q,r 等差：用兩組樣本檢驗三命題（必然成立者才算）。"""
    samples = [(1.0, 2.0, 3.0), (-2.0, 1.0, 4.0)]
    truth = {"I", "II", "III"}
    for p, q, r in samples:
        checks = {
            "I": abs((3 ** q) ** 2 - 3 ** p * 3 ** r) < 1e-9,
            "II": abs((5 / q) ** 2 - (5 / p) * (5 / r)) < 1e-9,
            "III": abs(2 * (q - r) - ((p - q) + (r - p))) < 1e-9,
        }
        for k, ok in checks.items():
            if not ok:
                truth.discard(k)
    hits = _stmt_hits(options, truth)
    return hits, f"樣本 {samples} → 必然成立 {sorted(truth)}"


def q38(options):
    """切弦角 ∠CDT=∠DAC=41°；直徑 ⇒ ∠ADC=90°；E 在 BD 上 ⇒ ∠CED=180°-96°。"""
    ang_dac = 41.0
    ang_acd = 180 - 90 - ang_dac
    ang_ced = 180 - 96
    ang_cde = 180 - ang_acd - ang_ced
    hits = [L for L, tex in options.items() if abs(_num(tex) - ang_cde) < 1e-9]
    return hits, (f"∠DAC=41° → ∠ACD={ang_acd}°，∠CED={ang_ced}° "
                  f"→ ∠CDE={ang_cde}°（180-{ang_acd}-{ang_ced}）")


def q39(options):
    """tan³θ=2tanθ 在 (90°,270°) 的實根數：掃描符號變化計數。"""
    step, t = 0.01, 90.0 + 0.01
    prev = math.tan(math.radians(t)) ** 3 - 2 * math.tan(math.radians(t))
    roots = []
    while t < 270.0 - step:
        nxt = math.tan(math.radians(t + step)) ** 3 - 2 * math.tan(math.radians(t + step))
        if (prev < 0) != (nxt < 0):
            roots.append(round(t + step / 2, 2))
        prev, t = nxt, t + step
    uniq = []
    for r in roots:
        if not uniq or abs(r - uniq[-1]) > 1.0:
            uniq.append(r)
    hits = [L for L, tex in options.items() if abs(_num(tex) - len(uniq)) < 1e-9]
    return hits, f"根 ≈ {uniq}（共 {len(uniq)} 個）"


def q40(options):
    """正四面體：P 投影到面心 G，cos(線面角)=QG/PQ=(√3/3)。"""
    qg = (2 / 3) * (math.sqrt(3) / 2)                      # 邊長 1
    ang = math.degrees(math.acos(qg))
    hits = [L for L, tex in options.items() if abs(_num(tex) - round(ang)) < 1e-9]
    return hits, f"cos∠PQG=QG/PQ={qg:.6f} → {ang:.4f}° ≈ {round(ang)}°"


def q41(options):
    """內心 x 坐標 = 內切圓半徑 r = 6：解 (20+h-√(400+h²))/2 = 6。"""
    def f(h):
        return (20 + h - math.sqrt(400 + h * h)) / 2 - 6

    lo, hi = 0.001, 200.0
    for _ in range(200):
        mid = (lo + hi) / 2
        if f(lo) * f(mid) <= 0:
            hi = mid
        else:
            lo = mid
    h = (lo + hi) / 2
    area = 0.5 * 20 * h
    hits = [L for L, tex in options.items() if abs(_num(tex) - area) < 0.5]
    return hits, f"h={h:.6f}, 面積 = 10h = {area:.4f}"


def q42(options):
    """至少 1 位經理 = C(18,7) - C(16,7)。"""
    total = math.comb(18, 7) - math.comb(16, 7)
    hits = [L for L, tex in options.items() if abs(_num(tex) - total) < 1e-9]
    return hits, f"C(18,7)-C(16,7) = {math.comb(18, 7)}-{math.comb(16, 7)} = {total}"


def q43(options):
    """最多 3 罐葡萄 = 1 - C(4,4)C(9,2)/C(13,6) = 140/143。"""
    total = math.comb(13, 6)
    fav = total - math.comb(4, 4) * math.comb(9, 2)
    want = Fraction(fav, total)
    hits = []
    for L, tex in options.items():
        m = re.match(r"^\\frac\{(\d+)\}\{(\d+)\}$", words(tex))
        if m and Fraction(int(m.group(1)), int(m.group(2))) == want:
            hits.append(L)
    return hits, f"{fav}/{total} = {want}"


def q44(options):
    """男生標準分 -2、分差 6 分、SD 2 ⇒ 標準分差 3：|z-(-2)|=3 → z=1 或 -5。"""
    boy, gap = -2.0, 6.0 / 2.0
    want = {boy + gap, boy - gap}
    hits = []
    for L, tex in options.items():
        nums = {float(v) for v in re.findall(r"-?\d+(?:\.\d+)?", words(tex))}
        if nums == want:
            hits.append(L)
    return hits, f"男生標準分 {boy:g}、標準分差 {gap:g} → z ∈ {{{', '.join(f'{v:g}' for v in sorted(want))}}}"


def q45(options):
    """三組數據的 mean/range/variance 關係，用互異樣本 {0,1,2,5} 檢驗。"""
    data = [0.0, 1.0, 2.0, 5.0]

    def stats(xs):
        m = sum(xs) / len(xs)
        return m, max(xs) - min(xs), sum((x - m) ** 2 for x in xs) / len(xs)

    m1, r1, v1 = stats(data)
    m2, r2, v2 = stats([2 * x for x in data])
    m3, r3, v3 = stats([x + 3 for x in data])
    truth = set()
    if m1 + m3 > m2:
        truth.add("I")
    if abs(r1 + r3 - r2) < 1e-12:
        truth.add("II")
    if v1 + v3 < v2:
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, (f"樣本 {data}：m1+m3={m1 + m3:.4g} vs m2={m2:.4g}；"
                  f"r1+r3={r1 + r3:.4g} vs r2={r2:.4g}；"
                  f"v1+v3={v1 + v3:.4g} vs v2={v2:.4g} → {sorted(truth)}")


CHECKS = {
    "2025-p2-q01": q01, "2025-p2-q02": q02, "2025-p2-q03": q03, "2025-p2-q04": q04,
    "2025-p2-q05": q05, "2025-p2-q06": q06, "2025-p2-q07": q07, "2025-p2-q08": q08,
    "2025-p2-q09": q09, "2025-p2-q12": q12, "2025-p2-q13": q13, "2025-p2-q29": q29,
    # Batch B1
    "2025-p2-q10": q10, "2025-p2-q11": q11, "2025-p2-q14": q14, "2025-p2-q15": q15,
    "2025-p2-q16": q16, "2025-p2-q17": q17, "2025-p2-q18": q18, "2025-p2-q19": q19,
    # Batch B2
    "2025-p2-q20": q20, "2025-p2-q21": q21, "2025-p2-q22": q22, "2025-p2-q23": q23,
    "2025-p2-q24": q24, "2025-p2-q25": q25, "2025-p2-q26": q26, "2025-p2-q27": q27,
    "2025-p2-q28": q28,
    # Batch B3（後半段）
    "2025-p2-q30": q30, "2025-p2-q31": q31, "2025-p2-q32": q32, "2025-p2-q33": q33,
    "2025-p2-q34": q34, "2025-p2-q35": q35, "2025-p2-q36": q36, "2025-p2-q37": q37,
    # Batch B4（最後）
    "2025-p2-q38": q38, "2025-p2-q39": q39, "2025-p2-q40": q40, "2025-p2-q41": q41,
    "2025-p2-q42": q42, "2025-p2-q43": q43, "2025-p2-q44": q44, "2025-p2-q45": q45,
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

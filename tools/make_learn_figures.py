#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""自學追上站 · 概念卡示意圖產生器（SVG，黑白試卷風）

為什麼用 SVG 而唔係 Word 入面嘅圖：
  WS04.docx 嘅坐標平面圖係 Word 自選圖形＋文字框砌出嚟，.docx 入面冇對應嘅圖片檔；
  嵌入嘅 13 張圖只係 Worksheet 標誌同斜率／距離公式。所以呢度直接畫向量圖 ——
  放大唔會濛、每張得 1–3 KB、圖入面嘅點必定等於題目嘅點。

圖例（統一）
  ● 實心黑點 = 原本的點      ○ 空心點 = 變換後的影像
  ┈ 虛線     = 對稱連線／移動路徑／等距圓
  ▬ 粗黑線   = 鏡軸（反射軸）  ↷ 弧形箭嘴 = 旋轉方向

輸出
  data/learn/figures.json   { "<card id>": "<svg …>…</svg>" }（自動產生，勿手改）

用法
  python tools/make_learn_figures.py
"""
from __future__ import annotations

import io
import json
import math
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data", "learn")
OUT = os.path.join(DATA, "figures.json")

W, H = 268, 212          # 畫布（像素）
PAD = 22                 # 邊界留白（放座標標籤）

INK = "#111"             # 主線／點
AXIS = "#333"            # 座標軸
MID = "#666"             # 輔助線
GRID = "#E3E3E3"         # 方格紙
FONT = "system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif"


class Frame:
    """一個方格紙座標系，數學座標 → 像素座標。"""

    def __init__(self, xmin: int, xmax: int, ymin: int, ymax: int,
                 w: int = W, h: int = H, pad: int = PAD, key: str = "f"):
        self.xmin, self.xmax, self.ymin, self.ymax = xmin, xmax, ymin, ymax
        self.w, self.h, self.pad = w, h, pad
        self.key = key
        self.parts: list[str] = []
        self._grid()
        self._axes()

    # ── 座標轉換 ──
    def px(self, x: float) -> float:
        return self.pad + (x - self.xmin) * (self.w - 2 * self.pad) / (self.xmax - self.xmin)

    def py(self, y: float) -> float:
        return self.h - self.pad - (y - self.ymin) * (self.h - 2 * self.pad) / (self.ymax - self.ymin)

    def sx(self, dx: float) -> float:      # 數學長度 → 像素長度（x 方向）
        return dx * (self.w - 2 * self.pad) / (self.xmax - self.xmin)

    def sy(self, dy: float) -> float:
        return dy * (self.h - 2 * self.pad) / (self.ymax - self.ymin)

    # ── 底層 ──
    def _grid(self) -> None:
        g = []
        for x in range(self.xmin, self.xmax + 1):
            g.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"/>'
                     % (self.px(x), self.py(self.ymin), self.px(x), self.py(self.ymax)))
        for y in range(self.ymin, self.ymax + 1):
            g.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"/>'
                     % (self.px(self.xmin), self.py(y), self.px(self.xmax), self.py(y)))
        self.parts.append('<g stroke="%s" stroke-width="1">%s</g>' % (GRID, "".join(g)))

    def _axes(self) -> None:
        a = []
        if self.ymin <= 0 <= self.ymax:
            a.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"/>'
                     % (self.px(self.xmin), self.py(0), self.px(self.xmax), self.py(0)))
            a.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">x</text>'
                     % (self.px(self.xmax) + 6, self.py(0) + 4, AXIS, FONT))
        if self.xmin <= 0 <= self.xmax:
            a.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"/>'
                     % (self.px(0), self.py(self.ymin), self.px(0), self.py(self.ymax)))
            a.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">y</text>'
                     % (self.px(0) + 5, self.py(self.ymax) - 4, AXIS, FONT))
        if self.xmin <= 0 <= self.xmax and self.ymin <= 0 <= self.ymax:
            a.append('<text x="%.1f" y="%.1f" font-size="10" fill="%s" font-family="%s">O</text>'
                     % (self.px(0) - 12, self.py(0) + 13, AXIS, FONT))
        self.parts.append('<g stroke="%s" stroke-width="1.3" fill="%s">%s</g>' % (AXIS, AXIS, "".join(a)))

    # ── 元件 ──
    def point(self, x: float, y: float, label: str = "", hollow: bool = False,
              dx: float = 8, dy: float = -10) -> None:
        cx, cy = self.px(x), self.py(y)
        if hollow:
            self.parts.append('<circle cx="%.1f" cy="%.1f" r="4.6" fill="#fff" stroke="%s" stroke-width="1.7"/>'
                              % (cx, cy, INK))
        else:
            self.parts.append('<circle cx="%.1f" cy="%.1f" r="4.6" fill="%s"/>' % (cx, cy, INK))
        if label:
            self.parts.append('<text x="%.1f" y="%.1f" font-size="11.5" fill="%s" font-family="%s">%s</text>'
                              % (cx + dx, cy + dy, INK, FONT, label))

    def seg(self, x1, y1, x2, y2, color: str = MID, width: float = 1.2,
            dash: str | None = None) -> None:
        d = ' stroke-dasharray="%s"' % dash if dash else ""
        self.parts.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                          'stroke-width="%.1f"%s/>'
                          % (self.px(x1), self.py(y1), self.px(x2), self.py(y2), color, width, d))

    def arrow(self, x1, y1, x2, y2, color: str = INK, width: float = 1.7) -> None:
        self.parts.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                          'stroke-width="%.1f" marker-end="url(#ar-%s)"/>'
                          % (self.px(x1), self.py(y1), self.px(x2), self.py(y2),
                             color, width, self.key))

    def mirror_h(self, y: float, label: str = "") -> None:
        self.seg(self.xmin, y, self.xmax, y, color=INK, width=2.6)
        if label:
            self.parts.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">%s</text>'
                              % (self.px(self.xmax) - 62, self.py(y) - 7, INK, FONT, label))

    def mirror_v(self, x: float, label: str = "") -> None:
        self.seg(x, self.ymin, x, self.ymax, color=INK, width=2.6)
        if label:
            self.parts.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">%s</text>'
                              % (self.px(x) + 6, self.py(self.ymax) + 12, INK, FONT, label))

    def arc(self, r_px: float, t1_deg: float, t2_deg: float, label: str = "") -> None:
        """以原點為圓心、由角度 t1 畫到 t2（數學角，逆時針為正）。"""
        cx, cy = self.px(0), self.py(0)
        t1, t2 = math.radians(t1_deg), math.radians(t2_deg)
        p1 = (cx + r_px * math.cos(t1), cy - r_px * math.sin(t1))
        p2 = (cx + r_px * math.cos(t2), cy - r_px * math.sin(t2))
        large = 1 if abs(t2_deg - t1_deg) > 180 else 0
        sweep = 0 if t2_deg > t1_deg else 1
        self.parts.append('<path d="M %.1f %.1f A %.1f %.1f 0 %d %d %.1f %.1f" fill="none" '
                          'stroke="%s" stroke-width="1.5" marker-end="url(#ar-%s)"/>'
                          % (p1[0], p1[1], r_px, r_px, large, sweep, p2[0], p2[1], INK, self.key))
        if label:
            tm = math.radians((t1_deg + t2_deg) / 2.0)
            self.parts.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">%s</text>'
                              % (cx + (r_px + 15) * math.cos(tm), cy - (r_px + 15) * math.sin(tm) + 4,
                                 INK, FONT, label))

    def circle(self, r: float, dash: str = "4 3") -> None:
        """以原點為圓心、半徑 r（數學單位）嘅圓（x／y 範圍相同時先會係正圓）。"""
        self.parts.append('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="none" stroke="%s" '
                          'stroke-width="1.1" stroke-dasharray="%s"/>'
                          % (self.px(0), self.py(0), self.sx(r), MID, dash))

    def text(self, x: float, y: float, s: str, size: float = 11, color: str = INK) -> None:
        self.parts.append('<text x="%.1f" y="%.1f" font-size="%.1f" fill="%s" font-family="%s">%s</text>'
                          % (self.px(x), self.py(y), size, color, FONT, s))

    def line_by_eq(self, slope: float, intercept: float, color: str = INK, width: float = 1.6) -> None:
        """整條直線 y = mx + c（裁到畫面範圍內）。"""
        pts = []
        for x in (self.xmin, self.xmax):
            y = slope * x + intercept
            if self.ymin - 1 <= y <= self.ymax + 1:
                pts.append((x, y))
        for y in (self.ymin, self.ymax):
            if abs(slope) > 1e-9:
                x = (y - intercept) / slope
                if self.xmin - 1 <= x <= self.xmax + 1:
                    pts.append((x, y))
        if len(pts) >= 2:
            self.seg(pts[0][0], pts[0][1], pts[1][0], pts[1][1], color=color, width=width)

    def svg(self) -> str:
        defs = ('<defs><marker id="ar-%s" viewBox="0 0 10 10" refX="9" refY="5" '
                'markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">'
                '<path d="M0,0 L10,5 L0,10 z" fill="%s"/></marker></defs>' % (self.key, INK))
        return ('<svg viewBox="0 0 %d %d" xmlns="http://www.w3.org/2000/svg" '
                'font-family="%s">%s%s</svg>' % (self.w, self.h, FONT, defs, "".join(self.parts)))


# ──────────────────────────────────────────────────────────────────────────
# 六張概念卡嘅圖
# ──────────────────────────────────────────────────────────────────────────
def fig_translation() -> str:
    """c1 平移：右移 4、上移 3"""
    f = Frame(-2, 8, -2, 6, key="c1")
    f.arrow(2, 1, 6, 1)
    f.arrow(2, 1, 2, 4)
    f.point(2, 1, "P(2, 1)", dx=-4, dy=18)
    f.point(6, 1, "P₁(6, 1)", hollow=True)
    f.point(2, 4, "P₂(2, 4)", hollow=True)
    f.text(4, 0.55, "右 4", size=10.5, color=MID)
    f.text(2.35, 2.6, "上 3", size=10.5, color=MID)
    return f.svg()


def fig_reflect_axes() -> str:
    """c2 對 y 軸反射：P(−4, 2) → P′(4, 2)"""
    f = Frame(-6, 6, -3, 5, key="c2")
    f.mirror_v(0, "y 軸（鏡軸）")
    f.seg(-4, 2, 0, 2, dash="4 3")
    f.seg(0, 2, 4, 2, dash="4 3")
    f.point(-4, 2, "P(−4, 2)")
    f.point(4, 2, "P′(4, 2)", hollow=True)
    f.text(-2.2, 1.35, "4", size=10.5, color=MID)      # 放喺虛線下面，避免同點標籤撞位
    f.text(1.9, 1.35, "4", size=10.5, color=MID)
    return f.svg()


def fig_reflect_line() -> str:
    """c3 對水平線反射：B(3, 2) 對 y = 6 → B′(3, 10)"""
    f = Frame(-1, 7, 0, 12, key="c3")
    f.mirror_h(6, "L：y = 6")
    f.seg(3, 2, 3, 10, dash="4 3")
    f.point(3, 2, "B(3, 2)")
    f.point(3, 10, "B′(3, 10)", hollow=True)
    f.text(3.35, 4, "4", size=10.5, color=MID)
    f.text(3.35, 8, "4", size=10.5, color=MID)
    return f.svg()


def fig_rotate90() -> str:
    """c4 旋轉 90°：A(4, 6) → A′(−6, 4)"""
    f = Frame(-8, 8, -8, 8, key="c4")
    f.seg(0, 0, 4, 6, color=MID, width=1.1)
    f.seg(0, 0, -6, 4, color=MID, width=1.1)
    f.arc(52, math.degrees(math.atan2(6, 4)), math.degrees(math.atan2(4, -6)), "90°")
    f.point(4, 6, "A(4, 6)")
    f.point(-6, 4, "A′(−6, 4)", hollow=True, dx=-52, dy=-8)
    return f.svg()


def fig_rotate180_270() -> str:
    """c5 180° 與 270°：同一個圓周上（旋轉唔改距離）"""
    f = Frame(-6, 6, -6, 6, key="c5")
    f.circle(math.sqrt(13))
    f.seg(0, 0, 3, 2, color=MID, width=1.1)
    f.seg(0, 0, -3, -2, color=MID, width=1.1)
    f.seg(0, 0, 2, -3, color=MID, width=1.1)
    f.point(3, 2, "P(3, 2)")
    f.point(-3, -2, "180°：(−3, −2)", hollow=True, dx=-70, dy=18)
    f.point(2, -3, "270°：(2, −3)", hollow=True, dx=8, dy=18)
    return f.svg()


def fig_slope_perp() -> str:
    """c6 斜率與垂直：m₁ = 2、m₂ = −1/2"""
    f = Frame(-6, 8, -6, 8, key="c6")
    f.line_by_eq(2, 0)                     # L1：y = 2x
    f.line_by_eq(-0.5, 0)                  # L2：y = −x/2
    # 斜率三角形（升 2、行 1）
    f.seg(0, 0, 1, 0, dash="3 2.5")
    f.seg(1, 0, 1, 2, dash="3 2.5")
    f.text(0.5, -0.75, "1", size=10, color=MID)
    f.text(1.3, 1, "2", size=10, color=MID)
    # 直角標記（原點處）
    u1 = (1 / math.sqrt(5), 2 / math.sqrt(5))          # L1 方向
    u2 = (2 / math.sqrt(5), -1 / math.sqrt(5))         # L2 方向
    k = 0.95
    p0 = (0, 0)
    p1 = (u1[0] * k, u1[1] * k)
    p2 = (u1[0] * k + u2[0] * k, u1[1] * k + u2[1] * k)
    p3 = (u2[0] * k, u2[1] * k)
    f.parts.append('<polygon points="%.1f,%.1f %.1f,%.1f %.1f,%.1f %.1f,%.1f" fill="none" '
                   'stroke="%s" stroke-width="1.2"/>'
                   % (f.px(p0[0]), f.py(p0[1]), f.px(p1[0]), f.py(p1[1]),
                      f.px(p2[0]), f.py(p2[1]), f.px(p3[0]), f.py(p3[1]), INK))
    f.text(4.2, 7.4, "L₁：m₁ = 2", size=11)
    f.text(-5.8, 3.4, "L₂：m₂ = −½", size=11)
    return f.svg()


FIGURES = {
    "ws04-c1": fig_translation,
    "ws04-c2": fig_reflect_axes,
    "ws04-c3": fig_reflect_line,
    "ws04-c4": fig_rotate90,
    "ws04-c5": fig_rotate180_270,
    "ws04-c6": fig_slope_perp,
}


def main() -> int:
    out = {k: fn() for k, fn in FIGURES.items()}
    with io.open(OUT, "w", encoding="utf-8") as f:
        json.dump({"_note": "自動產生（python tools/make_learn_figures.py），請勿手改",
                   "figures": out}, f, ensure_ascii=False, indent=1)
        f.write("\n")
    print("已產生 %d 張概念卡示意圖 → data/learn/figures.json" % len(out))
    for k, v in out.items():
        print("  %-10s %5.1f KB" % (k, len(v) / 1024.0))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

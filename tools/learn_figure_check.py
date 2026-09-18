#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""概念卡示意圖（SVG）自動檢查。

因為圖係程式畫出嚟、冇人逐張用眼睇，所以用程式把關三件事：
  1. 標籤有冇出咗畫布（會被裁走）
  2. 標籤之間有冇互疊（會睇唔到字）
  3. 標籤有冇壓住點（會遮住重點）

用法
    python tools/learn_figure_check.py
"""
from __future__ import annotations

import json
import os
import sys
import xml.etree.ElementTree as ET

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIGURES = os.path.join(BASE, "data", "learn", "figures.json")
NS = "{http://www.w3.org/2000/svg}"
W, H = 260, 260          # 同 make_learn_figures.py 嘅畫布一致（正方形）


def label_width(s: str, fs: float) -> float:
    """粗略估計文字闊度：中日韓全形字 1.0em、其他 0.55em。"""
    return sum(fs * (1.0 if ord(ch) > 0x2E80 else 0.55) for ch in s)


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    with open(FIGURES, encoding="utf-8") as f:
        doc = json.load(f)
    figures = doc.get("figures") or {}

    bad = 0
    for key, svg in figures.items():
        root = ET.fromstring(svg)
        texts = []
        for t in root.iter(NS + "text"):
            fs = float(t.get("font-size", 11))
            x, y = float(t.get("x")), float(t.get("y"))
            txt = t.text or ""
            texts.append((x, y, label_width(txt, fs), fs, txt))
        pts = [(float(c.get("cx")), float(c.get("cy")))
               for c in root.iter(NS + "circle") if float(c.get("r", 0)) < 8]

        issues = []
        for (x, y, w, fs, txt) in texts:
            if x < -2 or x + w > W + 2 or y < 6 or y > H - 2:
                issues.append("出界：" + txt)
        for i in range(len(texts)):
            for j in range(i + 1, len(texts)):
                x1, y1, w1, f1, t1 = texts[i]
                x2, y2, w2, f2, t2 = texts[j]
                if abs(y1 - y2) < (f1 + f2) / 2 and not (x1 + w1 < x2 or x2 + w2 < x1):
                    issues.append("互疊：%s ／ %s" % (t1, t2))
        for (x, y, w, fs, txt) in texts:
            for (cx, cy) in pts:
                if x - 5 <= cx <= x + w + 5 and y - fs <= cy <= y + 5:
                    issues.append("壓住點：" + txt)

        if issues:
            bad += 1
        print("%-9s 標籤 %2d 個 · 點 %d 個 · %s"
              % (key, len(texts), len(pts), "；".join(issues) if issues else "OK ✓"))

    print("\n✓ %d 張示意圖全部合格" % len(figures) if not bad
          else "\n✗ %d / %d 張示意圖有問題，請改 tools/make_learn_figures.py 再跑一次" % (bad, len(figures)))
    return 1 if bad else 0


if __name__ == "__main__":
    raise SystemExit(main())

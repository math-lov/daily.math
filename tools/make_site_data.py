r"""把 data/*.json 轉成網站可讀的 JS 資料檔，並把題圖複製進 site/。

輸出：
    site/data/bank.js        window.BANK = {...}
    site/data/solutions.js   window.SOLUTIONS = {...}
    site/data/releases.js    window.RELEASES = {...}
    site/images/questions/*.png

為什麼用 window.XXX：普通 script 的 const 不會掛到 window，容易與讀取端不一致。
index.html 會用「按小時變化的版本號」載入這些檔案，繞過 GitHub Pages 的 10 分鐘快取。
"""
from __future__ import annotations

import io
import json
import os
import shutil
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data")
SITE = os.path.join(BASE, "site")
SITE_DATA = os.path.join(SITE, "data")


def load(name: str, default):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        return default
    return json.load(open(path, encoding="utf-8-sig"))


# 只在工作台（教師端）顯示、不應出現在公開網站的欄位。
# data/*.json 是編輯層，完整保留；這裡只是生成公開資料檔時略去。
TEACHER_ONLY_Q = ("notes", "transcribedBy", "editedBy", "classifiedBy")
TEACHER_ONLY_SOL = ("review",)


def strip_teacher_only(bank: dict, solutions: dict) -> tuple[int, int]:
    """移除教師專用欄位，回傳 (略去的 notes 題數, 略去的 review 題數)。"""
    n_notes = n_review = 0
    for q in bank.get("questions", []):
        if "notes" in q:
            n_notes += 1
        for k in TEACHER_ONLY_Q:
            q.pop(k, None)
    for s in (solutions.get("solutions") or {}).values():
        if "review" in s:
            n_review += 1
        for k in TEACHER_ONLY_SOL:
            s.pop(k, None)
    return n_notes, n_review


def write_js(path: str, var: str, obj) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(f"// 自動生成，請勿手改（來源：data/；重新生成：python tools/make_site_data.py）\n")
        f.write(f"window.{var} = ")
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write(";\n")


def main() -> int:
    bank = load("bank.json", None)
    if not bank:
        print("缺少 data/bank.json")
        return 1
    solutions = load("solutions.json", {"version": 1, "solutions": {}})
    releases = load("releases.json", {"releases": []})

    n_notes, n_review = strip_teacher_only(bank, solutions)

    write_js(os.path.join(SITE_DATA, "bank.js"), "BANK", bank)
    write_js(os.path.join(SITE_DATA, "solutions.js"), "SOLUTIONS", solutions)
    write_js(os.path.join(SITE_DATA, "releases.js"), "RELEASES", releases)

    # 複製題圖
    dst_root = os.path.join(SITE, "images", "questions")
    os.makedirs(dst_root, exist_ok=True)
    copied = 0
    for q in bank["questions"]:
        for rel in q.get("images", []):
            src = os.path.join(BASE, rel)
            dst = os.path.join(SITE, rel)
            if os.path.exists(src):
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copyfile(src, dst)
                copied += 1

    n_sol = len(solutions.get("solutions", {}))
    print(f"已生成 site/data/{{bank,solutions,releases}}.js；複製 {copied} 張題圖")
    print(f"題庫 {len(bank['questions'])} 題；解答 {n_sol} 題；排程 {len(releases.get('releases', []))} 批")
    print(f"公開資料檔已略去教師專用欄位：notes {n_notes} 題、review {n_review} 題（原檔 data/ 不變）")
    return 0


if __name__ == "__main__":
    sys.exit(main())

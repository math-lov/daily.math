# 解題作業手冊（Solver Playbook）

> 讀者：自動化任務／CodeBuddy 代理。目標是「無人監督也能產出可上線的解答」。
> 本手冊只講**新題目的解題流程與驗收標準**；每日發佈流程見 `WORKBUDDY-DAILY.md`。

---

## 0. 一句話原則

**答案必須由程式獨立驗算過才算完成；驗算不過，寧可留空也不要寫入。**

---

## 1. 每次開工的固定流程

```powershell
cd "C:\Code Buddy\HKDSE"
$py = "C:\Users\t073\.workbuddy\binaries\python\envs\default\Scripts\python.exe"
& $py tools\validate_bank.py      # 看「已解答 / 未解答」與可發佈題數
```

1. **找未解題目**：以 `data/bank.json` 的 `id` 為全集，`data/solutions.json` 已存在者為已解。
   取**最多 6 題**（由題號小到大），避免單次任務過長。
2. **讀題**：`data/transcripts/<paper>.json`（原始轉寫，含 `figure` 圖表描述、`notes` 可疑處）＋
   `data/bank.json`（題目本體）。**題目只英文**，圖表題以 `figure` 描述為準；描述不足以判斷時，
   把該題**跳過**（不要猜），並在報告中列出「需人工看圖」。
3. **解題**：寫 `steps`（3–5 步）＋ `traps`（2–3 條真實干擾項）＋ `tip`（可重用技巧），中英雙語。
4. **寫入**：把本批寫成 `data/ai/solutions_batchN.json`，再合併：
   ```powershell
   & $py tools\merge_solutions.py --file data\ai\solutions_batchN.json
   ```
   （`merge_solutions.py` 會驗證 id／answer／steps 中英齊備；不通過會整批拒絕。）
5. **登記獨立驗算**（**必做，且不可是同一條推理的重述**）：在 `tools/verify_answers.py` 寫一個
   `def qNN(options)` 並加進 `CHECKS`。
6. **跑驗收**：
   ```powershell
   & $py tools\verify_answers.py     # 必須「失敗 0」
   & $py tools\validate_bank.py      # 必須「0 個錯誤」
   & $node tools\katex_check.js      # 必須「all LaTeX renders cleanly」
   ```
7. **回報**：題號、答案、驗算方式、是否需要人工看圖。**不 push、不改 `releases.json`。**

---

## 2. `solutions.json` 的格式（唯一契約）

```json
"2025-p2-q14": {
  "answer": "A",
  "verify": "checked",
  "solution": {
    "steps": [
      {
        "title": { "en": "Step 1 · ...", "zh": "第 1 步 · ..." },
        "math": "x^{2}+y^{2}=169",
        "en": "...",
        "zh": "...",
        "highlight": ["r=13"]
      }
    ],
    "traps": [ { "opt": "C", "en": "...", "zh": "..." } ],
    "tip": { "en": "...", "zh": "..." }
  }
}
```

* `math` 是那一步的顯示公式（KaTeX），**不放英文句子**；控制在 ~60 字元內。
* `highlight` 放「這一步的結論」（指數、符號、答案值），學生眼睛要落在這裡。
* `traps` **必須指向該題真正印出來的干擾選項**，說明「學生為何會選它、錯在哪」。
* `tip` 要是可帶走的技巧，不是答案的重述。
* `en`/`zh` 內可用 `$...$` 寫行內數學。
* ⚠ **貨幣符號**：文字欄位裡的 `$` 會被當成數學定界符。**絕不裸寫** `$`（例如 `$46 422` 會讓 `katex_check.js` 判定「unbalanced $ delimiters」並讓 CI 擋住發佈）。
  金額請寫成純數字（`46 422`），或整段放進數學式並轉義：`$\$46\,422$`。

---

## 3. 獨立驗算怎麼寫（重點）

`tools/verify_answers.py` 已備好工具函式，直接用：

| 函式 | 用途 |
|---|---|
| `ev(expr, **env)` | 把 LaTeX 轉成 Python 表達式求值（支援 `\frac`、`^`、隱式乘法） |
| `close(a, b)` | 相對容差比較（大數值必需） |
| `_num(tex)` | 從選項文字抽數值（處理貨幣千分位、`\text{}`；`keep_pi=True` 時乘回 π） |
| `_root_or_num(tex)` | 解析 `\sqrt{n}` 選項 |
| `_roman_set` / `_stmt_hits(options, {"I","III"})` | 命題型題目（I/II/III）自動配對選項 |
| `_solve3([...])` | 3×3 線性方程的精確解（Fraction） |
| `_shoelace` / `_dist` / `_angle_at` / `_similar` | 幾何：面積、距離、夾角、相似 |

驗算範式（選一種，**不要**只把解答的算式抄一遍）：

1. **數值代入**：把選項與題幹公式在多個樣本點比較（如 `q01`、`q02`）。
2. **精確解方程**：先解出未知數（二分法／Fraction 高斯消去），再比對選項（如 `q03`、`q41`）。
3. **區間／取整**：用 `Decimal` 逐點檢查（如 `q06`）。
4. **幾何構造**：自建坐標，算出長度／角度後比對（如 `q17`、`q19`）。
5. **命題真值表**：算出 I/II/III 的真假，再配對選項文字（如 `q14`、`q45`）。
6. **窮舉計數**：組合數／根數用 `math.comb`、掃描計數（如 `q42`、`q39`）。

**驗算必須「唯一命中」**：程式算出的命中選項清單必須等於 `[解答的 answer]`，否則修到一致為止。

---

## 4. 硬規則（違反即不可上線）

1. **不得編造題目內容**。題目文字只來自 transcript；轉寫可疑 → 在解答中標註並回報，
   不要自行「補正」題幹。
2. **不確定就標記**：`verify: "checked-manual"` 並在回報中列為「需目視確認」。
   只有程式驗算通過者才可寫 `verify: "checked"`。
3. **命題型題目**必須真的檢驗每個命題，不可用「常識」挑答案。
4. **絕不修改**：`data/transcripts/*`、`data/releases.json`、`site/**`（`site/` 由腳本生成）。
5. **絕不** `git commit` / `git push`（發佈權在老師手上的面板）。
6. 每次最多 6 題；每題都要有驗算函式，`verify_answers.py` 不許有任何 MISMATCH。

---

## 5. 完成回報格式（給老師看）

```
本批 6 題：q10(C) q11(A) q14(A) q15(D) q16(B) q17(B)
驗算：tools/verify_answers.py 失敗 0；tools/validate_bank.py 0 錯誤
需人工看圖：無
可疑轉寫：2025-p2-q27（選項 10y 正負號掃描模糊，已保守處理）
```

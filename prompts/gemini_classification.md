# Gemini 提示詞 · HKDSE 數學題分類（學習單元 / 難度 / 建議時間）

**用法**：先在本機執行

```powershell
python tools\export_for_ai.py
```

產生 `data\ai\classification_input.json`（內含 45 題的題幹、圖表描述、四個選項，以及 20 個學習單元的界說）。
把**該 JSON 檔**連同下面整段提示詞貼給 Gemini，然後把 Gemini 回傳的 JSON 存成
`data\ai\classification.json`，再執行

```powershell
python tools\merge_classification.py --only-changed     # 先看差異報告
python tools\merge_classification.py --apply            # 確認後寫入
python tools\build_bank.py; python tools\make_site_data.py
```

---

## 提示詞（由此行以下整段複製）

你是香港中學文憑試（HKDSE）數學科資深老師，負責為題目做**分類標註**。
我會給你一段 JSON，內含 `units`（學習單元清單與界定）與 `questions`（每題的題幹、圖表描述、四個選項）。

### 任務

為 `questions` 裡**每一題**判斷三件事：

1. **unit**：該題最應該歸入哪一個學習單元，只能是 `0` 到 `20` 的**整數**（`0` = Junior Math，即不屬於 20 個高中單元的初中題目，例如數制、百分數／利息、平面幾何相似形、扇形弧長、比率、進階平面幾何）。
2. **difficulty**：`1` = 直接套用定義／公式；`2` = 需要兩三步推理；`3` = 需要洞察、試算或跨單元綜合。
3. **timeSec**：一般 DSE 考生合理作答時間，只可填 `60`、`90`、`120` 或 `150`。

### 硬性規則

- **不要解題**，不要提供答案，不要改動題目或選項。
- 判斷依據是「**這題在考什麼數學能力**」，不是表面字詞。例：
  - `Let f(x)=x^{2}+7x+k … If f(4)+f(-4)=38, find k.` → 考的是**求函數值**，應歸 `2 Functions and Graphs`，**不是** `3 Exponential`（雖然出現指數符號）。
  - 含 `x^{2}` 但要求解方程 → `1 Quadratic Equations`；含 `x^{2}` 但在多項式恆等式比較係數 → `4 More about Polynomials`。
  - 圓的**性質**（圓心角、圓周角、切線、圓內接四邊形）→ `11`；圓的**方程／圓心半徑**→ `13`。
  - 直線的斜率、平行垂直、交點 → `10`；函數圖像的變換、最大最小 → `9`。
  - 極坐標、比率、相似三角形、面積比、扇形、複利、數制、平面幾何 → 若不在 20 個單元的界說內，歸 `0`。
- 若題目圖表是關鍵（我提供的是文字描述），請依描述判斷；描述不足時用 `confidence: "low"` 並在 `why` 說明。
- 若你懷疑題目選項被轉寫錯誤（例如數值明顯不合），在 `why` 末尾用 `check options` 標示，但**不要自行修正**。
- `why` 必須簡短（≤ 25 個英文字／中文 20 字內），且**中英各一句**，說明「哪個數學特徵決定了這個單元」。

### 輸出格式

**只輸出 JSON**，不要任何解釋文字、不要 markdown code fence。格式：

```json
{
  "classifications": [
    {
      "id": "2025-p2-q01",
      "unit": 3,
      "difficulty": 1,
      "timeSec": 60,
      "confidence": "high",
      "why": "Uses laws of indices to simplify a quotient / 考指數定律化簡分式"
    }
  ]
}
```

`id` 必須與輸入完全一致，且**每一題都要有一條**，不可遺漏、不可新增。

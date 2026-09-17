# Work Buddy · Daily Three runbook

Student-facing site: **https://tkchung907.github.io/dse-daily/**
Repo: `tkchung907/dse-daily` (local: `C:\Code Buddy\HKDSE`)

---

## 0. Roles & files（2026-09 起的新分工）

| File | Owner | 說明 |
|---|---|---|
| `data/transcripts/*.json` | AI vision（Gemini）| 一卷一檔的原始轉寫 → **永不手改** |
| `data/bank.json` | generated | 題庫（含 `code` 顯示編號、單元、難度、建議時間） |
| `data/overrides.json` | 老師／Work Buddy | 修正個別題目的 unit / difficulty / timeSec |
| **`data/solutions.json`** | **CodeBuddy（自動解題，已驗算）** | 答案＋中英雙語逐步解答；45/45 完成並經獨立驗算 |
| **`data/releases.json`** | **Work Buddy（排程）＋老師（收回）** | 哪 3 題在哪一天發佈；狀態／收回／公告欄位見 4c |
| `site/` | generated | 網站；`site/data/*.js` **只含已發放且未收回**的內容（未發放的題目與解答不會輸出） |
| `images/questions/<paper>-qNN.png` | cut tool | 每題一張裁剪圖 |
| `tools/panel_server.py` + `start-panel.bat` | 老師 | 本機控制面板（上載新卷／看進度／一鍵發佈） |

規則：**生成檔可隨時重建；編輯內容只放 `data/*.json`。**

---

## 1. 每日流程（約 3 分鐘）

```powershell
cd "C:\Code Buddy\HKDSE"
$py  = "C:\Users\t073\.workbuddy\binaries\python\envs\default\Scripts\python.exe"
$node = "C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe"

& $py tools\validate_bank.py        # 看題池：易/中/難各剩多少
& $py tools\pick_batch.py --apply   # 自動挑 1 易 1 中 1 難（不同單元）→ 寫入 releases.json
& $py tools\make_site_data.py       # data/*.json → site/data/*.js
& $node tools\site_check.js         # 資料完整性 + JS 語法
& $node tools\katex_check.js        # 逐條用 KaTeX 解析所有數學式（CI 也會跑）
& $py  tools\audit_crops.py --strict # 題目圖邊緣體檢（有圖被切就拒絕發佈）
& $py  tools\syllabus_check.py      # 課程合規：度制、幾何題不用坐標／向量當主解法
& $node tools\smoke_test.js         # 模擬學生完整流程（必須 all passed）
git add -A
git commit -m "Batch N: <主題>"
git push                            # GitHub Pages 1 分鐘後自動上線
```

**也可以完全用面板做**：雙擊 `start-panel.bat` → 「排程與發佈」→ 按「自動挑下一批」→「一鍵發佈」。
面板的「一鍵發佈」等於上面 4 個檢查指令 + git push，任何一步失敗就中止。

### 發布邊界（重要）

`make_site_data.py` **只會把「日期 ≤ 今天 且未收回」的批次輸出到網站**：

* 所以「發佈」這個動作本身就是「發放今天到期的批次」—— 不必另外做什麼，
  跑一次上面的流程就會把當天（以及之前）的批次推上去。
* **未到期的批次，題目、答案、解答、題圖根本不會出現在 `site/`** ——
  學生改網址（`?batch=99`）也看不到，`site_check.js` 會擋住任何漏出的內容。
* **多久跑一次？** 每天一次最好（當天批次當天出現）；某天沒跑，隔天補跑即可（會一次補上）。
* 想先看未來幾天的樣子：`& $py tools\make_site_data.py --all --out build\preview`
  （`build/` 不會進 git，純本機預覽，**切勿**把 `--all` 的輸出當成網站）。
* 收回／改期／換題／公告 → 開面板「發布管理」`/releases`（見第 2 節）。

發佈後請**抽查 1 題**：開網站點當天其中一題，看解答動畫是否通順、答案與選項一致。

### 每日檢查清單
- [ ] `pick_batch.py` 顯示的 3 題主題合理（不要三題同一單元）
- [ ] `smoke_test.js` 全 PASS
- [ ] `make_site_data.py` 的「發布邊界」行顯示今天該發放的批次與題數正確
- [ ] 發佈後網站（手機也試一次）當天批次正常顯示
- [ ] 若有收回：學生端 Archive 顯示「已收回」，且該題的答案與解答已看不到
- [ ] 留意題池：`pick_batch.py` 顯示剩餘 < 15 題時，提醒老師補新試卷

---

## 2. 如果發現解答有錯（或題目有問題）

**先止血，再修正** —— 學生看到錯的東西比看不到更糟。

1. **收回**：開面板「發布管理」`http://127.0.0.1:8787/releases`
   * 只有一題有問題 → 該題按「**收回此題**」（同批另外兩題照常發放）
   * 整批都不能用 → 按「**收回整批**」
   * **必填原因**：會寫進 `releases.json` 的 `history`（誰、何時、為何），日後回溯得到
2. **上線**：
   * 一般 → 按「**重建並發佈**」（validate／KATEX／smoke 全過才 push）
   * 很急 → 按「**緊急收回並上線**」（跳過完整檢查，先讓學生看不到，再慢慢修）
3. **修正**：改 `data/solutions.json`，並**同時**修正 `tools/verify_answers.py` 對應的驗算函式
   （驗算必須用另一條路徑算出答案）；`& $py tools\verify_answers.py` 必須 0 失敗。
4. **恢復**：「發布管理」→「恢復此題／恢復發放」→「重建並發佈」。
5. **公告**（答案改過就要做）：該批次按「更正公告…」填中文說明 → 學生端題目上方會出現黃色提示。
6. 若只是**題目轉寫**有問題（不是解答），改 `data/transcripts/<paper>.json` 後重跑
   `build_bank.py`（並在 `data/overrides.json` 保留必要的人工分類）。
7. 若驗算做不到（純幾何敘述型），把該題的 `verify` 改成 `"checked-manual"`，
   並在該題加 `"review": "原因"` 欄位 → 面板會列進「需目視確認」。

> **規則**：`releases.json` 一律用**狀態標記**收回，**不要刪條目** —— 刪掉就無法審計、無法恢復，
> 學生端的 Archive 也會對已收回的批次顯示「已收回」，而不是讓它憑空消失。

**目前需目視確認**：`25-P2Q27`（選項 10y 正負號模糊）、`25-P2Q44`（題幹標準分符號與選項不符）
—— 兩題已在 `solutions.json` 標了 `review` 欄位，面板會顯示。

**怎様快速複核**：`python tools\review_sheet.py --open`（或面板「產生覆核清單」按鈕）
→ 產生 `review/review_sheet.html`：一頁列出所有疑點，附原圖（可點擊放大）、
「要確認的那一句話」、目前轉寫與判定下拉；看完按「複製結果」貼回 CodeBuddy 即可。
其中 A 類（影響答案）必須看圖；B 類只是印刷模糊，若不照現行讀法「四個選項會全部對不上」，
且獨立驗算已鎖定唯一答案，掃一眼確認即可。

---

## 3. 新增一份試卷

### 3a. 用面板（建議）
1. 雙擊 `start-panel.bat` → 「新增試卷」
2. 填「試卷 id」（如 `2026-p2`）；非歷年卷另填「卷別代碼」（如 `MOCK-A` → 顯示 `MOCK-A-Q03`）
3. 上載 PDF（**≥250 DPI**，低於此會被拒絕，請重新掃描）
4. 上載整卷 Gemini JSON（檔名不限，系統會存成 `<試卷 id>.json`）
5. 按「切題」→ 按「合併入庫」
6. 「解題隊列」→ 按「產生／更新隊列」，把提示詞交給 CodeBuddy（自動化任務或工作階段）解題
7. 解完後回「排程與發佈」按「自動挑下一批」→「一鍵發佈」

### 3b. 用指令（等價）
```powershell
& $py tools\cut_questions.py --pdf ".\inbox\2026 paper 2 eng.pdf" --paper 2026-p2
& $py tools\audit_crops.py          # 邊緣體檢：列出被切到的題目
& $py tools\recut_figures.py --apply  # 有被切就重裁（正確題帶 + 圖形續接）
& $py tools\build_bank.py          # 讀 data/transcripts/*.json
& $py tools\validate_bank.py
& $py tools\make_site_data.py
```

> **圖形被切怎麼回事**：題目圖的邊界是「下一題題號 −6pt」，但畫在右側的高圖形會越過這條線，
> 舊版只裁到「最後一行文字」就會切掉圖形下半。`audit_crops.py` 用圖片邊緣的墨跡偵測出來
> （例：2025 卷的 q14/q17/q18/q19/q21/q22/q38/q39 都中過），`recut_figures.py` 用正確題帶重裁。
> 發佈閘門（面板與 CI 之外的本地檢查）已包含這一步，被切到就不准發佈。

轉寫檔格式（`data/transcripts/<paper>.json`，由 Gemini 產生）：

```json
{
  "exam": "2026-DSE-MATH-CP 2",
  "paperCode": null,
  "questions": [
    {
      "question_number": 1, "section": "A",
      "stem_text": "English wording, inline maths may stay as LaTeX",
      "stem_latex": "\\frac{(27x)^{5}}{(3x^{-2})^{4}}=",
      "figure": "若有圖表：描述座標軸、標籤、每個數據值",
      "options": { "A": "3^{2}x^{3}", "B": "...", "C": "...", "D": "..." },
      "notes": "印刷不清楚之處寫這裡"
    }
  ]
}
```

給 Gemini 的指令：*「只轉錄，不要解題。數學一律 LaTeX。四個選項一個都不能漏。有圖表請完整描述（軸標籤、每個數值）。看不清楚寫進 notes，不要猜。」*

---

## 4. 參考資料

### 4a. 顯示編號（`code`）
* 歷年試卷：`2025-p2` 第 3 題 → **`25-P2Q03`**
* 非歷年卷：`paperCode = MOCK-A` → **`MOCK-A-Q03`**（在轉寫檔或面板設定）
* 內部 `id`（`2025-p2-q03`）永遠不變；網站顯示用 `code`。

### 4b. `solutions.json` 條目格式
```json
"2025-p2-q07": {
  "answer": "B",
  "verify": "checked",
  "solution": {
    "steps": [ { "title": {"en":"…","zh":"…"}, "math": "…", "en": "…", "zh": "…", "highlight": ["…"] } ],
    "traps": [ { "opt": "C", "en": "…", "zh": "…" } ],
    "tip":   { "en": "…", "zh": "…" }
  }
}
```
* `steps` 3–5 步，網站每 0.9 秒揭示一步；`math` 是那一步的顯示公式（≤60 字元）。
* `traps` 指向真實干擾選項；`tip` 是可帶走的技巧。
* `alt`（選填）＝超出必修範圍的進階解法參考（坐標法／向量法），學生端摺疊顯示，**不作第一解法**。
* `en`/`zh` 內可用 `$...$` 寫行內數學。
* ⚠ **課程範圍**：角度一律用度（禁弧度）；幾何題主解法不用坐標／向量（見 House rules 11）。
  由 `& $py tools\syllabus_check.py` 把關。

批次寫入用：`python tools\merge_solutions.py --file data\ai\solutions_batchN.json`
（會驗證 id／answer／steps 中英齊備，不通過整批拒絕）。

### 4c. `releases.json` 條目格式
```json
{ "date": "2026-09-18", "batch": 3,
  "title": { "en": "Geometry warm-up", "zh": "幾何熱身" },
  "ids": ["2025-p2-q14", "2025-p2-q22", "2025-p2-q38"],
  "status": "published",
  "withdrawnIds": [],
  "notice": { "en": "Answer corrected: C → D", "zh": "答案已更正：C → D" },
  "history": [ { "at": "2026-09-20T10:12:00", "action": "withdraw", "scope": "question",
                 "id": "2025-p2-q22", "note": "選項轉寫有誤，待重掃", "by": "teacher" } ] }
```
`pick_batch.py` 會自動產生前四項（含日期接續、批次編號、標題）；後四項由面板「發布管理」維護。

| 欄位 | 意義 | 學生端效果 |
|---|---|---|
| `date` | 發放日 | 到這天才看得到（之前完全不存在） |
| `status` | `published`（預設）／`scheduled`／`withdrawn` | `withdrawn`＝整批回收，題目與解答下架，Archive 顯示「已收回」 |
| `withdrawnIds` | 單題收回 | 該題顯示「已收回」佔位，同批其餘照常 |
| `notice` | 更正公告 | 批次標頭顯示黃色提示 |
| `history` | 操作記錄（誰／何時／為何） | **不輸出到公開檔**（教師審計用） |

狀態與邊界由 `tools/release_model.py` 統一計算（`python tools\release_model.py` 可看現況）。

### 4d. 學習單元（LU1–LU20，0 = 初中數學）
| unit | name | 中文 |
|---|---|---|
| 0 | Junior Math | 初中數學（不屬 20 個高中單元） |
| 1 | Quadratic Equations in One Unknown | 一元二次方程 |
| 2 | Functions and Graphs | 函數與圖像 |
| 3 | Exponential and Logarithmic Functions | 指數與對數函數 |
| 4 | More about Polynomials | 多項式續論 |
| 5 | More about Equations | 方程續論 |
| 6 | Variations | 變分 |
| 7 | Arithmetic and Geometric Sequences | 等差等比數列 |
| 8 | Inequalities and Linear Programming | 不等式與線性規劃 |
| 9 | More about Graphs of Functions | 函數圖像續論 |
| 10 | Equations of Straight Lines | 直線方程 |
| 11 | Basic Properties of Circles | 圓的基本性質 |
| 12 | Loci | 軌跡 |
| 13 | Equations of Circles | 圓的方程 |
| 14 | More about Trigonometry | 三角學續論 |
| 15 | Permutations and Combinations | 排列與組合 |
| 16 | More about Probability | 概率續論 |
| 17 | Measures of Dispersion | 離差的度量 |
| 18 | Uses and Abuses of Statistics | 統計的應用與誤用 |
| 19 | Further Applications | 進一步應用 |
| 20 | Inquiry and Investigation | 探究與研究 |

修正在 `data/overrides.json`（**不要**改 `bank.json`）：
```json
{ "overrides": { "2025-p2-q35": { "unit": 19, "difficulty": 3, "timeSec": 150 } } }
```
目前難度分布偏難（易 3 / 中 17 / 難 25）；若覺得某題太深或太淺，用 overrides 調整即可。

### 4e. 獨立驗算（`tools/verify_answers.py`）
每題都要有一條「用另一條路徑算出答案」的驗算函式，並登錄在 `CHECKS`。
常用工具：`ev()`、`_num()`、`_root_or_num()`、`_roman_set()`／`_stmt_hits()`、`_solve3()`、
`_shoelace()`／`_dist()`／`_angle_at()`／`_similar()`。
驗算必須**唯一命中**解答的答案，否則不得標 `verify: "checked"`。

### 4f. AI 分類校正 round trip（選用）
```powershell
& $py tools\export_for_ai.py                 # → data/ai/classification_input.json
# 連同 prompts/gemini_classification.md 貼進 Gemini，存回 data/ai/classification.json
& $py tools\merge_classification.py --only-changed   # 先看 diff
& $py tools\merge_classification.py --apply          # 寫入 overrides.json
& $py tools\build_bank.py; & $py tools\make_site_data.py
```

---

## 5. House rules

1. **題目只英文，解答中英雙語。**
2. **不得編造題目內容**；轉寫可疑就改轉寫檔並重建，或標 `review` 列入目視確認。
3. `ocr`／轉寫原始紀錄（`notes`、`figure`）**永不刪除**。
4. **不要手改** `site/data/*.js`、`bank.json`（會被重建覆蓋）。
5. push 前必須跑 `site_check.js` + `smoke_test.js`，兩者都要過。
6. 發佈的批次必須**三道全綠**：`validate_bank.py` 0 錯誤、`verify_answers.py` 0 失敗、smoke 全過。
7. 不確定就停手：把問題寫進 `data/queue.json` 或告知 CodeBuddy，不要猜著上線。
8. **不刪資料，用狀態收回**：收回一律改狀態（`status`／`withdrawnIds`）並填原因；
   `history` 留痕、可恢復、可審計。改完按「重建並發佈」。
9. **公開檔不得含未發放內容**：`site_check.js` 會逐題核對，違反就不准發佈；
   `--all` 產生的 `build/preview` 永遠不可上線。
10. **止血優先於修正**：發現嚴重錯誤先「收回」（必要時走緊急通道），再慢慢修題／修答。
11. **題解必須在 DSE 必修課程內**（學生沒學過的方法，答案對也沒用）：
    * **角度一律用「度」**，禁止弧度（`rad`、`\frac{\pi}{3}`、`2\pi` 角度…），扇形題也用度制。
    * **幾何題的主解法**用追角／全等相似／面積比／直角三角形三角比，**不要一開始就建坐標系或用向量**。
    * 進階方法（坐標法／向量法）放選填欄位 `solution.alt`，學生端以摺疊的「進階解法（參考）」顯示。
    * 把關程式：`& $py tools\syllabus_check.py`（CI 與面板發佈流程都會跑，**0 錯誤**才可上線）。
12. **例外要留痕**：真的非用不可時，寫入 `data/syllabus_exceptions.json`（附原因與 `until` 日期），
    過期會自動恢復為錯誤 —— 技術債不會無聲留下。

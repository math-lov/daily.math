# 自學追上站 · 新增課題交接文件

> **用途**：帶這份文件到**新的 chat**，繼續做 WS05 之後的課題（或 AS 評估）。
> 上一輪已完成 ws01–ws04 的內容翻新（含 14 題自編過渡題），結構已獲老師確認「很好很滿意」→
> **不要改結構，照下面既有的 pattern 加內容就好。**
>
> 最後更新：2026-09-19 · 狀態：**全部改動未 commit**

---

## 0. 30 秒現況

| 項目 | 數字 |
|---|---|
| 已完成課題 | ws01（**兩節**）、ws02、ws03、ws04 |
| MC 練習 | 76 題 |
| 長題示範 | 10 題 |
| 概念卡 | 25 張 |
| SVG 示意圖 | 42 幅 |
| 題解 | 86 份（每題一份） |
| 自編過渡題 | **14 題**（ws01 ×2 暖身、ws02 ×4、ws03 ×4、ws04 ×4） |
| 未 commit 檔案 | 23 個（`git --no-pager status --short`） |

* 每日三題站（`site/`、`data/bank.json`、`data/solutions.json`）**這一輪完全沒有動**。
* 自學站網址：`https://math-lov.github.io/daily.math/learn/`（未發佈前仍是舊版）。

---

## 1. 新 chat 開場先讀這幾份（依序）

1. **`learn/README.md`** —— 自學站的資料流、三支檢查器、面板、硬規則（契約層）
2. **本文件** —— 現況、pattern、頁碼對照、踩過的坑
3. `data/learn/lessons.json` —— 課程編排（新增課題要改這裡）
4. `data/learn/bank.json` + `data/learn/solutions.json` + `data/learn/concepts.json`
   → **以 ws04 做範本**（最新、有圖、有過渡題、欄位最齊）
5. `tools/make_learn_figures.py` —— SVG 圖產生器（有 `Frame` 等方法可直接用）
6. `tools/learn_smoke_test.js` 的「課題 3、4」段 —— **硬編碼頁碼在這裡**

---

## 2. 一課的固定節奏（不要改）

```
① 概念卡（2–6 張）→ ② 長題示範（0–3 題）→ ③ MC 每頁 3 題
```

* 一堂課如果**概念卡 ≥ 7 張**或 **MC ≥ 18 題** → **拆成兩節**（範本：`ws01-1` 基礎 / `ws01-2` 進階）。
* 多節課題的分頁列會**自動**顯示「第 N 節」分隔，題目列自動顯示「第 2 節 · 第 3 / 11 頁」
  （`learn/assets/app.js` 已處理，**不用**在資料層設定任何東西）。
* MC 盡量每頁 3 題；除不盡才用 2 題（如 ws03 最後兩頁、ws04 最後兩頁）。
* 練習頁順序＝**過渡題在最前**（見第 4 節）。

---

## 3. 新增一課的步驟（照抄）

### 3.1 題目 → `data/learn/bank.json`

```jsonc
{
 "id": "eph-ws05-q01",              // ⚠️ 必須 eph-<topic>-…（見第 5 節硬規則 5）
 "type": "mc",                       // mc 或 long
 "topic": "ws05",
 "unit": 0,                          // 見 WORKBUDDY-DAILY.md §4d 單元表
 "subtopic": "factorization",
 "difficulty": 1,                    // 1–3
 "code": "WS5-Q01",                  // 學生看到的編號
 "source": "EPH WS05 Q1 · [HKDSE 20xx Paper 2 Qn]",   // 自編題要寫「（自編）」
 "stem": { "text": "English wording, inline maths in $...$" },
 "options": { "A": "$...$", "B": "...", "C": "...", "D": "..." },  // long 題改為 "parts": [{label,text,marks}]
 "review": null                      // 非 null 的題目**不會出站**
}
```

### 3.2 題解 → `data/learn/solutions.json`（key ＝ 題目 id）

```jsonc
"eph-ws05-q01": {
 "answer": "C",                      // mc 必填；long 為 null
 "verify": "checked",
 "topic": "ws05",
 "source": "…（與 bank 一致）",
 "solution": {
  "steps": [{
    "title": { "zh": "第 1 步 · …", "en": "Step 1 · …" },   // title 可含 $...$
    "math": "3a=7-2b",                                      // 該步顯示公式（無 $）
    "zh": "中文詳解，≥10 字，要解釋『為什麼』",              // ⚠️ 檢查器會擋太短的
    "en": "English one-liner",
    "marking": "(1A)",                                     // 選填：DSE 步驟分
    "highlight": ["a=\\frac{7-2b}{3}"],                    // 選填：答案高亮 chips（KaTeX）
    "link": {                                              // 選填：(a)→(b)「整塊打包替換」
      "from": "(a)",
      "label": "認出 (a) 的整塊，加括號",                   // 選填，預設「用 (a) 的答案」
      "math": "-\\big(16c^{2}-8c+1\\big)"
    }
  }],
  "traps": [{ "opt": "B", "zh": "…", "en": "…" }],          // 指向真實干擾選項，不可指正確答案
  "tip": { "zh": "帶得走的技巧", "en": "…" },
  "alt": [{ "name": {"zh":"坐標法"}, "zh": "…" }]           // 選填：超出必修範圍的進階解法（摺疊顯示）
 }
}
```

### 3.3 概念卡 → `data/learn/concepts.json`

```jsonc
{
 "id": "ws05-c1", "topic": "ws05",
 "title": { "zh": "…", "en": "…" },
 "body": { "zh": "正文…\n{{math:0}}\n{{math:1}} 可插在文字中間（不寫標記＝全部排在正文最後）" },
 "math": ["a^{2}-b^{2}\\equiv(a+b)(a-b)", "…"],   // 純 LaTeX，不加 $
 "vocab": [{ "en": "difference of two squares", "zh": "平方差" }],
 "warn": { "zh": "常見錯誤（顯示成橙框）" }
}
```

* **`{{math:N}}` 數量要等於 `math` 陣列長度**（否則 `learn_check` S7 出警告）。
* vocab 的中文欄**不可以**以英文字開頭（`learn_check` S8 會擋）——這是「english 中文」被空格拆裂的徵狀。

### 3.4 編排 → `data/learn/lessons.json`

```jsonc
{ "id": "ws05", "stage": 1, "unit": 0, "subtopic": "…",
  "source": "EPH All-Round L5 · Worksheet 5",
  "name": { "zh": "…", "en": "…" },
  "intro": { "zh": "…" },
  "lessons": [{
    "id": "ws05-1", "title": { "zh": "…", "en": "…" },
    "conceptCards": ["ws05-c1", "ws05-c2"],
    "longQuestionIds": ["eph-ws05-ex01"],
    "mcPages": [["eph-ws05-w01","eph-ws05-w02","eph-ws05-w03"], ["eph-ws05-q01","eph-ws05-q02","eph-ws05-q03"]]
  }]
}
```

### 3.5 圖（如需要）→ `tools/make_learn_figures.py`

新增一個函式（用 `Frame` / `point` / `seg` / `arrow` / `arc` / `mirror_h` / `mirror_v` / `circle` / `text`），
再在 `FIGURES` 加一行：

```python
"eph-ws05-q01": [(my_fig_fn, "圖的說明（caption，會顯示在圖下面）")],

# 長題示範要「逐步出圖」：第三個元素＝題解第幾步（1 起算）
"eph-ws05-ex01": [(fn_step1, "第 1 步：…", 1), (fn_step2, "第 2 步：…", 2)],
```

* 畫完一定要跑 `learn_figure_check.py`（自動驗標籤出界／互疊／壓點）。
* 圖的慣例：**實心點＝原本**、**空心點＝影像**、虛線＝連線／路徑、粗線＝鏡軸、弧形箭嘴＝旋轉方向。
* **MC 題的圖會在「作答後」才出**（防劇透）；不要放到題幹下面。

### 3.6 跑檢查

```powershell
cd "C:\Code Buddy\HKDSE"
$py   = "C:\Users\t073\.workbuddy\binaries\python\envs\default\Scripts\python.exe"
$node = "C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe"

& $py   tools\make_learn_figures.py     # 有加圖才需要
& $py   tools\make_learn_data.py        # data/learn/*.json → learn/data/*.js
& $py   tools\learn_check.py            # 結構／契約／覆核旗標／度制／禁坐標向量／vocab → 0 錯誤
& $py   tools\learn_figure_check.py     # 圖形自動體檢
& $node tools\learn_katex_check.js      # 真 KaTeX 逐條解析所有數學式
& $node tools\learn_smoke_test.js       # 學生全流程（必須 all passed）
```

改了面板／編輯器才需要：`& $py tools\learn_panel_test.py`

### 3.7 發佈

雙擊 `start-learn-panel.bat` → **發佈** 分頁 → 「重新生成 + 檢查」→「一鍵發佈」（等於上面幾步 + git commit/push）。
或手動：`git add -A; git commit -m "Learn: add WS05"; git push`（GitHub Pages 約 1 分鐘）。

---

## 4. 「過渡題（Bridging）」已成為本專案的標準做法

**目的**：弱生一開始就撞上 DSE 真題難度 → 放棄。所以在每個課題的**第一個練習頁**放 4 題極簡階梯題。

| 規格 | 內容 |
|---|---|
| 數量 | 4 題（ws01 是 2 題暖身） |
| 難度 | 全部 `difficulty: 1`（少數 2），Level 1 → Level 4 由淺入深 |
| 題解 | 2–4 步；`traps` ≥ 2 個（指向真實干擾項）；一定有 `tip` |
| 圖 | ws04 起每題配一幅「單一動作」圖；建議之後的課都比照 |
| 放置 | `mcPages` 最前面（通常第 1 頁放 3 題、第 2 頁放 1 題＋真題 2 題） |

**命名（已統一，勿改）**

| 欄位 | 值 |
|---|---|
| `id` | `eph-wsNN-w01` … `eph-wsNN-w04` |
| `code` | `WSNN-W01` … |
| `source` | `WSNN 過渡題（自編）· Level N <主題>` |
| `subtopic` | 與該課題一致 |

**⚠️ 自編題必須在 `source` 標明「（自編）** —— 不可假稱出自 EPH／HKDSE（House rule 2：不得編造題目內容）。

**已完成的 14 題**

| 課題 | 過渡題 | 覆蓋的斷層 |
|---|---|---|
| ws01 | `eph-ws01-w01` $3x^2-6x$、`-w02` $x^2-16$ | 提公因式、平方差（起步） |
| ws02 | `-w01` 加減消去（相反數）、`-w02` 代入法整塊代入、`-w03` 只乘一條方程、`-w04` 文字題設式 | 消去／代入／列式 |
| ws03 | `-w01` 兩步換主項、`-w02` 目標在兩側抽公因式、`-w03` 比較係數、`-w04` 代特殊值 | 移項／抽因式／≡ |
| ws04 | `-w01` 平移、`-w02` 對軸反射、`-w03` 逆 90°、`-w04` 180° | 四種單一變換 |

`learn_smoke_test.js` 已鎖：**ws02/ws03/ws04 的第一個練習頁必須全部是 `-w0\d` 題**（新增課題時要不要加同款斷言可自行決定，但**不要**令現有斷言失敗）。

---

## 5. 硬規則（違反會被閘門擋，或被前端靜靜弄壞）

1. **角度一律用「度」**，禁弧度（`rad`、`\frac{\pi}{3}`…）。`learn_check` R1 會擋。
2. **幾何題主解法不得用坐標／向量**；例外單元：`unit ∈ {2, 8, 9, 10, 12, 13}`（本身是坐標幾何課）。
   進階解法放 `solution.alt`（學生端摺疊顯示）。
3. **題目只英文**（stem／options／parts）；**解答 zh 必填且 ≥10 字**（`learn_check` S3）。
4. **文字欄位不可有裸 `$`**（貨幣寫 `\$53`）。`learn_check` S6 會擋。
5. **`id` 必須 `eph-<topic>-…`**（前端 `belongsTo()` 只認這個 regex）。
   用 `bridge-ws02-q01` 之類的 id → **進度環、弱點升級庫分組、孤兒題檢查全部失效**。
6. **選項寫法統一**：數學用 `"$2$"`、金錢用 `"\\$24"`；不要寫裸字串（`"2"`）——不然渲染路徑不一致。
7. **前端不支援 Markdown**：`**粗體**` 會原樣顯示 `**`。要強調就用中文標點或句子結構。
8. **生成檔不可手改**：`learn/data/*.js`、`data/learn/figures.json`（下次生成會被覆蓋）。
   要改內容一律改 `data/learn/*.json`。
9. **`highlight`／`math` 是 KaTeX 欄位**：不要放中文長句、金額、Markdown。
10. **`review` 非 null 的題目不會出站**（`make_learn_data.py` 剔除、`learn_check` 報錯）。

---

## 6. ⚠️ 改動頁數／順序時，一定要同步改 smoke test

`tools/learn_smoke_test.js` 內**硬編碼**了頁碼與頁數，改 `lessons.json` 的 `mcPages` 後
一定要更新，否則 `all passed` 會變 FAIL。

### 6.1 目前的頁碼對照表

| 課題 | 總頁數 | 結構 | smoke test 內引用的 `p=` |
|---|---|---|---|
| ws01 | **11** | 0 學習① · 1–3 練習① · 4 學習② · 5 示範 EX1 · 6 示範 EX2 · 7–10 練習② | `p=0`（卡片）、`p=1`（練習①，暖身）、`p=4`（學習②）、`p=5`（EX1 示範） |
| ws02 | **9** | 0 學習 · 1–2 示範 · 3–8 練習（6 頁） | `p=0`、`p=3`（過渡題頁）、`p=4`（第 2 練習頁）、`p=5`（q03）、`p=8`（q13 貨幣） |
| ws03 | **12** | 0 學習 · 1–3 示範 · 4–11 練習（8 頁） | `p=0`、`p=4`（過渡題頁） |
| ws04 | **10** | 0 學習 · 1–3 示範 · 4–9 練習（6 頁） | `p=0`、`p=4`（過渡題頁）、`p=6`（q03/q04/q05 出圖）、`p=1/2/3`（EX1–3 逐步出圖） |

要改的地方（搜尋 `pagenav .pg").length ===` 與 `?t=ws0X&p=`）：

```js
ok(t02.$$("#pagenav .pg").length === 9,  "ws02 = 1 card page + 2 demos + 6 MC pages …");
ok(t03.$$("#pagenav .pg").length === 12, "ws03 = 1 card page + 3 demos + 8 MC pages …");
ok(t04.$$("#pagenav .pg").length === 10, "ws04 = 1 card page + 3 demos + 6 MC pages …");
```

### 6.2 其他「題數／張數」斷言

* `ws01 shows 7 figures: card 1 has two` —— ws04 概念卡圖數（6 張卡 / 7 幅）。
* MC 出圖頁（`p=6`）斷言 `(1, 1, 2)`：兩步題（q05）出 2 幅圖。
* 每個課題頁都斷言「作答前 0 幅圖、作答後每題都有圖」→ **有圖的課題，每題都要有圖**，否則 FAIL。

---

## 7. 前端已有功能（不要重複做，也不要弄壞）

| 功能 | 位置 | 說明 |
|---|---|---|
| 常駐「題目字眼」提示 | `.cmd-hints`（app.js `appendCommandHints`） | 每頁最頂：Factorize completely／Hence／Show that／Write down |
| 完成一頁的微成就 | `#page-done`（`refreshPageDone`） | 完成該頁 → 「✓ 這一頁 3 題完成了　本課完成 X%」 |
| 答錯的重新框架 | `.trap-head`、`.answer-line.miss` | 「差一點 —— 掉進了出卷人的陷阱」＋仍然顯示正確答案 |
| 心理安全卡 | `.safety-note`（index.html） | 「這裡沒有老師打分，也沒有排名…」＋通往 `start.html` 的按鈕 |
| 前言／使用指南 | `learn/start.html`（純靜態，不載入 app.js） | 顏色框（`.pre-block` / `.pre-ok` / `.pre-go` / `.pre-help`）＋編號徽章 `.pre-step`；含可複製的 AI 提問範本（`#prompt-text`、`#copy-prompt`）。**不要**把它做成學習卡（會干擾進度計算） |
| 練習頁求助連結 | `.help-link`（app.js） | 每個練習頁底部連去 `start.html` |
| 弱點升級庫 | `wrong.html` | **前稱「錯題本」**，全站已改名 |
| 多節課題分節標籤 | `.pagenav .pg-lesson` | 自動插入「第 N 節」；題目列顯示「第 N 節 · 第 X / Y 頁」 |
| ⚠️「完成」標記 | app.js `navPageBtn()` | **一定要用 `.pg` 清單索引**，不可用 `nav.children[i]`（分節標籤會令索引錯位） |
| 長題示範逐步出圖 | `figures.json` 的 `step` | 圖跟題解第 N 步出場 |
| (a)→(b) 打包替換高亮 | `solution.steps[].link` | 橙色「用 (a) 的答案」區塊 |

### 檢查器的兩個「已改好」行為（不要改回去）

* `learn_check.py` **S8**：vocab 的中文欄若以英文小寫字開頭 → **錯誤**（防止 `en="cross"`、`zh="method 十字相乘法"`）。
* `learn_katex_check.js`：**沒有 `$` 又沒有 LaTeX 特徵（`\ ^ _ { }`）的欄位視為純文字略過**
  （否則中文解說／①② 會被丟進 KaTeX 噴一堆 `No character metrics` 警告）。
  `math`／`highlight` 仍然全部強制解析，所以把關沒有放鬆。
* `tools/learn_panel.py` 的英文生字輸入格式已改為 **`english = 中文`**（等號分隔）——
  **不要改回空格**，否則 `cross method` 又會被拆成兩個欄位。

---

## 8. 建議下一步

1. **WS05–WS24**（其餘 EPH 工作紙）：每課照第 3 節做，加第 4 節的 4 題過渡題。
2. **AS1–AS8** 評估：`lessons.json` 的 `assessments` 目前是 **空陣列**，
   如果要實作要先設計結構（同 `lessons` 類似：概念卡／示範／MC 頁），並在 `learn/data/*.js` 與前端加對應頁面。
3. **可選**：ws02／ws03 目前沒有圖（ws01 也沒有），可以補圖令全站一致。
4. 每課做完可獨立發佈，或全部做完一次過發佈。

---

## 9. 已知事項／技術債（不急，但要知道）

* **舊學生的進度百分比會回落**：這輪加了過渡題，分母變了
  （ws01 18→20 題、ws02 14→18、ws03 18→22、ws04 12→16）。
* 本輪所有改動**未 commit**（23 個檔案）；`site/`（每日三題站）完全未動。
* `learn_check.py` 的 S7 概念卡檢查寫在 `for q in questions:` 迴圈內（會重複執行同一批卡片檢查）。
  **無害、未修**；如要整理請連測試一齊改。
* `learn/data/*.js` 是生成檔，屬 git 追蹤（部署時整份 `learn/` 打包上 Pages），
  所以**每次改完資料都要跑 `make_learn_data.py` 再 commit**。
* CI（`.github/workflows/deploy.yml`）的 learn 四道檢查是 `continue-on-error: true`
  （只警告、不擋每日站）→ **真正的防線是本機這五道檢查**，一定要跑齊才發佈。

---

## 10. 新 chat 開場白（可直接貼）

```
接手「自學追上站」（C:\Code Buddy\HKDSE\learn\）的內容開發。

先讀，然後按它開工：
1. docs/LEARN-ADD-TOPICS-HANDOFF.md   ← 交接文件（現況、pattern、頁碼對照、硬規則）
2. learn/README.md                     ← 自學站契約（資料流、檢查器、面板）
3. data/learn/lessons.json             ← 課程編排

這次要做：<課號，例如 WS05>（來源：inbox_learn/ 的 EPH 工作紙）
做法：照 docs/LEARN-ADD-TOPICS-HANDOFF.md 第 3 節的步驟，
     並加第 4 節的 4 題過渡題（第一個練習頁）。
     以 ws04 為範本（有圖、有過渡題、欄位最齊）。

完成後跑齊五道檢查（handoff 第 3.6 節），全綠才回報。
如果改動了 lessons.json 的頁數／順序，記得同步更新 tools/learn_smoke_test.js 的硬編碼頁碼
（對照表在 handoff 第 6.1 節）。

⚠️ 不要改動既有結構（頁面節奏、分頁列、已有功能），也不要改 site/（每日三題站）。
```

---

## 11. 快速自我檢查（每課完成前）

- [ ] `make_learn_data.py` 跑過，`learn/data/topic-<id>.js` 已更新
- [ ] `learn_check.py` **0 錯誤 0 警告**
- [ ] `learn_katex_check.js` **all LaTeX renders cleanly**（無 stderr 警告）
- [ ] `learn_smoke_test.js` **all learn smoke tests passed**
- [ ] `learn_figure_check.py` **全部合格**（如該課有圖）
- [ ] 第一個練習頁是過渡題、題目難度由淺入深
- [ ] 每題 `zh` 解釋都寫給弱生看（不是只寫算式）
- [ ] 抽 1 題在瀏覽器（面板 → 本機預覽）實際做一次：作答 → 看題解 → 看圖

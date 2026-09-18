# 新網站交接文件 · 自學追上站（暫稱 Learn Site）

> 用途：帶這份文件到**新的 chat** 開發第二個網站。
> 本文件由每日三題專案（2026-09-18）整理，所有事實已核對過，不需再回頭翻舊對話。

---

## 0. 兩個網站的定位（不要混在一起）

| | 每日三題（現有 `site/`） | 自學追上站（新站） |
|---|---|---|
| 目的 | 鼓勵同學**每日做數** | 讓**能力不足的同學自學追上** |
| 節奏 | 每日 3 題，逐步發放 | 自訂步調，可重做、可跳過 |
| 編排 | 按發放批次（混合課題） | 按**課題（unit）＋難度**，不按題號 |
| 壓力 | 有連續天數、進度統計 | **無計時、無連續天數**，低壓力 |
| 是否改動 | **明確不改現有設計** | 全新資料夾、全新前端 |

---

## 1. 專案結構（reuse 什麼）

```
C:\Code Buddy\HKDSE\
├─ data\                ← 編輯層，唯一真相來源（題目／解答／排程）
│   ├─ bank.json            90 題（2025-p2、2026-p2 各 45）
│   ├─ solutions.json       90 題全有解答，全部 verify="checked"
│   ├─ releases.json        排程＋狀態（status / withdrawnIds / notice / history）
│   ├─ transcripts\         原始轉寫（禁止手改）
│   └─ ai\                  分批產生的解答檔（solutions_batchN.json）
├─ tools\               ← 全部流程腳本（新站請新增、不要改舊的）
├─ site\                ← 每日三題網站（產生出來，禁止手改）
├─ prompts\             ← solver_playbook.md（解題規範）、gemini_classification.md
├─ docs\                ← 本文件
├─ WORKBUDDY-DAILY.md   ← 每日流程手冊
└─ images\questions\    ← 45+45 張題目圖（裁切後）
```

---

## 2. 資料契約（最重要）

### `data/bank.json` 的題目欄位

```jsonc
{
  "id": "2025-p2-q01",        // 唯一 id：<paper>-qNN
  "paper": "2025-p2",
  "no": 1,                     // 題號 1..45
  "code": "25-P2Q01",          // 顯示用編號
  "section": "A",
  "images": { "question": "...", "page": "..." },
  "topic": { "unit": 3, "en": "Exponential and Logarithmic Functions",
             "zh": "指數與對數函數" },
  "difficulty": 1,             // 1=易 2=中 3=難
  "timeSec": 90,
  "stem":  { "text": "...", "html": "...", "latex": "..." },
  "figure": "圖表的文字描述（若有）",
  "notes": "教師用的轉寫備註（不公開）",
  "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
  "transcribedBy": "…", "editedBy": "…", "classifiedBy": "…"
}
```

* `stem.text`：原始文字（可含 `$...$` 行內數學）
* `stem.html`：**已處理好的 HTML**（空白／換行／`$...$` 都處理過）→ **前端直接用它**
* `stem.latex`：單獨的顯示公式（僅當沒有 `stem.html` 時才用）
* 現有 unit 編號：0(初中)、1–17（含 2 函數圖像、3 指對數、8 線性規劃、10 直線方程、11 圓的基本性質、12 軌跡、13 圓方程、14 進階三角、15 排列組合、16 概率、17 離差）

### `data/solutions.json`

```jsonc
"2025-p2-q01": {
  "answer": "A",
  "verify": "checked",          // 或 "checked-manual"（需目視確認）
  "solution": {
    "steps": [ { "title": {"en":"…","zh":"…"}, "math": "…",
                 "en":"…", "zh":"…", "highlight": ["…"] } ],   // 3–5 步
    "traps": [ { "opt": "C", "en": "…", "zh": "…" } ],         // 干擾選項為何錯
    "tip":   { "en": "…", "zh": "…" },                          // 可帶走的技巧
    "alt":   [ { "name": {"en":"…","zh":"…"}, "en":"…", "zh":"…" } ]  // 選填：進階解法
  }
}
```

**現況**：90/90 題有解答，`verify_answers.py` 90/90 全過 ✓

---

## 3. 可直接重用的工具（不要重寫）

| 工具 | 用途 | 新站怎麼用 |
|---|---|---|
| `tools/build_bank.py` | 轉寫 → `bank.json`（含 `mathify()`） | 沿用；新站讀它的輸出 |
| `tools/merge_solutions.py` | 把批次解答檔合併進 `solutions.json`（會驗證格式） | 沿用 |
| `tools/verify_answers.py` | 每題「獨立驗算」，89+1 個驗算函式 | 沿用（新題也要登記） |
| `tools/syllabus_check.py` | 課程合規（度制、禁坐標/向量主解法） | **新站也要跑** |
| `tools/katex_check.js` | 真 KaTeX 逐條解析所有數學式 | 複製改寫成新站版 |
| `tools/validate_bank.py` | 題庫結構檢查 | 沿用 |
| `tools/make_site_data.py` | 產生 `site/data/*.js` + 複製題圖 | **仿它寫 `make_learn_data.py`** |
| `tools/panel_server.py` | 教師工作台（8787） | 若要加開關，改這裡 |

前端技術：**純靜態 HTML + 原生 JS + 自托管 KaTeX（`site/vendor/katex`）+ localStorage**，沒有框架、沒有 build step ✓

---

## 4. 硬規則（新站也要遵守）

1. **角度一律用「度」** —— 禁止弧度（`rad`、$\frac{\pi}{3}$ 之類），扇形題也用度制。
2. **主解法必須在必修課程內**：追角、全等／相似、面積比、直角三角形三角比；**不要用坐標法或向量法當第一解法**（進階方法放 `solution.alt`，摺疊顯示）。
   → 由 `tools/syllabus_check.py` 把關，**0 錯誤**才算完成。
3. 答案必須由**獨立驗算**程式驗證（`verify_answers.py` 唯一命中），不可只靠人工推導。
4. **禁止手改**：`data/transcripts/*`、`data/releases.json`、`site/**`（產生出來的）。
5. **不改動現有每日三題網站**的設計與檔案（本次明確要求）。
6. 教師專用欄位（`notes`、`history`）不進公開檔（仿 `make_site_data.py` 的 `strip_teacher_only()`）。
7. 發佈權在老師手上（面板「一鍵發佈」）；自動化任務不做 commit/push。

---

## 5. 新站建議的設計（給新 chat 的起點）

**核心：把現有解答「拆解成學習階梯」，不重新出題。**

1. **課題導覽**（依 `topic.unit` 分組）：例如「單元 3 · 指數與對數函數」，先看得出自己哪裡不會。
2. **概念卡（新內容，目前沒有）**：每個 unit 的「先學會」2–5 張卡（定義／公式／常見錯誤）。
   → 新增 `data/concepts.json`（可由 AI 依 unit 生成，雙語），這是新站唯一需要新增的內容層。
3. **例題逐步揭示**：用現有 `solution.steps` 當階梯提示 —— 「提示 1 → 提示 2 → … → 完整解答」。
   **不用另寫內容**（steps 已有 3–5 步，中英雙語 ✓）。
4. **錯題解說**：用現有 `solution.traps`（每個選項「學生為何選它、錯在哪」）✓ 這是現成寶藏。
5. **排序**：同一 unit 內依 `difficulty` 1→3；**不按題號**。
6. **低壓力**：無計時、無連續天數、可重做、可「重置本單元進度」。
7. **雙語切換**：`steps / traps / tip / alt` 都已中英雙語 ✓。
8. **進度儲存**：localStorage，**key 要與每日站分開**（例如 `dse-learn:v1`），避免互相干擾。
9. **重做機制**：答錯的題自動進「錯題本」，隔天可再練一次。

---

## 6. 邊界政策（務必先決定）

新站若整卷公開，等於一次揭露 90 題 + 全部解答 ✗ —— 會與每日三題的「逐步發放」衝突。

| 方案 | 做法 | 建議 |
|---|---|---|
| **(a) 先用 2025 卷** | 2025 卷 45 題**已全數排程發放**（9/16–9/30），2026 卷尚未排程 | ✅ 起步最安全，立刻可用 |
| (b) 不公開／設密碼 | 只在校內用或加簡單密碼 | 若給特定班級 |
| (c) 面板加開關 | `papers[].mode: "revision"` 由老師決定何時整卷開放 | 彈性最大，但要動面板 |

**建議 (a)**：新站先吃 2025 卷（45 題、已發放 ✓），2026 卷等發放完再一次開放。

---

## 7. 踩過的坑（讀這節可省半天）

1. **選項有三種寫法**，前端要三路判別（見 `site/assets/app.js` 的 `isProse()`）：
   * 純 LaTeX（如 `\frac{-8k}{(k+2)(5k-6)}`）→ `katex.render` 整串渲染
   * 含 `$...$` 的文字（如 `$x=-s$ or $x=-t$`）→ `renderMathInElement` 行內渲染（元素要有 `data-tex-inline`）
   * **純文字**（如 `230.0 (correct to 4 significant figures).`）→ 原樣顯示（否則 KaTeX 會吃掉空格、單字變斜體 ✗）
2. **外圍 `$...$` 要剝掉**（`build_bank.py` 的 `strip_math_delims`），但**混合內容不可剝**（`$x=-s$ or $x=-t$` 剝掉外圍會留下奇數個 `$` ✗）。
3. **錢幣符號**：文字欄位裡的裸 `$` 會被當數學定界符 ✗ → 寫純數字（46 422）或轉義 `$\$46\,422$`。
4. **`\text{ cm}` 不能被空白切斷**：`mathify()` 的斷詞是「大括號感知」的（否則出現 `$12\pi\text{$ cm}` 這種壞 LaTeX）。
5. **行內數學渲染機制**：`data-tex` 屬性 → `rerenderAll()` 用 `katex.render`；`data-tex-inline` 屬性 → `renderMathInElement`。KaTeX 以 `defer` 載入，晚到時靠 `rerenderAll()` 補排。
6. **快取戳**：`window.__V = 每小時變` 的字串，附加在 data/*.js 網址後（GitHub Pages 靜態檔 `max-age=600`）。
7. **syllabus_check 的假警報**：`origin`、`x-coordinate`、`without coordinates` 是一般用語，不是「用坐標法」；檢查器已加詞邊界與「題目本身即坐標題則跳過」的例外。
8. **驗算器自己也會錯**（本次實例：掃描時採樣點正好落在根上會漏數）→ 設計驗算時務必走**另一條路徑**。
9. **KaTeX 自托管**於 `site/vendor/katex`，不要改用 CDN（離線／學校網絡也要能用）。

---

## 8. 新 chat 的開場白（可直接貼）

```
我要在同一個 repo（C:\Code Buddy\HKDSE）開發第二個網站：給能力不足的同學自學追上用。
請先讀這份交接文件：docs/NEW-SITE-HANDOFF.md
再讀：prompts/solver_playbook.md 與 WORKBUDDY-DAILY.md

重點要求：
1. 不要改動現有的每日三題網站（site/）與它的設計。
2. 共用同一份 data/（bank.json、solutions.json），不要複製題庫。
3. 先從 2025 卷（45 題，已全數發放）做起；邊界政策照交接文件第 6 節的方案 (a)。
4. 呈現方式：按課題（unit）＋難度編排，逐步提示、錯題解說、無計時、可重做。
5. 新資料夾建議 learn/（前端）＋ tools/make_learn_data.py（產生器）。
6. 所有解答必須符合 DSE 必修範圍（度制、主解法不用坐標／向量），並跑 syllabus_check.py。

第一步：先跟我確認資料邊界與頁面結構（給我看 wireframe 文字版），確認後才動手寫程式。
```

---

## 9. 建議里程碑

1. 讀本文件 + `prompts/solver_playbook.md` + `WORKBUDDY-DAILY.md`
2. 確認邊界政策（第 6 節）與資料夾命名（`learn/`）
3. 寫 `tools/make_learn_data.py`（讀 `data/` → 產生 `learn/data/*.js` + 複製題圖 + 去掉教師欄位）
4. 寫 `data/concepts.json`（每單元概念卡，雙語）—— 新站唯一的新內容
5. 前端：課題導覽 → 概念卡 → 逐步揭示例題 → 練習 → 錯題本
6. 檢查器：改寫 `katex_check.js`、新寫 `smoke_test`（分頁／揭示／作答流程）
7. 文件：`learn/README.md` 或更新 `WORKBUDDY-DAILY.md`

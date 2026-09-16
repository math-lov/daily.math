# Work Buddy · Daily Three runbook

Student-facing site: **https://tkchung907.github.io/dse-daily/**
Repo: `tkchung907/dse-daily` (local: `C:\Code Buddy\HKDSE`)

---

## 0. Roles & files

| File | Owner | Meaning |
|---|---|---|
| `data/transcripts/*.json` | AI vision (you / Gemini) | raw transcription of one paper → **never hand-edit** |
| `data/bank.json` | generated | question bank (topics, difficulty, time) — rebuilt by script |
| `data/overrides.json` | you | manually fix topic / difficulty / time for specific ids |
| **`data/solutions.json`** | **you (daily)** | answer + bilingual worked solution — the editor-owned file |
| **`data/releases.json`** | **you (daily)** | which 3 questions go out on which date |
| `site/` | generated | the website (data files are built from `data/`) |
| `images/questions/<paper>-qNN.png` | cut tool | one image per question |

Rule of thumb: **generated files can be rebuilt at any time; never put editorial content there.**

---

## 1. Daily routine (about 20 minutes)

```powershell
cd "C:\Code Buddy\HKDSE"
$py = "C:\Users\t073\.workbuddy\binaries\python\envs\default\Scripts\python.exe"
$node = "C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe"
& $py tools\validate_bank.py      # shows how many ready-to-publish questions you have
```

1. **Pick 3 questions** — ideally 1 easy / 1 medium / 1 hard, different topics. Use the pool printed by the validator (questions that already have a solution).
2. **Solve them** and write the solution into `data/solutions.json` (schema in §2). Verify the maths — the answer must be one of the four printed options.
3. **Solve the maths first, then write both languages.** English first (exam language), then Chinese (explanation language).
4. **Schedule the batch** in `data/releases.json` (schema in §3).
5. **Rebuild + check + publish:**

```powershell
& $py tools\make_site_data.py      # data/*.json   -> site/data/*.js
& $node tools\site_check.js        # data integrity + JS syntax
& $node tools\smoke_test.js        # full student flow in a headless browser
git add -A
git commit -m "Batch N: <topics>"
git push
```
CI re-runs `site_check.js` before publishing, so a broken data file never reaches students.

---

## 2. `data/solutions.json` entry

```json
"2025-p2-q07": {
  "answer": "B",                      // must be A / B / C / D
  "verify": "checked",                // "checked" once the maths is verified
  "solution": {
    "steps": [
      {
        "title": { "en": "Step 1 · ...", "zh": "第 1 步 · ..." },
        "math": "4y+1 < 5y-3 \\le 8y-9",   // KaTeX; site renders it
        "en": "English explanation of this step.",
        "zh": "中文解釋這一步。",
        "highlight": ["y \\ge 2"]          // the key results of this step (rendered as chips)
      }
    ],
    "traps": [
      { "opt": "C", "en": "why a student picks this and what went wrong",
                    "zh": "學生為何會選這個、錯在哪裡" }
    ],
    "tip": { "en": "one-line takeaway", "zh": "一句話技巧" }
  }
}
```

Guidelines that make the animation work well:

* **3–5 steps.** Each step = one idea. The site reveals them one by one (~0.9 s apart) with an optional replay.
* `math` is the formula for that step (display maths). Keep it under ~60 characters so it does not scroll on a phone.
* `highlight` marks the *result* of the step: the exponent, the sign, the final value — this is what students' eyes should land on.
* `traps` are the heart of the product: point at the actual distractor options printed in the paper and explain the mistake that leads there. One line each, both languages.
* `tip` must be reusable advice, not a restatement of the answer.

---

## 3. `data/releases.json` entry

```json
{
  "date": "2026-09-18",
  "batch": 3,
  "title": { "en": "Geometry warm-up", "zh": "幾何熱身" },
  "ids": ["2025-p2-q14", "2025-p2-q22", "2025-p2-q38"]
}
```

* One entry per day, `date` ascending, 3 ids.
* Mixed difficulty (the validator warns if all three share a level).
* Students see **today's** batch by default; everything earlier lives in the archive.

---

## 4. Adding a new paper (one-off, ~30 min)

1. **Cut the images** (PDF must be ≥250 DPI, otherwise the tool refuses and asks for a rescan):
```powershell
& $py tools\cut_questions.py --pdf ".\2026 paper 2 eng.pdf" --paper 2026-p2
```
   → writes `images/questions/2026-p2-qNN.png` + `data/cut_index.json` (question numbers, crop boxes).
   If the images were produced some other way (e.g. already cropped scans), use:
```powershell
& $py tools\import_figures.py --paper 2026-p2 --src figures
```
2. **Transcribe** each question with a vision model (Gemini etc.) and save as `data/transcripts/2026-p2.json` — one file per paper, filename = paper id:
```json
{
  "exam": "2026-DSE-MATH-CP 2",
  "transcribedBy": "gemini-vision",
  "questions": [
    {
      "question_number": 1,
      "section": "A",
      "stem_text": "English wording, inline maths can stay as LaTeX",
      "stem_latex": "\\frac{(27x)^{5}}{(3x^{-2})^{4}}=",
      "figure": "if the question has a diagram/table, describe it: labels, axis values, each data point",
      "options": { "A": "3^{2}x^{3}", "B": "...", "C": "...", "D": "..." },
      "notes": "anything uncertain in the print (smudged symbol, faint number)"
    }
  ]
}
```
   Transcription prompt to reuse: *“Transcribe only, do not solve. Maths in LaTeX. Give all four options. If there is a figure or table, describe it in full (axis labels, every value). Put anything unclear in notes.”*
3. **Rebuild:**
```powershell
& $py tools\build_bank.py          # auto topics / difficulty / suggested time
& $py tools\validate_bank.py
& $py tools\make_site_data.py
```
4. Fix odd classifications in `data/overrides.json` instead of editing `bank.json`:
```json
{ "overrides": { "2026-p2-q19": { "difficulty": 3, "timeSec": 150 } } }
```

---

## 5. House rules

1. **Questions stay in English** (exam language). **Solutions are bilingual.**
2. **Never invent an answer.** If the transcription looks wrong, open the question image, fix the LaTeX in the transcript file, rebuild. Mark `verify: "unverified"` if you could not confirm visually.
3. Keep `notes` from the transcriber — it records where the paper itself is unclear.
4. Do not edit `site/data/*.js` or `bank.json` by hand; they are regenerated.
5. Run `site_check.js` + `smoke_test.js` before pushing. Both must pass.
6. If a batch is scheduled before its solutions exist, students see “solution not released yet” — allowed, but do not leave it that way for long.

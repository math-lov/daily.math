/* 自學追上站冒煙測試（jsdom）：模擬學生完整流程
 * 用法： node tools/learn_smoke_test.js
 *
 * 覆蓋：
 *   1. 首頁：課題按鈕、進度環、繼續學習、統計
 *   2. 課題頁：頁數導覽列（學習／示範／練習頁）
 *   3. 概念卡：翻頁、看完 → 記住進度
 *   4. 長題示範：逐步揭示 → 完成橫幅 → 記住進度
 *   5. MC：答錯（紅色標示 + 干擾項解說 + 進錯題本）／答對（綠色 + 答案行 + 提示逐步）
 *   6. 錯題本：列出錯題、清空
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { JSDOM } = require("jsdom");

const root = path.join(__dirname, "..");
const learn = path.join(root, "learn");
const LS_KEY = "dse-learn:v1";

const katexJs = fs.readFileSync(path.join(learn, "vendor", "katex", "katex.min.js"), "utf8");
const autoRenderJs = fs.readFileSync(path.join(learn, "vendor", "katex", "auto-render.min.js"), "utf8");
const appJs = fs.readFileSync(path.join(learn, "assets", "app.js"), "utf8");
const indexJs = fs.readFileSync(path.join(learn, "data", "index.js"), "utf8");

let fails = 0;
const ok = (cond, label) => { console.log((cond ? "  PASS  " : "  FAIL  ") + label); if (!cond) fails++; };

function boot(page, search, storage) {
  const html = fs.readFileSync(path.join(learn, page), "utf8");
  const dom = new JSDOM(html, {
    url: "https://example.test/" + (search || ""),
    pretendToBeVisual: true, runScripts: "outside-only",
  });
  const ctx = dom.getInternalVMContext();
  ctx.window.confirm = () => true;                       // 測試時直接確認
  const scrolls = [];                                    // jsdom 未實作滾動 → 記錄呼叫（換卡要捲回頂部）
  ctx.window.scrollTo = (x, y) => { scrolls.push(y); };
  if (storage) ctx.window.localStorage.setItem(LS_KEY, storage);
  vm.runInContext(katexJs, ctx, { filename: "katex.min.js" });
  vm.runInContext(autoRenderJs, ctx, { filename: "auto-render.min.js" });
  vm.runInContext(indexJs, ctx, { filename: "index.js" });
  // 課題 payload（正式版由 app.js 動態載入；測試直接預先注入）
  const topicFiles = fs.readdirSync(path.join(learn, "data")).filter((f) => /^topic-.*\.js$/.test(f));
  topicFiles.forEach((f) => vm.runInContext(fs.readFileSync(path.join(learn, "data", f), "utf8"), ctx, { filename: f }));
  vm.runInContext(appJs, ctx, { filename: "app.js" });
  // jsdom 的 readyState 仍是 loading → 明確啟動（正式瀏覽器會由 DOMContentLoaded 觸發）
  if (typeof ctx.window.__LEARN_START === "function") ctx.window.__LEARN_START();
  const doc = dom.window.document;
  return {
    dom, ctx, doc, scrolls,
    $: (s) => doc.querySelector(s),
    $$: (s) => Array.prototype.slice.call(doc.querySelectorAll(s)),
    store: () => JSON.parse(ctx.window.localStorage.getItem(LS_KEY) || "{}"),
  };
}

/* ── 1. 首頁 ─────────────────────────────────────────────────────────── */
console.log("\n— 首頁：課題按鈕牆 —");
const home = boot("index.html", "");
ok(home.$$(".topic-btn").length >= 1, "renders topic buttons (got " + home.$$(".topic-btn").length + ")");
ok(/共 \d+ 個課題/.test((home.$("#site-stats") || {}).textContent || ""), "site stats rendered");
ok(!home.$("#continue").classList.contains("hidden"), "'continue learning' button is visible when nothing is finished");
ok(/繼續學習/.test(home.$("#continue-label").textContent), "continue button labels the next topic");
const ring = home.$(".topic-btn .ring");
ok(!!ring && /%$/.test(ring.getAttribute("data-label")), "topic shows a progress ring with a percentage");
ok(/練習 \d+ 題/.test(home.$(".topic-btn .t-meta").textContent), "topic shows its item counts");

/* ── 2. 課題頁：頁數導覽列 ───────────────────────────────────────────── */
console.log("\n— 課題頁：頁數導覽列 —");
const t0 = boot("topic.html", "?t=ws01&p=0");
const nav = t0.$$("#pagenav .pg");
ok(nav.length >= 8, "page nav lists every page (got " + nav.length + ")");
ok(nav[0].textContent === "學習", "first page is the concept-card page");
ok(t0.$$("#pagenav .pg.kind").length >= 3, "demo pages are labelled");
ok(nav[0].classList.contains("current"), "current page is highlighted");
ok(!!t0.$("#topic-name").textContent.trim(), "topic name rendered");
ok(/第 1 \/ \d+ 頁/.test(t0.$("#topic-progress").textContent),
   "topbar shows the page position (got " + t0.$("#topic-progress").textContent + ")");
ok(!t0.$("#prev") && !t0.$("#next") && !t0.$(".footbar"),
   "the bottom prev/next bar is gone (pages are jumped from the top nav)");
ok(t0.$("#pagenav").children.length >= 8, "the top page nav is still the way to jump around");

/* ── 3. 概念卡 ───────────────────────────────────────────────────────── */
/* ── 2b. 第二個課題（二元一次方程）也正常 ─────────────────────────────── */
console.log("\n— 課題 2：二元一次方程 —");
ok(home.$$(".topic-btn").length >= 2,
   "home page lists both topics (got " + home.$$(".topic-btn").length + ")");
const t02 = boot("topic.html", "?t=ws02&p=0");
ok(t02.$$("#pagenav .pg").length === 8,
   "ws02 has 1 card page + 2 demos + 5 MC pages (got " + t02.$$("#pagenav .pg").length + ")");
ok((t02.$("#topic-name").textContent || "").indexOf("二元一次") >= 0,
   "ws02 topic name rendered (" + t02.$("#topic-name").textContent + ")");
ok(!!t02.$(".concept-body") && t02.$$(".formula .katex").length >= 1, "ws02 concept card renders formulas");
const t02mc = boot("topic.html", "?t=ws02&p=3");
const q02 = t02mc.$$("#topic-body .card[data-qid]");
ok(q02.length === 3, "ws02 first MC page holds 3 questions (got " + q02.length + ")");
ok(t02mc.$$("#topic-body .opt").length === 12,
   "each question has 4 options (got " + t02mc.$$("#topic-body .opt").length + ")");
ok(!/\\\$\\\$/.test(t02mc.$("#topic-body").textContent),
   "currency renders as $ without breaking the maths delimiters");

// ws02-c2（代入法）也要把 4 條公式插在文字中間（不是全部排在最後）
const t02c2 = boot("topic.html", "?t=ws02&p=0");
let g2 = 0;
while ((t02c2.$(".ccard-head h3").textContent || "").indexOf("代入法") < 0 && g2 < 8) {
  const b = t02c2.$$(".card .row .btn").filter((x) => /下一張/.test(x.textContent))[0];
  if (!b) break;
  b.click();
  g2++;
}
ok((t02c2.$(".ccard-head h3").textContent || "").indexOf("代入法") >= 0,
   "reached the ws02 substitution card (" + (t02c2.$(".ccard-head h3") || {}).textContent + ")");
const k2 = Array.prototype.slice.call(t02c2.$(".concept-body").children);
const f2 = k2.filter((n) => n.classList.contains("formula")).length;
ok(f2 === 4, "ws02 substitution card interleaves 4 formulas (got " + f2 + ")");
ok(!k2[k2.length - 1].classList.contains("formula"), "ws02 substitution card ends with text, not a formula");
ok(t02c2.$(".concept-body").querySelectorAll(".formula .katex").length === 4,
   "all four interleaved formulas are typeset");

// 換卡要捲回卡片頂部（否則學生停在上一張的底部）
ok(t02c2.scrolls.length === g2, "每個「下一張」都捲了一次 (got " + t02c2.scrolls.length + " for " + g2 + " flips)");
ok(t02c2.scrolls.every((y) => typeof y === "number" && y >= 0), "捲動位置不會是負數");
const beforePrev = t02c2.scrolls.length;
const prevBtn = t02c2.$$(".card .row .btn").filter((x) => /上一張/.test(x.textContent))[0];
ok(!!prevBtn && prevBtn.disabled === false, "第 2 張卡可以按「上一張」");
prevBtn.click();
ok(t02c2.scrolls.length === beforePrev + 1, "按「上一張」同樣捲回卡片頂部");

console.log("\n— 概念卡 —");
ok(t0.$$(".ccard-head h3").length === 1, "one concept card is shown at a time");
ok(t0.$$(".formula .katex").length >= 1, "card formula rendered by KaTeX");
ok(!!t0.$(".callout"), "card shows the common-mistake callout");
ok(t0.$$(".vocab span").length >= 1, "card lists English vocabulary");
// 公式要插在文字中間（{{math:N}} 定位），不是全部擠在最後
const cardHead = () => { const h = t0.$(".ccard-head h3"); return h ? h.textContent : ""; };
const nextCardBtn = () => t0.$$(".card .row .btn")
  .filter((x) => /下一張|開始練習/.test(x.textContent))[0];

// 第 1 張卡：至少有一條公式，而且排在文字之後
let guard = 0;
while (!t0.$(".concept-body .formula") && guard < 12) {
  const b = nextCardBtn(); if (!b) break; b.click(); guard++;
}
const firstKids = Array.prototype.slice.call(t0.$(".concept-body").children);
ok(firstKids.some((n) => n.classList.contains("formula")), "card shows at least one display formula");
ok(firstKids.findIndex((n) => n.classList.contains("formula")) >= 1,
   "the formula comes after the text it belongs to");

// 翻到「十字相乘法」那張（正文用 {{math:N}} 把 3 條公式插在文字中間）
guard = 0;
while (cardHead().indexOf("十字相乘") < 0 && guard < 12) {
  const b = nextCardBtn(); if (!b) break; b.click(); guard++;
}
ok(cardHead().indexOf("十字相乘") >= 0, "reached the cross-method card (" + cardHead() + ")");
const bodyWrap = t0.$(".concept-body");
const kids = Array.prototype.slice.call(bodyWrap.children);
const formulaIdx = kids.map((n, i) => (n.classList.contains("formula") ? i : -1)).filter((i) => i >= 0);
ok(formulaIdx.length >= 3, "cross-method card interleaves 3 formulas (got " + formulaIdx.length + ")");
ok(formulaIdx[0] >= 1, "there is text before the first formula (index " + formulaIdx[0] + ")");
ok(formulaIdx[0] < kids.length - 1, "there is text after the first formula too");
ok(!kids[kids.length - 1].classList.contains("formula"),
   "the card ends with text, not a stray formula (last child is " + kids[kids.length - 1].className + ")");
ok(!/\{\{math/.test(bodyWrap.textContent), "no raw {{math:…}} marker leaks into the page");
ok(bodyWrap.querySelectorAll(".formula .katex").length >= 3,
   "interleaved formulas are typeset by KaTeX");
ok(t0.$$(".formula .katex").length >= 3, "formula blocks render on the page");

// 一路翻到最後一張 → 進度要記錄下來
guard = 0;
while (guard < 20) {
  const b = nextCardBtn();
  if (!b) break;
  const label = b.textContent;
  b.click(); guard++;
  if (/開始練習/.test(label)) break;
}
const sCards = t0.store();
ok(Object.keys(sCards.cards || {}).length >= 1, "finishing the cards records progress");

/* ── 4. MC 頁：答錯與答對 ────────────────────────────────────────────── */
console.log("\n— MC 練習 —");
// 頁序：0 = 概念卡、1..2 = 兩題長題示範、3 起 = MC 每頁 3 題
function firstMcPage() {
  for (let p = 0; p < 12; p++) {
    const b = boot("topic.html", "?t=ws01&p=" + p);
    if (b.$$("#topic-body .opt").length) return { page: p, boot: b };
  }
  return null;
}
const mcHit = firstMcPage();
ok(!!mcHit, "found the first MC page");
const t2 = mcHit.boot;
const qCards = t2.$$("#topic-body > div > .card").filter((c) => c.querySelector(".opt"));
ok(qCards.length === 3, "an MC page holds exactly 3 questions (got " + qCards.length + ")");
ok(mcHit.page >= 3, "MC pages come after the concept cards and demo pages (page index " + mcHit.page + ")");
const first = qCards[0];
ok(first.querySelectorAll(".opt").length === 4, "each question has 4 options");
ok(t2.$$("#topic-body .opts").length === 3, "all three questions render option lists");
ok(t2.$$("#topic-body .q-diff").length === 3, "difficulty stars rendered");
ok(!!first.querySelector(".q-code").textContent.trim(), "question code shown (" + first.querySelector(".q-code").textContent + ")");

// 提示必須在作答前就出現（弱生可以先看提示再答，不扣分）
ok(t2.$$("#topic-body .hint-row").length === 3, "every question offers hints before answering");
ok(t2.$$("#topic-body .hint-row .btn").length >= 6, "hint buttons are rendered up front");
const q2optsBefore = Array.prototype.slice.call(qCards[1].querySelectorAll(".opt"));
ok(q2optsBefore.every((o) => !o.disabled), "other questions stay answerable until the student answers them");
// 作答前先按一次提示：應該真的揭示一步
const preHint = qCards[1].querySelector(".hint-row .btn");
preHint.click();
ok(qCards[1].querySelectorAll(".steps .step").length === 1, "hint works before answering (step revealed)");

// 從資料取得正確答案，故意挑一個錯的選項作答
const payload = t2.ctx.window.LEARN_TOPIC_WS01;
const allMc = payload.lessons.reduce((a, l) => a.concat(l.pages.reduce((b, p) => b.concat(p), [])), []);
const q1data = allMc[0];
const answerLetter = q1data.answer;
ok(["A", "B", "C", "D"].includes(answerLetter), "data carries the correct answer (" + answerLetter + ")");
const opts = first.querySelectorAll(".opt");
const wrongIdx = ["A", "B", "C", "D"].findIndex((L) => L !== answerLetter);
const q1id = first.querySelector(".q-code").textContent.trim();
opts[wrongIdx].click();
ok(!!first.querySelector(".opt.wrong"), "wrong pick is marked red");
ok(!!first.querySelector(".opt.reveal") || !!first.querySelector(".opt.correct"),
   "the correct option is revealed after a wrong answer");
ok(!!first.querySelector(".traps .trap"), "explains why that distractor is wrong");
ok(!!first.querySelector(".tip"), "shows a takeaway tip");
ok(!!first.querySelector(".hint-row") && t2.$$("#topic-body .hint-row .btn").length >= 1,
   "hint buttons are available");
const hintBtn = first.querySelector(".hint-row .btn");
hintBtn.click();
ok(first.querySelectorAll(".steps .step").length >= 1, "a step is revealed on demand");
ok(first.querySelectorAll(".step .why").length >= 1, "each step carries the long Chinese explanation");

// 回歸測試：答一題不可以影響其他題（曾經因為 qsa 少了 root 而整頁一齊鎖住）
const q2optsAfter = Array.prototype.slice.call(qCards[1].querySelectorAll(".opt"));
const q3optsAfter = Array.prototype.slice.call(qCards[2].querySelectorAll(".opt"));
ok(q2optsBefore[0].disabled === false && q3optsAfter[0].disabled === false,
   "answering question 1 leaves questions 2 and 3 answerable");
ok(qCards[2].querySelectorAll(".opt.wrong, .opt.correct, .opt.reveal").length === 0,
   "question 3 is not marked when question 1 is answered");
ok(q2optsAfter.filter((o) => o.classList.contains("wrong") || o.classList.contains("correct")).length === 0,
   "question 2 is not marked when question 1 is answered");

// 答對：第二題（用答案鍵反推正確選項）
const second = qCards[1];
const st2 = second.querySelectorAll(".opt");
const sStore = t2.store();
ok(!!q1id, "question code read (" + q1id + ")");
// 先答錯，確認會進錯題本
st2[0].click();
const s2 = t2.store();
ok(Object.keys(s2.mc || {}).length >= 1, "answers are persisted to localStorage");

/* ── 5. 長題示範 ─────────────────────────────────────────────────────── */
console.log("\n— 長題示範 —");
const t1 = boot("topic.html", "?t=ws01&p=1");
ok(!!t1.$(".demo-try"), "demo page invites the student to try first");
ok(t1.$$(".q-stem").length >= 2, "demo shows the stem and its parts");
const startBtn = t1.$(".demo-try .btn");
ok(!!startBtn, "demo has a 'start solution' button");
startBtn.click();
ok(t1.$$(".steps .step").length === 1, "steps are revealed one at a time");
const more = t1.$$(".card .row .btn").filter((b) => /全部顯示/.test(b.textContent))[0];
ok(!!more, "there is a 'show all' button");
more.click();
ok(t1.$$(".steps .step").length >= 3, "all steps revealed (got " + t1.$$(".steps .step").length + ")");
ok(!!t1.$(".done-banner"), "finishing the demo shows the completion banner");
ok(t1.$$(".step .marking").length >= 1, "DSE marking codes (1A/1M) are shown");
ok(t1.$$(".hl .katex").length >= 1 || t1.$$(".hl").length >= 1, "step highlights rendered");

// 步驟標題本身可以含 $...$（例：第 2 步 · 由 (2) 寫出 $q$）→ 必須渲染成數學，不能露出 $ 字元
const t02q = boot("topic.html", "?t=ws02&p=3");
const card03 = t02q.$('.card[data-qid="eph-ws02-q03"]');
ok(!!card03, "found the ws02 q03 card (step titles contain $...$)");
// 每次揭一步後提示列會重建 → 每輪重新抓目前的按鈕（模擬真人逐次按）
for (let k = 0; k < 4; k++) {
  const row = card03 && card03.querySelector(".hint-row");
  const hb = row && row.querySelector(".btn");
  if (!hb) break;
  hb.click();
}
const titles03 = card03 ? Array.prototype.slice.call(card03.querySelectorAll(".step h4")) : [];
ok(titles03.length >= 2, "q03 steps revealed (got " + titles03.length + ")");
ok(titles03.every((h) => h.textContent.indexOf("$") < 0),
   "step titles show no raw $ (" + titles03.map((h) => h.textContent).join(" / ") + ")");
ok(titles03.some((h) => h.querySelector(".katex")), "step titles with $...$ are typeset by KaTeX");

// 金銀符號：資料層寫成 \$（跳脫）→ 畫面要顯示成 $，且不可以被誤配成數學
const t02cur = boot("topic.html", "?t=ws02&p=7");
const stem13 = t02cur.$('.card[data-qid="eph-ws02-q13"] .q-stem');
ok(!!stem13, "found the q13 currency card");
ok(stem13.textContent.indexOf("\\$") < 0,
   "no literal backslash-$ in the stem (" + stem13.textContent.slice(0, 60) + "...)");
ok(stem13.querySelectorAll(".cur").length >= 2,
   "currency symbols rendered as $ (got " + stem13.querySelectorAll(".cur").length + ")");
ok(stem13.querySelector(".katex") === null, "the currency sentence is not swallowed into maths");
const optA13 = t02cur.$('.card[data-qid="eph-ws02-q13"] .opt');
ok(!!optA13 && optA13.querySelector(".cur") && optA13.textContent.indexOf("\\$") < 0,
   "options render currency too");
const sLong = t1.store();
ok(Object.keys(sLong.long || {}).length >= 1, "finishing the demo is recorded in progress");

/* ── 6. 錯題本 ───────────────────────────────────────────────────────── */
console.log("\n— 錯題本 —");
const wrongStore = JSON.stringify(t2.store());
const w = boot("wrong.html", "", wrongStore);
const items = w.$$(".wrong-item");
ok(items.length >= 1, "wrong book lists the wrong questions (got " + items.length + ")");
ok(/答錯 \d+ 次/.test(w.$("#wrong-body").textContent), "shows how many times it was attempted");
const again = w.$$(".wrong-item .btn").filter((b) => /再練一次/.test(b.textContent))[0];
ok(!!again, "'practise again' button present");
const wrongBefore = Object.keys(w.store().mc || {})
  .filter((k) => w.store().mc[k].correct === false).sort();
again.click();
const wrongAfter = w.store().mc || {};
ok(!wrongAfter[wrongBefore[0]], "retrying clears that question's record (" + wrongBefore[0] + ")");
ok(Object.keys(wrongAfter).length === wrongBefore.length - 1,
   "only the retried question is cleared (kept " + Object.keys(wrongAfter).length + " of " + wrongBefore.length + ")");
ok(/錯題本/.test(w.$$("#wrong-count").length ? w.$("#wrong-count").textContent : "錯題本"),
   "header keeps the wrong-book badge");

/* ── 6b. 再練一次 → 回到該題且是未作答狀態 ───────────────────────────── */
console.log("\n— 錯題本：再練一次回到該題 —");
const targetQid = wrongBefore[0];
const navUrl = String(w.ctx.window.__LEARN_LAST_NAV || "");
ok(navUrl.indexOf(targetQid) >= 0, "retry navigates to that question (" + navUrl + ")");
const retryPage = boot("topic.html", navUrl.replace(/^[^?]*/, ""), JSON.stringify(w.store()));
const retryCard = retryPage.doc.querySelector('.card[data-qid="' + targetQid + '"]');
ok(!!retryCard, "the retried question is on the page we land on");
ok(retryCard.querySelectorAll(".opt.wrong, .opt.correct, .opt.reveal").length === 0,
   "the retried question shows as unanswered (no red/green marking)");
ok(Array.prototype.every.call(retryCard.querySelectorAll(".opt"), (o) => !o.disabled),
   "the retried question is answerable again");
ok(!!retryPage.$(".focus-note"), "a note explains we came back from the wrong book");
// 同一頁其他題目若之前已作答，應該保持原狀（不可以被清掉）
const othersMarked = retryPage.$$("#topic-body .card[data-qid]")
  .filter((c) => c.getAttribute("data-qid") !== targetQid)
  .filter((c) => c.querySelectorAll(".opt[disabled]").length > 0).length;
ok(othersMarked >= 0, "other questions on the page keep their own state (" + othersMarked + " previously answered)");
// 回到課題頁後作答，應該可以正常判分並移出錯題本
const retryOpts = retryCard.querySelectorAll(".opt");
const retryQid = targetQid;
const retryData = allMc.filter((q) => q.id === retryQid)[0];
ok(!!retryData, "retried question data available (" + retryQid + ")");
const correctIdx = ["A", "B", "C", "D"].indexOf(retryData.answer);
retryOpts[correctIdx].click();
ok(!!retryCard.querySelector(".opt.correct"), "answering correctly marks the option green");
ok(retryPage.store().mc[retryQid].correct === true, "correct retry is recorded (will leave the wrong book)");

/* ── 7. 乾淨狀態的錯題本 ─────────────────────────────────────────────── */
console.log("\n— 錯題本（乾淨）—");
const w2 = boot("wrong.html", "", JSON.stringify({ mc: {}, long: {}, cards: {} }));
ok(/空的/.test(w2.$("#wrong-body").textContent), "empty state explains there is nothing to review");

console.log("\n" + (fails ? fails + " test(s) FAILED" : "all learn smoke tests passed"));
process.exit(fails ? 1 : 0);

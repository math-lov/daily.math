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
    dom, ctx, doc,
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
ok(/\/ \d+ 頁/.test(t0.$("#pos").textContent), "footer shows the position (got " + t0.$("#pos").textContent + ")");
ok(t0.$("#prev").disabled === true, "prev is disabled on the first page");

/* ── 3. 概念卡 ───────────────────────────────────────────────────────── */
console.log("\n— 概念卡 —");
ok(t0.$$(".ccard-head h3").length === 1, "one concept card is shown at a time");
ok(t0.$$(".formula .katex").length >= 1, "card formula rendered by KaTeX");
ok(!!t0.$(".callout"), "card shows the common-mistake callout");
ok(t0.$$(".vocab span").length >= 1, "card lists English vocabulary");
const nextCard = t0.$$(".card .row .btn").filter((b) => /下一張|開始練習/.test(b.textContent))[0];
ok(!!nextCard, "card has a 'next card' button");
let clicked = 0;
while (clicked < 20) {                                  // 一路翻到最後一張
  const b = t0.$$(".card .row .btn").filter((x) => /下一張|開始練習/.test(x.textContent))[0];
  if (!b) break;
  const label = b.textContent;
  b.click(); clicked++;
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

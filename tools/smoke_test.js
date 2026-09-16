/* 真實 DOM 冒煙測試（jsdom）：模擬學生完整流程
 * 用法： node tools/smoke_test.js
 *
 * 覆蓋：
 *   1. 頁面能渲染當日批次（3 張題卡、每題 4 個選項）
 *   2. 點選選項 → 立即判定對錯 + 顯示回饋
 *   3. 有解答的題目 → 可展開逐步解答（steps / traps / tip / answer）
 *   4. 無解答的題目 → 顯示待更新，且不會誤判對錯
 *   5. 進度（作答數 / 正確率 / 錯題本 / 存檔）正確寫入與呈現
 *   6. 語言切換會改變解答文字
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { JSDOM } = require("jsdom");

const root = path.join(__dirname, "..");
const site = path.join(root, "site");
let fails = 0;
const ok = (cond, label) => { console.log((cond ? "  PASS  " : "  FAIL  ") + label); if (!cond) fails++; };

const html = fs.readFileSync(path.join(site, "index.html"), "utf8");
const dom = new JSDOM(html, { url: "https://example.test/", pretendToBeVisual: true, runScripts: "outside-only" });
const ctx = dom.getInternalVMContext();

// KaTeX 用樁替換（避免測試依賴 CDN）
ctx.window.katex = { render: (src, el) => { el.textContent = src; } };
ctx.window.renderMathInElement = () => {};
// 固定「今天」為首批日期，確保測到第一天的批次
const RealDate = ctx.window.Date;
ctx.window.Date = class extends RealDate {
  constructor(...a) { if (a.length) return new RealDate(...a); return new RealDate("2026-09-16T09:00:00"); }
  static now() { return new RealDate("2026-09-16T09:00:00").getTime(); }
};

["bank", "solutions", "releases", "app"].forEach((n) => {
  const p = n === "app" ? path.join(site, "assets", "app.js") : path.join(site, "data", n + ".js");
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: n + ".js" });
});
const doc = ctx.document;
const $ = (s) => doc.querySelector(s);
const $$ = (s) => Array.prototype.slice.call(doc.querySelectorAll(s));

console.log("\n— 批次渲染 —");
const cards = $$(".q-card");
ok(cards.length === 3, "renders 3 question cards");
ok($("#batchTitle").textContent.length > 0, "batch title rendered");
ok($("#batchDate").textContent === "2026-09-16", "batch date is 2026-09-16");

console.log("\n— 題目內容 —");
ok($$(".q-card .q-no").length === 3, "each card has a question badge");
ok($$(".q-card img.q-img").length === 3, "each card shows the question image");
const firstOptCount = cards[0].querySelectorAll(".opt").length;
ok(firstOptCount === 4, "first question has 4 options (got " + firstOptCount + ")");
const stemTex = cards[0].querySelector(".q-stem");
ok(stemTex && /27x/.test(stemTex.textContent), "stem LaTeX rendered on card 1");
ok($$(".q-card .chip-time").length === 3, "every card shows the suggested time");
ok($$(".q-card .stars").length === 3, "every card shows a difficulty rating");

console.log("\n— 作答：正確路徑 (Q1, answer C) —");
const q1opts = cards[0].querySelectorAll(".opt");
q1opts[2].click(); // C
ok(cards[0].querySelector(".feedback").classList.contains("ok"), "correct pick shows positive feedback");
ok(q1opts[2].classList.contains("correct"), "chosen correct option is highlighted");
ok(Array.prototype.every.call(q1opts, (o) => o.disabled), "options lock after answering");
const solBtn = Array.prototype.filter.call(cards[0].querySelectorAll(".q-actions .btn"), (b) => /solution/i.test(b.textContent))[0];
ok(!!solBtn, "a 'see solution' button appears");
solBtn.click();
ok(cards[0].querySelector(".sol").classList.contains("open"), "solution panel opens");
ok(cards[0].querySelectorAll(".steps .step").length >= 3, "solution has multiple steps");
ok(!!cards[0].querySelector(".traps li"), "common-mistake (traps) list rendered");
ok(!!cards[0].querySelector(".tip p"), "tip rendered");
ok(/C/.test(cards[0].querySelector(".answer-line").textContent), "answer line states the answer");

console.log("\n— 作答：錯誤路徑 (Q2, answer C, choose A) —");
const q2opts = cards[1].querySelectorAll(".opt");
q2opts[0].click(); // A
ok(cards[1].querySelector(".feedback").classList.contains("no"), "wrong pick shows corrective feedback");
ok(q2opts[0].classList.contains("wrong"), "wrong choice marked");
ok(cards[1].querySelectorAll(".opt.correct").length === 1, "correct option revealed after a wrong answer");

console.log("\n— 進度與錯題本 —");
ok($("#stAttempts").textContent === "2", "attempt counter = 2 (got " + $("#stAttempts").textContent + ")");
ok($("#stCorrect").textContent === "1", "correct counter = 1");
ok($("#stAccuracy").textContent === "50%", "accuracy = 50% (got " + $("#stAccuracy").textContent + ")");
ok($("#wrongCount").textContent === "1", "review list has 1 item");
ok(/Indices|Algebra|Statistics|Coordinate|Geometry|Mensuration/i.test($("#wrongList").textContent) || $("#wrongList").textContent.length > 5, "review item shows topic info");
ok($$("#topicStats .topic-row").length >= 1, "per-topic stats rendered");

console.log("\n— 存檔導航 —");
ok($$("#archive a").length === 2, "archive lists both batches");
ok(!!$("#archive a.now"), "current batch is highlighted");

console.log("\n— 語言切換 —");
const before = cards[0].querySelector(".step .s-note").textContent;
$("#langBtn").click();
const cardsAfter = $$(".q-card");
const after = cardsAfter[0].querySelector(".step .s-note").textContent;
const afterTitle = cardsAfter[0].querySelector(".step .s-title").textContent;
const hasCJK = (s) => /[\u4e00-\u9fff]/.test(s);
ok(before !== after, "switching language changes the solution text");
ok(!hasCJK(after) && !hasCJK(afterTitle), "EN mode shows English-only solution text (got: " + after.slice(0, 45) + ")");
ok(/Step 1/.test(afterTitle), "step titles are localised too (got: " + afterTitle + ")");
ok(cardsAfter[0].querySelector(".feedback").classList.contains("ok"), "attempt state survives re-render");

console.log("\n— 無解答題目（Batch 2）—");
const dom2 = new JSDOM(html, { url: "https://example.test/?batch=2", pretendToBeVisual: true, runScripts: "outside-only" });
const ctx2 = dom2.getInternalVMContext();
ctx2.window.katex = { render: (s, el) => { el.textContent = s; } };
ctx2.window.renderMathInElement = () => {};
["bank", "solutions", "releases", "app"].forEach((n) => {
  const p = n === "app" ? path.join(site, "assets", "app.js") : path.join(site, "data", n + ".js");
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx2, { filename: n + ".js" });
});
const doc2 = ctx2.document;
const cards2 = Array.prototype.slice.call(doc2.querySelectorAll(".q-card"));
const pendingCard = cards2[1]; // q03 has no solution yet
pendingCard.querySelectorAll(".opt")[0].click();
const fb = pendingCard.querySelector(".feedback");
ok(fb.classList.contains("pending"), "question without a solution shows a 'pending' state (not wrong)");
ok(!pendingCard.querySelector(".opt.correct"), "no answer is revealed when none is released");
ok(!pendingCard.querySelector(".sol.open"), "solution stays closed when not available");

console.log("\n" + (fails ? `${fails} test(s) FAILED` : "all smoke tests passed"));
process.exit(fails ? 1 : 0);

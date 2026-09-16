/* 線上成品端到端驗證：抓 GitHub Pages 上的檔案，在 jsdom 裡跑一次學生流程
 * 用法： node tools/live_check.js [baseUrl]
 */
const { JSDOM, VirtualConsole } = require("jsdom");

const base = (process.argv[2] || "https://tkchung907.github.io/dse-daily/").replace(/\/?$/, "/");
let fails = 0;
const ok = (c, label) => { console.log((c ? "  PASS  " : "  FAIL  ") + label); if (!c) fails++; };

(async () => {
  const get = async (p) => {
    const r = await fetch(base + p);
    if (!r.ok) throw new Error(`${p} → HTTP ${r.status}`);
    return r.text();
  };

  console.log("live base:", base);
  const [html, bank, solutions, releases, app] = await Promise.all([
    get("index.html"), get("data/bank.js"), get("data/solutions.js"), get("data/releases.js"), get("assets/app.js"),
  ]);
  console.log(`fetched: html ${html.length}B, bank ${bank.length}B, solutions ${solutions.length}B, releases ${releases.length}B, app ${app.length}B`);

  const vc = new VirtualConsole();
  const dom = new JSDOM(html, { url: base, pretendToBeVisual: true, runScripts: "outside-only", virtualConsole: vc });
  const ctx = dom.getInternalVMContext();
  ctx.window.katex = { render: (s, el) => { el.textContent = s; } };
  ctx.window.renderMathInElement = () => {};

  const vm = require("vm");
  [bank, solutions, releases, app].forEach((code, i) => vm.runInContext(code, ctx, { filename: ["bank", "solutions", "releases", "app"][i] + ".js" }));

  const doc = ctx.document;
  const $$ = (s) => Array.prototype.slice.call(doc.querySelectorAll(s));
  const cards = $$(".q-card");

  console.log("\n— live render —");
  ok(cards.length === 3, "3 question cards rendered from the deployed data");
  ok(cards.every((c) => c.querySelector("img.q-img")), "every card has its question image");
  ok(cards.every((c) => c.querySelectorAll(".opt").length === 4), "every card has 4 options");

  console.log("\n— live attempt + solution —");
  const solvedCard = cards[0];
  solvedCard.querySelectorAll(".opt")[2].click();
  ok(solvedCard.querySelector(".feedback").classList.contains("ok"), "correct answer accepted (Q1 answer C)");
  const btn = Array.prototype.filter.call(solvedCard.querySelectorAll(".q-actions .btn"), (b) => /solution/i.test(b.textContent))[0];
  ok(!!btn, "solution button offered");
  if (btn) {
    btn.click();
    ok(solvedCard.querySelectorAll(".steps .step").length >= 3, "animated steps present");
    ok(!!solvedCard.querySelector(".traps li"), "common-mistake list present");
  }

  console.log("\n— live progress —");
  ok(doc.getElementById("stAttempts").textContent === "1", "attempt recorded in store");
  ok($$("#archive a").length >= 2, "archive shows the batches");

  console.log("\n" + (fails ? `${fails} live check(s) FAILED` : "live site verified end-to-end"));
  process.exit(fails ? 1 : 0);
})().catch((e) => { console.error("live check error:", e.message); process.exit(1); });

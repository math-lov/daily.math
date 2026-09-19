/* 自學追上站 · 內容編輯器前端測試（jsdom）
 *
 * 為什麼需要：編輯器的 HTML/Script 是從 Python 字串生成的，
 * 一旦跳脫或引號出錯，整頁會變成空白（曾經真的發生）。
 * 這支測試會：載入 /edit 的真實 HTML → 執行它的 inline script（真實 KaTeX）
 * → 驗證清單與表單真的渲染出來 → 模擬點擊（不寫入檔案）。
 *
 * 只讀不寫：GET 會轉發到真面板；POST 一律攔截回傳假回應。
 *
 * 用法： node tools/learn_editor_test.js [baseUrl]
 */
const vm = require("vm");
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const BASE = process.argv[2] || "http://127.0.0.1:8799";
const root = path.join(__dirname, "..");
const KATEX = fs.readFileSync(path.join(root, "learn", "vendor", "katex", "katex.min.js"), "utf8");
const AUTORENDER = fs.readFileSync(path.join(root, "learn", "vendor", "katex", "auto-render.min.js"), "utf8");

let fails = 0;
const ok = (cond, label) => { console.log((cond ? "  PASS  " : "  FAIL  ") + label); if (!cond) fails++; };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const html = await fetch(BASE + "/edit").then((r) => r.text());

  // 1) inline script 必須能通過語法檢查（最常見的壞法是整段 JS 解析失敗）
  const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  ok(blocks.length >= 1, "edit page has an inline script");
  const script = blocks[blocks.length - 1];
  try {
    new vm.Script(script);                       // 只編譯，不執行
    ok(true, "inline script parses (no syntax error)");
  } catch (e) {
    ok(false, "inline script parses — " + e.message.split("\n")[0]);
    console.log("\n" + (fails ? fails + " test(s) FAILED" : "") );
    process.exit(1);
  }

  // 2) 在 jsdom 裡真的跑一次
  const dom = new JSDOM(html, { url: BASE + "/edit", pretendToBeVisual: true, runScripts: "outside-only" });
  const ctx = dom.getInternalVMContext();
  const posted = [];
  ctx.window.katex = null;
  vm.runInContext(KATEX, ctx, { filename: "katex.min.js" });
  vm.runInContext(AUTORENDER, ctx, { filename: "auto-render.min.js" });

  // GET → 轉發到真面板；POST → 攔截（不寫檔）
  ctx.window.fetch = async (url, opt) => {
    const full = new URL(url, BASE).toString();
    if (opt && opt.method === "POST") {
      posted.push({ url: full, body: opt.body });
      return { json: async () => ({ ok: true, changed: ["body"], checks: [], checksOk: true }) };
    }
    const r = await fetch(full);
    return { json: async () => await r.json() };
  };
  ctx.window.alert = () => {};
  ctx.window.confirm = () => true;

  vm.runInContext(script, ctx, { filename: "editor.js" });
  await sleep(600);                              // 等 fetch 完成

  const doc = dom.window.document;
  const $ = (s) => doc.querySelector(s);
  const $$ = (s) => Array.prototype.slice.call(doc.querySelectorAll(s));

  ok(dom.window.__editorLoaded !== false, "page script ran without throwing");
  ok($$("#topicSel option").length >= 1, "topic dropdown is populated (" + $$("#topicSel option").length + ")");
  const listBtns = $$("#list [data-act]");
  ok(listBtns.length >= 10, "left list is populated with items (" + listBtns.length + ")");
  ok(listBtns.some((b) => b.getAttribute("data-act") === "topic"), "list offers the topic info editor");
  ok(listBtns.filter((b) => b.getAttribute("data-act") === "card").length >= 1, "list offers concept cards");
  ok(listBtns.filter((b) => b.getAttribute("data-act") === "q").length >= 10, "list offers questions");

  // 3) 點「十字相乘法」概念卡（有 3 條公式，最能驗證交錯排版）→ 表單與即時預覽
  const cardBtn = listBtns.filter((b) => b.getAttribute("data-act") === "card")
    .find((b) => b.getAttribute("data-id") === "ws01-c5")
    || listBtns.filter((b) => b.getAttribute("data-act") === "card")[0];
  cardBtn.click();
  await sleep(120);
  ok(!!$("#f_tzh") && !!$("#f_body"), "card form renders (title + body fields)");
  ok($("#pv-f_body").innerHTML.length > 0, "live preview renders for the body field");
  // vocab 用「english = 中文」：英文詞組不可以被空格拆散（曾把 "cross method" 存成 en="cross"）
  const vocabField = $("#f_vocab");
  ok(!!vocabField, "card form has the vocabulary field");
  ok(/cross method = 十字相乘法/.test(vocabField.value),
     "vocabulary keeps the English phrase intact (" + vocabField.value.split("\n")[0] + ")");
  ok($("#pv-f_body").querySelectorAll(".katex").length >= 1, "preview typesets the inline $...$ maths");
  // 定位標記：正文寫 {{math:0}} 時，預覽要把公式插到文字中間（與學生端一致）
  const bodyField = $("#f_body"), mathField = $("#f_math");
  bodyField.value = "第一段文字\n{{math:0}}\n第二段文字 {{math:1}} 之後\n{{math:2}}";
  bodyField.dispatchEvent(new dom.window.Event("input"));
  await sleep(80);
  const pvKids = Array.prototype.slice.call($("#pv-f_body").children);
  const pvFormulas = pvKids.filter((n) => n.querySelector(".katex"));
  ok(pvKids.length >= 5, "preview splits the body text at {{math:N}} markers (" + pvKids.length + " blocks)");
  ok(pvFormulas.length >= 3, "all three markers render as formulas (" + pvFormulas.length + ")");
  ok(pvKids.findIndex((n) => n.querySelector(".katex")) >= 1,
     "the first formula is NOT the first block (it is interleaved after text)");
  ok(!/\{\{math/.test($("#pv-f_body").textContent), "no raw marker leaks into the preview");

  const saveCardBtn = $$("button[data-act=saveCard]")[0];
  ok(!!saveCardBtn, "card has a save button wired via data-act");
  saveCardBtn.click();
  await sleep(300);
  ok(posted.length >= 1 && /\/api\/edit$/.test(posted[0].url), "clicking save POSTs to /api/edit");
  ok(JSON.parse(posted[0].body).kind === "card", "payload identifies the card being saved");

  // 4) 點一題 MC → 表單欄位齊全（選項、答案、步驟、干擾項、技巧）
  //    注意：儲存後清單會重建，必須重新查詢當下的按鈕（舊節點已脫離 DOM，點擊不會冒泡）
  await sleep(500);
  const freshQ = $$("#list [data-act=q]");
  ok(freshQ.length >= 10, "list refreshed after saving (" + freshQ.length + " items)");

  // 4a) 先點長題示範 → 應該有「分部」欄而沒有選項欄
  freshQ[0].click();
  await sleep(150);
  ok(!!$("#f_stem") && !!$("#f_parts"), "long-question form has stem + parts fields");
  ok(!$("#f_optA"), "long-question form has no MC option fields");
  ok($("#pv-f_steps").innerHTML.length > 0, "step preview renders (long question)");

  // 4b) 再點一題 MC → 選項／答案／步驟／干擾項／技巧都要有
  const mcBtn = freshQ.filter((b) => {
    const id = b.getAttribute("data-id") || "";
    return /-q\d+$/.test(id);
  })[0];
  ok(!!mcBtn, "list contains MC practice questions");
  mcBtn.click();
  await sleep(150);
  ["f_stem", "f_optA", "f_optB", "f_optC", "f_optD", "f_ans", "f_steps", "f_traps", "f_tip"]
    .forEach((id) => ok(!!$("#" + id), "MC form has #" + id));
  ok($("#pv-f_steps").innerHTML.length > 0, "step preview renders (MC)");

  console.log("\n" + (fails ? fails + " test(s) FAILED" : "all editor tests passed"));
  process.exit(fails ? 1 : 0);
})().catch((e) => {
  console.log("  FAIL  unexpected error: " + (e && e.stack ? e.stack.split("\n")[0] : e));
  process.exit(1);
});

/* 站點自檢：語法檢查 + 資料一致性 + 圖片完整性
 * 用法： node tools/site_check.js
 * 會檢查：
 *   1. site/assets/app.js 語法（vm.Script，不執行）
 *   2. window.BANK / SOLUTIONS / RELEASES 能否載入
 *   3. solutions 的 id 都在題庫、answer 都在四個選項內
 *   4. releases 的 id 都存在、每批題數
 *   5. 每題圖片檔是否存在
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const site = path.join(root, "site");
let errors = 0;
let warnings = 0;
const err = (m) => { console.log("[ERROR] " + m); errors++; };
const warn = (m) => { console.log("[warn] " + m); warnings++; };

// 1) app.js 語法
const appCode = fs.readFileSync(path.join(site, "assets", "app.js"), "utf8");
try {
  new vm.Script(appCode, { filename: "app.js" });
  console.log("app.js syntax: OK");
} catch (e) {
  err("app.js syntax: " + e.message);
}

// 2) 載入資料檔
const sandbox = { window: {} };
vm.createContext(sandbox);
["bank", "solutions", "releases"].forEach((n) => {
  const p = path.join(site, "data", n + ".js");
  if (!fs.existsSync(p)) { err("missing site/data/" + n + ".js"); return; }
  try {
    vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: n + ".js" });
  } catch (e) {
    err("cannot load " + n + ".js: " + e.message);
  }
});
const BANK = sandbox.window.BANK;
const SOLUTIONS = (sandbox.window.SOLUTIONS || {}).solutions || {};
const RELEASES = (sandbox.window.RELEASES || {}).releases || [];
if (!BANK) { err("window.BANK missing"); process.exit(1); }

const byId = new Map(BANK.questions.map((q) => [q.id, q]));
console.log(`bank: ${BANK.questions.length} questions · solutions: ${Object.keys(SOLUTIONS).length} · releases: ${RELEASES.length}`);

// 3) 解答
for (const [qid, s] of Object.entries(SOLUTIONS)) {
  const q = byId.get(qid);
  if (!q) { err(`${qid}: solution for unknown question`); continue; }
  if (!["A", "B", "C", "D"].includes(s.answer)) err(`${qid}: invalid answer ${s.answer}`);
  if (!q.options[s.answer]) err(`${qid}: answer ${s.answer} has no option text`);
  const steps = (s.solution || {}).steps || [];
  if (!steps.length) err(`${qid}: no solution steps`);
  steps.forEach((st, i) => {
    if (!st.math) err(`${qid} step ${i + 1}: missing math`);
    if (!st.en || !st.zh) warn(`${qid} step ${i + 1}: not fully bilingual`);
  });
  if (!((s.solution || {}).tip || {}).en) warn(`${qid}: missing tip`);
  if (!((s.solution || {}).traps || []).length) warn(`${qid}: no traps listed`);
}

// 4) 排程
const seen = new Set();
for (const r of RELEASES) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date || "")) err(`release ${r.batch}: bad date`);
  if (seen.has(r.date)) warn(`duplicate release date ${r.date}`);
  seen.add(r.date);
  if ((r.ids || []).length !== 3) warn(`release ${r.date}: ${(r.ids || []).length} questions (expected 3)`);
  const diffs = new Set();
  for (const qid of r.ids || []) {
    const q = byId.get(qid);
    if (!q) { err(`release ${r.date}: unknown id ${qid}`); continue; }
    diffs.add(q.difficulty);
    if (!SOLUTIONS[qid]) warn(`release ${r.date}: ${qid} has no solution yet`);
  }
  if (diffs.size < 2) warn(`release ${r.date}: single difficulty (mixed is recommended)`);
}

// 5) 圖片
let imgs = 0;
for (const q of BANK.questions) {
  for (const rel of q.images || []) {
    const p = path.join(site, rel);
    if (!fs.existsSync(p)) err(`${q.id}: missing image ${rel}`);
    else imgs++;
  }
}
console.log(`images: ${imgs} files present`);

// 6) 建議排程：列出尚可發佈（有解答）的題目
const pool = BANK.questions.filter((q) => SOLUTIONS[q.id]);
const byDiff = { 1: 0, 2: 0, 3: 0 };
pool.forEach((q) => byDiff[q.difficulty]++);
console.log(`ready-to-publish pool: easy ${byDiff[1]} / medium ${byDiff[2]} / hard ${byDiff[3]}`);

console.log(`\nresult: ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);

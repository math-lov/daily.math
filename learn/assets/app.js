/* ==========================================================================
   自學追上站 · 前端
   純靜態、無框架、無 build step。三種頁面共用這支檔案：
     body[data-page="index"]  首頁（課題按鈕牆）
     body[data-page="topic"]  課題頁（概念卡 → 長題示範 → MC 每頁 3 題）
     body[data-page="wrong"]  錯題本
   進度存 localStorage：key = dse-learn:v1（與每日三題站分開）

   數學渲染沿用每日三題站已驗證的兩路機制：
     data-tex        → katex.render（整串 LaTeX）
     data-tex-inline → renderMathInElement（文字中的 $...$）
   選項則沿用 isProse() 三路判別（純 LaTeX／含 $...$ 的文字／純文字）。
   ========================================================================== */
(function () {
  "use strict";

  var LS_KEY = "dse-learn:v1";
  var INDEX = window.LEARN_INDEX || { topics: [], stages: [], counts: {} };
  var TOPIC = null;                       // 目前課題的完整資料
  var PAGE = (document.body.getAttribute("data-page") || "index");

  /* ── 儲存 ───────────────────────────────────────────────────────────── */
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(LS_KEY)) || {};
      s.mc = s.mc || {};        // { qid: {picked, correct, ts, tries} }
      s.long = s.long || {};    // { qid: true }（已讀完示範）
      s.cards = s.cards || {};  // { lessonId: true }（已看完概念卡）
      return s;
    } catch (e) {
      return { mc: {}, long: {}, cards: {} };
    }
  }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) {}
  }
  var store = load();

  /* ── DOM 小工具 ─────────────────────────────────────────────────────── */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  /* 注意：第二個參數 root 一定要保留 —— 作答時只鎖「這一題」的選項，
     否則會把整頁其他題目的選項一併鎖住（曾經踩過的 bug）。 */
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  /* 換卡／換內容後把視窗帶回頂部：要扣掉黏性頂部分頁列的高度。
     不做這件事的話，內容重繪但滾動位置不變 → 學生會停在卡片底部。 */
  function scrollToTopOf(node) {
    if (!node || typeof window.scrollTo !== "function") return;
    var bar = qs(".topbar");
    var offset = (bar ? bar.getBoundingClientRect().height : 0) + 12;
    var y = node.getBoundingClientRect().top + (window.pageYOffset || 0) - offset;
    try { window.scrollTo(0, Math.max(0, y)); } catch (e) {}
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  /* 所有頁面跳轉都走這裡：記錄最後一次跳轉目標（smoke test 用），並統一處理
     jsdom／舊瀏覽器不支援 location 指派的情況。 */
  function go(url) {
    window.__LEARN_LAST_NAV = url;
    try { location.href = url; } catch (e) {}
  }
  function toast(msg) {
    var t = qs("#toast");
    if (!t) { t = el("div", "toast"); t.id = "toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t.dataset.timer);
    t.dataset.timer = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  /* ── 數學渲染（沿用每日站兩路機制）───────────────────────────────────── */
  function tex(node, src, display) {
    if (!src) { node.textContent = "—"; return; }
    node.setAttribute("data-tex", src);
    node.setAttribute("data-display", display ? "1" : "0");
    if (window.katex) {
      try {
        katex.render(src, node, { displayMode: !!display, throwOnError: false, strict: false });
        return;
      } catch (e) { /* 退回純文字 */ }
    }
    node.textContent = src;
  }
  function autoRender(node) {
    if (!window.renderMathInElement || !node) return;
    try {
      renderMathInElement(node, {
        delimiters: [{ left: "$", right: "$", display: false }],
        throwOnError: false, strict: false
      });
    } catch (e) {}
  }
  function rerenderAll() {
    if (!window.katex) return false;
    qsa("[data-tex]").forEach(function (n) {
      try {
        katex.render(n.getAttribute("data-tex"), n, {
          displayMode: n.getAttribute("data-display") === "1",
          throwOnError: false, strict: false
        });
      } catch (e) {}
    });
    qsa("[data-tex-inline]").forEach(autoRender);
    return true;
  }
  /* 文字（可含 $...$ 與換行）→ 行內渲染容器 */
  function richInto(node, s) {
    node.setAttribute("data-tex-inline", "1");
    node.innerHTML = esc(s).replace(/\n/g, "<br>");
  }
  function isProse(s) {
    if (s.indexOf("$") >= 0 || s.indexOf("\\") >= 0) return false;
    return /(^|[^A-Za-z])[A-Za-z]{2,}\s+[A-Za-z]{2,}(?![A-Za-z])/.test(s);
  }
  /* 短標籤（步驟標題、卡片標題、解法名）也可能含 $...$ → 行內數學渲染。
     直接用 textContent 的話會把 $q$、$p$ 原字元露出來。 */
  function labelInto(node, s) {
    richInto(node, (s == null ? "" : String(s)));
    autoRender(node);
    return node;
  }
  function mathInto(node, s) {                  // 選項三路判別
    if (!s) { node.textContent = "—"; return; }
    if (s.indexOf("$") >= 0 || isProse(s)) { richInto(node, s); autoRender(node); }
    else tex(node, s, false);
  }

  /* ── 進度計算 ───────────────────────────────────────────────────────── */
  function mcState(qid) { return store.mc[qid] || null; }
  function isTopicDone(t) { return topicPercent(t) >= 100; }

  function topicCounts(t) {
    var s = t.stats || {};
    return { mc: s.mc || 0, long: s.long || 0, cards: s.cards ? 1 : 0 };
  }
  function topicPercent(t) {
    var c = topicCounts(t);
    var total = c.mc + c.long + c.cards;
    if (!total) return 0;
    var done = 0;
    // 已掌握的 MC（答對）
    Object.keys(store.mc).forEach(function (qid) {
      if (store.mc[qid].correct && belongsTo(qid, t)) done++;
    });
    Object.keys(store.long).forEach(function (qid) {
      if (store.long[qid] && belongsTo(qid, t)) done++;
    });
    // 概念卡：以「課」為單位（lessonIds 由生成器帶入）
    var lessons = t.lessonIds || [];
    if (lessons.length && lessons.every(function (lid) { return !!store.cards[lid]; })) done += 1;
    return Math.min(100, Math.round(done / total * 100));
  }
  /* 題目屬於哪個課題：以 id 前綴判斷（eph-ws01-… → ws01） */
  function belongsTo(qid, t) {
    var m = /^eph-(ws\d+|as\d+)-/.exec(qid);
    return m && m[1] === t.id;
  }

  /* ── 首頁 ───────────────────────────────────────────────────────────── */
  function renderIndex() {
    var host = qs("#topics");
    if (!host) return;
    var byStage = {};
    (INDEX.topics || []).forEach(function (t) {
      (byStage[t.stage] = byStage[t.stage] || []).push(t);
    });
    var stageNames = {};
    (INDEX.stages || []).forEach(function (s) { stageNames[s.id] = s.name || {}; });

    Object.keys(byStage).sort().forEach(function (sid) {
      var name = stageNames[sid] || {};
      var st = el("div", "section-title");
      st.appendChild(el("span", null, (name.zh || ("階段 " + sid)) + (name.en ? " · " + name.en : "")));
      host.appendChild(st);

      var grid = el("div", "topic-grid");
      byStage[sid].forEach(function (t) {
        var pct = topicPercent(t);
        var btn = el("button", "topic-btn" + (pct >= 100 ? " done" : ""));
        var ring = el("div", "ring" + (pct >= 100 ? " full" : ""));
        ring.style.setProperty("--p", pct);
        ring.setAttribute("data-label", pct + "%");
        btn.appendChild(ring);

        var body = el("div", "t-body");
        var nm = el("div", "t-name", (t.name && t.name.zh) || t.id);
        if (t.name && t.name.en) nm.appendChild(el("span", "t-en", t.name.en));
        body.appendChild(nm);
        var meta = el("div", "t-meta");
        var s = t.stats || {};
        meta.textContent = "概念卡 " + (s.cards || 0) + " 張 · 示範 " + (s.long || 0) +
                           " 題 · 練習 " + (s.mc || 0) + " 題";
        body.appendChild(meta);
        btn.appendChild(body);
        btn.onclick = function () { go("topic.html?t=" + encodeURIComponent(t.id)); };
        grid.appendChild(btn);
      });
      host.appendChild(grid);
    });

    // 繼續學習：跳到第一個未完成課題
    var next = (INDEX.topics || []).filter(function (t) { return !isTopicDone(t); })[0];
    var goBtn = qs("#continue");
    if (goBtn) {
      if (next) {
        goBtn.classList.remove("hidden");
        goBtn.onclick = function () { go("topic.html?t=" + encodeURIComponent(next.id)); };
        var lbl = qs("#continue-label");
        if (lbl) lbl.textContent = "繼續學習 · " + ((next.name && next.name.zh) || next.id);
      } else if ((INDEX.topics || []).length) {
        goBtn.classList.remove("hidden");
        goBtn.onclick = function () { toast("全部課題都完成了，做得好！"); };
        var l2 = qs("#continue-label");
        if (l2) l2.textContent = "全部完成 ✓";
      }
    }

    var c = INDEX.counts || {};
    var stat = qs("#site-stats");
    if (stat) {
      stat.textContent = "共 " + (c.topics || 0) + " 個課題 · " + (c.mc || 0) +
                         " 題練習 · " + (c.long || 0) + " 題示範";
    }
    var rb = qs("#reset");
    if (rb) rb.onclick = function () {
      if (!confirm("要清除這個網站的學習進度嗎？（每日三題站的進度不受影響）")) return;
      store = { mc: {}, long: {}, cards: {} };
      save();
      location.reload();
    };
    updateWrongBadge();
  }

  function updateWrongBadge() {
    var n = wrongList().length;
    var b = qs("#wrong-count");
    if (b) {
      b.textContent = n ? "錯題本 (" + n + ")" : "錯題本";
      if (n) b.classList.add("has-items"); else b.classList.remove("has-items");
    }
  }
  function wrongList() {
    var out = [];
    Object.keys(store.mc).forEach(function (qid) {
      if (store.mc[qid].correct === false) out.push(qid);
    });
    return out.sort();
  }

  /* ── 課題頁 ─────────────────────────────────────────────────────────── */
  function topicIdFromUrl() {
    var p = new URLSearchParams(location.search);
    return (p.get("t") || (INDEX.topics[0] || {}).id || "").toLowerCase();
  }
  function pageFromUrl() {
    var p = new URLSearchParams(location.search);
    var n = parseInt(p.get("p") || "0", 10);
    return isNaN(n) || n < 0 ? 0 : n;
  }
  /* ?q=<qid>：跳到含這條題目的那一頁（錯題本「再練一次」用） */
  function pageOfQuestion(pages, qid) {
    if (!qid) return -1;
    for (var i = 0; i < pages.length; i++) {
      var p = pages[i];
      if (p.kind === "mc" && p.row.some(function (q) { return q.id === qid; })) return i;
      if (p.kind === "long" && p.q && p.q.id === qid) return i;
    }
    return -1;
  }
  function loadTopicScript(id, cb) {
    var varName = "LEARN_TOPIC_" + id.toUpperCase().replace(/-/g, "_");
    if (window[varName]) { cb(window[varName]); return; }
    var s = document.createElement("script");
    s.src = "data/topic-" + id + ".js" + (window.__V ? "?v=" + window.__V : "");
    s.onload = function () { cb(window[varName] || null); };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }

  function buildPages(topic) {
    var pages = [];
    (topic.lessons || []).forEach(function (les) {
      if (les.cards && les.cards.length) pages.push({ kind: "cards", lesson: les });
      (les.long || []).forEach(function (q) { pages.push({ kind: "long", q: q, lesson: les }); });
      (les.pages || []).forEach(function (row) { pages.push({ kind: "mc", row: row, lesson: les }); });
    });
    return pages;
  }

  function pageDone(p) {
    if (p.kind === "cards") return !!store.cards[p.lesson.id];
    if (p.kind === "long") return !!store.long[p.q.id];
    return p.row.every(function (q) { return !!mcState(q.id); });
  }

  function renderTopic() {
    var id = topicIdFromUrl();
    loadTopicScript(id, function (topic) {
      if (!topic) {
        qs("#topic-body").innerHTML = "";
        qs("#topic-body").appendChild(el("div", "empty", "找不到這個課題的資料（" + id + "）"));
        return;
      }
      TOPIC = topic;
      var pages = buildPages(topic);
      var cur = Math.min(pageFromUrl(), Math.max(0, pages.length - 1));
      var byQ = new URLSearchParams(location.search).get("q");
      var focusQid = null;
      if (byQ) {
        var hit = pageOfQuestion(pages, byQ);
        if (hit >= 0) { cur = hit; focusQid = byQ; }
      }

      var nameEl = qs("#topic-name");
      if (nameEl) nameEl.textContent = (topic.name && topic.name.zh) || topic.id;
      var enEl = qs("#topic-en");
      if (enEl) enEl.textContent = (topic.name && topic.name.en) || "";
      document.title = ((topic.name && topic.name.zh) || topic.id) + " · 自學追上站";

      // 頁數導覽列
      var nav = qs("#pagenav");
      nav.innerHTML = "";
      pages.forEach(function (p, i) {
        var b = el("button", "pg" + (i === cur ? " current" : "") + (pageDone(p) ? " done" : ""));
        if (p.kind === "cards") { b.textContent = "學習"; b.classList.add("kind"); }
        else if (p.kind === "long") { b.textContent = "示範"; b.classList.add("kind"); }
        else {
          var mcIdx = pages.slice(0, i + 1).filter(function (x) { return x.kind === "mc"; }).length;
          b.textContent = String(mcIdx);
        }
        b.onclick = function () { gotoPage(id, i); };
        nav.appendChild(b);
      });

      renderPage(pages, cur, id, focusQid);

      // 頁數位置與完成度：都顯示在頂部（底部不再有上一頁／下一頁，跳頁一律按頂部分頁列）
      var pct = Math.round(pages.filter(pageDone).length / pages.length * 100);
      var bar = qs("#topic-progress");
      if (bar) {
        bar.textContent = "第 " + (cur + 1) + " / " + pages.length + " 頁 · 本課完成 " + pct + "%";
      }

      updateWrongBadge();
    });
  }

  function gotoPage(tid, n) {
    go("topic.html?t=" + encodeURIComponent(tid) + "&p=" + n);
  }

  function renderPage(pages, cur, tid, focusQid) {
    var body = qs("#topic-body");
    body.innerHTML = "";
    var p = pages[cur];
    if (!p) { body.appendChild(el("div", "empty", "這一頁沒有內容")); return; }

    if (cur === 0 && TOPIC.intro && TOPIC.intro.zh) {
      var intro = el("div", "card");
      var h = el("div", "q-head");
      h.appendChild(el("span", "q-code", "這一課"));
      intro.appendChild(h);
      var it = el("div", "ccard-body");
      richInto(it, TOPIC.intro.zh);
      autoRender(it);
      intro.appendChild(it);
      body.appendChild(intro);
    }

    if (p.kind === "cards") renderCards(body, p, pages, cur, tid);
    else if (p.kind === "long") renderLong(body, p, pages, cur, tid);
    else renderMcPage(body, p, pages, cur, tid, focusQid);
  }

  /* ── 概念卡：正文與公式交錯 ─────────────────────────────────────────── */
  /* 正文可用定位標記把公式插到指定位置：
       {{math:0}}  插入 math[0]（0 起算）
       {{math}}    依序插入下一條未使用的公式
     沒有標記的公式，最後依原順序補在正文下方（與舊資料相容）。 */
  var MATH_MARK_RE = /\{\{math(?::(\d+))?\}\}/g;

  function renderMathBody(host, text, maths) {
    maths = maths || [];
    var used = {};
    var last = 0;
    var auto = 0;
    var m;
    MATH_MARK_RE.lastIndex = 0;

    function addText(s) {
      if (!s) return;
      var d = el("div", "btext");
      d.setAttribute("data-tex-inline", "1");
      d.innerHTML = esc(s).replace(/\n/g, "<br>");
      autoRender(d);
      host.appendChild(d);
    }
    function addFormula(i) {
      if (!maths[i]) return;
      var f = el("div", "formula");
      tex(f, maths[i], true);
      host.appendChild(f);
    }

    while ((m = MATH_MARK_RE.exec(text)) !== null) {
      addText(text.slice(last, m.index));
      last = m.index + m[0].length;
      var idx = (m[1] === undefined) ? auto++ : parseInt(m[1], 10);
      used[idx] = true;
      addFormula(idx);
    }
    addText(text.slice(last));
    maths.forEach(function (mm, i) { if (!used[i]) addFormula(i); });
  }

  /* ── 概念卡 ─────────────────────────────────────────────────────────── */
  function renderCards(body, page, pages, cur, tid) {
    var cards = page.lesson.cards || [];
    var i = 0;
    var cardEl = null;          // 目前這一張卡（換卡後捲回它的頂部）

    function draw() {
      body.innerHTML = "";
      if (i === 0) {
        var intro = el("div", "card");
        var hh = el("div", "q-head");
        hh.appendChild(el("span", "q-code", "先學會"));
        hh.appendChild(el("span", "q-source", "看過概念卡再做練習"));
        intro.appendChild(hh);
        var it = el("div", "ccard-body");
        richInto(it, "這一課有 " + cards.length + " 張概念卡，每張都有定義、公式和常見錯誤。看完按「下一張」，最後一張會打 ✓。");
        autoRender(it);
        intro.appendChild(it);
        body.appendChild(intro);
      }

      var c = cards[i];
      var card = el("div", "card");
      var head = el("div", "ccard-head");
      head.appendChild(labelInto(el("h3"), (c.title && c.title.zh) || ""));
      if (c.title && c.title.en) head.appendChild(el("span", "en", c.title.en));
      card.appendChild(head);

      var b = el("div", "ccard-body concept-body");
      renderMathBody(b, (c.body && c.body.zh) || "", c.math || []);
      card.appendChild(b);

      if (c.warn && c.warn.zh) {
        var w = el("div", "callout");
        w.appendChild(el("span", "tag", "常見錯誤"));
        var ws = el("span");
        richInto(ws, c.warn.zh);
        autoRender(ws);
        w.appendChild(ws);
        card.appendChild(w);
      }

      if (c.vocab && c.vocab.length) {
        var v = el("div", "vocab");
        c.vocab.forEach(function (x) {
          var sp = el("span");
          var bd = el("b", null, x.en);
          sp.appendChild(bd);
          sp.appendChild(document.createTextNode(" " + x.zh));
          v.appendChild(sp);
        });
        card.appendChild(v);
      }

      var foot = el("div", "row");
      foot.style.marginTop = "14px";
      var prev = el("button", "btn btn-sm", "← 上一張");
      prev.disabled = i === 0;
      prev.onclick = function () { i--; draw(); scrollToTopOf(cardEl); };
      var next = el("button", "btn btn-sm btn-primary",
                    i === cards.length - 1 ? "看完了，開始練習 →" : "下一張 →");
      next.onclick = function () {
        if (i === cards.length - 1) {
          store.cards[page.lesson.id] = true;
          save();
          gotoPage(tid, cur + 1);
        } else { i++; draw(); scrollToTopOf(cardEl); }
      };
      foot.appendChild(prev);
      foot.appendChild(next);
      card.appendChild(foot);

      var cnt = el("div", "small muted center", (i + 1) + " / " + cards.length);
      cnt.style.marginTop = "10px";
      card.appendChild(cnt);
      body.appendChild(card);
      cardEl = card;
    }
    draw();
  }

  /* ── 長題目示範 ─────────────────────────────────────────────────────── */
  function renderLong(body, page, pages, cur, tid) {
    var q = page.q;
    var sol = q.solution || {};
    var steps = sol.steps || [];
    var shown = 0;

    var card = el("div", "card");
    var head = el("div", "q-head");
    head.appendChild(el("span", "q-code", q.code || q.id));
    head.appendChild(el("span", "q-source", q.source || ""));
    if (q.marks) head.appendChild(el("span", "q-source", "（" + q.marks + " 分）"));
    card.appendChild(head);

    var stem = el("div", "q-stem");
    richInto(stem, (q.stem && q.stem.text) || "");
    autoRender(stem);
    card.appendChild(stem);

    (q.parts || []).forEach(function (pt) {
      var d = el("div", "q-stem");
      var l = el("b", null, (pt.label || "") + " ");
      d.appendChild(l);
      var sp = el("span");
      richInto(sp, pt.text || "");
      autoRender(sp);
      d.appendChild(sp);
      if (pt.marks) d.appendChild(el("span", "q-source", "（" + pt.marks + " 分）"));
      card.appendChild(d);
    });

    var tryRow = el("div", "demo-try");
    tryRow.appendChild(el("span", null, "先自己想一想、動手寫一寫，再逐步看題解。"));
    var startBtn = el("button", "btn btn-sm btn-primary", "開始看題解 →");
    tryRow.appendChild(startBtn);
    card.appendChild(tryRow);

    var stepsHost = el("div", "steps");
    card.appendChild(stepsHost);

    var moreRow = el("div", "row");
    moreRow.style.marginTop = "12px";
    var moreBtn = el("button", "btn btn-sm", "下一步");
    var allBtn = el("button", "btn btn-sm btn-ghost", "全部顯示");
    moreRow.appendChild(moreBtn);
    moreRow.appendChild(allBtn);
    moreRow.classList.add("hidden");
    card.appendChild(moreRow);

    var endRow = el("div", "hidden");
    card.appendChild(endRow);

    function drawStep(i) {
      var st = steps[i];
      if (!st) return;                        // 防禦：步驟已全部顯示時再被觸發
      var box = el("div", "step");
      var h = labelInto(el("h4"), (st.title && st.title.zh) || ("第 " + (i + 1) + " 步"));
      box.appendChild(h);
      if (st.math) {
        var f = el("div", "formula");
        tex(f, st.math, true);
        box.appendChild(f);
      }
      var why = el("div", "why");
      richInto(why, st.zh || st.en || "");
      autoRender(why);
      box.appendChild(why);
      if (st.marking) box.appendChild(el("span", "marking", st.marking));
      (st.highlight || []).forEach(function (h2) {
        var hl = el("div", "hl");
        tex(hl, h2, false);
        box.appendChild(hl);
      });
      stepsHost.appendChild(box);
      // scrollIntoView 在部分環境（jsdom／舊瀏覽器）不存在 → 保護，不讓它中斷揭示流程
      if (typeof box.scrollIntoView === "function") {
        try { box.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
      }
    }

    startBtn.onclick = function () {
      tryRow.classList.add("hidden");
      moreRow.classList.remove("hidden");
      shown = 0;
      drawStep(0); shown = 1;
      if (shown >= steps.length) finish();
    };
    moreBtn.onclick = function () {
      if (shown < steps.length) { drawStep(shown); shown++; }
      if (shown >= steps.length) finish();
    };
    allBtn.onclick = function () {
      while (shown < steps.length) { drawStep(shown); shown++; }
      finish();
    };

    function finish() {
      moreRow.classList.add("hidden");
      var boxt = el("div", "done-banner");
      boxt.appendChild(el("div", "big", "✓ 看完示範"));
      var t = el("p", null, (sol.tip && sol.tip.zh) || "");
      boxt.appendChild(t);
      endRow.appendChild(boxt);
      endRow.classList.remove("hidden");
      var goNext = el("button", "btn btn-block btn-primary", "下一頁 →");
      goNext.onclick = function () { gotoPage(tid, cur + 1); };
      var back = el("button", "btn btn-block btn-ghost", "← 回主目錄");
      back.onclick = function () { go("index.html"); };
      var row = el("div", "row");
      row.appendChild(goNext); row.appendChild(back);
      row.style.marginTop = "10px";
      endRow.appendChild(row);

      store.long[q.id] = true;
      save();
      if (document.getElementById("pagenav")) {
        var nav = document.getElementById("pagenav");
        var btns = nav.children;
        if (btns[cur]) btns[cur].classList.add("done");
      }
    }
    body.appendChild(card);
  }

  /* ── MC 頁 ──────────────────────────────────────────────────────────── */
  function renderMcPage(body, page, pages, cur, tid, focusQid) {
    var wrap = el("div");
    page.row.forEach(function (q, idx) {
      wrap.appendChild(mcCard(q, page, pages, cur, tid, idx + 1, page.row.length));
    });
    // 從錯題本「再練一次」回來：標出這一題，並且讓它回到未作答狀態
    if (focusQid) {
      var focus = qs('.card[data-qid="' + focusQid + '"]', wrap);
      if (focus) {
        focus.classList.add("focus-card");
        var note = el("div", "focus-note", "從錯題本回來：這一題已清空作答記錄，重新試一次吧。");
        wrap.insertBefore(note, focus);
      }
    }
    body.appendChild(wrap);

    var nextRow = el("div", "card");
    var txt = el("div", "small muted", page.row.every(function (q) { return !!mcState(q.id); })
      ? "這一頁完成了，可以按「下一頁」繼續。"
      : "做完這 3 題，按「下一頁」繼續（答錯的會自動進錯題本，隔天再練一次就好）。");
    nextRow.appendChild(txt);
    var row = el("div", "row");
    row.style.marginTop = "10px";
    var nx = el("button", "btn btn-sm btn-primary", "下一頁 →");
    nx.onclick = function () { gotoPage(tid, cur + 1); };
    var hm = el("button", "btn btn-sm btn-ghost", "回主目錄");
    hm.onclick = function () { go("index.html"); };
    row.appendChild(nx); row.appendChild(hm);
    nextRow.appendChild(row);
    body.appendChild(nextRow);
  }

  function mcCard(q, page, pages, cur, tid, num, total) {
    var card = el("div", "card");
    card.setAttribute("data-qid", q.id);
    var head = el("div", "q-head");
    head.appendChild(el("span", "q-code", q.code || q.id));
    head.appendChild(el("span", "q-diff", "★".repeat(q.difficulty || 1) + "☆".repeat(3 - (q.difficulty || 1))));
    if (q.source) head.appendChild(el("span", "q-source", q.source));
    card.appendChild(head);

    var stem = el("div", "q-stem");
    richInto(stem, (q.stem && q.stem.text) || "");
    autoRender(stem);
    card.appendChild(stem);

    var opts = el("div", "opts");
    opts.setAttribute("data-tex-inline", "1");
    card.appendChild(opts);

    var hintRow = el("div", "hint-row");
    var stepsHost = el("div", "steps");
    var tail = el("div");
    card.appendChild(hintRow);
    card.appendChild(stepsHost);
    card.appendChild(tail);

    var sol = q.solution || {};
    var steps = sol.steps || [];
    var revealed = 0;
    var hinted = false;              // 是否看過提示（看提示不扣分，只是記錄）

    ["A", "B", "C", "D"].forEach(function (L) {
      var b = el("button", "opt");
      b.dataset.opt = L;
      b.appendChild(el("span", "letter", L));
      var v = el("span", "val");
      mathInto(v, q.options && q.options[L]);
      b.appendChild(v);
      b.onclick = function () { pick(L, b); };
      opts.appendChild(b);
    });

    var prev = mcState(q.id);

    /* 提示「一開始就顯示」：弱生可以先看提示再作答，看提示不扣分。
       （舊版是答完才出現，等於逼學生先猜 —— 已修正） */
    function showHints() {
      hintRow.innerHTML = "";
      if (revealed >= steps.length) {
        hintRow.appendChild(el("span", "small muted", "已顯示完整解答。"));
        return;
      }
      hintRow.appendChild(el("span", "small muted", "卡住了？先看提示再作答也沒問題："));
      var b = el("button", "btn btn-sm", "提示 " + (revealed + 1) + " →");
      b.onclick = function () {
        hinted = true;
        drawStep(revealed);
        revealed++;
        showHints();
      };
      var all = el("button", "btn btn-sm btn-ghost", "看完整解答");
      all.onclick = function () {
        hinted = true;
        while (revealed < steps.length) { drawStep(revealed); revealed++; }
        showHints();
      };
      hintRow.appendChild(b);
      hintRow.appendChild(all);
    }

    function lock(picked, correct) {
      qsa(".opt", opts).forEach(function (b) {     // 只鎖這一題的選項（root = opts）
        b.disabled = true;
        if (b.dataset.opt === q.answer) {
          b.classList.add(correct ? "correct" : "reveal");
        } else if (b.dataset.opt === picked && !correct) {
          b.classList.add("wrong");
        }
      });
      showHints();
      showTail(correct ? null : picked);
    }

    function pick(L, btn) {
      var correct = L === q.answer;
      var rec = store.mc[q.id] || { tries: 0 };
      rec.picked = L;
      rec.correct = correct;
      rec.tries = (rec.tries || 0) + 1;
      rec.hinted = !!(hinted || rec.hinted);
      rec.ts = Date.now();
      store.mc[q.id] = rec;
      save();
      lock(L, correct);
      if (correct) {
        toast(hinted ? "答對了 ✓（看過提示也可以）" : "答對了 ✓");
        // 完成這一頁的所有題目 → 更新導覽列
        var nav = qs("#pagenav");
        if (nav && page.row.every(function (x) { return !!mcState(x.id); }) && nav.children[cur]) {
          nav.children[cur].classList.add("done");
        }
      } else {
        toast("沒關係，看看下面的解說");
      }
      updateWrongBadge();
    }

    showHints();                                  // 作答前就顯示提示按鈕
    if (prev) lock(prev.picked, prev.correct);

    function drawStep(i) {
      var st = steps[i];
      if (!st) return;                        // 防禦：步驟已全部顯示時再被觸發
      var box = el("div", "step");
      box.appendChild(labelInto(el("h4"), (st.title && st.title.zh) || ("第 " + (i + 1) + " 步")));
      if (st.math) {
        var f = el("div", "formula");
        tex(f, st.math, true);
        box.appendChild(f);
      }
      var why = el("div", "why");
      richInto(why, st.zh || st.en || "");
      autoRender(why);
      box.appendChild(why);
      if (st.marking) box.appendChild(el("span", "marking", st.marking));
      (st.highlight || []).forEach(function (h) {
        var hl = el("div", "hl");
        tex(hl, h, false);
        box.appendChild(hl);
      });
      stepsHost.appendChild(box);
    }

    function showTail(picked) {
      tail.innerHTML = "";
      if (!picked) {
        var line = el("div", "answer-line", "答案：" + q.answer + " ✓");
        tail.appendChild(line);
      }
      // 干擾選項解說（只顯示學生選的那個 + 其他錯的選項為何錯）
      var traps = sol.traps || [];
      if (traps.length) {
        var box = el("div", "traps");
        traps.forEach(function (tr) {
          if (picked && tr.opt !== picked) return;   // 只解釋他選的那個，避免資訊過載
          var t = el("div", "trap");
          t.appendChild(el("b", null, "選 " + tr.opt + " 的話："));
          var sp = el("span");
          richInto(sp, tr.zh || "");
          autoRender(sp);
          t.appendChild(sp);
          box.appendChild(t);
        });
        if (box.children.length) {
          tail.appendChild(el("div", "small muted", "為什麼會這樣選？"));
          tail.appendChild(box);
        }
      }
      if (sol.tip && sol.tip.zh) {
        var tip = el("div", "tip");
        tip.appendChild(el("b", null, "帶得走的技巧："));
        var ts = el("span");
        richInto(ts, sol.tip.zh);
        autoRender(ts);
        tip.appendChild(ts);
        tail.appendChild(tip);
      }
      if (sol.alt && sol.alt.length) {
        var tgl = el("button", "btn btn-sm btn-ghost alt-toggle", "進階解法（參考）");
        var ab = el("div", "alt-body hidden");
        sol.alt.forEach(function (a, i) {
          var nm = labelInto(el("div", "small muted"),
                             (a.name && (a.name.zh || a.name.en)) || ("進階解法 " + (i + 1)));
          ab.appendChild(nm);
          var sp = el("div");
          richInto(sp, a.zh || a.en || "");
          autoRender(sp);
          ab.appendChild(sp);
        });
        tgl.onclick = function () { ab.classList.toggle("hidden"); };
        tail.appendChild(tgl);
        tail.appendChild(ab);
      }
    }

    return card;
  }

  /* ── 錯題本 ─────────────────────────────────────────────────────────── */
  function renderWrong() {
    var host = qs("#wrong-body");
    if (!host) return;
    var ids = wrongList();
    if (!ids.length) {
      var e = el("div", "card");
      e.appendChild(el("div", "done-banner"));
      var b1 = el("div", "empty", "錯題本是空的 —— 或者你已經把錯的題目都弄懂了 ✓");
      e.appendChild(b1);
      var b2 = el("button", "btn btn-primary", "回主目錄");
      b2.onclick = function () { go("index.html"); };
      e.appendChild(b2);
      host.appendChild(e);
      return;
    }

    var groups = {};
    ids.forEach(function (qid) {
      var m = /^eph-(ws\d+|as\d+)-/.exec(qid);
      var t = m ? m[1] : "其他";
      (groups[t] = groups[t] || []).push(qid);
    });
    var names = {};
    (INDEX.topics || []).forEach(function (t) { names[t.id] = (t.name && t.name.zh) || t.id; });

    Object.keys(groups).sort().forEach(function (t) {
      var sec = el("div", "section-title");
      sec.appendChild(el("span", null, names[t] || t));
      host.appendChild(sec);

      groups[t].forEach(function (qid) {
        var row = el("div", "card");
        var inner = el("div", "wrong-item");
        var q = el("div", "wq");
        var st = store.mc[qid];
        var m = /-q(\d+)$/.exec(qid);
        q.appendChild(el("div", null, (names[t] || t) + " · 練習 " + (m ? parseInt(m[1], 10) : qid)));
        q.appendChild(el("div", "small muted",
          "你選了 " + st.picked + "（答錯 " + (st.tries || 1) + " 次）"));
        inner.appendChild(q);

        var again = el("button", "btn btn-sm btn-primary", "再練一次");
        again.onclick = function () {
          delete store.mc[qid];
          save();
          go("topic.html?t=" + t + "&q=" + encodeURIComponent(qid));
        };
        inner.appendChild(again);
        row.appendChild(inner);
        host.appendChild(row);
      });
    });

    var clr = qs("#wrong-clear");
    if (clr) clr.onclick = function () {
      if (!confirm("要把錯題本清空嗎？")) return;
      Object.keys(store.mc).forEach(function (qid) {
        if (store.mc[qid].correct === false) delete store.mc[qid];
      });
      save();
      location.reload();
    };
    updateWrongBadge();
  }

  /* ── 啟動 ───────────────────────────────────────────────────────────── */
  var started = false;
  function start() {
    if (started) return;              // 防止 DOMContentLoaded 與手動啟動重複渲染
    started = true;
    if (PAGE === "index") renderIndex();
    else if (PAGE === "topic") renderTopic();
    else if (PAGE === "wrong") renderWrong();

    // KaTeX 以 defer 載入：晚到時補排
    if (!window.katex) {
      var tries = 0;
      var timer = setInterval(function () {
        tries++;
        if (rerenderAll() || tries > 80) clearInterval(timer);
      }, 125);
    } else {
      rerenderAll();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();

  // 測試（jsdom）用：讓 smoke test 可以明確啟動，不必等 DOMContentLoaded
  window.__LEARN_START = start;
})();

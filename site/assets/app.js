/* Daily Three · DSE Maths MC  —  page logic
 * Data:  window.BANK / window.SOLUTIONS / window.RELEASES  (site/data/*.js)
 * Store: localStorage (attempts, wrong list, language) — this browser only.
 */
(function () {
  "use strict";

  var BANK = window.BANK || { questions: [] };
  var SOLUTIONS = (window.SOLUTIONS || {}).solutions || {};
  var RELEASES = (window.RELEASES || {}).releases || [];
  if (!BANK.questions.length || !RELEASES.length) return;

  var QMAP = {};
  BANK.questions.forEach(function (q) { QMAP[q.id] = q; });

  var LS_KEY = "daily3.v1";
  var reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ───────── store ───────── */
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(LS_KEY)) || {};
      s.attempts = s.attempts || {};
      s.revealed = s.revealed || {};
      s.lang = s.lang || "zh";      // solutions default to Chinese
      return s;
    } catch (e) {
      return { attempts: {}, revealed: {}, lang: "zh" };
    }
  }
  function save() { try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) {} }
  var store = load();

  /* ───────── helpers ───────── */
  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function currentBatch() {
    var p = new URLSearchParams(location.search);
    var b = parseInt(p.get("batch") || "", 10);
    if (b) for (var i = 0; i < RELEASES.length; i++) if (RELEASES[i].batch === b) return RELEASES[i];
    var today = todayISO(), best = RELEASES[0];
    RELEASES.forEach(function (r) { if (r.date <= today) best = r; });
    return best;
  }
  function sol(qid) { return SOLUTIONS[qid] || null; }
  function batchOf(qid) {
    for (var i = 0; i < RELEASES.length; i++) if (RELEASES[i].ids.indexOf(qid) !== -1) return RELEASES[i];
    return null;
  }
  function stars(n) {
    var s = "";
    for (var i = 1; i <= 3; i++) s += '<span class="' + (i <= n ? "" : "off") + '">★</span>';
    return s;
  }
  function tex(el, src, display) {
    if (!src) { el.textContent = "—"; return; }
    // KaTeX is loaded with defer → it may not be ready yet. Record the source on the
    // element so rerenderAll() can typeset everything once the library arrives.
    el.setAttribute("data-tex", src);
    el.setAttribute("data-display", display ? "1" : "0");
    if (window.katex) {
      try { katex.render(src, el, { displayMode: !!display, throwOnError: false, strict: false }); return; }
      catch (e) { /* fall through to plain text */ }
    }
    el.textContent = src;
  }

  function qsa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function rerenderAll() {
    if (!window.katex) return false;
    qsa("[data-tex]").forEach(function (node) {
      try {
        katex.render(node.getAttribute("data-tex"), node, {
          displayMode: node.getAttribute("data-display") === "1",
          throwOnError: false, strict: false
        });
      } catch (e) {}
    });
    qsa("[data-tex-inline]").forEach(autoRender);
    return true;
  }
  function el(tag, cls, html) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (html != null) d.innerHTML = html;
    return d;
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  /* Editorial text may contain inline maths wrapped in $...$ (e.g. "$x=-k+1$").
     Escape the HTML, keep the $ delimiters for KaTeX auto-render. */
  function rich(s) { return esc(s); }
  function autoRender(node) {
    if (!window.renderMathInElement || !node) return;
    try {
      renderMathInElement(node, {
        delimiters: [{ left: "$", right: "$", display: false }],
        throwOnError: false, strict: false
      });
    } catch (e) {}
  }
  function L(obj) { return obj ? (obj[store.lang] || obj.en || obj.zh || "") : ""; }

  /* ───────── header ───────── */
  function renderHeader(batch) {
    var title = L(batch.title) || ("Batch " + batch.batch);
    document.getElementById("batchTitle").textContent = title;
    document.getElementById("batchDate").textContent = batch.date;
    var meta = document.getElementById("batchMeta");
    meta.innerHTML = "";
    meta.appendChild(el("span", "chip chip-topic", "Batch " + batch.batch + " of " + RELEASES.length));
    meta.appendChild(el("span", "chip chip-diff", "3 questions · mixed difficulty"));
    var paperName = (BANK.papers && BANK.papers[0] && BANK.papers[0].name) || "DSE Maths Paper 2";
    document.getElementById("footNote").textContent =
      paperName + " · questions in English · solutions in 中文 / English";

    // language switch
    var btn = document.getElementById("langBtn");
    Array.prototype.forEach.call(btn.querySelectorAll(".lang-opt"), function (o) {
      o.classList.toggle("on", o.dataset.lang === store.lang);
    });
    btn.onclick = function () {
      store.lang = store.lang === "zh" ? "en" : "zh";
      save();
      renderHeader(batch);
      renderQuestions(batch);
      renderProgress();
    };
  }

  /* ───────── question cards ───────── */
  function renderQuestions(batch) {
    var host = document.getElementById("questions");
    host.innerHTML = "";
    batch.ids.forEach(function (qid, idx) {
      var q = QMAP[qid];
      if (!q) return;
      host.appendChild(questionCard(q, idx));
    });
    if (window.renderMathInElement) {
      Array.prototype.forEach.call(document.querySelectorAll("[data-tex-inline]"), function (node) {
        try {
          renderMathInElement(node, { delimiters: [{ left: "$", right: "$", display: false }], throwOnError: false, strict: false });
        } catch (e) {}
      });
    }
  }

  function questionCard(q, idx) {
    var card = el("div", "q-card glass");
    card.id = "card-" + q.id;

    // header row
    var top = el("div", "q-top");
    top.appendChild(el("span", "q-no", "Q" + q.no));                       // the paper's question number
    top.appendChild(el("span", "chip chip-diff", (idx + 1) + " of 3 today"));
    top.appendChild(el("span", "stars", stars(q.difficulty)));
    top.appendChild(el("span", "chip chip-topic", q.topic.en + (store.lang === "zh" ? " · " + q.topic.zh : "")));
    top.appendChild(el("span", "chip chip-time", Math.round(q.timeSec / 60 * 10) / 10 + " min"));
    card.appendChild(top);

    // stem: displayed maths first, then the English wording
    if (q.stem.latex) {
      var m = el("div", "q-stem");
      tex(m, q.stem.latex, true);
      card.appendChild(m);
    }
    if (q.stem.html) {
      var t = el("div", q.stem.latex ? "q-text" : "q-stem");
      t.setAttribute("data-tex-inline", "1");
      t.innerHTML = q.stem.html;
      card.appendChild(t);
    }
    if (q.figure) {
      card.appendChild(el("div", "fig-note", "<b>Figure / 圖表：</b>" + q.figure));
    }

    // question image (tap to enlarge)
    var wrap = el("div", "q-img-wrap");
    var img = document.createElement("img");
    img.className = "q-img";
    img.alt = "Question " + q.no + " (original scan)";
    img.src = q.images[0];
    img.onerror = function () { img.style.display = "none"; };
    img.onclick = function () { openLightbox(img.src); };
    wrap.appendChild(img);
    var tg = el("button", "img-toggle", "Hide / show the original question image");
    tg.onclick = function () { img.classList.toggle("hidden"); };
    wrap.appendChild(tg);
    card.appendChild(wrap);
    if (q.notes) card.appendChild(el("div", "fig-note", "<b>Transcription note:</b> " + q.notes));

    // options
    var opts = el("div", "options");
    var answered = store.attempts[q.id] || null;
    var s = sol(q.id);
    ["A", "B", "C", "D"].forEach(function (letter) {
      var b = el("button", "opt");
      b.dataset.opt = letter;
      b.appendChild(el("span", "letter", letter));
      var v = el("span", "val");
      if (q.options[letter]) tex(v, q.options[letter], false); else v.textContent = "—";
      b.appendChild(v);
      b.onclick = function () { pick(q, letter, card, b); };
      opts.appendChild(b);
    });
    card.appendChild(opts);

    // actions / feedback / solution host
    var actions = el("div", "q-actions");
    var fb = el("div", "feedback");

    var solHost = el("div", "sol");

    // restore previous attempt
    if (answered) {
      lockOptions(opts);
      markAnswer(opts, s && s.answer, answered.picked);
      fb.className = "feedback " + (answered.correct === true ? "ok" : answered.correct === false ? "no" : "pending");
      fb.textContent = feedbackText(answered, s);
      if (store.revealed[q.id]) {
        renderSolution(solHost, q, s);
        solHost.classList.add("open");
        if (solHost._showAll) solHost._showAll();   // steps are opacity:0 until revealed
      }
      else if (s) {
        var bt = el("button", "btn", "See worked solution");
        bt.onclick = function () { reveal(solHost, q, s); bt.remove(); };
        actions.appendChild(bt);
      }
    }
    card.appendChild(actions);
    card.appendChild(fb);
    card.appendChild(solHost);
    return card;
  }

  function feedbackText(att, s) {
    if (!att) return "";
    if (!s) return "Answer recorded: " + att.picked + ". The solution is not released yet — check back later.";
    if (att.correct) return "Correct — " + att.picked + " ✓";
    return "Not quite. You chose " + att.picked + ", the answer is " + s.answer + ".";
  }

  function lockOptions(opts) {
    Array.prototype.forEach.call(opts.children, function (c) { c.disabled = true; });
  }
  function markAnswer(opts, answer, picked) {
    Array.prototype.forEach.call(opts.children, function (c) {
      if (c.dataset.opt === picked) {
        // no released answer yet → just show the student's choice
        c.classList.add(answer ? (picked === answer ? "correct" : "wrong") : "sel");
      }
      if (answer && c.dataset.opt === answer) c.classList.add("correct");
    });
  }

  function pick(q, letter, card, btn) {
    if (store.attempts[q.id]) return;
    var s = sol(q.id);
    var correct = s ? (letter === s.answer) : null;
    store.attempts[q.id] = { picked: letter, correct: correct, ts: Date.now() };
    save();

    var opts = btn.parentNode;
    lockOptions(opts);
    markAnswer(opts, s && s.answer, letter);
    if (correct === true) card.classList.add("done-correct");
    else if (correct === false) card.classList.add("done-wrong");

    var fb = card.querySelector(".feedback");
    fb.className = "feedback " + (correct === true ? "ok" : correct === false ? "no" : "pending");
    fb.textContent = feedbackText(store.attempts[q.id], s);

    var actions = card.querySelector(".q-actions");
    if (s) {
      var bt = el("button", "btn", "See worked solution");
      bt.onclick = function () { reveal(card.querySelector(".sol"), q, s); bt.remove(); };
      actions.appendChild(bt);
    }
    renderProgress();
    renderArchive();
    renderHeader(currentBatch());
  }

  /* ───────── solution: data-driven animated steps ───────── */
  function renderSolution(host, q, s) {
    host.innerHTML = "";
    var isZh = store.lang === "zh";
    var head = el("div", "sol-head");
    head.appendChild(el("h3", null, isZh ? "逐步解答" : "Worked solution"));
    var tools = el("div", "sol-tools");
    var replay = el("button", "mini-btn", isZh ? "重播" : "Replay");
    var all = el("button", "mini-btn", isZh ? "全部顯示" : "Show all");
    tools.appendChild(replay); tools.appendChild(all);
    head.appendChild(tools);
    host.appendChild(head);

    var stepsHost = el("div", "steps");
    var stepNodes = [];
    s.solution.steps.forEach(function (st) {
      var node = el("div", "step");
      if (st.title) node.appendChild(el("div", "s-title", rich(L(st.title))));
      if (st.math) { var mm = el("div", "s-math"); tex(mm, st.math, true); node.appendChild(mm); }
      node.appendChild(el("div", "s-note", rich(isZh ? (st.zh || st.en) : (st.en || st.zh))));
      if (st.highlight && st.highlight.length) {
        var hs = el("div", "s-hi");
        st.highlight.forEach(function (h) {
          var chip = el("span");
          tex(chip, h, false);
          hs.appendChild(chip);
        });
        node.appendChild(hs);
      }
      stepsHost.appendChild(node);
      stepNodes.push(node);
    });
    host.appendChild(stepsHost);

    if (s.solution.traps && s.solution.traps.length) {
      var tr = el("div", "callout traps");
      tr.appendChild(el("h4", null, isZh ? "常見錯誤" : "Common mistakes"));
      var ul = document.createElement("ul");
      s.solution.traps.forEach(function (t) {
        ul.appendChild(el("li", null, "<b>" + t.opt + "</b> · " + rich(isZh ? (t.zh || t.en) : (t.en || t.zh))));
      });
      tr.appendChild(ul);
      host.appendChild(tr);
    }
    if (s.solution.tip) {
      var tp = el("div", "callout tip");
      tp.appendChild(el("h4", null, isZh ? "一句話技巧" : "One-line tip"));
      tp.appendChild(el("p", null, rich(isZh ? (s.solution.tip.zh || s.solution.tip.en) : (s.solution.tip.en || s.solution.tip.zh))));
      host.appendChild(tp);
    }
    host.appendChild(el("div", "answer-line", (isZh ? "答案：" : "Answer: ") + "<b>" + s.answer + "</b>  ·  " + (s.verify === "checked" ? (isZh ? "已核對" : "verified") : (isZh ? "待核對" : "unverified"))));

    if (window.renderMathInElement) autoRender(host);   // inline maths in notes / traps / tip
    host.setAttribute("data-tex-inline", "1");           // retried by rerenderAll if KaTeX loads late
    var timer = null;
    function stop() { if (timer) { clearTimeout(timer); timer = null; } }
    function showAll() { stop(); stepNodes.forEach(function (n) { n.classList.add("in"); }); }
    function play() {
      stop();
      if (reduced) { showAll(); return; }
      stepNodes.forEach(function (n) { n.classList.remove("in"); });
      var i = 0;
      (function next() {
        if (i >= stepNodes.length) { timer = null; return; }
        stepNodes[i].classList.add("in");
        i++;
        timer = setTimeout(next, 900);
      })();
    }
    replay.onclick = play;
    all.onclick = showAll;
    host._play = play;
    host._showAll = showAll;
  }

  function reveal(host, q, s) {
    renderSolution(host, q, s);
    host.classList.add("open");
    store.revealed[q.id] = true;
    save();
    if (host._play) host._play();
    if (!reduced && host.scrollIntoView) {
      setTimeout(function () {
        try { host.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) { host.scrollIntoView(); }
      }, 120);
    }
  }

  /* ───────── progress ───────── */
  function batchStatus(r) {
    var done = 0, correct = 0;
    r.ids.forEach(function (qid) {
      var a = store.attempts[qid];
      if (a) { done++; if (a.correct) correct++; }
    });
    return { done: done, correct: correct, total: r.ids.length };
  }
  function daysCompleted() { return RELEASES.filter(function (r) { return batchStatus(r).done === r.ids.length; }).length; }
  function currentStreak() {
    var n = 0;
    for (var i = RELEASES.length - 1; i >= 0; i--) {
      var r = RELEASES[i];
      if (r.date > todayISO()) continue;
      if (batchStatus(r).done === r.ids.length) n++; else break;
    }
    return n;
  }

  function renderProgress() {
    var ids = Object.keys(store.attempts);
    var graded = ids.filter(function (id) { return store.attempts[id].correct !== null; });
    var correct = ids.filter(function (id) { return store.attempts[id].correct === true; });
    document.getElementById("stAttempts").textContent = ids.length;
    document.getElementById("stCorrect").textContent = correct.length;
    document.getElementById("stAccuracy").textContent = graded.length ? Math.round(correct.length / graded.length * 100) + "%" : "—";
    document.getElementById("stStreak").textContent = currentStreak();
    document.getElementById("streakChip").textContent = "Streak " + currentStreak() + " · Days " + daysCompleted();

    // per-topic accuracy
    var agg = {};
    ids.forEach(function (id) {
      var q = QMAP[id]; if (!q) return;
      var k = q.topic.en;
      agg[k] = agg[k] || { n: 0, ok: 0 };
      agg[k].n++;
      if (store.attempts[id].correct) agg[k].ok++;
    });
    var host = document.getElementById("topicStats");
    host.innerHTML = "";
    var keys = Object.keys(agg).sort(function (a, b) { return agg[b].n - agg[a].n; });
    if (!keys.length) host.appendChild(el("div", "empty-note", "No attempts yet — answer a question to see your topic breakdown."));
    keys.forEach(function (k) {
      var pct = Math.round(agg[k].ok / agg[k].n * 100);
      var row = el("div", "topic-row");
      row.appendChild(el("span", "topic-name", k + " · " + agg[k].n + (store.lang === "zh" ? " 題" : " Q")));
      row.appendChild(el("span", "topic-val", agg[k].ok + "/" + agg[k].n + " (" + pct + "%)"));
      var bar = el("div", "bar");
      var inner = document.createElement("i");
      inner.style.width = pct + "%";
      bar.appendChild(inner);
      row.appendChild(bar);
      host.appendChild(row);
    });

    // review list
    var wrong = ids.filter(function (id) { return store.attempts[id].correct === false; });
    document.getElementById("wrongCount").textContent = wrong.length;
    var wl = document.getElementById("wrongList");
    wl.innerHTML = "";
    if (!wrong.length) wl.appendChild(el("div", "empty-note", "Nothing to review — nice work."));
    wrong.forEach(function (id) {
      var q = QMAP[id], s = sol(id), r = batchOf(id);
      if (!q) return;
      var item = el("div", "wrong-item");
      item.appendChild(el("div", "wi-l",
        "<b>" + q.topic.en + "</b> · " + q.id.replace("2025-p2-", "").toUpperCase() +
        " — you: " + store.attempts[id].picked + (s ? ", answer: " + s.answer : "")));
      if (r) {
        var a = document.createElement("a");
        a.href = "?batch=" + r.batch;
        a.textContent = "revisit →";
        item.appendChild(a);
      }
      wl.appendChild(item);
    });
  }

  /* ───────── archive ───────── */
  function renderArchive() {
    var host = document.getElementById("archive");
    host.innerHTML = "";
    var today = todayISO();
    var cur = currentBatch();
    RELEASES.forEach(function (r) {
      var st = batchStatus(r);
      var cls = ["archive-link"];
      if (r.batch === cur.batch) cls.push("now");
      if (r.date > today) cls.push("future");
      if (st.done === st.total) cls.push("full"); else if (st.done > 0) cls.push("partial");
      var a = document.createElement("a");
      a.href = "?batch=" + r.batch;
      a.className = cls.join(" ");
      a.innerHTML = '<span class="dot"></span>Batch ' + r.batch + " · " + r.date;
      host.appendChild(a);
    });
  }

  /* ───────── lightbox ───────── */
  var lb;
  function openLightbox(src) {
    if (!lb) {
      lb = el("div", "lightbox");
      var im = document.createElement("img");
      lb.appendChild(im);
      lb.onclick = function () { lb.classList.remove("show"); };
      document.body.appendChild(lb);
    }
    lb.querySelector("img").src = src;
    lb.classList.add("show");
  }

  /* ───────── reset ───────── */
  document.getElementById("clearProgress").onclick = function () {
    if (!confirm("Clear all progress saved in this browser?")) return;
    store = { attempts: {}, revealed: {}, lang: store.lang };
    save();
    var b = currentBatch();
    renderHeader(b); renderQuestions(b); renderProgress(); renderArchive();
  };

  /* ───────── boot ───────── */
  renderHeader(currentBatch());
  renderQuestions(currentBatch());
  renderProgress();
  renderArchive();

  // KaTeX / auto-render load asynchronously (defer): typeset as soon as they are ready.
  if (!window.katex) {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (rerenderAll() || tries > 80) clearInterval(timer);   // ~10s max
    }, 125);
  } else {
    rerenderAll();
  }
})();

/* Daily Three · Maths MC  —  page logic
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
  /* 網址明確指定某批，但那批不在公開資料裡（尚未發放／已不存在）→ 顯示提示。 */
  function requestedMissing() {
    var raw = new URLSearchParams(location.search).get("batch");
    if (!raw) return false;
    var b = parseInt(raw, 10);
    if (!b) return false;
    for (var i = 0; i < RELEASES.length; i++) if (RELEASES[i].batch === b) return false;
    return true;
  }
  /* 已收回的題目只剩 id（題目與解答已從公開檔移除）：2025-p2-q07 → 25-P2Q07 */
  function qcodeOf(qid) {
    var m = /^(\d{4})-p(\d+)-q(\d+)$/.exec(qid || "");
    return m ? (m[1].slice(2) + "-P" + m[2] + "Q" + m[3]) : qid;
  }
  function sol(qid) { return SOLUTIONS[qid] || null; }
  function batchOf(qid) {
    for (var i = 0; i < RELEASES.length; i++) if (RELEASES[i].ids.indexOf(qid) !== -1) return RELEASES[i];
    return null;
  }
  /* Topic label: "LU14 · More about Trigonometry" (or just "Junior Math" for unit 0) */
  function topicLabel(topic, short) {
    var t = topic || {};
    var name = store.lang === "zh" ? (t.zh || t.en) : (t.en || t.zh);
    if (!name) return "—";
    if (t.unit) return (short ? "LU" + t.unit : "LU" + t.unit + " · " + name);
    return name;
  }
  function stars(n) {
    var s = "";
    for (var i = 1; i <= 3; i++) s += '<span class="' + (i <= n ? "" : "off") + '">★</span>';
    return s;
  }
  /* Question label: bank gives "25-P2Q03"; fall back to "Q3" for older data. */
  function qcode(q) { return q && q.code ? q.code : ("Q" + (q ? q.no : "?")); }
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
  /* 選項是「純文字」而非 LaTeX？（如 "230.0 (correct to 4 significant figures)."）
     數學模式會吃掉空格、把單字排成斜體。判別：無 $、無 \ 命令，
     且含「兩個相連的字母單字」。 */
  function isProse(s) {
    if (s.indexOf("$") >= 0 || s.indexOf("\\") >= 0) return false;
    return /(^|[^A-Za-z])[A-Za-z]{2,}\s+[A-Za-z]{2,}(?![A-Za-z])/.test(s);
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
  function L(obj) { return obj ? (obj[store.lang] || obj.en || obj.zh || "") : ""; }

  /* ───────── header ───────── */
  function renderHeader(batch) {
    var missing = requestedMissing();
    var title = missing
      ? L({ en: "Not released yet", zh: "尚未發放" })
      : (L(batch.title) || ("Batch " + batch.batch));
    document.getElementById("batchTitle").textContent = title;
    document.getElementById("batchDate").textContent = missing ? "" : batch.date;
    var meta = document.getElementById("batchMeta");
    meta.innerHTML = "";
    meta.appendChild(el("span", "chip chip-topic", "Batch " + batch.batch + " of " + RELEASES.length));
    meta.appendChild(el("span", "chip chip-diff", batch.ids.length + " questions · mixed difficulty"));
    if (batch.status === "withdrawn") {
      meta.appendChild(el("span", "chip chip-withdrawn",
        store.lang === "zh" ? "此批次已收回" : "batch withdrawn"));
    } else if ((batch.withdrawnIds || []).length) {
      meta.appendChild(el("span", "chip chip-withdrawn",
        (store.lang === "zh" ? "已收回 " : "withdrawn ") + batch.withdrawnIds.length
        + (store.lang === "zh" ? " 題" : " Q")));
    }
    if (batch.notice) meta.appendChild(el("span", "chip chip-notice", esc(L(batch.notice))));
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
      // 已收回／未發放的題目不在公開資料裡，但仍留一張佔位卡說明
      host.appendChild(q ? questionCard(q, idx) : withdrawnCard(qid, idx));
    });
    if (window.renderMathInElement) {
      Array.prototype.forEach.call(document.querySelectorAll("[data-tex-inline]"), function (node) {
        try {
          renderMathInElement(node, { delimiters: [{ left: "$", right: "$", display: false }], throwOnError: false, strict: false });
        } catch (e) {}
      });
    }
  }

  /* 已收回（或未發放）的題目：題目與解答已從公開資料檔移除，只留一張說明卡。 */
  function withdrawnCard(qid, idx) {
    var card = el("div", "q-card glass q-withdrawn");
    card.dataset.qid = qid;
    var top = el("div", "q-top");
    top.appendChild(el("span", "q-no", esc(qcodeOf(qid))));
    top.appendChild(el("span", "chip chip-diff", (idx + 1) + " of 3 today"));
    card.appendChild(top);
    card.appendChild(el("p", "q-withdrawn-note", store.lang === "zh"
      ? "這題已由老師收回，內容與解答不再提供。"
      : "This question has been withdrawn by the teacher."));
    return card;
  }

  function questionCard(q, idx) {
    var card = el("div", "q-card glass");
    card.id = "card-" + q.id;
    card.dataset.qid = q.id;          // used by the smoke test / debugging

    // header row
    var top = el("div", "q-top");
    top.appendChild(el("span", "q-no", qcode(q)));                         // e.g. 25-P2Q03 (year · paper · question)
    top.appendChild(el("span", "chip chip-diff", (idx + 1) + " of 3 today"));
    top.appendChild(el("span", "stars", stars(q.difficulty)));
    top.appendChild(el("span", "chip chip-topic", topicLabel(q.topic)));
    top.appendChild(el("span", "chip chip-time", Math.round(q.timeSec / 60 * 10) / 10 + " min"));
    card.appendChild(top);

    // Stem: the English wording already carries the maths inline (typeset by KaTeX),
    // so only fall back to a standalone display formula when there is no wording.
    if (q.stem.html) {
      var t = el("div", "q-stem-text");
      t.setAttribute("data-tex-inline", "1");
      t.innerHTML = q.stem.html;
      card.appendChild(t);
    } else if (q.stem.latex) {
      var m = el("div", "q-stem");
      tex(m, q.stem.latex, true);
      card.appendChild(m);
    }
    // Figure description: the original scan is already shown below, so keep this collapsed
    // (it stays useful for anyone who cannot read the image).
    if (q.figure) {
      var det = el("details", "fig-note");
      var sum = document.createElement("summary");
      sum.textContent = store.lang === "zh" ? "圖表描述（AI 轉寫）" : "Figure description (AI transcription)";
      det.appendChild(sum);
      det.appendChild(el("p", null, esc(q.figure)));
      card.appendChild(det);
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
    // 轉寫備註（q.notes）是教師用的，學生端不顯示 —— 見工作台「題目」頁的 notes 欄。

    // options
    var opts = el("div", "options");
    opts.setAttribute("data-tex-inline", "1");   // 含 $...$ 的選項由行內渲染處理
    var answered = store.attempts[q.id] || null;
    var s = sol(q.id);
    ["A", "B", "C", "D"].forEach(function (letter) {
      var b = el("button", "opt");
      b.dataset.opt = letter;
      b.appendChild(el("span", "letter", letter));
      var v = el("span", "val");
      var ov = q.options ? q.options[letter] : null;
      // 選項三種寫法：含 $...$ 的文字（行內渲染）／純文字（原樣）／純 LaTeX（整串數學）
      if (!ov) v.textContent = "—";
      else if (ov.indexOf("$") >= 0 || isProse(ov)) v.innerHTML = rich(ov);
      else tex(v, ov, false);
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
    // 進階解法（坐標法／向量法等，超出必修範圍）：摺疊顯示，只作參考，不佔主解法位置
    if (s.solution.alt && s.solution.alt.length) {
      var altBox = el("details", "alt-method");
      var altSum = document.createElement("summary");
      altSum.textContent = isZh
        ? "進階解法（參考 · 超出必修範圍）"
        : "Alternative method (reference · beyond the syllabus)";
      altBox.appendChild(altSum);
      s.solution.alt.forEach(function (a) {
        var one = el("div", "alt-item");
        var nm = L(a.name) || (typeof a.name === "string" ? a.name : "");
        if (nm) one.appendChild(el("div", "alt-name", rich(String(nm))));
        one.appendChild(el("p", null, rich(isZh ? (a.zh || a.en) : (a.en || a.zh))));
        altBox.appendChild(one);
      });
      host.appendChild(altBox);
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
    // 收回的題目不再提供作答，也不應讓當天永遠「未完成」
    var held = {};
    (r.withdrawnIds || []).forEach(function (qid) { held[qid] = true; });
    var ids = (r.ids || []).filter(function (qid) { return !held[qid] && QMAP[qid]; });
    var done = 0, correct = 0;
    ids.forEach(function (qid) {
      var a = store.attempts[qid];
      if (a) { done++; if (a.correct) correct++; }
    });
    return { done: done, correct: correct, total: ids.length };
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

    // per learning-unit accuracy
    var agg = {};
    ids.forEach(function (id) {
      var q = QMAP[id]; if (!q) return;
      var topic = q.topic || {};
      var k = String(topic.unit != null ? topic.unit : -1);
      agg[k] = agg[k] || { n: 0, ok: 0, topic: topic };
      agg[k].n++;
      if (store.attempts[id].correct) agg[k].ok++;
    });
    var host = document.getElementById("topicStats");
    host.innerHTML = "";
    var keys = Object.keys(agg).sort(function (a, b) { return agg[b].n - agg[a].n; });
    if (!keys.length) host.appendChild(el("div", "empty-note", "No attempts yet — answer a question to see your unit breakdown."));
    keys.forEach(function (k) {
      var pct = Math.round(agg[k].ok / agg[k].n * 100);
      var row = el("div", "topic-row");
      row.appendChild(el("span", "topic-name", topicLabel(agg[k].topic) + " · " + agg[k].n + (store.lang === "zh" ? " 題" : " Q")));
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
        "<b>" + topicLabel(q.topic) + "</b> · " + qcode(q) +
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
      if (r.status === "withdrawn") cls.push("withdrawn");
      if (st.done === st.total) cls.push("full"); else if (st.done > 0) cls.push("partial");
      var a = document.createElement("a");
      a.href = "?batch=" + r.batch;
      a.className = cls.join(" ");
      var label = "Batch " + r.batch + " · " + r.date;
      if (r.status === "withdrawn") label += store.lang === "zh" ? " · 已收回" : " · withdrawn";
      else if ((r.withdrawnIds || []).length) label += store.lang === "zh" ? " · 部分收回" : " · partly withdrawn";
      a.innerHTML = '<span class="dot"></span>' + label;
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

  /* 診斷：KaTeX 樣式／程式沒載入時，數學式會以未排版形式顯示
     （MathML + 原始 TeX + 排版版三份同時出現，看起來像每個字重複）。 */
  function mathAssetsMissing() {
    var hasCss = false;
    try {
      hasCss = Array.prototype.some.call(document.styleSheets, function (ss) {
        return (ss.href || "").indexOf("katex") >= 0 && ss.cssRules && ss.cssRules.length > 0;
      });
    } catch (e) { return false; }        // 跨來源讀不到 cssRules → 當作有樣式
    return !window.katex || !hasCss;
  }
  setTimeout(function () {
    if (!mathAssetsMissing()) return;
    var b = document.createElement("div");
    b.style.cssText = "position:sticky;top:0;z-index:99;background:#7a1d1d;color:#fff;"
      + "padding:10px 14px;text-align:center;font:14px/1.5 system-ui,'Microsoft JhengHei',sans-serif";
    b.textContent = "數學排版資源未載入，數學式可能顯示不正常。請按 Ctrl+F5 強制重新整理一次。";
    document.body.insertBefore(b, document.body.firstChild);
  }, 3000);
})();

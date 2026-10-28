// Under Divided Stars playtest page (Opus, 28 Oct 2026). Answers go to the creator's private Google Form and Sheet
// ("Under Divided Stars - playtest v2"). Each send is one row; testers may send as often as they like.
(() => {
  'use strict';
  const FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdl121pkTFqwQ-4VTk4bx5VTD3cxtdQfstUBHg0zM3QsjZw9Q/formResponse';
  const VERSION = '28 Oct 2026 (Windows)';
  const ENTRY = { guest: 'entry.921914550', part: 'entry.1189664838', version: 'entry.1097007671', device: 'entry.957297755' };
  const LOG_PATH = '%USERPROFILE%\\AppData\\LocalLow\\UnderDividedStarsVisualLab\\Under Divided Stars - Visual Showcase';

  // An answer's mark: a game icon ("i:name", from assets/icons) or an emoji. Astra's faces and icons replace these later.
  const LEVEL = [['Too easy', '😴'], ['A bit easy', '🙂'], ['Just right', '🎯'], ['A bit hard', '😬'], ['Too hard', '😵']];
  const YES5 = [['Definitely', '💯'], ['Probably', '👍'], ['Not sure', '🤔'], ['Probably not', '👎'], ['No', '✋']];
  const PARTS = [
    {
      id: 'chapter-one', name: 'After Chapter One', n: '1', img: 'assets/part1_chapter_one.jpg',
      hint: 'When Chapter One is done and you are back in Twinmarch.',
      questions: [
        { e: 'entry.722430704', q: 'How clear were the rules?', kind: 'one', scale: true,
          opts: [['Clear', '😍'], ['Mostly clear', '🙂'], ['Some parts confusing', '😕'], ['Very confusing', '😵']] },
        { e: 'entry.1710214531', q: 'What was hardest to understand?', kind: 'many', max: 2, other: true,
          opts: [['Cards and the Destiny Book', 'i:destiny'], ['What each figure can do', 'i:companions'], ['Statuses (Focus, Block, Mark…)', 'i:focus'],
            ['What enemies will do next', 'i:damage'], ['Ending a turn (CONFIRM, END)', 'i:confirm'], ['Twinmarch and the missions', 'i:expedition'],
            ['Nothing, all clear', '✨', 'only']] },
        { e: 'entry.1645599136', q: 'The first battles were…', kind: 'one', scale: true, opts: LEVEL },
        { e: 'entry.1144193564', q: 'How much do you want to keep playing?', kind: 'one', scale: true,
          opts: [['Can’t wait', '🤩'], ['I’m curious', '🙂'], ['Not sure', '🤔'], ['Not really', '😕']] }
      ],
      write: { e: 'entry.126573994', ph: 'What confused or annoyed you? What did you enjoy?' }
    },
    {
      id: 'chapter-four', name: 'After Chapter Four', n: '2', img: 'assets/part2_the_road.jpg',
      hint: 'When Chapter Four is done: the middle of the game.',
      questions: [
        { e: 'entry.1687586451', q: 'How do the battles feel now?', kind: 'one', scale: true,
          opts: [['Exciting', '🤩'], ['Fun', '😄'], ['OK', '😐'], ['Repetitive', '🥱'], ['Frustrating', '😤']] },
        { e: 'entry.450711056', q: 'What would make battles better?', kind: 'many', max: 2, other: true,
          opts: [['More kinds of enemies', '🐉'], ['Clearer enemy actions', 'i:help'], ['Faster turns and animations', '⏩'],
            ['Stronger hit feedback (effects, sound)', 'i:damage'], ['Better balance between figures', 'i:companions'],
            ['More tactical choices', 'i:destiny'], ['They’re great as they are', '✨', 'only']] },
        { e: 'entry.122163148', q: 'Story and battles, the mix is…', kind: 'one', scale: true,
          opts: [['Too much story', '📜'], ['A bit too much story', 'i:story'], ['Just right', '⚖️'], ['A bit too many battles', '⚔️'], ['Too many battles', '😵']] },
        { e: 'entry.266668959', q: 'Are upgrades and equipment worth it?', kind: 'one', scale: true,
          opts: [['Very', '💎'], ['Somewhat', '👍'], ['Not really', '👎'], ['Haven’t used them', '🤷']] }
      ],
      write: { e: 'entry.1425799424', ph: 'Your favourite and least favourite thing so far: a figure, a fight, a place…' }
    },
    {
      id: 'ending', name: 'After the ending', n: '3', img: 'assets/part3_under_the_stars.jpg',
      hint: 'After the final scene and the credits.',
      questions: [
        { e: 'entry.1786683304', q: 'The final chapters were…', kind: 'one', scale: true, opts: LEVEL },
        { e: 'entry.887287152', q: 'How did the story land?', kind: 'one', scale: true,
          opts: [['Loved it', '😍'], ['Liked it', '🙂'], ['It was OK', '😐'], ['Didn’t care', '😶'], ['Lost track of it', '🤔']] },
        { e: 'entry.181385273', q: 'The painted story scenes, voices and music', kind: 'one', scale: true,
          opts: [['Amazing', '🤩'], ['Good', '🙂'], ['OK', '😐'], ['Distracting', '😖'], ['I skipped them', '⏭️']] },
        { e: 'entry.2089630847', q: 'What most needs work before release?', kind: 'many', max: 3, other: true,
          opts: [['Rules and help', 'i:help'], ['Text size and readability', '🔍'], ['Controls', '🎮'], ['Battle balance', '⚖️'], ['Pacing', '⏳'],
            ['Rewards and upgrades', 'i:gold'], ['Story', 'i:story'], ['Story scenes', '🎬'], ['Voices, sound and music', '🎵'],
            ['Visuals and effects', '✨'], ['Loading and smoothness', '⏱️'], ['Bugs', '🐞'], ['Nothing major', '✅', 'only']] },
        { e: 'entry.2026173065', q: 'Would you recommend it to a friend?', kind: 'one', scale: true, opts: YES5 },
        { e: 'entry.352380683', q: 'On Steam, what price feels fair?', kind: 'one', scale: true,
          opts: [['Free', '🎁'], ['Under $5', '🪙'], ['$5–10', 'i:gold'], ['$10–20', '💰'], ['Over $20', '👑']] }
      ],
      write: { e: 'entry.395298710', ph: 'Your favourite moment, and the one thing you would change before release.' }
    },
    {
      id: 'roguelike', name: 'After 2–3 Roguelike runs', n: '4', img: 'assets/part4_roguelike_roads.jpg',
      hint: 'After 2 or 3 runs. The Roguelike opens after Chapter One, from the main menu.',
      questions: [
        { e: 'entry.286356986', q: 'Did the runs feel different?', kind: 'one', scale: true,
          opts: [['Very different', '🎲'], ['Somewhat', '🔀'], ['Mostly the same', '🔁'], ['Almost identical', '😐'], ['Not enough runs yet', '⏳']] },
        { e: 'entry.225541005', q: 'A run’s length feels…', kind: 'one', scale: true, opts: [['Too short', '⚡'], ['Just right', '🎯'], ['Too long', '🐢']] },
        { e: 'entry.1687300039', q: 'Would you play another run?', kind: 'one', scale: true, opts: YES5 }
      ],
      write: { e: 'entry.1147601722', ph: 'What would make you play more runs?' }
    },
    {
      id: 'problem', name: 'Report a problem', n: '!', img: '', problem: true,
      hint: 'Any time something goes wrong. No need to finish anything first.',
      questions: [
        { e: 'entry.1959142762', q: 'What happened?', kind: 'one', other: true,
          opts: [['Crash or freeze', '💥'], ['Something wrong (a bug)', '🐞'], ['Stuck, can’t continue', '🔒'], ['Visual glitch', '🖼️'],
            ['Sound problem', '🔇'], ['Slow or stuttering', '🐌'], ['Typo or wrong text', '✏️']] }
      ],
      write: { e: 'entry.1997169768', label: 'Where were you, and what did you just do?', ph: 'For example: Chapter Two, the second fight, I pressed END and the game stopped.' },
      line: { e: 'entry.851099703', label: 'Your PC (optional)', ph: 'Graphics card or laptop model, if you know it' }
    }
  ];

  const $ = (s, el = document) => el.querySelector(s);
  const store = {
    get(k, d) { try { const v = localStorage.getItem('uds-pt-' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('uds-pt-' + k, JSON.stringify(v)); } catch (e) { /* private window: the page still works */ } },
    del(k) { try { localStorage.removeItem('uds-pt-' + k); } catch (e) { /* nothing to do */ } }
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const mark = m => m.startsWith('i:') ? '<img src="assets/icons/' + m.slice(2) + '.png" alt="" width="40" height="40">' : '<span aria-hidden="true">' + m + '</span>';
  const device = () => (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && matchMedia('(pointer: coarse)').matches)) ? 'phone' : 'computer';

  // Guest number
  const guest = $('#guest');
  guest.value = store.get('guest', '');
  guest.addEventListener('input', () => {
    guest.value = guest.value.replace(/\D/g, '').slice(0, 4);
    store.set('guest', guest.value);
    $('#guest-error').hidden = true;
  });

  // Home: the part cards
  const sent = () => store.get('sent', {});
  function renderHome() {
    const done = sent();
    $('#parts').innerHTML = PARTS.map(p => {
      const pic = p.problem
        ? '<div class="pic parchment"><img src="assets/icons/help.png" alt="" width="128" height="128"></div>'
        : '<div class="pic" style="background-image:url(\'' + p.img + '\')"><span class="num">' + p.n + '</span>' + (done[p.id] ? '<span class="sent">Sent ✓</span>' : '') + '</div>';
      const time = p.problem ? 'Any time' : 'About 1 minute · ' + p.questions.length + ' taps';
      return '<a class="part-card' + (p.problem ? ' problem' : '') + '" href="#' + p.id + '">' + pic +
        '<div class="txt"><h3>' + esc(p.name) + '</h3><p>' + esc(p.hint) + '</p><span class="time">' + time + '</span></div></a>';
    }).join('');
  }

  // A part's page
  let current = null, answers = {};
  function draftKey(p) { return 'draft-' + p.id; }
  function saveDraft() { if (current) store.set(draftKey(current), answers); }
  function renderPart(p) {
    current = p;
    answers = store.get(draftKey(p), {});
    const view = $('#part');
    const banner = p.problem
      ? '<div class="banner parchment"><img src="assets/icons/help.png" alt="" width="128" height="128">'
      : '<div class="banner" style="background-image:url(\'' + p.img + '\')">';
    let html = '<a class="back" href="#">← All parts</a>' + banner + '<div class="b-txt"><h2>' + esc(p.name) + '</h2><p>' + esc(p.hint) + '</p></div></div>';
    p.questions.forEach((q, i) => {
      const id = 'q' + i;
      const many = q.kind === 'many';
      html += '<div class="panel q" role="group" aria-labelledby="' + id + '-t">' +
        (p.problem ? '' : '<span class="q-num">' + (i + 1) + ' / ' + p.questions.length + '</span>') +
        '<span class="q-title" id="' + id + '-t">' + esc(q.q) + '</span>' +
        (many ? '<p class="hint">Pick up to ' + q.max + '.</p>' : '<p class="hint">Pick one. You can skip it.</p>') +
        '<div class="opts' + (q.scale ? ' scale' : '') + '">' +
        q.opts.map(([v, m, only]) => '<button type="button" class="opt" data-q="' + i + '" data-v="' + esc(v) + '"' + (only ? ' data-only="1"' : '') + ' aria-pressed="false">' +
          '<span class="mk">' + mark(m) + '</span><span class="lb">' + esc(v) + '</span><span class="tick" aria-hidden="true"></span></button>').join('') +
        (q.other ? '<button type="button" class="opt" data-q="' + i + '" data-v="__other__" aria-pressed="false"><span class="mk"><span aria-hidden="true">✍️</span></span><span class="lb">Something else…</span><span class="tick" aria-hidden="true"></span></button>' : '') +
        '</div>' +
        (q.other ? '<input class="other-box" type="text" maxlength="300" data-other="' + i + '" placeholder="Write it here" hidden>' : '') +
        '</div>';
    });
    if (p.write) {
      html += '<div class="panel q"><label class="q-title" for="write">' + esc(p.write.label || 'Tell us more') + '</label>' +
        '<p class="hint">' + (p.problem ? 'A few words help us find it.' : 'Optional. Anything at all: what you loved, what to change.') + '</p>' +
        '<textarea id="write" maxlength="3000" placeholder="' + esc(p.write.ph) + '"></textarea>';
      if (p.line) html += '<label class="q-title" for="line" style="margin-top:14px">' + esc(p.line.label) + '</label><input id="line" class="line-box" type="text" maxlength="200" placeholder="' + esc(p.line.ph) + '">';
      if (p.problem) html += '<p class="tip">If you can, also send the game\'s log file to the person who invited you: <b>Player.log</b> in<br><code>' + esc(LOG_PATH) + '</code><br>(paste that line into the address bar of File Explorer).</p>';
      html += '</div>';
    }
    html += '<div class="send-bar"><button type="button" class="button" id="send">Send my answers</button><p class="error" id="send-error" hidden></p></div>';
    view.innerHTML = html;

    // Restore a draft from this device
    p.questions.forEach((q, i) => {
      const a = answers[i];
      if (!a) return;
      (a.v || []).forEach(v => { const b = view.querySelector('.opt[data-q="' + i + '"][data-v="' + CSS.escape(v) + '"]'); if (b) b.setAttribute('aria-pressed', 'true'); });
      const box = view.querySelector('[data-other="' + i + '"]');
      if (box && (a.v || []).includes('__other__')) { box.hidden = false; box.value = a.other || ''; }
    });
    if (p.write) $('#write').value = answers.write || '';
    if (p.line) $('#line').value = answers.line || '';

    view.addEventListener('click', onPick);
    view.addEventListener('input', onType);
    $('#send').addEventListener('click', send);
  }

  function onPick(ev) {
    const b = ev.target.closest('.opt');
    if (!b || !current) return;
    const i = +b.dataset.q, q = current.questions[i], v = b.dataset.v;
    const a = answers[i] || (answers[i] = { v: [], other: '' });
    const on = a.v.includes(v);
    if (q.kind === 'one') a.v = on ? [] : [v];
    else if (on) a.v = a.v.filter(x => x !== v);
    else if (b.dataset.only) a.v = [v];
    else {
      a.v = a.v.filter(x => !q.opts.some(o => o[0] === x && o[2]));
      if (a.v.length >= q.max) a.v.shift();
      a.v.push(v);
    }
    const group = b.parentElement;
    group.querySelectorAll('.opt').forEach(o => o.setAttribute('aria-pressed', a.v.includes(o.dataset.v) ? 'true' : 'false'));
    b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    const box = $('#part').querySelector('[data-other="' + i + '"]');
    if (box) { box.hidden = !a.v.includes('__other__'); if (!box.hidden && !on) box.focus(); }
    saveDraft();
  }
  function onType(ev) {
    const t = ev.target;
    if (t.dataset.other !== undefined) { const a = answers[t.dataset.other] || (answers[t.dataset.other] = { v: [], other: '' }); a.other = t.value; }
    else if (t.id === 'write') answers.write = t.value;
    else if (t.id === 'line') answers.line = t.value;
    saveDraft();
  }

  async function send() {
    const p = current, btn = $('#send'), err = $('#send-error');
    err.hidden = true;
    const g = guest.value.trim();
    if (!g) {
      location.hash = '';
      $('#guest-error').hidden = false;
      const panel = $('#guest-panel');
      panel.classList.remove('flash'); void panel.offsetWidth; panel.classList.add('flash');
      setTimeout(() => guest.focus(), 400);
      return;
    }
    const body = new URLSearchParams();
    body.append(ENTRY.guest, g);
    body.append(ENTRY.part, p.name);
    body.append(ENTRY.version, VERSION);
    body.append(ENTRY.device, device());
    let count = 0;
    p.questions.forEach((q, i) => {
      const a = answers[i];
      if (!a || !a.v.length) return;
      a.v.forEach(v => {
        if (v === '__other__') {
          if (!a.other.trim()) return;
          body.append(q.e, '__other_option__');
          body.append(q.e + '.other_option_response', a.other.trim());
        } else body.append(q.e, v);
        count++;
      });
    });
    const write = (answers.write || '').trim(), line = (answers.line || '').trim();
    if (p.write && write) { body.append(p.write.e, write); count++; }
    if (p.line && line) { body.append(p.line.e, line); count++; }
    if (!count) { err.textContent = 'Pick at least one answer, or write something, then send.'; err.hidden = false; return; }
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      await fetch(FORM, { method: 'POST', mode: 'no-cors', body });
      store.del(draftKey(p));
      const s = sent(); s[p.id] = Date.now(); store.set('sent', s);
      $('#thanks-text').textContent = p.problem ? 'Your report is sent. Thank you for helping us fix it!' : 'Your answers for “' + p.name + '” are sent.';
      location.hash = 'thanks';
    } catch (e) {
      err.textContent = 'It did not send. Check your internet connection and press Send again: your answers are kept.';
      err.hidden = false;
    } finally {
      btn.disabled = false; btn.textContent = 'Send my answers';
    }
  }

  // Views: #<part id>, #thanks or the home page
  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    const p = PARTS.find(x => x.id === h);
    $('#home').hidden = !!(p || h === 'thanks');
    $('#part').hidden = !p;
    $('#thanks').hidden = h !== 'thanks';
    if (p) { const fresh = $('#part').cloneNode(false); $('#part').replaceWith(fresh); renderPart(p); }
    else { current = null; renderHome(); }
    if (p || h === 'thanks') window.scrollTo(0, document.querySelector('main').offsetTop - 8);
  }
  window.addEventListener('hashchange', route);
  route();
})();

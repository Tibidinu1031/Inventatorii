/* ============================================================
   INVENTATORII — fx.js
   Sunet sintetizat (WebAudio), particule, confetti, voce.
   Zero fișiere externe.
   ============================================================ */
(function (global) {
  'use strict';

  /* ---------------- SUNET ---------------- */
  var actx = null, master = null, on = true;
  function ctx() {
    if (!actx) {
      var AC = global.AudioContext || global.webkitAudioContext;
      if (!AC) return null;
      actx = new AC();
      master = actx.createGain();
      master.gain.value = 0.22;
      master.connect(actx.destination);
    }
    if (actx.state === 'suspended') actx.resume();
    return actx;
  }
  function tone(freq, dur, type, when, vol, slideTo) {
    var a = ctx(); if (!a || !on) return;
    var t0 = a.currentTime + (when || 0);
    var o = a.createOscillator(), gn = a.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    gn.gain.setValueAtTime(0.0001, t0);
    gn.gain.exponentialRampToValueAtTime(vol || 0.5, t0 + 0.012);
    gn.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(gn); gn.connect(master);
    o.start(t0); o.stop(t0 + dur + 0.03);
  }
  function noise(dur, vol, freq) {
    var a = ctx(); if (!a || !on) return;
    var len = Math.floor(a.sampleRate * dur), buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0), i;
    for (i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    var src = a.createBufferSource(); src.buffer = buf;
    var f = a.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq || 900;
    var gn = a.createGain(); gn.gain.value = vol || 0.3;
    src.connect(f); f.connect(gn); gn.connect(master); src.start();
  }
  var SFX = {
    click: function () { tone(520, 0.07, 'triangle', 0, 0.35); },
    pick: function () { tone(660, 0.08, 'triangle', 0, 0.4); tone(880, 0.07, 'sine', 0.05, 0.25); },
    drop: function () { tone(300, 0.12, 'sine', 0, 0.4, 220); },
    good: function () { tone(660, 0.1, 'sine', 0, 0.4); tone(880, 0.12, 'sine', 0.09, 0.4); tone(1180, 0.2, 'sine', 0.19, 0.35); },
    bad: function () { tone(220, 0.18, 'sawtooth', 0, 0.22, 150); },
    build: function () { noise(0.16, 0.18, 500); tone(180, 0.12, 'square', 0.05, 0.15); },
    whirr: function () { tone(140, 0.5, 'sawtooth', 0, 0.1, 320); },
    star: function (i) { tone(700 + i * 240, 0.22, 'sine', 0, 0.4); },
    win: function () {
      [523, 659, 784, 1047].forEach(function (f, i) { tone(f, 0.22, 'triangle', i * 0.1, 0.4); });
      tone(1568, 0.5, 'sine', 0.44, 0.3);
    },
    open: function () { tone(420, 0.1, 'sine', 0, 0.3, 700); },
    hint: function () { tone(980, 0.09, 'sine', 0, 0.3); tone(1300, 0.12, 'sine', 0.08, 0.25); }
  };
  function setSound(v) { on = !!v; }
  function soundOn() { return on; }

  /* ---------------- MUZICĂ DE FUNDAL (arpegiu blând) ---------------- */
  var musicTimer = null, musicOn = false, step = 0;
  var CHORDS = [[262, 330, 392], [294, 349, 440], [220, 262, 330], [247, 311, 392]];
  function musicTick() {
    var a = ctx(); if (!a) return;
    var ch = CHORDS[Math.floor(step / 4) % CHORDS.length];
    var n = ch[step % 3] * (step % 8 > 5 ? 2 : 1);
    var t0 = a.currentTime, o = a.createOscillator(), gn = a.createGain();
    o.type = 'sine'; o.frequency.value = n;
    gn.gain.setValueAtTime(0.0001, t0);
    gn.gain.exponentialRampToValueAtTime(0.055, t0 + 0.06);
    gn.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.9);
    o.connect(gn); gn.connect(master); o.start(t0); o.stop(t0 + 1);
    step++;
  }
  function setMusic(v) {
    musicOn = !!v;
    if (musicTimer) { clearInterval(musicTimer); musicTimer = null; }
    if (musicOn) { ctx(); musicTick(); musicTimer = setInterval(musicTick, 420); }
  }
  function musicIsOn() { return musicOn; }

  /* ---------------- VOCE (citește textul pentru cei mici) ---------------- */
  var voice = null;
  function pickVoice() {
    if (!global.speechSynthesis) return null;
    var vs = global.speechSynthesis.getVoices(), i;
    for (i = 0; i < vs.length; i++) if (/ro[-_]RO|Romanian|Roman/i.test(vs[i].lang + ' ' + vs[i].name)) return vs[i];
    return null;
  }
  if (global.speechSynthesis) {
    global.speechSynthesis.onvoiceschanged = function () { voice = pickVoice(); };
    setTimeout(function () { voice = pickVoice(); }, 400);
  }
  function speak(text) {
    if (!global.speechSynthesis || !text) return false;
    try {
      global.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text).replace(/\s+/g, ' '));
      if (!voice) voice = pickVoice();
      if (voice) u.voice = voice;
      u.lang = 'ro-RO'; u.rate = 0.92; u.pitch = 1.05;
      global.speechSynthesis.speak(u);
      return true;
    } catch (e) { return false; }
  }
  function stopSpeak() { try { global.speechSynthesis.cancel(); } catch (e) { } }

  /* ---------------- PARTICULE ---------------- */
  var cv = null, cx = null, parts = [], raf = null;
  function ensureCanvas() {
    if (cv) return;
    cv = document.createElement('canvas');
    cv.id = 'fxcanvas';
    document.body.appendChild(cv);
    cx = cv.getContext('2d');
    resize();
    global.addEventListener('resize', resize);
  }
  function resize() {
    if (!cv) return;
    var d = global.devicePixelRatio || 1;
    cv.width = innerWidth * d; cv.height = innerHeight * d;
    cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px';
    cx.setTransform(d, 0, 0, d, 0, 0);
  }
  function loop() {
    cx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = parts.length - 1; i >= 0; i--) {
      var q = parts[i];
      q.vy += q.g; q.x += q.vx; q.y += q.vy; q.vx *= 0.995; q.life--;
      q.rot += q.vr;
      if (q.life <= 0 || q.y > innerHeight + 60) { parts.splice(i, 1); continue; }
      cx.save();
      cx.globalAlpha = Math.max(0, Math.min(1, q.life / 40));
      cx.translate(q.x, q.y); cx.rotate(q.rot);
      cx.fillStyle = q.c;
      if (q.shape === 'circle') { cx.beginPath(); cx.arc(0, 0, q.s, 0, 6.283); cx.fill(); }
      else if (q.shape === 'star') {
        cx.beginPath();
        for (var k = 0; k < 10; k++) {
          var rr = k % 2 ? q.s * 0.45 : q.s, a = k * Math.PI / 5 - Math.PI / 2;
          if (k) cx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); else cx.moveTo(Math.cos(a) * rr, Math.sin(a) * rr);
        }
        cx.closePath(); cx.fill();
      } else cx.fillRect(-q.s, -q.s * 0.6, q.s * 2, q.s * 1.2);
      cx.restore();
    }
    if (parts.length) raf = requestAnimationFrame(loop);
    else { raf = null; cx.clearRect(0, 0, innerWidth, innerHeight); }
  }
  function push(list) {
    ensureCanvas();
    parts = parts.concat(list);
    if (parts.length > 700) parts = parts.slice(-700);
    if (!raf) raf = requestAnimationFrame(loop);
  }
  var COLORS = ['#ffc93c', '#ff8a3d', '#2f9ee0', '#1fc2a7', '#ef5b52', '#9b6dff', '#5cc45f', '#ff85bd'];
  function confetti(n, originEl) {
    var x = innerWidth / 2, y = innerHeight * 0.3;
    if (originEl && originEl.getBoundingClientRect) {
      var b = originEl.getBoundingClientRect(); x = b.left + b.width / 2; y = b.top + b.height / 2;
    }
    var list = [], i;
    for (i = 0; i < (n || 90); i++) {
      var a = Math.random() * Math.PI * 2, sp = 3 + Math.random() * 9;
      list.push({
        x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 4, g: 0.22,
        s: 3 + Math.random() * 6, c: COLORS[(Math.random() * COLORS.length) | 0],
        life: 60 + Math.random() * 50, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
        shape: Math.random() < 0.25 ? 'star' : (Math.random() < 0.5 ? 'circle' : 'rect')
      });
    }
    push(list);
  }
  function sparkle(el, color, n) {
    if (!el || !el.getBoundingClientRect) return;
    var b = el.getBoundingClientRect(), list = [], i;
    for (i = 0; i < (n || 18); i++) {
      var a = Math.random() * Math.PI * 2, sp = 1 + Math.random() * 4;
      list.push({
        x: b.left + b.width * Math.random(), y: b.top + b.height * Math.random(),
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.5, g: 0.08,
        s: 2 + Math.random() * 3.5, c: color || '#ffc93c',
        life: 32 + Math.random() * 26, rot: 0, vr: 0.2, shape: 'star'
      });
    }
    push(list);
  }
  function puff(el, color) {
    if (!el) return;
    var b = el.getBoundingClientRect(), list = [], i;
    for (i = 0; i < 16; i++) {
      var a = Math.random() * Math.PI * 2;
      list.push({
        x: b.left + b.width / 2, y: b.top + b.height / 2,
        vx: Math.cos(a) * (1 + Math.random() * 3), vy: Math.sin(a) * (1 + Math.random() * 3) - 1,
        g: -0.02, s: 5 + Math.random() * 8, c: color || 'rgba(200,215,225,.8)',
        life: 28 + Math.random() * 20, rot: 0, vr: 0.05, shape: 'circle'
      });
    }
    push(list);
  }
  function shake(el, cls) {
    if (!el) return;
    el.classList.remove(cls || 'shake');
    void el.offsetWidth;
    el.classList.add(cls || 'shake');
  }

  global.FX = {
    sfx: SFX, setSound: setSound, soundOn: soundOn,
    setMusic: setMusic, musicIsOn: musicIsOn,
    speak: speak, stopSpeak: stopSpeak,
    confetti: confetti, sparkle: sparkle, puff: puff, shake: shake
  };
})(window);

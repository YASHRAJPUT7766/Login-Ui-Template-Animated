/* ═══════════════════════════════════════
   CHAOS AUTH — script.js
   - Tab switching
   - Validation with inline errors
   - Password strength meter
   - Runaway button on bad input 😂
   - Success state on valid submit
═══════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Helpers ──────────────────────────── */
  const $  = id => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }

  /* ── Tab switching ────────────────────── */
  const TABS = ['login', 'signup', 'reset'];

  function switchTab(name) {
    TABS.forEach(t => {
      const tab   = document.querySelector(`.tab[data-tab="${t}"]`);
      const panel = $('panel-' + t);
      tab.classList.toggle('active', t === name);
      tab.setAttribute('aria-selected', t === name);
      panel.classList.toggle('active', t === name);
    });
    clearAllErrors();
    snapBtnToSlot('btn-' + name, 'slot-' + name);
    currentTab = name;
  }

  $$('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  $$('[data-switch]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      switchTab(a.dataset.switch);
    });
  });

  /* ── Current tab tracker ──────────────── */
  let currentTab = 'login';

  /* ── Btn-slot positioning ─────────────── */
  function getSlotRect(slotId) {
    return $(slotId).getBoundingClientRect();
  }

  function snapBtnToSlot(btnId, slotId) {
    const btn = $(btnId);
    const r   = getSlotRect(slotId);
    btn.classList.remove('running', 'success');
    btn.style.left   = r.left + 'px';
    btn.style.top    = r.top  + 'px';
    btn.style.width  = r.width + 'px';
  }

  function positionAllBtns() {
    snapBtnToSlot('btn-login',  'slot-login');
    snapBtnToSlot('btn-signup', 'slot-signup');
    snapBtnToSlot('btn-reset',  'slot-reset');
  }

  window.addEventListener('load',   positionAllBtns);
  window.addEventListener('resize', positionAllBtns);

  /* ── Errors ───────────────────────────── */
  function showErr(errId, inputEl) {
    const e = $(errId);
    if (e) e.classList.add('visible');
    if (inputEl) inputEl.classList.add('is-error');
  }

  function hideErr(errId, inputEl) {
    const e = $(errId);
    if (e) e.classList.remove('visible');
    if (inputEl) inputEl.classList.remove('is-error');
  }

  function clearAllErrors() {
    $$('.err').forEach(e => e.classList.remove('visible'));
    $$('input').forEach(i => i.classList.remove('is-error'));
  }

  /* ── Validation ───────────────────────── */
  function validateLogin() {
    let ok = true;
    const email = $('login-email');
    const pass  = $('login-pass');

    if (!isEmail(email.value)) { showErr('err-login-email', email); ok = false; }
    else hideErr('err-login-email', email);

    if (pass.value.length < 1) { showErr('err-login-pass', pass); ok = false; }
    else hideErr('err-login-pass', pass);

    return ok;
  }

  function validateSignup() {
    let ok = true;
    const name    = $('signup-name');
    const email   = $('signup-email');
    const pass    = $('signup-pass');
    const confirm = $('signup-confirm');

    if (name.value.trim().length < 2) { showErr('err-signup-name', name); ok = false; }
    else hideErr('err-signup-name', name);

    if (!isEmail(email.value)) { showErr('err-signup-email', email); ok = false; }
    else hideErr('err-signup-email', email);

    if (pass.value.length < 8) { showErr('err-signup-pass', pass); ok = false; }
    else hideErr('err-signup-pass', pass);

    if (confirm.value !== pass.value || confirm.value.length < 1) {
      showErr('err-signup-confirm', confirm); ok = false;
    } else hideErr('err-signup-confirm', confirm);

    return ok;
  }

  function validateReset() {
    const email = $('reset-email');
    if (!isEmail(email.value)) { showErr('err-reset-email', email); return false; }
    hideErr('err-reset-email', email);
    return true;
  }

  /* ── Password strength ────────────────── */
  $('signup-pass').addEventListener('input', function () {
    const val  = this.value;
    const wrap = $('strength-wrap');
    if (!val.length) { wrap.classList.remove('show'); return; }
    wrap.classList.add('show');

    let score = 0;
    if (val.length >= 8)  score++;
    if (val.length >= 12) score++;
    if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
    if (/[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val)) score++;

    const cls   = score <= 1 ? 'weak' : score <= 2 ? 'medium' : 'strong';
    const label = score <= 1 ? 'Weak' : score <= 2 ? 'Medium' : 'Strong';
    const color = score <= 1 ? '#e53e5a' : score <= 2 ? '#f59e0b' : '#16a97a';

    ['sb1','sb2','sb3','sb4'].forEach((id, i) => {
      const el = $(id);
      el.className = 'sbar' + (i < score ? ' ' + cls : '');
    });
    const lbl = $('strength-lbl');
    lbl.textContent = label;
    lbl.style.color = color;
  });

  /* ── Eye toggle ───────────────────────── */
  $$('.eye-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = $(btn.dataset.target);
      input.type  = input.type === 'password' ? 'text' : 'password';
      btn.querySelector('.eye-icon').style.opacity =
        input.type === 'text' ? '0.4' : '1';
    });
  });

  /* ── RUNAWAY BUTTON 😂 ────────────────── */
  const ESCAPE_MESSAGES = {
    login:  ['Sign In', 'Really?', 'Check again', 'Nope!', 'Fill it right'],
    signup: ['Create Account', 'Not yet!', 'Almost…', 'Fix errors', 'Try harder'],
    reset:  ['Send Reset Link', 'Hmm…', 'Valid email?', 'Try again'],
  };
  let msgIndexes = { login: 0, signup: 0, reset: 0 };

  function escapeBtn(btnId, slotId) {
    const btn = $(btnId);
    const bw  = btn.offsetWidth;
    const bh  = btn.offsetHeight;
    const pad = 16;

    const maxX = window.innerWidth  - bw - pad;
    const maxY = window.innerHeight - bh - pad;

    // Pick a random spot far from current position
    let nx, ny, tries = 0;
    do {
      nx = Math.random() * maxX + pad;
      ny = Math.random() * maxY + pad;
      tries++;
    } while (
      tries < 20 &&
      Math.abs(nx - parseFloat(btn.style.left)) < 120 &&
      Math.abs(ny - parseFloat(btn.style.top))  < 80
    );

    btn.classList.add('running');
    btn.style.left = nx + 'px';
    btn.style.top  = ny + 'px';

    // Cycle through fun messages
    const tab  = currentTab;
    const msgs = ESCAPE_MESSAGES[tab];
    msgIndexes[tab] = (msgIndexes[tab] + 1) % msgs.length;
    btn.textContent = msgs[msgIndexes[tab]];

    // Reset message after a moment
    setTimeout(() => {
      if (btn.classList.contains('running') && !btn.classList.contains('success')) {
        btn.textContent = msgs[0];
      }
    }, 1400);
  }

  /* ── Submit handler ───────────────────── */
  function handleSubmit(tab) {
    const btnId  = 'btn-' + tab;
    const slotId = 'slot-' + tab;
    const validators = { login: validateLogin, signup: validateSignup, reset: validateReset };
    const successMsgs = {
      login:  '🔓 Welcome back! Redirecting…',
      signup: '🎉 Account created! Welcome!',
      reset:  '📧 Reset link sent! Check your inbox.',
    };
    const successLabels = {
      login:  '✓ Access Granted',
      signup: '✓ Account Created',
      reset:  '✓ Email Sent',
    };

    const valid = validators[tab]();

    if (!valid) {
      escapeBtn(btnId, slotId);
      return;
    }

    // ✅ All good — snap back, go green
    snapBtnToSlot(btnId, slotId);
    const btn = $(btnId);
    setTimeout(() => {
      btn.classList.add('success');
      btn.textContent = successLabels[tab];
      showToast(successMsgs[tab]);
    }, 100);
  }

  ['login', 'signup', 'reset'].forEach(tab => {
    $('btn-' + tab).addEventListener('click', () => handleSubmit(tab));
    // Also intercept clicks on the slot itself when button has escaped
    $('slot-' + tab).addEventListener('click', () => handleSubmit(tab));
  });

  /* ── Social buttons ───────────────────── */
  $$('.btn-social').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => (btn.style.transform = ''), 150);
      showToast('↗ Redirecting to ' + btn.dataset.provider + '…');
    });
  });

  /* ── Toast ────────────────────────────── */
  let toastTimer;
  function showToast(msg) {
    const t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  }

})();

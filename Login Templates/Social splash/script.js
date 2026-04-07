/* =============================================
   SOCIAL SPLASH — script.js
   Style Lovin Logins
   ============================================= */

(() => {
  'use strict';

  /* ── Theme toggle ── */
  const html        = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const STORAGE_KEY = 'social-splash-theme';

  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
  html.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ── More / Providers flyout ── */
  const moreWrap  = document.getElementById('moreWrap');
  const btnMore   = document.getElementById('btnMore');
  const flyout    = document.getElementById('providersFlyout');

  btnMore.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = moreWrap.classList.toggle('open');
    btnMore.setAttribute('aria-expanded', String(isOpen));
    flyout.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close flyout on outside click
  document.addEventListener('click', () => {
    if (moreWrap.classList.contains('open')) {
      moreWrap.classList.remove('open');
      btnMore.setAttribute('aria-expanded', 'false');
      flyout.setAttribute('aria-hidden', 'true');
    }
  });

  // Prevent flyout from closing when clicking inside
  flyout.addEventListener('click', (e) => e.stopPropagation());

  /* ── Provider click feedback ── */
  document.querySelectorAll('.btn-provider').forEach(btn => {
    btn.addEventListener('click', () => {
      const provider = btn.dataset.provider;
      // Placeholder — replace with real OAuth redirect
      console.log(`Signing in with: ${provider}`);

      // Brief visual flash
      btn.style.background = 'rgba(124,111,247,0.18)';
      setTimeout(() => { btn.style.background = ''; }, 500);

      // Close flyout
      moreWrap.classList.remove('open');
      btnMore.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── Facebook click ── */
  document.getElementById('btnFacebook')?.addEventListener('click', () => {
    console.log('Signing in with: Facebook');
  });

  /* ── Guest click ── */
  document.getElementById('btnGuest')?.addEventListener('click', () => {
    console.log('Continuing as guest');
  });

  /* ── Terms checkbox — require before sign-in ── */
  const termsCheck = document.getElementById('termsCheck');
  const allSignBtns = document.querySelectorAll('.btn-facebook, .btn-guest, .btn-provider');

  function updateBtnState() {
    const agreed = termsCheck.checked;
    allSignBtns.forEach(btn => {
      btn.style.opacity = agreed ? '1' : '0.5';
      btn.style.pointerEvents = agreed ? '' : 'none';
    });
  }

  updateBtnState(); // init
  termsCheck.addEventListener('change', updateBtnState);

  /* ── Ripple on card clicks ── */
  const card       = document.getElementById('card');
  const ripplePool = document.getElementById('ripplePool');

  card.addEventListener('click', (e) => {
    const rect = card.getBoundingClientRect();
    const x    = e.clientX - rect.left;
    const y    = e.clientY - rect.top;
    const size = 80;

    const dot = document.createElement('span');
    dot.classList.add('ripple');
    dot.style.cssText = `
      width:${size}px; height:${size}px;
      left:${x - size/2}px; top:${y - size/2}px;
    `;
    ripplePool.appendChild(dot);
    dot.addEventListener('animationend', () => dot.remove());
  });

  /* ── Subtle card entrance stagger for children ── */
  const items = card.querySelectorAll('.wordmark, .headline, .sub, .btn-facebook, .or-row, .quick-row, .terms-label');
  items.forEach((el, i) => {
    el.style.opacity  = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = `opacity 0.45s ease ${i * 0.06 + 0.1}s, transform 0.45s cubic-bezier(.22,.68,0,1.2) ${i * 0.06 + 0.1}s`;
    // Trigger reflow then animate in
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity  = '1';
      el.style.transform = 'none';
    }));
  });

})();

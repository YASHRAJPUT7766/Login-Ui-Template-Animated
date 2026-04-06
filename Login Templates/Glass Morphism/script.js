/* ===================================================
   GLASSMORPHISM DARK — script.js
   Style Lovin Logins
   =================================================== */

(() => {
  'use strict';

  /* ── Password toggle ── */
  const toggleBtn = document.querySelector('.toggle-pass');
  const passInput = document.getElementById('password');
  const eyeOn     = toggleBtn?.querySelector('.icon-eye');
  const eyeOff    = toggleBtn?.querySelector('.icon-eye-off');

  toggleBtn?.addEventListener('click', () => {
    const hidden = passInput.type === 'password';
    passInput.type = hidden ? 'text' : 'password';
    eyeOn.hidden  = hidden;
    eyeOff.hidden = !hidden;
    toggleBtn.setAttribute('aria-label', hidden ? 'Hide password' : 'Show password');
  });

  /* ── Inline field validation ── */
  function getField(input) {
    return input.closest('.field');
  }

  function showError(input, msg) {
    const field = getField(input);
    field.classList.add('is-error');
    field.classList.remove('is-valid');
    field.querySelector('.field-error').textContent = msg;
  }

  function showValid(input) {
    const field = getField(input);
    field.classList.remove('is-error');
    field.classList.add('is-valid');
    field.querySelector('.field-error').textContent = '';
  }

  function clearState(input) {
    const field = getField(input);
    field.classList.remove('is-error', 'is-valid');
    field.querySelector('.field-error').textContent = '';
  }

  const emailInput = document.getElementById('email');

  emailInput?.addEventListener('blur', () => {
    const val = emailInput.value.trim();
    if (!val) return clearState(emailInput);
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    ok ? showValid(emailInput) : showError(emailInput, 'Please enter a valid email address.');
  });

  passInput?.addEventListener('blur', () => {
    const val = passInput.value;
    if (!val) return clearState(passInput);
    val.length >= 6 ? showValid(passInput) : showError(passInput, 'Password must be at least 6 characters.');
  });

  /* ── Form submit ── */
  const form       = document.querySelector('.login-form');
  const submitBtn  = document.querySelector('.btn-submit');
  const btnText    = submitBtn?.querySelector('.btn-text');
  const btnLoader  = submitBtn?.querySelector('.btn-loader');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* Validate both fields before submit */
    let valid = true;

    const emailVal = emailInput.value.trim();
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      showError(emailInput, 'Please enter a valid email address.');
      valid = false;
    }

    const passVal = passInput.value;
    if (!passVal || passVal.length < 6) {
      showError(passInput, 'Password must be at least 6 characters.');
      valid = false;
    }

    if (!valid) return;

    /* Loading state */
    submitBtn.disabled = true;
    btnText.hidden     = true;
    btnLoader.hidden   = false;

    /* Simulate async auth (replace with real call) */
    await new Promise(r => setTimeout(r, 1800));

    /* Reset */
    submitBtn.disabled = false;
    btnText.hidden     = false;
    btnLoader.hidden   = true;

    /* Success feedback (placeholder) */
    btnText.textContent = '✓ Welcome back!';
    submitBtn.style.background = 'linear-gradient(135deg, #4edfa0, #1db877)';
    submitBtn.style.boxShadow  = '0 4px 20px rgba(78, 223, 160, 0.4)';

    setTimeout(() => {
      btnText.textContent = 'Sign in';
      submitBtn.style.background = '';
      submitBtn.style.boxShadow  = '';
    }, 3000);
  });

  /* ── Subtle card tilt on mouse move (desktop only) ── */
  const card = document.querySelector('.card');

  if (window.matchMedia('(pointer: fine)').matches && card) {
    document.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / window.innerWidth;
      const dy    = (e.clientY - cy) / window.innerHeight;
      const rotX  = (-dy * 5).toFixed(2);
      const rotY  = ( dx * 5).toFixed(2);
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    document.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  }

})();

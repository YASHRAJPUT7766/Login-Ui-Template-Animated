<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,3,19&height=180&section=header&text=JavaScript%20Patterns&fontSize=38&fontColor=fff&animation=twinkling&fontAlignY=38&desc=Copy-Paste%20Patterns%20for%20Interactive%20Login%20UIs&descAlignY=58&descSize=15" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=800&color=FFE66D&center=true&vCenter=true&width=600&lines=Password+toggle.+Form+validation.+Particles.;All+vanilla+JS.+No+npm.+No+bundler.;Copy+%E2%86%92+Paste+%E2%86%92+Customize+%E2%86%92+Ship+%F0%9F%9A%80)](https://git.io/typing-svg)

</div>

---

## 👁️ Password Show / Hide Toggle

```js
const toggle = document.querySelector('.password-toggle');
const input  = document.querySelector('#password');
const eyeIcon = document.querySelector('#eye-icon');

toggle.addEventListener('click', () => {
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';

  // Update icon/text
  if (eyeIcon) {
    eyeIcon.src = isHidden
      ? '../../assets/icons/eye-off.svg'
      : '../../assets/icons/eye.svg';
  }

  toggle.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
});
```

```html
<!-- HTML setup -->
<div class="input-wrapper">
  <input type="password" id="password" autocomplete="current-password">
  <button class="password-toggle" type="button" aria-label="Show password">
    <img src="../../assets/icons/eye.svg" id="eye-icon" alt="">
  </button>
</div>
```

---

## ✅ Email Validation

```js
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPassword(password) {
  return password.length >= 8;
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email    = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (!isValidEmail(email)) {
    showError('#email', 'Enter a valid email address');
    return;
  }

  if (!isValidPassword(password)) {
    showError('#password', 'Password must be at least 8 characters');
    return;
  }

  // All good — proceed
  handleSubmit({ email, password });
});

function showError(selector, message) {
  const input = document.querySelector(selector);
  const error = input.parentElement.querySelector('.error-msg');
  if (error) error.textContent = message;
  input.classList.add('error');
  shakeElement(input);
  input.focus();
}
```

---

## 💥 Shake Animation on Error

Shake the input when validation fails:

```js
function shakeElement(el) {
  el.classList.remove('shake'); // reset if already shaking
  void el.offsetWidth;          // force reflow
  el.classList.add('shake');
  el.addEventListener('animationend', () => {
    el.classList.remove('shake');
  }, { once: true });
}
```

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-8px); }
  40%, 80% { transform: translateX(8px); }
}

.shake {
  animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

input.error {
  border-color: #ff4757;
  box-shadow: 0 0 0 3px rgba(255, 71, 87, 0.2);
}
```

---

## ⏳ Loading State on Submit Button

```js
const form = document.querySelector('form');
const btn  = form.querySelector('button[type="submit"]');

async function handleSubmit(data) {
  // Show loading
  btn.disabled    = true;
  btn.textContent = 'Signing in...';
  btn.classList.add('loading');

  try {
    await fakeAuthDelay(1500); // replace with real API call
    // success — redirect or show success state
    btn.textContent = '✓ Done!';
    btn.classList.add('success');
  } catch (err) {
    btn.disabled    = false;
    btn.textContent = 'Try Again';
    btn.classList.remove('loading');
  }
}

function fakeAuthDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

```css
.btn.loading {
  opacity: 0.7;
  cursor: not-allowed;
  position: relative;
}

.btn.loading::after {
  content: '';
  position: absolute;
  right: 16px; top: 50%;
  transform: translateY(-50%);
  width: 14px; height: 14px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin { to { transform: translateY(-50%) rotate(360deg); } }
```

---

## 🔢 OTP / PIN Input (auto-focus next)

```js
const inputs = document.querySelectorAll('.otp-input');

inputs.forEach((input, i) => {
  input.addEventListener('input', () => {
    if (input.value && i < inputs.length - 1) {
      inputs[i + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && i > 0) {
      inputs[i - 1].focus();
    }
  });

  // Allow paste of full OTP code
  input.addEventListener('paste', (e) => {
    const paste = e.clipboardData.getData('text').replace(/\D/g, '');
    [...paste].slice(0, inputs.length - i).forEach((char, j) => {
      if (inputs[i + j]) inputs[i + j].value = char;
    });
    inputs[Math.min(i + paste.length, inputs.length - 1)].focus();
    e.preventDefault();
  });
});
```

---

## 🌟 Particle Background (Canvas)

Floating particles on canvas — works great for dark, space, or ambient designs:

```js
const canvas = document.querySelector('canvas');
const ctx    = canvas.getContext('2d');

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const particles = Array.from({ length: 80 }, () => ({
  x:  Math.random() * canvas.width,
  y:  Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.4,
  vy: (Math.random() - 0.5) * 0.4,
  r:  Math.random() * 1.5 + 0.5,
  o:  Math.random() * 0.5 + 0.1,
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    // Wrap around edges
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width)  p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${p.o})`;
    ctx.fill();
  });

  requestAnimationFrame(draw);
}
draw();
```

---

## 🎭 Ripple Effect on Button Click

```js
document.querySelectorAll('.btn-ripple').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect   = this.getBoundingClientRect();
    const x      = e.clientX - rect.left;
    const y      = e.clientY - rect.top;
    const ripple = document.createElement('span');

    ripple.className = 'ripple';
    ripple.style.cssText = `left:${x}px; top:${y}px`;
    this.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());
  });
});
```

```css
.btn-ripple { position: relative; overflow: hidden; }

.ripple {
  position: absolute;
  border-radius: 50%;
  width: 10px; height: 10px;
  background: rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%) scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none;
}

@keyframes ripple {
  to { transform: translate(-50%, -50%) scale(30); opacity: 0; }
}
```

---

## 🌗 Dark / Light Mode Toggle

```js
const toggle = document.querySelector('#theme-toggle');
const root   = document.documentElement;

// Load saved preference
const saved = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
```

```css
:root[data-theme="dark"] {
  --bg: #0f0f0f;
  --surface: #1a1a1a;
  --text: #ffffff;
}

:root[data-theme="light"] {
  --bg: #f5f5f5;
  --surface: #ffffff;
  --text: #111111;
}
```

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,3,19&height=80&section=footer" width="100%"/>

*Vanilla JS is underrated. Ship it.* ⚡

</div>

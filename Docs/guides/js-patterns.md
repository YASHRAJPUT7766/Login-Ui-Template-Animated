# JavaScript Patterns

Common JS patterns used across login designs.

## Password Toggle

```js
const toggle = document.querySelector('.password-toggle');
const input = document.querySelector('#password');

toggle.addEventListener('click', () => {
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  toggle.textContent = isPassword ? '🙈' : '👁️';
});
```

## Form Validation

```js
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  if (!validateEmail(email)) {
    showError('Invalid email address');
    return;
  }
  // proceed
});
```

## Shake Animation on Error

```js
function shakeElement(el) {
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
.shake { animation: shake 0.4s ease; }
```

## Loading State on Button

```js
const btn = document.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  btn.disabled = true;
  btn.textContent = 'Signing in...';
  btn.classList.add('loading');

  await fakeAuth(); // your logic here

  btn.disabled = false;
  btn.textContent = 'Sign In';
  btn.classList.remove('loading');
});
```

## Particle Background (canvas)

```js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.5,
  vy: (Math.random() - 0.5) * 0.5,
  r: Math.random() * 2 + 1,
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();
```

#!/usr/bin/env node
/**
 * new-design.js
 * Scaffolds a new design folder.
 * Usage: node scripts/new-design.js my-design-name
 */

const fs = require('fs');
const path = require('path');

const name = process.argv[2];

if (!name) {
  console.error('Usage: node scripts/new-design.js <design-name>');
  process.exit(1);
}

if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
  console.error('❌ Design name must be kebab-case (e.g., my-cool-login)');
  process.exit(1);
}

const dir = path.join(__dirname, '..', 'login-designs', name);

if (fs.existsSync(dir)) {
  console.error(`❌ Design "${name}" already exists`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(path.join(dir, 'index.html'), `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div class="card">
      <h1>Welcome Back</h1>
      <p class="subtitle">Sign in to continue</p>
      <form>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" autocomplete="email">
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="••••••••" autocomplete="current-password">
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p class="footer">Don't have an account? <a href="#">Sign up</a></p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
`);

fs.writeFileSync(path.join(dir, 'style.css'), `/* ${name} — Style Lovin Logins */

:root {
  --bg: #0f0f0f;
  --surface: #1a1a1a;
  --accent: #ff6b6b;
  --text: #ffffff;
  --muted: #888888;
  --border: #2a2a2a;
  --radius: 12px;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, sans-serif;
  display: grid;
  place-items: center;
}

.container {
  width: 100%;
  max-width: 420px;
  padding: 1rem;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.5rem;
}

h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: var(--muted);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.field {
  margin-bottom: 1.25rem;
}

label {
  display: block;
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 0.4rem;
}

input {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.2s;
  outline: none;
}

input:focus {
  border-color: var(--accent);
}

button {
  width: 100%;
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 0.85rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: opacity 0.2s;
}

button:hover { opacity: 0.9; }

.footer {
  text-align: center;
  font-size: 0.85rem;
  color: var(--muted);
  margin-top: 1.5rem;
}

.footer a {
  color: var(--accent);
  text-decoration: none;
}
`);

fs.writeFileSync(path.join(dir, 'script.js'), `// ${name} — script.js

const form = document.querySelector('form');
const btn = form.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  btn.textContent = 'Signing in...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Sign In';
    btn.disabled = false;
  }, 1500);
});
`);

console.log(`\n✅ New design scaffolded: login-designs/${name}/`);
console.log(`   ├── index.html`);
console.log(`   ├── style.css`);
console.log(`   └── script.js`);
console.log(`\n👉 Open login-designs/${name}/index.html to start designing!\n`);

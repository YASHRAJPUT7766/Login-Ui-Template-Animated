#!/usr/bin/env node
/**
 * generate-index.js
 * Builds dist/index.html — a browsable gallery of all login designs.
 */

const fs = require('fs');
const path = require('path');

const DESIGNS_DIR = path.join(__dirname, '..', 'login-designs');
const DIST_DIR = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR);

const designs = fs.readdirSync(DESIGNS_DIR).filter(f => {
  return fs.statSync(path.join(DESIGNS_DIR, f)).isDirectory() && !f.startsWith('.');
});

const cards = designs.map(name => {
  const hasPreview = fs.existsSync(path.join(DESIGNS_DIR, name, 'preview.png'));
  const imgSrc = hasPreview
    ? `../login-designs/${name}/preview.png`
    : `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23666' font-size='14' font-family='monospace'%3Eno preview%3C/text%3E%3C/svg%3E`;

  return `
  <a class="card" href="../login-designs/${name}/index.html" target="_blank">
    <div class="card-img" style="background-image: url('${imgSrc}')"></div>
    <div class="card-label">${name}</div>
  </a>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Style Lovin Logins — Gallery (${designs.length} designs)</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0a; color: #fff; font-family: 'JetBrains Mono', monospace; }
    header { padding: 2rem; border-bottom: 1px solid #222; }
    header h1 { font-size: 1.5rem; color: #ff6b6b; }
    header p { color: #666; margin-top: 0.25rem; font-size: 0.85rem; }
    .search { padding: 1rem 2rem; }
    .search input {
      background: #111; border: 1px solid #333; color: #fff;
      padding: 0.5rem 1rem; border-radius: 6px; width: 100%; max-width: 400px;
      font-family: inherit; font-size: 0.9rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem; padding: 1.5rem 2rem;
    }
    .card {
      background: #111; border: 1px solid #222; border-radius: 10px;
      overflow: hidden; text-decoration: none; color: inherit;
      transition: border-color 0.2s, transform 0.2s;
    }
    .card:hover { border-color: #ff6b6b; transform: translateY(-2px); }
    .card-img {
      height: 180px; background-size: cover; background-position: center;
      background-color: #1a1a1a;
    }
    .card-label {
      padding: 0.75rem 1rem; font-size: 0.8rem; color: #888;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .card:hover .card-label { color: #ff6b6b; }
    .count { color: #4ecdc4; font-weight: bold; }
  </style>
</head>
<body>
  <header>
    <h1>🎨 Style Lovin Logins</h1>
    <p>Gallery — <span class="count">${designs.length}</span> designs and counting</p>
  </header>
  <div class="search">
    <input type="text" id="search" placeholder="Search designs..." oninput="filterCards(this.value)">
  </div>
  <div class="grid" id="grid">
    ${cards}
  </div>
  <script>
    function filterCards(query) {
      const cards = document.querySelectorAll('.card');
      const q = query.toLowerCase();
      cards.forEach(card => {
        const name = card.querySelector('.card-label').textContent.toLowerCase();
        card.style.display = name.includes(q) ? '' : 'none';
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html);
console.log(`✅ Gallery built → dist/index.html (${designs.length} designs)`);

#!/usr/bin/env node
/**
 * preview-server.js
 * Local server with design selector UI.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DESIGNS_DIR = path.join(__dirname, '..', 'login-designs');

const designs = fs.readdirSync(DESIGNS_DIR).filter(f => {
  return fs.statSync(path.join(DESIGNS_DIR, f)).isDirectory() && !f.startsWith('.');
});

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    const options = designs.map(d =>
      `<option value="${d}">${d}</option>`
    ).join('');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
<html>
<head>
  <title>Design Preview Server</title>
  <style>
    body { background: #111; color: #fff; font-family: monospace; padding: 2rem; }
    select { background: #222; color: #fff; border: 1px solid #444; padding: 0.5rem; font-size: 1rem; border-radius: 4px; }
    iframe { width: 100%; height: 80vh; border: 1px solid #333; border-radius: 8px; margin-top: 1rem; }
  </style>
</head>
<body>
  <h2>🎨 Design Preview</h2>
  <select onchange="document.getElementById('preview').src = '/design/' + this.value">
    <option value="">-- Select a design --</option>
    ${options}
  </select>
  <br>
  <iframe id="preview" src="about:blank"></iframe>
</body>
</html>`);
  } else if (req.url.startsWith('/design/')) {
    const name = req.url.replace('/design/', '').split('?')[0];
    const filePath = path.join(DESIGNS_DIR, name, 'index.html');
    if (fs.existsSync(filePath)) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(filePath));
    } else {
      res.writeHead(404); res.end('Not found');
    }
  } else {
    res.writeHead(404); res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`\n🚀 Preview server running at http://localhost:${PORT}\n`);
});

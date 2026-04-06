#!/usr/bin/env node
/**
 * folder-structure.test.js
 * Verifies every design folder has required files.
 */

const fs = require('fs');
const path = require('path');

const DESIGNS_DIR = path.join(__dirname, '..', 'login-designs');
let failed = 0;

const designs = fs.readdirSync(DESIGNS_DIR).filter(f => {
  return fs.statSync(path.join(DESIGNS_DIR, f)).isDirectory() && !f.startsWith('.');
});

for (const design of designs) {
  const dir = path.join(DESIGNS_DIR, design);

  if (!fs.existsSync(path.join(dir, 'index.html'))) {
    console.error(`FAIL: ${design} — missing index.html`);
    failed++;
  }

  if (!fs.existsSync(path.join(dir, 'style.css'))) {
    console.error(`FAIL: ${design} — missing style.css`);
    failed++;
  }
}

if (failed === 0) {
  console.log(`✅ All ${designs.length} designs have required files`);
} else {
  console.error(`❌ ${failed} issue(s) found`);
  process.exit(1);
}

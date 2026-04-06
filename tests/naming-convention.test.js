#!/usr/bin/env node
/**
 * naming-convention.test.js
 * Verifies all design folder names follow kebab-case.
 */

const fs = require('fs');
const path = require('path');

const DESIGNS_DIR = path.join(__dirname, '..', 'login-designs');
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;
let failed = 0;

const designs = fs.readdirSync(DESIGNS_DIR).filter(f => {
  return fs.statSync(path.join(DESIGNS_DIR, f)).isDirectory() && !f.startsWith('.');
});

for (const design of designs) {
  if (!KEBAB.test(design)) {
    console.error(`FAIL: "${design}" is not kebab-case`);
    failed++;
  }
}

if (failed === 0) {
  console.log(`✅ All ${designs.length} folder names follow kebab-case`);
} else {
  console.error(`❌ ${failed} naming issue(s) found`);
  process.exit(1);
}

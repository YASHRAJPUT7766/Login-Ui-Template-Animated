#!/usr/bin/env node
/**
 * html-validity.test.js
 * Basic checks on index.html files.
 */

const fs = require('fs');
const path = require('path');

const DESIGNS_DIR = path.join(__dirname, '..', 'login-designs');
let failed = 0;
let checked = 0;

const designs = fs.readdirSync(DESIGNS_DIR).filter(f => {
  return fs.statSync(path.join(DESIGNS_DIR, f)).isDirectory() && !f.startsWith('.');
});

for (const design of designs) {
  const htmlPath = path.join(DESIGNS_DIR, design, 'index.html');
  if (!fs.existsSync(htmlPath)) continue;

  const html = fs.readFileSync(htmlPath, 'utf8');
  checked++;

  if (!html.includes('<!DOCTYPE html>')) {
    console.error(`FAIL: ${design}/index.html — missing DOCTYPE`);
    failed++;
  }

  if (!html.includes('<html')) {
    console.error(`FAIL: ${design}/index.html — missing <html> tag`);
    failed++;
  }

  if (html.includes('C:\\') || html.includes('/Users/') || html.includes('/home/')) {
    console.error(`FAIL: ${design}/index.html — absolute path detected`);
    failed++;
  }
}

if (failed === 0) {
  console.log(`✅ ${checked} HTML files passed basic validity checks`);
} else {
  console.error(`❌ ${failed} issue(s) found`);
  process.exit(1);
}

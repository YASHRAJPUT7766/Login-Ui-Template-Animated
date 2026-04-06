#!/usr/bin/env node
/**
 * validate-designs.js
 * Checks every folder in login-designs/ for required files and format rules.
 */

const fs = require('fs');
const path = require('path');

const DESIGNS_DIR = path.join(__dirname, '..', 'login-designs');
const KEBAB_CASE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

let errors = 0;
let warnings = 0;
let passed = 0;

const designs = fs.readdirSync(DESIGNS_DIR).filter(f => {
  const full = path.join(DESIGNS_DIR, f);
  return fs.statSync(full).isDirectory() && !f.startsWith('.');
});

if (designs.length === 0) {
  console.log('⚠️  No designs found in login-designs/');
  process.exit(0);
}

for (const design of designs) {
  const designPath = path.join(DESIGNS_DIR, design);
  const issues = [];
  const warns = [];

  // Rule 1: kebab-case folder name
  if (!KEBAB_CASE.test(design)) {
    issues.push(`Folder name "${design}" must be kebab-case`);
  }

  // Rule 2: index.html required
  if (!fs.existsSync(path.join(designPath, 'index.html'))) {
    issues.push('Missing index.html');
  } else {
    const html = fs.readFileSync(path.join(designPath, 'index.html'), 'utf8');
    if (!html.includes('<!DOCTYPE html>')) {
      issues.push('index.html missing <!DOCTYPE html>');
    }
    if (!html.includes('<title>')) {
      warns.push('index.html missing <title> tag');
    }
    if (!html.includes('viewport')) {
      warns.push('index.html missing viewport meta tag');
    }
    if (/[A-Z]:\\|\/Users\//.test(html)) {
      issues.push('Absolute path detected in index.html');
    }
  }

  // Rule 3: style.css required
  if (!fs.existsSync(path.join(designPath, 'style.css'))) {
    issues.push('Missing style.css');
  }

  // Warning: preview.png recommended
  if (!fs.existsSync(path.join(designPath, 'preview.png'))) {
    warns.push('Missing preview.png (recommended for gallery)');
  }

  if (issues.length > 0) {
    console.log(`❌ ${design}`);
    issues.forEach(i => console.log(`   → ${i}`));
    errors += issues.length;
  } else if (warns.length > 0) {
    console.log(`⚠️  ${design}`);
    warns.forEach(w => console.log(`   ~ ${w}`));
    warnings += warns.length;
    passed++;
  } else {
    console.log(`✅ ${design}`);
    passed++;
  }
}

console.log('\n─────────────────────────────');
console.log(`✅ Passed:   ${passed}`);
console.log(`⚠️  Warnings: ${warnings}`);
console.log(`❌ Errors:   ${errors}`);
console.log('─────────────────────────────');

if (errors > 0) process.exit(1);

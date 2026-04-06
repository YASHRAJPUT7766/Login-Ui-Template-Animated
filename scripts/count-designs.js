#!/usr/bin/env node
/**
 * count-designs.js
 * Counts all designs in login-designs/ and prints a summary.
 */

const fs = require('fs');
const path = require('path');

const DESIGNS_DIR = path.join(__dirname, '..', 'login-designs');

const designs = fs.readdirSync(DESIGNS_DIR).filter(f => {
  return fs.statSync(path.join(DESIGNS_DIR, f)).isDirectory() && !f.startsWith('.');
});

const withJs = designs.filter(d =>
  fs.existsSync(path.join(DESIGNS_DIR, d, 'script.js'))
);

const withPreview = designs.filter(d =>
  fs.existsSync(path.join(DESIGNS_DIR, d, 'preview.png'))
);

console.log('');
console.log('🎨 Style Lovin Logins — Design Count');
console.log('═══════════════════════════════════');
console.log(`📁 Total designs:      ${designs.length}`);
console.log(`🟡 With JavaScript:    ${withJs.length}`);
console.log(`🖼️  With preview.png:   ${withPreview.length}`);
console.log('───────────────────────────────────');

if (designs.length >= 1000) {
  console.log('🚀 1000+ designs achieved! 🎉');
} else {
  console.log(`📊 Progress to 1000:   ${designs.length}/1000 (${Math.round(designs.length/10)}%)`);
}
console.log('');

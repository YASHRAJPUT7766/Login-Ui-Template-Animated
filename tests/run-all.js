#!/usr/bin/env node
/**
 * run-all.js — Test runner
 * Runs all test files in the tests/ directory.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const tests = fs.readdirSync(__dirname)
  .filter(f => f.endsWith('.test.js'))
  .map(f => path.join(__dirname, f));

if (tests.length === 0) {
  console.log('ℹ️  No test files found.');
  process.exit(0);
}

let failed = 0;
for (const test of tests) {
  try {
    console.log(`\n▶ Running: ${path.basename(test)}`);
    execSync(`node ${test}`, { stdio: 'inherit' });
    console.log(`✅ Passed`);
  } catch {
    console.log(`❌ Failed`);
    failed++;
  }
}

console.log(`\n─────────────────`);
console.log(`Tests: ${tests.length - failed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);

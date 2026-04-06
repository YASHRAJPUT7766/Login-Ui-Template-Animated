<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=3,4,15&height=100&text=Tests&fontSize=36&fontColor=fff&animation=fadeIn&desc=Automated%20Quality%20Checks%20for%20Every%20Design&descSize=14&descAlignY=76" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=900&color=FF6B6B&center=true&vCenter=true&width=500&lines=Green+CI+%3D+your+PR+gets+merged+%F0%9F%9F%A2;Red+CI+%3D+fix+it+before+asking+%F0%9F%94%B4;Run+npm+test+before+you+push!)](https://git.io/typing-svg)

</div>

---

## 🧪 Test Suite Overview

Every PR is automatically tested by GitHub Actions CI. If tests fail, the PR won't be merged — no exceptions.

```
tests/
│
├── run-all.js                  ← Master runner (executes all *.test.js)
├── folder-structure.test.js    ← Checks required files exist
├── naming-convention.test.js   ← Validates kebab-case folder names
└── html-validity.test.js       ← Basic HTML sanity checks
```

---

## 🔍 What Each Test Checks

### `folder-structure.test.js`

Verifies every design folder has the required files:

```
✅  glassmorphism-dark/index.html   — exists
✅  glassmorphism-dark/style.css    — exists
❌  my-design/index.html            — MISSING → PR blocked
```

### `naming-convention.test.js`

Every folder name must be `kebab-case`:

```
✅  retro-terminal-green    — valid
✅  minimal-split-screen    — valid
❌  GlassMorphism           — FAIL: uppercase
❌  login_1                 — FAIL: underscore
❌  My Login                — FAIL: spaces
```

### `html-validity.test.js`

Checks every `index.html` for:

- `<!DOCTYPE html>` present
- `<html` tag present
- No absolute paths (`C:\`, `/Users/`, `/home/`)

---

## 🚀 Running Tests Locally

```bash
# Run all tests
npm test

# Run a single test file
node tests/folder-structure.test.js
node tests/naming-convention.test.js
node tests/html-validity.test.js
```

### Example output

```
▶ Running: folder-structure.test.js
✅ All 42 designs have required files
✅ Passed

▶ Running: naming-convention.test.js
✅ All 42 folder names follow kebab-case
✅ Passed

▶ Running: html-validity.test.js
✅ 42 HTML files passed basic validity checks
✅ Passed

─────────────────
Tests: 3 passed, 0 failed
```

---

## ➕ Adding a New Test

1. Create `tests/your-check.test.js`
2. Use `process.exit(1)` when it fails
3. `run-all.js` auto-discovers all `*.test.js` files — no config needed

```js
#!/usr/bin/env node
// tests/your-check.test.js

let failed = 0;

// ... your check logic ...

if (failed === 0) {
  console.log('✅ All checks passed');
} else {
  console.error(`❌ ${failed} issue(s) found`);
  process.exit(1);
}
```

---

## 🔄 CI Integration

Tests run automatically on every PR via `.github/workflows/ci.yml`:

```
Push / PR → GitHub Actions
  → npm ci
  → npm run validate
  → npm test
  → ✅ merge allowed  OR  ❌ blocked
```

<div align="center">

*Tests are love letters to your future self.*  
*And to every contributor who comes after you.* 💌

</div>

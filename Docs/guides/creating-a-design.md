<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,14,20&height=180&section=header&text=Creating%20a%20Design&fontSize=40&fontColor=fff&animation=twinkling&fontAlignY=38&desc=Your%20Login%20UI%20From%20Folder%20to%20PR%20%E2%80%94%20Step%20by%20Step&descAlignY=58&descSize=15" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=800&color=FF6B6B&center=true&vCenter=true&width=550&lines=Pick+a+vibe.+Write+some+CSS.+Ship+it.+%F0%9F%94%A5;There+are+no+wrong+aesthetics+here.;Weird+%3E+Generic.+Always.)](https://git.io/typing-svg)

</div>

---

## 🏁 Step 1 — Scaffold Your Folder

The fastest way — use the built-in scaffold script:

```bash
# From the repo root:
node scripts/new-design.js my-awesome-login
```

This instantly creates:

```
login-designs/my-awesome-login/
├── index.html   ← starter template, ready to go
├── style.css    ← CSS variables + base styles
└── script.js    ← form submit + password toggle
```

Or do it manually:

```bash
mkdir login-designs/my-awesome-login
cd login-designs/my-awesome-login
touch index.html style.css script.js
```

---

## 🧱 Step 2 — Build Your `index.html`

Every design needs a valid `index.html`. Here's the minimum required structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Awesome Login</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="login-container">
    <h1>Welcome Back</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="you@example.com" autocomplete="email">

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="••••••••" autocomplete="current-password">

      <button type="submit">Sign In</button>
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

> ⚠️ Always use `<label>` elements — they're required for accessibility. See [Accessibility Guide](accessibility.md).

---

## 🎨 Step 3 — Style It in `style.css`

This is your canvas. No rules on aesthetics — go full send.

```css
/* Pro tip: always start with CSS variables */
:root {
  --bg: #0f0f0f;
  --surface: #1a1a1a;
  --accent: #ff6b6b;
  --text: #ffffff;
  --muted: #888888;
}

/* Use shared fonts from assets */
@import url('../../assets/fonts/fonts.css');

body {
  min-height: 100vh;
  background: var(--bg);
  display: grid;
  place-items: center;
  font-family: 'DM Sans', sans-serif;
}
```

Need CSS inspiration? → [CSS Techniques Reference](css-techniques.md)

---

## ⚡ Step 4 — Add Interactions in `script.js` *(optional)*

```js
// Password show/hide toggle
const toggle = document.querySelector('.pwd-toggle');
const input = document.querySelector('#password');

toggle?.addEventListener('click', () => {
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
});

// Form submit loading state
const form = document.querySelector('form');
const btn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btn.disabled = true;
  btn.textContent = 'Signing in...';
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'Sign In';
  }, 1500);
});
```

Need more patterns? → [JavaScript Patterns Reference](js-patterns.md)

---

## 📸 Step 5 — Take a Screenshot

A `preview.png` makes your design show up in the gallery — please include one!

| Spec | Value |
|:---|:---|
| **Filename** | `preview.png` |
| **Resolution** | `1280 × 720` px recommended |
| **Format** | PNG preferred (WebP OK) |
| **Shows** | The full login card/form, centered |

```
login-designs/my-awesome-login/
├── index.html
├── style.css
├── script.js
└── preview.png   ← add this!
```

---

## ✅ Step 6 — Validate Before PR

```bash
# From repo root:
npm run validate

# You want to see:
# ✅ my-awesome-login — OK
```

If there are ❌ errors, fix them before submitting. See [Validation Rules](../api/validation.md).

---

## 🚀 Step 7 — Submit a Pull Request

```bash
git checkout -b add/my-awesome-login
git add login-designs/my-awesome-login/
git commit -m "feat: add my-awesome-login design"
git push origin add/my-awesome-login
```

Then open a PR on GitHub. Paste a screenshot in the PR description. Done! 🎉

---

## 📋 Design Checklist

```
Before submitting your PR:

✅  Folder name is kebab-case
✅  index.html exists with <!DOCTYPE html>
✅  style.css exists
✅  Works by opening index.html directly (no build steps)
✅  Uses relative paths only (no /Users/me/... nonsense)
✅  Has <label> for every form input
✅  preview.png included (1280x720)
✅  npm run validate passes with no ❌ errors
```

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,14,20&height=80&section=footer" width="100%"/>

*Every design in this repo started exactly like yours — a blank index.html.* 🎨

</div>

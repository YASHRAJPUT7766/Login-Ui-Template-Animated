<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,14,20&height=100&text=Assets&fontSize=36&fontColor=fff&animation=fadeIn&desc=Shared%20Fonts%20%C2%B7%20Icons%20%C2%B7%20Vendor%20Libraries&descSize=14&descAlignY=78" width="100%"/>

</div>

---

## 📦 What's In Here

Shared resources that **any design can use** by referencing with a relative path.

```
assets/
│
├── 🔤 fonts/
│   └── fonts.css          ← 15+ curated Google Font @imports
│
├── 🎨 icons/              ← Ready-to-use SVG icons
│   ├── google.svg         (colored Google logo)
│   ├── github.svg         (GitHub mark)
│   ├── apple.svg          (Apple logo)
│   ├── twitter.svg        (X / Twitter)
│   ├── google.svg
│   ├── eye.svg            (show password)
│   ├── eye-off.svg        (hide password)
│   ├── lock.svg           (password field icon)
│   ├── mail.svg           (email field icon)
│   └── user.svg           (user field icon)
│
└── 📦 vendor/
    ├── normalize.css      ← CSS reset (v8.0.1)
    └── README.md
```

---

## 🔤 Using Fonts

From your design folder (`login-designs/my-design/style.css`):

```css
/* Option 1 — import the shared fonts file */
@import url('../../assets/fonts/fonts.css');

/* Option 2 — import directly from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

/* Then use it */
body {
  font-family: 'Playfair Display', serif;
}
```

### 🔤 Available Font Families

| Style | Fonts |
|:---|:---|
| **Modern / Sans** | Inter, DM Sans, Outfit |
| **Luxury / Serif** | Playfair Display, Cormorant Garamond, Libre Baskerville |
| **Terminal / Mono** | JetBrains Mono, Space Mono, Fira Code |
| **Brutalist / Bold** | Bebas Neue, Anton, Syne |
| **Playful** | Nunito, Poppins |

---

## 🎨 Using Icons

From your `index.html`:

```html
<!-- Social login buttons -->
<button class="social-btn">
  <img src="../../assets/icons/google.svg" alt="Google" width="20" height="20">
  Continue with Google
</button>

<!-- Password toggle -->
<button class="pwd-toggle" aria-label="Show password">
  <img src="../../assets/icons/eye.svg" alt="Show" id="eye-icon">
</button>

<!-- Input field icons -->
<div class="input-wrapper">
  <img src="../../assets/icons/mail.svg" class="input-icon" alt="">
  <input type="email" placeholder="Email">
</div>
```

---

## 📦 Using Vendor CSS

```html
<!-- In your index.html <head> -->
<link rel="stylesheet" href="../../assets/vendor/normalize.css">
<link rel="stylesheet" href="style.css">
```

---

## ➕ Adding New Assets

- **Icons** → SVG only, optimized, add to `icons/`
- **Fonts** → Add `@import` to `fonts/fonts.css`
- **Libraries** → Add minified file to `vendor/`, update `vendor/README.md`

> All assets must be **license-compatible** (MIT, Apache 2.0, OFL, or public domain).

<div align="center">

*Good assets are invisible. They let the design shine.* ✨

</div>

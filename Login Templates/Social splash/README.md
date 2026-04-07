# 🌊 social-splash

> **Category:** Social Login · **Vibe:** Clean & Human — zero AI-slop  
> **Live Preview:** [logintemplategithub.netlify.app/login-designs/social-splash/](https://logintemplategithub.netlify.app/login-designs/social-splash/)

---

## Preview

```
┌───────────────────────────────────┐  ← card (dark/light)
│                            [🌙 ☀] │  ← theme toggle (top-right)
│  • NUCLEUS                        │
│                                   │
│  Let's get                        │
│  you in.           ← gradient em  │
│  Choose how you'd like to cont.   │
│                                   │
│  [f  Sign in with Facebook      ] │  ← shimmer animation
│                                   │
│  ─────────── or ───────────       │
│                                   │
│  [ 👤 Guest        ] [ More › ]   │
│                         ┌───────┐ │  ← flyout slides up on "More"
│                         │ G Google    │
│                         │ ⊞ Microsoft │
│                         │  Apple     │
│                         │ 𝕏 Twitter   │
│                         └───────┘ │
│                                   │
│  ☐  I agree to Terms & Privacy   │  ← animated checkmark draw
└───────────────────────────────────┘
```

---

## Features

| Feature | Detail |
|---|---|
| 🌙 **Dark / Light toggle** | Smooth CSS var swap, persisted to localStorage |
| 🔵 **Facebook CTA** | Primary button with shimmer slide animation |
| 👤 **Guest button** | One-click guest access |
| ➕ **More flyout** | Slides up with staggered Google, Microsoft, Apple, X |
| ✅ **Terms checkbox** | SVG checkmark draw animation on tick |
| 🔒 **Terms gate** | Sign-in buttons dimmed until checkbox is ticked |
| 💧 **Ripple feedback** | Click ripple on card surface |
| 🎞️ **Entrance stagger** | Each element fades + slides in sequentially |
| 🌟 **Pulse wordmark dot** | Glowing animated brand indicator |

---

## Files

```
social-splash/
├── index.html   ← Full markup
├── style.css    ← All tokens, animations, dark+light theme
├── script.js    ← Toggle, flyout, ripple, stagger, terms gate
└── README.md    ← This file
```

---

## Customisation

```css
/* Colors live in :root and [data-theme="light"] */
:root {
  --facebook:  #1877f2;  /* FB button color */
  --check-fill: #7c6ff7; /* checkbox fill */
  --accent2:   #bba9ff;  /* link + gradient */
}
```

To change brand name — edit `.wordmark span` text in `index.html`.  
To add more providers — copy a `.btn-provider` block and increment `style="--i:N"`.

---

## Usage

```bash
open login-designs/social-splash/index.html
```

No server. No build. No npm. Just open.

---

*Part of [Style Lovin Logins](https://logintemplategithub.netlify.app) — beautiful login UI designs.*

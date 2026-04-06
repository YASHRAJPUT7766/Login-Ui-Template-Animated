# 🌫️ glassmorphism-dark

> **Category:** Glassmorphism · **Vibe:** Dreamy & Futuristic  
> **Live Preview:** [logintemplatesgithub.netlify.app/login-designs/glassmorphism-dark/](https://logintemplatesgithub.netlify.app/login-designs/glassmorphism-dark/)

---

## Preview

```
┌──────────────────────────────────────┐
│  ░░ animated purple blobs (bg) ░░    │
│                                      │
│  ┌────────────────────────────────┐  │
│  │  ◈  [brand icon]              │  │
│  │                                │  │
│  │   Welcome back                 │  │
│  │   Sign in to your account      │  │
│  │                                │  │
│  │  [ G Google ]  [ ⌥ GitHub  ]  │  │
│  │  ─────── or continue ───────   │  │
│  │                                │  │
│  │  ✉  Email address              │  │
│  │  [ you@example.com          ]  │  │
│  │                                │  │
│  │  🔒 Password       Forgot?     │  │
│  │  [ ••••••••••••           👁 ] │  │
│  │                                │  │
│  │  [▓▓▓  Sign in  ▓▓▓▓▓▓▓▓▓▓]  │  │
│  │                                │  │
│  │  Don't have an account?        │  │
│  │  Create one free →             │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

**Background:** Three animated gradient blobs (purple, magenta, cyan) slowly float  
**Card:** Frosted glass — `backdrop-filter: blur(20px)` + subtle white border  
**Button:** Gradient purple→magenta with glow shadow  
**Interaction:** Card subtly tilts on mouse move (desktop only)

---

## Files

```
glassmorphism-dark/
├── index.html   ← Full markup, semantic HTML5, no deps
├── style.css    ← All styles, CSS custom properties, animations
├── script.js    ← Password toggle, validation, tilt effect
└── README.md    ← You're reading it
```

---

## Features

| Feature | Details |
|---|---|
| 🎨 **Glassmorphism card** | `backdrop-filter` blur with layered transparency |
| 🌊 **Animated blobs** | 3 blobs with `float` keyframe animation |
| 👁️ **Password toggle** | Show/hide with SVG icon swap |
| ✅ **Live validation** | Inline error messages on blur |
| 🔄 **Submit state** | Loading spinner → success feedback |
| 🖱️ **Card tilt** | Subtle 3D tilt tracking mouse (desktop) |
| 📱 **Responsive** | Works on all screen sizes |
| ♿ **Accessible** | Labels, `aria-live`, keyboard navigable |

---

## Customisation

All colours live in CSS custom properties at the top of `style.css`:

```css
:root {
  --accent:    #7c6ff7;   /* primary purple */
  --accent-2:  #c471ed;   /* gradient end / magenta */
  --blur:      20px;      /* glass blur intensity */
  --radius:    18px;      /* card corner radius */
}
```

To change the colour theme, swap `--accent` and `--accent-2`.  
To increase the glass effect, raise `--blur`.

---

## Usage

Just open `index.html` in any browser — no npm, no build step needed.

```bash
open login-designs/glassmorphism-dark/index.html
```

The shared SVG icons are loaded from `../../assets/icons/` — this path works when the folder sits inside `login-designs/` as intended.

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| `backdrop-filter` | ✅ | ✅ 103+ | ✅ | ✅ |
| CSS custom props | ✅ | ✅ | ✅ | ✅ |
| CSS animations | ✅ | ✅ | ✅ | ✅ |

---

*Part of [Style Lovin Logins](https://logintemplatesgithub.netlify.app) — 1000+ beautiful login UI designs.*

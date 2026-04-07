# ⚡ chaos-auth

> **Category:** Multi-tab Auth · **Vibe:** Clean & Playful — with a runaway button  
> **Live Preview:** [logintemplatesgithub.netlify.app/login-designs/chaos-auth/](https://logintemplatesgithub.netlify.app/login-designs/chaos-auth/)

---

## Preview

```
         ┌──────────────┐
         │  ◈  [logo]   │   ← circular logo ring on top
         └──────────────┘
┌──────────────────────────────────────┐
│  [ Sign In ]  [ Sign Up ]  [ Reset ] │  ← tabs
│                                      │
│  Welcome back                        │
│  Sign in to your account             │
│                                      │
│  [ G  Google  ]  [ GH  GitHub  ]    │
│  ────────── or continue ──────────   │
│                                      │
│  Email                               │
│  [ you@example.com              ]    │
│                                      │
│  Password                            │
│  [ ••••••••               👁   ]    │
│                                      │
│  ☐ Remember me       Forgot →       │
│                                      │
│  [▓▓▓▓▓▓  Sign In  ▓▓▓▓▓▓▓▓▓]     │  ← escapes on bad input 😂
│                                      │
│  Don't have an account? Create one → │
└──────────────────────────────────────┘
```

**Background:** Subtle radial gradient mesh — no heavy animations  
**Card:** Clean white with soft shadow  
**Logo ring:** Circular floating badge above card with your logo/icon  
**Button:** Runs away if form is invalid 😂 — snaps back and goes green when correct

---

## Files

```
chaos-auth/
├── index.html   ← Markup — 3 panels: Sign In, Sign Up, Reset
├── style.css    ← All styles, CSS custom properties
├── script.js    ← Tabs, validation, strength meter, runaway button
└── README.md    ← You're reading it
```

---

## Features

| Feature | Details |
|---|---|
| 🪪 **Logo ring** | Circular badge above the card — drop your logo inside |
| 🗂️ **3 auth tabs** | Sign In / Sign Up / Reset Password |
| 🏃 **Runaway button** | Submit button escapes on invalid input, returns on valid |
| 🔑 **Social auth** | Google + GitHub buttons |
| 💪 **Password strength** | 4-bar meter — Weak / Medium / Strong |
| 👁️ **Password toggle** | Show / hide on all password fields |
| ✅ **Live validation** | Inline error messages with input shake animation |
| 📢 **Toast notifications** | Success / social redirect feedback |
| 📱 **Responsive** | Works on all screen sizes |

---

## Customisation

All colours in `style.css` `:root`:

```css
:root {
  --bg:      #f0f2f8;   /* page background */
  --card:    #ffffff;   /* card background */
  --accent:  #5b4fff;   /* primary brand colour */
  --err:     #e53e5a;   /* error red */
  --ok:      #16a97a;   /* success green */
}
```

### Swap the logo icon

In `index.html`, replace the `<svg>` inside `.logo-inner` with your own `<img>` or SVG:

```html
<div class="logo-inner">
  <img src="your-logo.png" width="28" height="28" alt="Logo"/>
</div>
```

---

## Usage

Open `index.html` directly in any browser — no npm, no build step needed.

```bash
open login-designs/chaos-auth/index.html
```

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| CSS custom props | ✅ | ✅ | ✅ | ✅ |
| CSS animations | ✅ | ✅ | ✅ | ✅ |
| `position: fixed` escape | ✅ | ✅ | ✅ | ✅ |

---

*Part of [Style Lovin Logins](https://logintemplatesgithub.netlify.app) — beautiful login UI designs.*

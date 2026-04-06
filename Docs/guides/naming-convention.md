<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,4,19&height=180&section=header&text=Naming%20Convention&fontSize=38&fontColor=fff&animation=twinkling&fontAlignY=38&desc=The%20One%20Rule%20You%20Must%20Follow%20%E2%80%94%20kebab-case&descAlignY=58&descSize=15" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=800&color=FFE66D&center=true&vCenter=true&width=550&lines=my-cool-login+%E2%9C%85+...+MyCoolLogin+%E2%9D%8C;lowercase.+hyphens.+descriptive.+%F0%9F%8E%AF;Good+names+tell+a+story+at+a+glance.)](https://git.io/typing-svg)

</div>

---

## 📏 The Golden Rule

> **All folder names must be `kebab-case`** — all lowercase, words separated by hyphens, no spaces, no underscores, no capitals.

This is enforced by CI. A bad folder name = PR blocked. ✋

---

## ✅ Format

```
[style]-[variant]
[adjective]-[noun]-[detail]
[era]-[theme]-[color]
```

---

## 👍 Good vs 👎 Bad

| ✅ Good | ❌ Bad | ❌ Why it fails |
|:---|:---|:---|
| `glassmorphism-dark` | `GlassMorphism` | Uppercase letters |
| `retro-terminal-green` | `login 1` | Space in name |
| `minimal-split-screen` | `FINAL_v2` | Uppercase + underscore |
| `brutalist-bold-red` | `myLogin` | camelCase |
| `luxury-editorial-cream` | `login_design` | Underscore |
| `3d-floating-card` | `Login` | Too generic |
| `vhs-horror-signin` | `new folder` | Space in name |

---

## 🗂️ Category Prefixes

Use these prefixes to keep designs organized by style family:

| Prefix | Design Style | Example |
|:---:|:---|:---|
| `glass-` | Glassmorphism | `glass-aurora-dark` |
| `neo-` | Neumorphism | `neo-soft-purple` |
| `retro-` | Retro / Vintage | `retro-terminal-amber` |
| `minimal-` | Minimal / Clean | `minimal-white-split` |
| `dark-` | Dark themed | `dark-neon-cyberpunk` |
| `light-` | Light themed | `light-pastel-spring` |
| `gradient-` | Gradient heavy | `gradient-aurora-mesh` |
| `3d-` | 3D effects / depth | `3d-floating-card` |
| `brutal-` | Brutalist | `brutal-black-bold` |
| `luxury-` | Luxury / Editorial | `luxury-gold-serif` |
| `vhs-` | VHS / CRT | `vhs-horror-static` |
| `y2k-` | Y2K / Chrome | `y2k-silver-bubble` |
| `pixel-` | Pixel art / 8-bit | `pixel-rpg-dungeon` |

---

## 💡 Naming Inspiration

| Pattern | Examples |
|:---|:---|
| `[material]-[mood]` | `glass-ethereal`, `concrete-brutal`, `paper-soft` |
| `[era]-[theme]` | `retro-terminal`, `y2k-chrome`, `vhs-horror`, `80s-synthwave` |
| `[color]-[vibe]` | `black-minimal`, `cream-luxury`, `neon-dark`, `pastel-cute` |
| `[emotion]-[style]` | `calm-minimal`, `aggressive-brutal`, `cozy-autumn` |
| `[layout]-[shape]` | `split-screen`, `floating-card`, `full-bleed`, `side-panel` |
| `[effect]-[color]` | `frosted-blue`, `glow-purple`, `scanline-green`, `grain-cream` |

---

## 🤖 Validation

The CI test `naming-convention.test.js` runs this regex against every folder name:

```js
const KEBAB_CASE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
```

Check your name locally before pushing:

```bash
npm run validate
# ✅ glassmorphism-dark — OK
# ❌ GlassMorphism       — Folder name must be kebab-case
```

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,4,19&height=80&section=footer" width="100%"/>

*A good name is the first impression of a good design.* 🏷️

</div>

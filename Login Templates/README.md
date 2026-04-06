<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=120&text=Login%20Designs&fontSize=40&fontColor=fff&animation=fadeIn&desc=The%20Main%20Collection%20%E2%80%94%201000%2B%20Designs&descSize=16&descAlignY=75" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=800&color=4ECDC4&center=true&vCenter=true&width=500&lines=This+is+where+magic+happens+%E2%9C%A8;Every+folder+%3D+one+unique+login+UI;Open+index.html+and+it+just+works!)](https://git.io/typing-svg)

</div>

---

## 📂 This Folder

This is the heart of the repo. Every subdirectory inside `login-designs/` is one complete, self-contained login UI design.

```
login-designs/
│
├── glassmorphism-dark/       ← design #1
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── preview.png
│
├── retro-terminal-green/     ← design #2
│   ├── index.html
│   └── style.css
│
├── luxury-editorial-cream/   ← design #3
│   └── ...
│
└── ... (997+ more and counting)
```

---

## ➕ Add Your Design in 30 Seconds

```bash
# From the root of the repo:
node scripts/new-design.js your-design-name

# This creates:
#   login-designs/your-design-name/index.html
#   login-designs/your-design-name/style.css
#   login-designs/your-design-name/script.js
```

Then open `index.html` and go wild. 🎨

---

## 📐 Folder Rules

| Rule | Details |
|:---:|:---|
| **Name format** | `kebab-case` only — `my-dark-login` ✅ `MyLogin` ❌ |
| **Required files** | `index.html` + `style.css` |
| **Self-contained** | Must work by opening `index.html` directly in browser |
| **No absolute paths** | Use relative paths only (`./style.css`, `../../assets/`) |
| **Screenshot** | Add `preview.png` at 1280×720 for the gallery |

---

## 🎨 Naming Inspiration

| Pattern | Examples |
|:---|:---|
| `[style]-[mood]` | `glassmorphism-dark`, `neumorphism-light` |
| `[adjective]-[noun]` | `brutal-serif`, `liquid-gradient` |
| `[era]-[theme]` | `retro-terminal`, `y2k-chrome`, `vhs-horror` |
| `[material]-[effect]` | `frosted-glass`, `neon-glow`, `paper-texture` |
| `[emotion]-[vibe]` | `calm-minimal`, `anxious-hacker`, `cozy-autumn` |

---

## ✅ Before You Submit a PR

```bash
# Validate your design passes all checks:
npm run validate

# See how many designs we have now:
npm run count
```

<div align="center">

*Every design in this folder is a small act of creativity. Make it count.* 🔥

</div>

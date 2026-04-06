<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=Getting%20Started&fontSize=42&fontColor=fff&animation=twinkling&fontAlignY=38&desc=From%20Zero%20to%20Your%20First%20Design%20in%205%20Minutes&descAlignY=58&descSize=16" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=800&color=4ECDC4&center=true&vCenter=true&width=550&lines=Clone.+Install.+Open.+Design.+%F0%9F%9A%80;No+build+steps.+No+framework.+No+excuses.;Just+pure+HTML+%2B+CSS+magic+%E2%9C%A8)](https://git.io/typing-svg)

</div>

---

## 🧰 Prerequisites

Before you begin, make sure you have these installed:

| Tool | Version | Why |
|:---|:---:|:---|
| [Git](https://git-scm.com/) | Any | Clone the repo |
| [Node.js](https://nodejs.org/) | `v20+` | Run scripts & linting |
| A Browser | Latest | Chrome recommended for testing |

> 💡 **No Node?** You can still open and build designs without it — Node is only needed for scripts like `validate`, `count`, and `preview-server`.

---

## ⚡ Setup in 4 Steps

```bash
# 1️⃣  Clone the repo
git clone https://github.com/style-lovin/style-lovin-logins.git
cd style-lovin-logins

# 2️⃣  Install dev tools (optional but recommended)
npm install

# 3️⃣  Open any design directly — zero setup needed
open login-designs/glassmorphism-dark/index.html

# 4️⃣  Or run the interactive preview server
npm run preview
# → Opens http://localhost:3000 with a design picker
```

---

## 📁 Understanding the Folder Structure

```
style-lovin-logins/
│
├── 🎨 login-designs/      ← All 1000+ designs live here
│   └── design-name/
│       ├── index.html     (required — open this in browser)
│       ├── style.css      (required — all your creative CSS)
│       ├── script.js      (optional — JS interactions)
│       └── preview.png    (recommended — for the gallery)
│
├── 🖼️  assets/            ← Shared fonts, icons, vendor CSS
├── 📚 docs/               ← You are here!
├── ⚙️  scripts/           ← Automation tools
├── 🧪 tests/              ← CI checks
└── ⚙️  config/            ← Config files
```

---

## 🎨 Your First Design

The fastest way to start is using the scaffold script:

```bash
# Creates a complete folder with index.html, style.css, script.js
node scripts/new-design.js my-first-login
```

Then just open it:

```bash
open login-designs/my-first-login/index.html
```

Style it. Make it yours. Go wild. 🔥

> See **[Creating a Design](creating-a-design.md)** for the full step-by-step guide.

---

## 🛠️ Useful Commands

```bash
npm run preview        # Interactive design selector at localhost:3000
npm run validate       # Check all designs for missing files or errors
npm run count          # See total number of designs + progress to 1000
npm run generate-index # Build dist/index.html — browsable gallery
npm test               # Run all automated tests
```

---

## ✅ You're Ready When...

- [ ] Repo is cloned
- [ ] You can open a design's `index.html` in your browser
- [ ] You've read [Creating a Design](creating-a-design.md)
- [ ] You've run `npm run validate` and seen green output

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=80&section=footer" width="100%"/>

*The hardest part is starting. You've already done it.* 🙌

</div>

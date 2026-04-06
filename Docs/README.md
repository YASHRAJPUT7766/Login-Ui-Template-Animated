<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=110&text=Documentation&fontSize=36&fontColor=fff&animation=fadeIn&desc=Guides%20%C2%B7%20References%20%C2%B7%20Best%20Practices&descSize=15&descAlignY=76" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=900&color=FFE66D&center=true&vCenter=true&width=500&lines=Read+before+you+submit.+Seriously.+%F0%9F%99%8F;CSS+tricks+inside+that+will+blow+your+mind+%F0%9F%A4%AF;Accessibility+is+not+optional.+%E2%99%BF)](https://git.io/typing-svg)

</div>

---

## 📚 Table of Contents

### 🚀 Guides

| Guide | What You'll Learn |
|:---|:---|
| [🏁 Getting Started](guides/getting-started.md) | Setup, clone, install, run your first design |
| [🎨 Creating a Design](guides/creating-a-design.md) | Step-by-step: index.html → style.css → submit PR |
| [🏷️ Naming Convention](guides/naming-convention.md) | The kebab-case rules + naming inspiration table |
| [🖼️ Using Shared Assets](guides/using-assets.md) | Fonts, icons, images — how to reference them |
| [♿ Accessibility](guides/accessibility.md) | Labels, contrast, keyboard nav, motion preferences |
| [📱 Mobile Responsive](guides/responsive.md) | Viewport, breakpoints, touch-friendly inputs |
| [🎨 CSS Techniques](guides/css-techniques.md) | Glassmorphism, neumorphism, gradients, animations |
| [⚡ JS Patterns](guides/js-patterns.md) | Password toggle, validation, particles, loaders |

### ⚙️ API / Scripts Reference

| Doc | What it covers |
|:---|:---|
| [📜 Scripts Reference](api/scripts.md) | Every `npm run` command explained |
| [✅ Validation Rules](api/validation.md) | What CI checks, what will fail your PR |

---

## 🗺️ Where to Start?

```
New contributor?
  └── Read: guides/getting-started.md
      └── Then: guides/creating-a-design.md
          └── Then: JUST BUILD SOMETHING 🔥

Fixing a design?
  └── Read: api/validation.md (know what broke)

Want to write sick CSS?
  └── Read: guides/css-techniques.md (bookmark this)

Worried about accessibility?
  └── Read: guides/accessibility.md
```

---

## 💡 Quick Reference

### Folder path from your design

```
login-designs/my-design/
  ↓
../../assets/fonts/fonts.css
../../assets/icons/google.svg
../../assets/vendor/normalize.css
```

### Must-have in every index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Design Name</title>
  <link rel="stylesheet" href="style.css">
</head>
```

### Validate before PR

```bash
npm run validate   # check your design
npm run count      # see total designs
npm test           # run all automated tests
```

---

<div align="center">

*Good documentation is as important as good design.*  
*One helps users. The other helps contributors.* 🙏

</div>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=2,3,19&height=90&text=Images&fontSize=32&fontColor=fff&animation=fadeIn&desc=Shared%20Backgrounds%20%C2%B7%20Textures%20%C2%B7%20Patterns&descSize=13&descAlignY=78" width="100%"/>

</div>

---

## 📸 About This Folder

Shared background images, textures, and patterns that multiple designs can reference instead of duplicating assets.

---

## 📁 Naming Convention

| Pattern | Purpose | Example |
|:---|:---|:---|
| `bg-*` | Full-page backgrounds | `bg-noise.png`, `bg-stars.jpg` |
| `texture-*` | Surface textures | `texture-paper.png`, `texture-concrete.jpg` |
| `pattern-*` | Repeating tile patterns | `pattern-grid.svg`, `pattern-dots.svg` |
| `gradient-*` | Gradient mesh PNGs | `gradient-purple-teal.png` |
| `overlay-*` | Overlay effects | `overlay-grain.png` |

---

## 🖼️ Usage in Designs

```css
/* Noise texture overlay */
.login-wrapper::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url('../../assets/images/overlay-grain.png');
  background-size: 200px;
  opacity: 0.04;
  pointer-events: none;
}

/* Background image */
body {
  background-image: url('../../assets/images/bg-stars.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## ➕ Adding Images

- **Format:** PNG or SVG preferred (WebP accepted, no JPG for textures)
- **Size:** Keep under **500KB** per file
- **License:** Only use images you own or that are CC0 / public domain
- Update this README when you add a new image

> 💡 For tiny repeating textures, SVG is always better than PNG.

---

## 🌐 Texture Resources (Free & License-Safe)

| Resource | What it has |
|:---|:---|
| [SVG Backgrounds](https://www.svgbackgrounds.com/) | SVG patterns, free |
| [Transparent Textures](https://www.transparenttextures.com/) | PNG overlays, free |
| [Hero Patterns](https://heropatterns.com/) | SVG tile patterns, free |
| [Noise & Texture](https://grainy-gradients.vercel.app/) | CSS grain effects |
| [Unsplash](https://unsplash.com/) | Photos, CC0 |

<div align="center">

*Texture is the difference between flat and alive.* 🎨

</div>

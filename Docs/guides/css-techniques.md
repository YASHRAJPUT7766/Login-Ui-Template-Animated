<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=CSS%20Techniques&fontSize=40&fontColor=fff&animation=twinkling&fontAlignY=38&desc=The%20Cheatsheet%20for%20Legendary%20Login%20UIs&descAlignY=58&descSize=15" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=800&color=FF6B6B&center=true&vCenter=true&width=580&lines=bookmark+this.+seriously.+%F0%9F%94%96;glassmorphism+%C2%B7+neumorphism+%C2%B7+gradient+mesh;animations+that+don't+suck+%E2%9C%A8)](https://git.io/typing-svg)

</div>

---

## 🌫️ Glassmorphism

The frosted glass effect. Works best over colorful/gradient backgrounds.

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); /* Safari */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
```

> 💡 Increase `blur()` for stronger effect. Use `rgba(255,255,255,0.05)` for ultra-subtle.

---

## 🧊 Neumorphism

Soft UI — looks like it's extruded from the surface. Works on light backgrounds.

```css
.neo-card {
  background: #e0e0e0;
  border-radius: 16px;
  box-shadow:
    8px 8px 16px #bebebe,
    -8px -8px 16px #ffffff;
}

/* Pressed / inset state */
.neo-input {
  background: #e0e0e0;
  border-radius: 8px;
  box-shadow:
    inset 4px 4px 8px #bebebe,
    inset -4px -4px 8px #ffffff;
  border: none;
}
```

---

## 🌈 Gradient Mesh Background

Multi-point radial gradients — looks like a color blob mesh.

```css
.mesh-bg {
  background:
    radial-gradient(at 40% 20%, #ff6b6b 0%, transparent 50%),
    radial-gradient(at 80% 0%,  #4ecdc4 0%, transparent 50%),
    radial-gradient(at 0%  50%, #a29bfe 0%, transparent 50%),
    radial-gradient(at 60% 80%, #ffd93d 0%, transparent 50%);
  background-color: #0a0a0a; /* fallback */
}
```

---

## 🌀 Animated Gradient Border

A spinning conic gradient border using `@property`.

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes borderSpin {
  to { --angle: 360deg; }
}

.border-animated {
  border: 2px solid transparent;
  border-radius: 12px;
  background:
    linear-gradient(#111, #111) padding-box,
    conic-gradient(from var(--angle), #ff6b6b, #4ecdc4, #a29bfe, #ff6b6b) border-box;
  animation: borderSpin 3s linear infinite;
}
```

> ⚠️ `@property` requires Chrome 85+ / Edge 85+. No Firefox support yet.

---

## ⌨️ Typing / Typewriter Animation

CSS-only typewriter effect with blinking cursor.

```css
.typewriter {
  overflow: hidden;
  border-right: 2px solid currentColor;
  white-space: nowrap;
  width: fit-content;
  animation:
    typing 2.5s steps(20, end) forwards,
    blink 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to   { width: 100% }
}

@keyframes blink {
  50% { border-color: transparent }
}
```

---

## 🏷️ Floating Label Input

Label floats up when the input is focused or filled.

```css
.field {
  position: relative;
}

.field label {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: var(--muted);
  pointer-events: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--surface);
  padding: 0 4px;
}

.field input:focus ~ label,
.field input:not(:placeholder-shown) ~ label {
  top: 0;
  font-size: 0.75rem;
  color: var(--accent);
  transform: translateY(-50%);
}

/* Trick: placeholder must be invisible for :not(:placeholder-shown) to work */
.field input::placeholder { color: transparent; }
```

---

## ✨ Shimmer / Skeleton Loading

Shimmer effect for loading states.

```css
@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #1a1a1a 25%,
    #2a2a2a 50%,
    #1a1a1a 75%
  );
  background-size: 800px 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}
```

---

## 💫 Glow / Neon Effect

Text and box glow for dark themes.

```css
/* Text glow */
.neon-text {
  color: #ff6b6b;
  text-shadow:
    0 0 7px #ff6b6b,
    0 0 21px #ff6b6b,
    0 0 42px #ff6b6b;
}

/* Box glow */
.neon-border {
  border: 1px solid #ff6b6b;
  box-shadow:
    0 0 5px #ff6b6b,
    0 0 15px #ff6b6b,
    inset 0 0 5px #ff6b6b;
}

/* Hover pulse */
.btn-glow:hover {
  box-shadow:
    0 0 10px var(--accent),
    0 0 40px var(--accent),
    0 0 80px var(--accent);
  transition: box-shadow 0.3s ease;
}
```

---

## 📺 CRT / Scanlines Effect

For retro/terminal designs.

```css
.crt-overlay::before {
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 2px,
    rgba(0, 0, 0, 0.15) 4px
  );
  pointer-events: none;
  z-index: 100;
}

/* Flicker effect */
@keyframes flicker {
  0%, 100% { opacity: 1; }
  92%       { opacity: 1; }
  93%       { opacity: 0.8; }
  94%       { opacity: 1; }
  96%       { opacity: 0.9; }
}

.crt-screen {
  animation: flicker 5s infinite;
}
```

---

## 🎭 Smooth Page Enter Animation

Staggered entrance — cards appear one by one.

```css
.card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.5s ease forwards;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=80&section=footer" width="100%"/>

*Copy. Paste. Modify. Make it yours. That's how CSS mastery works.* 🎨

</div>

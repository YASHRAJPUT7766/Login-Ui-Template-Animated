# CSS Techniques Reference

A cheatsheet of advanced CSS used across our designs.

## Glassmorphism

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
```

## Neumorphism

```css
.neo-card {
  background: #e0e0e0;
  border-radius: 16px;
  box-shadow:
    6px 6px 12px #b8b9be,
    -6px -6px 12px #ffffff;
}
```

## Gradient Mesh

```css
.mesh-bg {
  background:
    radial-gradient(at 40% 20%, #ff6b6b 0%, transparent 50%),
    radial-gradient(at 80% 0%, #4ecdc4 0%, transparent 50%),
    radial-gradient(at 0% 50%, #a29bfe 0%, transparent 50%);
}
```

## Animated Gradient Border

```css
@keyframes borderSpin {
  to { --angle: 360deg; }
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.border-animated {
  border: 2px solid transparent;
  background: 
    linear-gradient(#000, #000) padding-box,
    conic-gradient(from var(--angle), #ff6b6b, #4ecdc4, #ff6b6b) border-box;
  animation: borderSpin 3s linear infinite;
}
```

## Typing Animation

```css
.typing {
  overflow: hidden;
  border-right: 2px solid currentColor;
  white-space: nowrap;
  animation: 
    typing 3s steps(20) forwards,
    blink 0.75s step-end infinite;
}
@keyframes typing { from { width: 0 } to { width: 100% } }
@keyframes blink { 50% { border-color: transparent } }
```

## Floating Label

```css
.field { position: relative; }

.field input:focus ~ label,
.field input:not(:placeholder-shown) ~ label {
  transform: translateY(-1.5rem) scale(0.8);
  color: var(--accent);
}

.field label {
  position: absolute;
  top: 50%; left: 12px;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
}
```

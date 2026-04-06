<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=3,4,15&height=180&section=header&text=Accessibility&fontSize=42&fontColor=fff&animation=twinkling&fontAlignY=38&desc=Because%20Great%20Design%20Works%20for%20Everyone&descAlignY=58&descSize=16" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=800&color=4ECDC4&center=true&vCenter=true&width=580&lines=Beautiful+AND+accessible.+Not+either%2For.;4.5%3A1+contrast+is+the+minimum.+Aim+higher.;Keyboard+nav+is+not+optional.+%E2%8C%A8%EF%B8%8F)](https://git.io/typing-svg)

</div>

---

## ♿ Why Accessibility?

Even wild, experimental, avant-garde login designs should work for everyone — including people who use screen readers, keyboard navigation, or have visual impairments.

Good a11y doesn't kill creativity. It proves your design is solid enough to survive real use. 💪

---

## 🔴 Required — PR Will Be Flagged Without These

| Rule | What to do |
|:---|:---|
| **Labels on inputs** | Every `<input>` needs a visible `<label>` or at minimum `aria-label` |
| **Color contrast** | Text vs background: minimum **4.5:1** ratio |
| **Keyboard navigation** | Tab → inputs, Enter → submit, Escape → close modals |
| **Visible focus state** | Never `outline: none` without a custom replacement |

---

## 🟡 Recommended — Makes Your Design Better

| Recommendation | Why |
|:---|:---|
| `autocomplete` on inputs | Helps password managers + mobile users |
| Semantic HTML (`<form>`, `<label>`, `<button>`) | Screen readers depend on it |
| Test with VoiceOver / NVDA | Hear what screen reader users hear |
| `role` and `aria-*` attributes | For custom UI components |
| Skip to main content link | For keyboard users |

---

## 🎬 Handling Animations

Respect users who have motion sensitivity. Always add this:

```css
/* Required if your design has animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎨 Color Contrast Quick Reference

| Ratio | Pass/Fail | Use for |
|:---:|:---:|:---|
| `< 3:1` | ❌ Fail | Nothing |
| `3:1` | ⚠️ AA Large | Large text only (18px+ or 14px bold) |
| `4.5:1` | ✅ AA | Normal text — **minimum standard** |
| `7:1` | 🏆 AAA | Ideal — use for critical info |

> Test instantly: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) 

---

## ♿ Focus State — Don't Kill It, Style It

```css
/* ❌ Bad — invisible, breaks keyboard nav */
*:focus {
  outline: none;
}

/* ✅ Good — custom focus that matches your design */
input:focus,
button:focus {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

/* ✅ Also good — only hide for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
*:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

---

## 🏷️ Labels — Do It Right

```html
<!-- ✅ Best — visible label, associated with input -->
<label for="email">Email Address</label>
<input type="email" id="email" autocomplete="email">

<!-- ✅ OK — label wraps input -->
<label>
  Password
  <input type="password" autocomplete="current-password">
</label>

<!-- ✅ Acceptable — visually hidden but screen reader accessible -->
<input type="email" aria-label="Email address" placeholder="you@example.com">

<!-- ❌ Bad — placeholder only, not accessible -->
<input type="email" placeholder="Email">
```

---

## 🧪 Testing Tools

| Tool | What it tests | Link |
|:---|:---|:---|
| **WebAIM Contrast Checker** | Color contrast ratio | [webaim.org](https://webaim.org/resources/contrastchecker/) |
| **axe DevTools** | Full a11y audit in browser | [deque.com/axe](https://www.deque.com/axe/) |
| **VoiceOver** (Mac) | Screen reader (built-in) | `Cmd + F5` |
| **NVDA** (Windows) | Free screen reader | [nvaccess.org](https://www.nvaccess.org/) |
| **Lighthouse** (Chrome) | Automated a11y audit | DevTools → Lighthouse |
| **MDN a11y Docs** | Reference guide | [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility) |

---

## ✅ Accessibility Checklist

```
Before submitting your design:

✅  Every input has a <label> or aria-label
✅  Color contrast is 4.5:1 or better
✅  Tab key moves through inputs in logical order
✅  Enter key submits the form
✅  Focus states are visible (not outline: none)
✅  prefers-reduced-motion respected if animations used
✅  autocomplete attributes on email/password inputs
✅  Tested in at least one browser with keyboard only
```

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=3,4,15&height=80&section=footer" width="100%"/>

*Accessible design is just good design.* ♿

</div>

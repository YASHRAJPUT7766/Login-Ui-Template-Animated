# Accessibility Guidelines

## Why Accessibility?

Our collection should be usable by everyone. Even aesthetic experiments should follow basic a11y rules.

## Required

- All form inputs must have labels (visible or aria-label)
- Color contrast ratio: minimum 4.5:1 for text
- Keyboard navigation must work (Tab, Enter, Escape)
- Focus states must be visible (don't `outline: none` without a replacement)

## Recommended

- Add `autocomplete` attributes to inputs
- Use semantic HTML (`<form>`, `<label>`, `<button>`)
- Test with screen reader (NVDA/VoiceOver)
- Respect `prefers-reduced-motion` for animations

## Testing

```css
/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Resources

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

# Validation Rules

Every PR is automatically validated by `scripts/validate-designs.js`.

## Rules

| Rule | Required | Details |
|------|----------|---------|
| `index.html` exists | ✅ Yes | Must be in root of design folder |
| `style.css` exists | ✅ Yes | Must be in root of design folder |
| Valid DOCTYPE | ✅ Yes | `<!DOCTYPE html>` |
| Folder name format | ✅ Yes | `kebab-case` only |
| No absolute paths | ✅ Yes | No `C:\`, `/Users/`, etc. |
| Has `<title>` | ⚠️ Warn | Recommended |
| Has `preview.png` | ⚠️ Warn | Recommended for gallery |
| Mobile viewport meta | ⚠️ Warn | Recommended |

## Running Validation

```bash
npm run validate
```

Output example:
```
✅ glassmorphism-dark     — OK
✅ retro-terminal-green   — OK
⚠️  minimal-split-screen  — Missing preview.png
❌ BadFolderName          — Folder name must be kebab-case
```

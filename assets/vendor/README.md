<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=1,4,19&height=90&text=Vendor&fontSize=32&fontColor=fff&animation=fadeIn&desc=Third-Party%20Libraries%20%E2%80%94%20Pinned%20%26%20Local&descSize=13&descAlignY=78" width="100%"/>

</div>

---

## 📦 What & Why

This folder holds **local copies of third-party CSS/JS libraries**.

Instead of CDN links that can go down, break, or change — we pin specific versions locally so every design **works offline and forever**.

---

## 📋 Available Libraries

| File | Library | Version | Source |
|:---|:---|:---:|:---|
| `normalize.css` | Normalize.css | `8.0.1` | [github.com/necolas/normalize.css](https://github.com/necolas/normalize.css) |

---

## 🔗 Using in Your Design

From `login-designs/your-design/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- ✅ Use normalize for consistent cross-browser baseline -->
  <link rel="stylesheet" href="../../assets/vendor/normalize.css">
  <!-- Your styles come AFTER normalize -->
  <link rel="stylesheet" href="style.css">
</head>
```

---

## ➕ Adding a New Library

1. Download the **minified** file
2. Rename it: `library-name.min.css` or `library-name.min.js`
3. Drop it in this folder
4. Add a row to the table above with: name, version, source URL
5. Note the license — must be MIT, Apache 2.0, or BSD

> ❌ Do NOT add libraries over **100KB** minified without discussion.  
> ❌ Do NOT add anything with GPL or proprietary licenses.

---

## 📜 License Compatibility

| License | OK to include? |
|:---|:---:|
| MIT | ✅ Yes |
| Apache 2.0 | ✅ Yes |
| BSD 2/3-Clause | ✅ Yes |
| ISC | ✅ Yes |
| CC0 / Public Domain | ✅ Yes |
| GPL / LGPL | ❌ No |
| Proprietary | ❌ No |

<div align="center">

*Pin it. Don't link it. Libraries die. Repos live.* 🔒

</div>

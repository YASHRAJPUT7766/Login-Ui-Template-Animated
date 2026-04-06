# Scripts Reference

## npm run dev
Starts live-server with hot reload. Opens the root index.html.

## npm run lint
Runs ESLint on all JS files inside login-designs/.

## npm run lint:css
Runs Stylelint on all CSS files inside login-designs/.

## npm run format
Runs Prettier on all HTML/CSS/JS files.

## npm run validate
Runs `scripts/validate-designs.js` which checks:
- Every folder has index.html
- Every folder has style.css
- index.html has a valid DOCTYPE
- No absolute paths used

## npm run generate-index
Builds `dist/index.html` — the browsable gallery of all designs.

## npm run count
Prints the total number of designs currently in login-designs/.

## npm run test
Runs all tests in `tests/`.

## npm run preview
Starts a local server specifically for previewing individual designs with a selector UI.

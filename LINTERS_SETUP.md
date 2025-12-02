## ESLint
- Config : `.eslintrc.json` (env browser/es2021, extends `eslint:recommended`, no-unused-vars en warn, no-console warn sauf warn/error).
- Ignore : `.eslintignore` (node_modules, dist, build, coverage).
- Usage : `npx eslint assets/js/**/*.js` (à adapter si bundler ajouté).

## Stylelint
- Config : `.stylelintrc.json` (extends `stylelint-config-standard`, règle color-hex-length short, pas de contrainte sur pattern de classes).
- Ignore : `.stylelintignore` (node_modules, dist, build, coverage).
- Usage : `npx stylelint "assets/css/**/*.css"`.

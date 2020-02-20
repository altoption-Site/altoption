const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/andredealbuquerque/Web/004-altoption/code/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/andredealbuquerque/Web/004-altoption/code/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/andredealbuquerque/Web/004-altoption/code/src/pages/index.js"))),
  "component---src-pages-sobre-nos-js": hot(preferDefault(require("/Users/andredealbuquerque/Web/004-altoption/code/src/pages/sobre-nos.js")))
}


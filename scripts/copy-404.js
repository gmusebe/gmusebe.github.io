// GitHub Pages is a static host: it knows nothing about React Router, so a
// direct load of /speaking or /portfolio would return GitHub's own 404 page.
// Serving the app shell as 404.html hands those URLs back to the router.
const fs = require('fs')
const path = require('path')

const build = path.join(__dirname, '..', 'build')
const source = path.join(build, 'index.html')
const target = path.join(build, '404.html')

if (!fs.existsSync(source)) {
  console.error('copy-404: build/index.html not found — run the build first.')
  process.exit(1)
}

fs.copyFileSync(source, target)
console.log('copy-404: wrote build/404.html')

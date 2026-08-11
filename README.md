# gmusebe.github.io

Personal site of **Ivan Musebe** — Research Data Engineer & Analyst.
Live at [gmusebe.github.io](https://gmusebe.github.io/).

Built with Create React App, React Router and Sass, deployed to GitHub Pages.

## Structure

```
src/
  data/profile.js        all site copy: bio, disciplines, projects, links
  styles/_variables.scss design tokens — typeface, palette, breakpoints
  components/
    Layout/              shell, shared page furniture (.container, .flat-button)
    Sidebar/             fixed nav rail; becomes a top bar under 900px
    Home/                hero + discipline cards
    About/               bio, spinning tool cube, toolbox grid
    Portfolio/           project grid built from data/profile.js
    Speaking/            talks & advisory: subjects, formats, engagements
    Contact/             EmailJS form, details card, Leaflet map
    AnimatedLetters/     per-character entrance animation
```

Content lives in [`src/data/profile.js`](src/data/profile.js) — edit it there
rather than in the components. Typeface and colours live in
[`src/styles/_variables.scss`](src/styles/_variables.scss).

The site is set entirely in **EB Garamond**, loaded from Google Fonts in
[`public/index.html`](public/index.html) with a local-Garamond fallback stack.

## Scripts

```bash
npm install       # install dependencies
npm start         # dev server on http://localhost:3000
npm test          # run tests
npm run build     # production build into build/
npm run deploy    # build and publish to the gh-pages branch
```

## Third-party services

- **EmailJS** powers the contact form (service/template/public keys are in
  `src/components/Contact/index.js`; the public key is also initialised in
  `public/index.html`).
- **Leaflet / OpenStreetMap** renders the map on the contact page.

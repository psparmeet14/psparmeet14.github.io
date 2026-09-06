# psparmeet14.github.io

Personal site of Parmeet Singh Bhogal, live at <https://psparmeet14.github.io>. One page: who I am, selected work, experience, toolbox, writing, what I'm doing now, and how to get in touch.

## Stack

React 19 + Vite 7, plain CSS (design tokens for light and dark, no framework), Google Fonts (Newsreader, Source Sans 3, IBM Plex Mono). Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the built site locally
npm run lint
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/data/site.js` | **All content** — copy, links, projects, experience, toolbox, posts, the "Now" line. Edit here first. |
| `src/App.jsx` | Section order. Numbering and the nav menu are derived from this list. |
| `src/components/` | One component per section; `Section.jsx` is the shared heading wrapper. |
| `src/styles.css` | Tokens (colours, fonts, spacing) and layout. Breakpoints: 720px hero stacks + work grid goes single column, 800px phone menu + stacked rows, 1024px hero photo size. |
| `index.html` | Title, description, social preview (Open Graph / Twitter) and JSON-LD. Update these with `site.js` if the headline changes. |
| `public/` | `profile-photo.jpg`, `og-image.png` (1200×630 link preview), `favicon.svg`, `apple-touch-icon.png`, and `404.html`, which sends the old `/about`, `/projects`… URLs to the matching section. |

## Common edits

- **Add a project** — append an entry to `work` in `site.js` (links are optional).
- **Publish a post** — fill in `url` (and `date`) on a `posts` entry. The Writing section and its nav link appear automatically once one post has a URL.
- **Add the résumé** — put `resume.pdf` in `public/` and set `profile.resumeUrl = '/resume.pdf'`; a Resume button appears in the nav.
- **Change the photo** — replace `public/profile-photo.jpg` with a square image (600px or larger), then regenerate `og-image.png` and `apple-touch-icon.png` from it.

## Content

The code is shared for reference. The text and images are mine — please ask before reusing them.

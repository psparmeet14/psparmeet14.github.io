# Parmeet Singh Bhogal – Portfolio (React SPA)

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://psparmeet14.github.io)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.1-646cff)](https://vite.dev)
[![License](https://img.shields.io/badge/License-Personal%20IP-blue)](LICENSE)

## ✨ Overview

This repository now hosts a single-page application built with **React** and **Vite**. The site preserves every section of the previous static HTML portfolio—Home, About, Experience, Projects, Posts, Interests, Contact, and the photo guide—while enabling instant, reload-free navigation through React Router.

## 🧱 Tech Stack

- **React 19** with functional components and hooks
- **React Router 7** for client-side routing
- **Vite 7** for lightning-fast builds and dev experience
- **Bootstrap 5.3** (JS + CSS) for layout utilities and responsive grid
- **Font Awesome 6.4** for iconography
- **Custom CSS** (`src/assets/style.css`) migrated from the original site

## 🚀 Key Features

- Zero full-page reloads when switching sections
- Exact content parity with the legacy HTML pages
- Responsive design with Bootstrap utilities and custom gradients
- Metadata updates per route for richer sharing/snippets
- GitHub Pages friendly fallback (`public/404.html`) for deep links
- Archived legacy static files kept under `legacy-html/` for reference

## �️ Project Structure

```
psparmeet14.github.io/
├── public/
│   ├── 404.html              # SPA fallback for GitHub Pages
│   ├── profile-photo.jpg     # Public assets
│   └── vite.svg
├── src/
│   ├── assets/style.css      # Global styles (migrated from legacy site)
│   ├── components/           # Navbar, Layout, Footer
│   ├── hooks/usePageMetadata # Utility for dynamic titles/descriptions
│   ├── pages/                # React pages for each former HTML file
│   └── main.jsx              # SPA entry point
├── legacy-html/              # Archived static HTML/CSS/image
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## ▶️ Getting Started

```bash
npm install
npm run dev        # Start the Vite dev server (http://localhost:5173)
npm run build      # Production build to dist/
npm run preview    # Preview the built assets locally
npm run lint       # Lint the codebase
```

## 📝 Content Mapping

| Route            | React Component                | Legacy Source            |
|------------------|--------------------------------|--------------------------|
| `/`              | `pages/Home.jsx`               | `index.html`             |
| `/about`         | `pages/About.jsx`              | `about.html`             |
| `/experience`    | `pages/Experience.jsx`         | `experience.html`        |
| `/projects`      | `pages/Projects.jsx`           | `projects.html`          |
| `/posts`         | `pages/Posts.jsx`              | `posts.html`             |
| `/interests`     | `pages/Interests.jsx`          | `interests.html`         |
| `/contact`       | `pages/Contact.jsx`            | `contact.html`           |
| `/photo-guide`   | `pages/PhotoGuide.jsx`         | `photo-guide.html`       |
| `*` (fallback)   | `pages/NotFound.jsx`           | —                        |

Update copy or layout by editing the relevant React component while keeping the structure consistent with the migrated HTML.

## 🎨 Styling

- Global look & feel lives in `src/assets/style.css` (identical to the original `style.css`).
- Bootstrap CSS and JS are imported via npm modules in `main.jsx`.
- Font Awesome icons load from the CDN defined in `index.html`.

## 📦 Deployment

1. Build the site:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder to GitHub Pages (this repository is already configured for user pages at `https://psparmeet14.github.io`).
3. `public/404.html` plus the redirect script embedded in `index.html` ensure deep links such as `/experience` work on GitHub Pages.

## 🗄️ Legacy Static Site

All original HTML, CSS, and the profile image are preserved under `legacy-html/`. They remain untouched for historical reference and can be compared against the new React views at any time.

## 📧 Contact

- **Email**: psparmeet14@gmail.com
- **LinkedIn**: [Parmeet S. Bhogal](https://linkedin.com/in/parmeet-s-bhogal-6a259715a)
- **GitHub**: [@psparmeet14](https://github.com/psparmeet14)

## 📜 Content & License Notice

The code in this repository powers my personal portfolio and is shared for reference. All textual content, posts, reflections, and imagery remain my intellectual property—please do not reuse them without explicit permission.

---

**Built with ❤️ and dedication** | © 2025 Parmeet Singh Bhogal

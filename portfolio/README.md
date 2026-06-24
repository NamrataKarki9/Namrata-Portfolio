# Namrata Karki — Portfolio v2

React + Node.js portfolio with light/dark theme, boxed project cards, and per-project detail pages.

---

## Quick Start

```bash
# 1. Install all dependencies
npm install
cd server && npm install && cd ..
cd client && npm install && cd ..

# 2. Set up server env
cd server
cp .env.example .env
# Edit .env if you want email notifications

# 3. Run dev
cd ..
npm run dev
# Frontend → http://localhost:5173
# API      → http://localhost:5000
```

---

## Adding Screenshots

Place images in `client/public/screenshots/<project-id>/`:

```
client/public/screenshots/
├── agriscan/
│   ├── agriscan-1.png
│   ├── agriscan-2.png
│   └── agriscan-3.png
├── learnbox/
│   ├── learnbox-1.png
│   └── learnbox-2.png
├── heart-disease/
│   ├── heart-1.png
│   └── heart-2.png
└── ... (vpms, journalmate, kumaricinemas, cliniterra, rental-system)
```

The detail page loads them automatically. Missing images show a placeholder with the expected path.

---

## Adding Resume

Put your resume PDF here:

`client/public/Namrata Resume.pdf`

The hero button downloads that file directly from the site. If you rename it, update `resumeUrl` and `resumeFileName` in `server/src/routes/portfolio.js` and the fallback data in `client/src/hooks/usePortfolio.js`.

---

## Updating Content

All portfolio data lives in **one file**: `server/src/routes/portfolio.js`

- Add/edit projects in the `projects` array
- Update personal info in `personal`
- Add certificates to the `certificates` array

---

## Free Deployment (Recommended: Vercel + Railway)

### 1. Push to GitHub
Create a repo and push this folder.

### 2. Deploy backend → Railway
- [railway.app](https://railway.app) → New Project → GitHub repo
- Root directory: `server`
- Add env vars: `NODE_ENV=production`, `CLIENT_URL=https://your-vercel-url.vercel.app`
- Optional: add PostgreSQL from Railway marketplace
- Copy your Railway URL

### 3. Deploy frontend → Vercel
- [vercel.com](https://vercel.com) → New Project → GitHub repo
- Root directory: repo root
- Build command: `npm --prefix portfolio/client install && npm --prefix portfolio/client run build`
- Output directory: `portfolio/client/dist`
- Add env only if you deployed the backend: `VITE_API_URL=https://your-railway-url.railway.app`
- Deploy

The repo root now includes `vercel.json`, which rewrites every route back to `index.html` so React Router can handle client-side navigation.
If you are deploying only the frontend, leave `VITE_API_URL` unset and the site will use the bundled portfolio data instead of calling a missing API.

### 4. Update `client/src/utils/api.js` for production
```js
export const API_BASE_URL = import.meta.env.VITE_API_URL?.trim() || '';
export const HAS_API = Boolean(API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL || undefined,
});
```

### 5. Update Railway CLIENT_URL
Set `CLIENT_URL` to your Vercel URL so CORS works.

---

## Theme
- Default: warm light theme (cream/terracotta)
- Dark mode toggle in navbar (moon/sun icon)
- Preference saved in localStorage

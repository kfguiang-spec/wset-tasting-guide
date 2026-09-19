# WSET Level 3 SAT · Wine Tasting Guide

Mobile-first quick reference for the **WSET Level 3 Systematic Approach to Tasting (SAT)** for wine. Every Appearance, Nose, Palate, and Conclusions criterion shows its full descriptive scale at a glance — designed for use on a phone next to a glass.

This is an **educational study aid** using commonly published SAT descriptive vocabulary. It is **not** an official WSET exam document and is not affiliated with WSET Awards.

## Features

- Sticky section nav: Appearance · Nose · Palate · Conclusions
- Full SAT scales as tappable chips (accurate `medium(−)` / `medium(+)` notation)
- Colour swatches for white, rosé, and red
- Searchable, expandable Primary / Secondary / Tertiary aroma & flavour vocabulary
- Optional tasting-notes scratchpad (saved in `localStorage`)
- Dark burgundy/plum theme with high contrast for dim tasting rooms
- Descriptive grid only — no fake numeric scores

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview   # optional local preview of dist/
```

Output is in `dist/`.

## GitHub Pages (optional)

Default Vite `base` is `/` (good for local use and custom domains). For a project site at
`https://kfguiang-spec.github.io/wset-tasting-guide/`:

1. Build with the repo base path:
   ```bash
   VITE_BASE=/wset-tasting-guide/ npm run build
   ```
2. In the repo on GitHub: **Settings → Pages → Build and deployment**.
3. Either publish the `dist/` folder via a branch/`docs` folder, or add a GitHub Actions
   deploy workflow (requires a token/PAT with the `workflow` scope to push `.github/workflows`).

Until Pages is enabled, use `npm run dev` or `npm run preview` locally.

## Stack

- Vite + React + TypeScript
- Plain CSS (no UI framework)

## Licence / fair use

SAT term labels are used for educational reference. Do not redistribute as an official WSET material.

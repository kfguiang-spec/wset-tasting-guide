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

If you enable Pages for this repo (Settings → Pages → Deploy from branch `main` / `/docs`, or GitHub Actions):

1. Set the Vite `base` in `vite.config.ts` to `'/wset-tasting-guide/'` (repo name) before building, **or** use a custom domain / user Pages root.
2. Build and publish the `dist/` folder (or configure the official Vite GitHub Pages action).

Default config uses `base: '/'`, which works for local preview, custom domains, and root-site hosting.

## Stack

- Vite + React + TypeScript
- Plain CSS (no UI framework)

## Licence / fair use

SAT term labels are used for educational reference. Do not redistribute as an official WSET material.

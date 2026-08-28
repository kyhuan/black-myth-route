# Black Myth Route

Black Myth Route is a bilingual, unofficial companion for **Black Myth: Wukong**. It combines a spoiler-aware completion tracker, concise boss solvers, and playstyle-first build guides.

The production domain will be [blackmythroute.cc](https://blackmythroute.cc) after DNS and hosting are configured.

## What is included

- English at `/` and Simplified Chinese at `/zh-cn/`
- Equivalent-page language switching with shared local progress
- 36 route objectives across all six chapters and New Cycle planning
- Filters for chapter, category, completion state, and missables
- Spoiler protection, next-best-action, JSON backup and restore
- 15 priority boss solvers
- 6 practical build routes
- Static SEO metadata, canonical URLs, hreflang, sitemap, and legal pages
- Responsive, keyboard-friendly interface with reduced-motion support

## Local development

```sh
npm install
npm run dev
```

The local server defaults to `http://localhost:4321`.

## Quality checks

```sh
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

`npm run build` runs Astro's type/content checks and produces the static site in `dist/`.
The Playwright suite verifies language parity, progress persistence, filters, responsive overflow, navigation, and every sitemap route.

## Deployment

Recommended Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22 or newer
- Production branch: `main`

After the domain is purchased, connect both `blackmythroute.cc` and `www.blackmythroute.cc`, redirect `www` to the apex, and update the DNS records shown by Cloudflare Pages.

## Data and privacy

Checklist state, spoiler preference, and language preference are stored in browser `localStorage`. The site does not read game saves or require an account. Users can export progress to a JSON file and import it on another device.

## Unofficial status

Black Myth Route is an unofficial fan-made companion and is not affiliated with, endorsed by, sponsored by, or authorized by Game Science. BLACK MYTH, Black Myth: Wukong, and related names and assets belong to their respective owners.

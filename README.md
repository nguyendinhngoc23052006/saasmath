# saasmath

Free calculators and explainers for SaaS founders and operators.
Static site: Astro + React islands + Tailwind, deployed to Cloudflare Pages.

## Scripts

```
npm run dev         # local dev server
npm run build       # static build to ./dist
npm test            # vitest run (calc lib tests)
npm run typecheck   # astro check + tsc --noEmit
```

## Layout

- `src/lib/calc/*.ts` — pure calculator functions (60 unit tests)
- `src/components/calculators/*.tsx` — React islands, one per calculator
- `src/pages/calculators/*.astro` — one page per calculator, mounts the island
- `src/content/posts/*.md` — blog posts (Markdown + frontmatter)
- `src/layouts/*.astro` — Base, Calculator, Post
- `src/data/{site,author,calculators}.ts` — constants used across the site

## Environment

Build reads these env vars (all optional):

- `PUBLIC_SITE_URL` — canonical origin (default `https://saasmath.com`)
- `PUBLIC_ADSENSE_CLIENT` — `ca-pub-XXXX...`; ads render only when set
- `PUBLIC_CF_ANALYTICS_TOKEN` — Cloudflare Web Analytics token

## Deploy

Cloudflare Pages deploys directly from this repo via its native Git
integration. One-time setup in the Cloudflare dashboard:

1. Workers & Pages → Create → Pages → Connect to Git → pick this repo
2. Production branch: `main`
3. Framework preset: `Astro`
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Environment variables (Settings → Environment variables), Production scope:
   - `PUBLIC_SITE_URL` (default `https://saasmath.com`)
   - `PUBLIC_ADSENSE_CLIENT` (set once AdSense returns your `ca-pub-...`)
   - `PUBLIC_CF_ANALYTICS_TOKEN` (set after creating a Web Analytics site)

Every push to `main` triggers a production build. Every pull request gets a
preview URL. No GitHub secrets or tokens required.

`.github/workflows/ci.yml` runs `npm test` + `astro check` + `npm run build`
on push and pull request as an independent quality gate. It does not deploy.

## Author data

`src/data/author.ts` ships with placeholders. Fill in name, photo path, bio,
LinkedIn, and email before submitting for AdSense. Drop the author photo at
`public/author.jpg` (400x400 recommended).

## Adding a new calculator

1. Add the pure function in `src/lib/calc/<name>.ts`
2. Add tests in `tests/calc/<name>.test.ts` (5+ cases, edge conditions)
3. Add the React island in `src/components/calculators/<Name>Calculator.tsx`
4. Add the page in `src/pages/calculators/<slug>.astro`
5. Register in `src/data/calculators.ts`

## Editorial rules

- Every factual claim cites a source.
- Formulas cite the SaaS authority (Skok, Feld, Bessemer, YC, Carta).
- Ads never load before the calculator is interactive.
- Max 3 ad units per page (anchor + in-article + footer).

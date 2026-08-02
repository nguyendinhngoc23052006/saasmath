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

`.github/workflows/deploy.yml` runs tests + typecheck + build on every push,
then publishes `dist/` to Cloudflare Pages on merges to `main`. Requires
these repo secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

And these repo variables (Settings → Secrets and variables → Actions):

- `PUBLIC_SITE_URL`, `PUBLIC_ADSENSE_CLIENT`, `PUBLIC_CF_ANALYTICS_TOKEN`

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

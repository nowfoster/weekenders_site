# Weekenders by Now Foster

Marketing site for **Weekenders**, Now Foster's weekend fostering programme. It's built from the
[Weekender Website Figma file](https://www.figma.com/design/BR7YgC6nUO5FwjMMA8vnYD/Weekender-Website).

## Stack

- **Next.js 15 (App Router) as a fully static export.** `npm run build` writes plain HTML to `out/`, so every page is pre-rendered for search engines.
- **Tailwind CSS v4.** Design tokens from Figma are in `src/app/globals.css`.
- **Montserrat** is self-hosted via `next/font`.
- **Netlify** hosts the site (`netlify.toml`).

## Pages

| Route | Figma frame |
|---|---|
| `/` | Home - 1 |
| `/become-a-weekender` | Weekender |

About us, the readiness checker, legal pages and the intro-chat sign-up form live on
[nowfoster.org](https://nowfoster.org). The site links out to them.

## Editing content

All copy and links live in **`src/content/site.ts`**: stories, stats, FAQs, the six steps, region
postcode areas and the URLs behind each button. Images are pre-optimised WebP files in `public/images/`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
npm start       # serve ./out locally
```

## SEO

- Per-page `<title>`, description, canonical URL, Open Graph and Twitter tags (`metadata` exports)
- JSON-LD: `NGO` organisation (all pages), `FAQPage` and `BreadcrumbList` (Become a Weekender)
- `sitemap.xml` and `robots.txt` are generated at build time. Netlify deploy previews are set to `Disallow: /`.
- The canonical origin comes from `NEXT_PUBLIC_SITE_URL`, falling back to Netlify's `URL` env var.
  Set `NEXT_PUBLIC_SITE_URL` in Netlify if you use a custom domain.

## Deploying

Netlify builds `npm run build` and publishes `out/` (see `netlify.toml`). Once the GitHub repo is connected in
Netlify, every push to `main` goes live and pull requests get preview URLs.

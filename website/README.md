# Arcanova Labs website

Neo-brutalist studio site built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

## Edit content

| What | Where |
|---|---|
| Email, social links, contact form ID | `src/data/site.ts` |
| Portfolio projects (cards + detail pages) | `src/data/projects.ts` |
| Project images | `public/projects/<slug>/` |
| Home page text & services | `src/pages/index.astro` |
| Privacy policy | `src/pages/privacy.astro` |
| Colors & fonts | `src/styles/global.css` |

**Add a project:** drop its icon and screenshots in `public/projects/<slug>/`, then add an entry to `projects.ts`. A card appears on the home page and a page is created at `/projects/<slug>`.

## Connect the contact form

1. Create a free account at [formspree.io](https://formspree.io) and make a new form.
2. Copy the form ID (the part after `/f/` in the endpoint URL).
3. Paste it into `formspreeId` in `src/data/site.ts`.

Until then, the form shows a message asking visitors to email you.

## Deploy

The build is fully static. On Vercel, Netlify or Cloudflare Pages, import the repo and use:
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `website`

Update `site` in `astro.config.mjs` to your real domain first.

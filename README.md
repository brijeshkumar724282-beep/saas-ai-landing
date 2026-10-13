# Pulse — AI SaaS Landing Template

A premium dark theme landing page for an AI SaaS product. Built with
Vite plus React plus Tailwind CSS plus Framer Motion. Solid colors only,
no gradients, no emojis.

## What it does

Five conversion focused blocks on one page:

1. **Sticky nav plus hero** — badge, dual call to action, pure CSS product
   shot mock with animated chart, floating stat cards, customer logo row
2. **Features bento grid** — six cards with SVG icons, spring hover lift,
   inline UI mocks (AI answer, chart, integrations, badges, live avatars)
3. **Pricing** — three tiers with animated monthly/yearly toggle and a
   highlighted popular plan
4. **Testimonials plus metrics** — animated counters (teams, uptime,
   rating, sprint speed) plus three review cards
5. **FAQ plus CTA plus footer** — smooth accordion, big solid accent call
   to action panel, full sitemap footer

Motion throughout uses scroll triggered reveals, with
`prefers-reduced-motion` respected. Layout is responsive from mobile to
desktop and uses semantic landmarks, skip link, and ARIA states.

## Run

```sh
npm install && npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Customize

- **Brand and accent**: edit `tailwind.config.js` (`accent`, `ink`,
  `panel`) and the logo mark in `src/components/Nav.jsx`.
- **Copy**: each section owns its text in `src/components/`.
  Prices and plan features live in `src/components/Pricing.jsx`.
- **Sections**: compose them in `src/App.jsx`. Delete any block to slim
  the page down.
- **Static hosting**: `vite.config.js` uses `base: './'` so the `dist`
  folder works from any path without changes.

## Assumptions

- Fictional brand (Pulse) with placeholder links (`#`) on pricing buttons
  and footer items; wire them to real routes before launch.
- System font stack used (no webfont download) to keep the template
  dependency free and fast; swap in your brand font in `src/index.css`.
- Metrics and quotes are sample content; replace with verified numbers
  and real customer permission before publishing.

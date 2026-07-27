# Septic Tank Repair Houston

A high-performance Astro website for septic tank repair services in Houston, TX.

## Features

- **34 pages** targeting primary and long-tail keywords
- **6 service pages** (Pumping, Repair, Installation, Inspection, Maintenance, Emergency)
- **10 location pages** (Katy, Sugar Land, Pearland, The Woodlands, Cypress, Spring, Conroe, Baytown, Humble, Tomball)
- **8 blog posts** targeting long-tail keywords
- **Full schema markup** (LocalBusiness, Service, FAQPage, HowTo, BlogPosting, BreadcrumbList)
- **200+ internal links** for strong topical authority
- **Zero client-side JS** (except minimal nav toggle)

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- TypeScript - Type safety
- CSS Custom Properties - Design system

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/` folder.

## Deployment

This site is configured for Cloudflare Workers Static Assets:

```bash
npm run deploy
```

The Wrangler configuration builds Astro first, then deploys `dist/` as static assets. In Cloudflare Workers Builds, set the build command to `npm run build` and the deploy command to `npx wrangler deploy`.

If using Cloudflare Pages instead, use build command `npm run build` and output directory `dist`, and let Pages perform the deployment; do not use `npx wrangler deploy` as a Pages deploy command.

## Keywords Targeted

**Primary:**
- septic tank repair houston
- septic tank repair in houston
- septic tank repair services in houston

**Long-tail:**
- septic tank pumping houston tx
- septic tank repair cost houston
- emergency septic tank repair houston
- drain field repair houston
- septic tank cleanout houston
- septic system repair houston
- residential septic repair houston
- commercial septic repair houston

## Schema Types Per Page

| Page | Schema |
|------|--------|
| Homepage | LocalBusiness, WebSite, Organization, FAQPage, HowTo, BreadcrumbList |
| Service pages | Service, FAQPage, HowTo, BreadcrumbList |
| Area pages | LocalBusiness (areaServed), FAQPage, BreadcrumbList |
| Blog posts | BlogPosting, FAQPage, BreadcrumbList |
| FAQ | FAQPage, BreadcrumbList |
| About | AboutPage, Organization, BreadcrumbList |
| Contact | ContactPage, BreadcrumbList |

## Content Guidelines

- All content written in plain, direct language (no AI-speak)
- Blog author: "Septic Tank Repair Houston Team"
- Cost ranges in body text only (no pricing tables)
- Every page has unique FAQs
- Internal linking connects all cluster partners
# septic

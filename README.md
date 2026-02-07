# J. Ryan Conklin - Portfolio Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/ac72be0b-00f8-4a62-8508-1363306e750e/deploy-status)](https://app.netlify.com/sites/pensive-poincare-27584d/deploys)

Personal portfolio and blog for J. Ryan Conklin, UX Engineer focused on design systems.

Live site: [jryanconklin.com](https://jryanconklin.com)

## Built With Next.js 15

This site is built with Next.js 15 using the App Router and static export.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Vanilla CSS with CSS Custom Properties
- **Blog**: Markdown files with gray-matter and marked
- **Icons**: Lucide React
- **Deployment**: Netlify (static export)
- **Node**: v24 (see .nvmrc)

## Project Structure

```
app/
  ├── page.tsx              # Homepage
  ├── experience/           # Work history
  ├── thoughts/             # Blog index and posts
  │   ├── page.tsx         # Blog listing
  │   └── [slug]/          # Individual post pages
  ├── layout.tsx           # Root layout with metadata
  └── globals.css          # Design system tokens and styles

lib/
  └── posts.ts             # Blog post utilities

posts/                     # Markdown blog posts
  └── *.md                # Posts with frontmatter (YYYY-MM-DD-slug.md)

public/                    # Static assets
static/                    # Legacy static files
```

## Quick Start

1. **Clone and install**

```shell
cd jryanconklin.com/
npm install
```

2. **Development**

```shell
npm run dev
```

3. **Build for production**

```shell
npm run build
```

## Writing Blog Posts

Create a new markdown file in `posts/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2026-02-07"
description: "Brief description for SEO and listing pages"
---

Your content here...
```

**Filename convention**: `YYYY-MM-DD-slug.md` (e.g., `2026-02-07-trying-something-new.md`)

This keeps posts sorted chronologically in your filesystem.

## Design System

- **Colors**: Dark purple theme (#1A0B2E) with purple (#A78BFA) and amber (#FCD34D) accents
- **Typography**: System monospace (headings) + Georgia serif (body)
- **Layout**: Left-aligned, single column, max-width 65ch
- **Accessibility**: WCAG AA compliant

## Deployment

Deploys automatically to Netlify on push to `main` branch.

Build settings:
- Build command: `npm run build`
- Publish directory: `out`
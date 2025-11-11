# AI Excellence Lab Web App

Modern React + Vite boilerplate for AI-centric marketing sites, dashboards, and internal tooling. It bundles shadcn/ui, Radix primitives, Tailwind CSS, TanStack Query, and TypeScript for a polished developer experience.

## Features

- ⚡️ Vite 7 with SWC-powered React Fast Refresh for instant feedback loops.
- 🎨 Tailwind CSS + `tailwindcss-animate` with shadcn/ui components on top of Radix UI.
- 🧠 TanStack Query for async workflows, caching, and optimistic UI patterns.
- 🧭 Clean path aliases (`@/`) and sensible project structure for growth.
- ✅ ESLint 9 + TypeScript 5.8 for static analysis and DX guardrails.

## Requirements

| Tool | Version | Notes |
|------|---------|-------|
| Node | ≥ 20.19.0 | `.nvmrc` is provided; run `nvm install && nvm use`. |
| npm  | ≥ 10.8.0  | Automatically installed with the Node version above. |

Double-check your environment:

```bash
node -v
npm -v
```

## Quick Start

```bash
git clone <your-repo-url>
cd aiexcellencelab
nvm install && nvm use   # optional but recommended
npm install
npm run dev              # http://localhost:8080
```

Update the host/port via `vite.config.ts` if needed.

## Scripts

| Command            | Description |
|--------------------|-------------|
| `npm run dev`      | Start the Vite dev server with hot reloading. |
| `npm run build`    | Create an optimized production bundle in `dist/`. |
| `npm run build:dev`| Build using Vite’s `development` mode (useful for staging). |
| `npm run preview`  | Preview the production build locally. |
| `npm run lint`     | Run ESLint across the entire project. |

## Project Structure

```
.
├── public/                 # Static assets served as-is
├── src/
│   ├── components/         # UI primitives & composite widgets
│   ├── routes/             # Top-level views / pages
│   ├── lib/                # Utilities, hooks, API clients
│   └── main.tsx            # App bootstrap
├── components.json         # shadcn/ui generator config
├── tailwind.config.ts      # Tailwind + design tokens
├── postcss.config.js
├── tsconfig*.json
└── vite.config.ts
```

Adjust folders as your domain grows (e.g., move to feature-based modules or add `/services` for API calls).

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vitejs.dev/) with [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
- [Tailwind CSS](https://tailwindcss.com/), [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate), and [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/) headless primitives
- [TanStack Query](https://tanstack.com/query/latest) for data orchestration

## Deployment

1. `npm run build`
2. Upload the `dist/` directory to your host of choice (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

## Contributing

1. Create a feature branch.
2. Make your changes and add tests if applicable.
3. Run `npm run lint` and `npm run build`.
4. Open a pull request with context on the change.

Issues and PRs that improve DX, accessibility, or performance are highly encouraged.

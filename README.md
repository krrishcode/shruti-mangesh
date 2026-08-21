# E-commerce Monorepo

Robust, lightweight monorepo for e-commerce, powered by **Astro + React**, **Hono (Node/MySQL)**, and shared packages.

## Architecture

```
ecommerce/
├── frontend/                     # Astro Public Pages + React Admin & User Islands / SPAs
│   ├── src/
│   │   ├── pages/                # Astro public routes (e.g. index.astro, /shop)
│   │   ├── components/           # UI & Island components
│   │   ├── layouts/              # Astro layouts
│   │   ├── react/
│   │   │   ├── admin/            # React Admin Panel
│   │   │   └── user/             # React User/Customer Portal
│   │   ├── lib/                  # Utilities & API client
│   │   ├── stores/               # State management (Nanostores / Zustand)
│   │   ├── types/                # Local frontend types
│   │   └── styles/               # Tailwind CSS & global styles
│   ├── public/                   # Static assets
│   └── package.json
│
├── hono/                         # High-performance Hono Backend with MySQL
│   ├── src/
│   │   ├── config/               # Environment & database configurations
│   │   ├── db/                   # Database connection, schemas, migrations
│   │   │   ├── schema/
│   │   │   └── migrations/
│   │   ├── modules/              # Domain-driven modular structure
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── designers/
│   │   │   ├── collections/
│   │   │   ├── inventory/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   ├── orders/
│   │   │   ├── payments/
│   │   │   ├── shipping/
│   │   │   ├── reviews/
│   │   │   ├── wishlist/
│   │   │   └── media/
│   │   ├── middleware/           # Auth, error handling, CORS, logging
│   │   ├── integrations/         # Payment gateways, shipping APIs, etc.
│   │   ├── lib/                  # Shared backend utilities
│   │   └── app.ts                # Main Hono application setup
│   └── package.json
│
├── packages/                     # Shared Workspace Packages
│   ├── types/                    # Shared TypeScript interfaces & types
│   ├── validation/               # Shared Zod / validation schemas
│   └── config/                   # Shared eslint/typescript configs
│
├── scripts/                      # Build, deploy & migration scripts
├── package.json                  # Root runner
├── pnpm-workspace.yaml           # pnpm workspace definition
├── .env.example
└── README.md
```

## Quick Start

```bash
# 1. Install all dependencies
pnpm install

# 2. Run both Backend & Frontend in parallel
pnpm dev

# Or run separately:
pnpm dev:hono       # http://localhost:4000
pnpm dev:frontend   # http://localhost:3000
```

# Golang React Vite Turborepo

A simple monorepo starter with Go backend and React frontend.

## What's included

- Go REST API server with standard project layout
- React app with Vite and Tanstack Query
- Shared UI components with shadcn/ui
- ESLint and TypeScript configurations
- Turborepo for build orchestration

## Getting started

Install dependencies:
```bash
pnpm install
```

Setup environment files:
```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

Start development:
```bash
pnpm dev
```

This starts the API on port 8080 and web app on port 3000.

## Available commands

- `pnpm dev` - Start all services
- `pnpm build` - Build everything
- `pnpm lint` - Run linting
- `pnpm clean` - Clean build files

## Requirements

- Node.js 20+
- pnpm
- Go 1.23+
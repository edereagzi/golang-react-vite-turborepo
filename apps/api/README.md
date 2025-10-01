# API

Go REST API server with proper project structure.

## Project Structure

```
cmd/api/        - Application entry point
internal/       - Private application code
  ├── config/   - Configuration management
  ├── handlers/ - HTTP handlers
  ├── middleware/ - HTTP middleware
  └── router/   - Route setup
```

## Environment Setup

Copy environment file:
```bash
cp .env.example .env
```

## Development

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

The binary will be in `bin/api`.
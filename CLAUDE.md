# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal portfolio website currently in transition. The repository contains:

- **Current (main branch)**: React + Vite PWA application
- **New rewrite (.claude/atick.dev)**: Astro-based static site with improved performance

The repository is being migrated from React to Astro while preserving git history from both codebases.

## Development Commands

### Current React/Vite Version

```bash
# Install dependencies (uses bun as package manager)
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint code
bun run lint

# Generate PWA assets (after updating public/logo.svg)
bun run generate-pwa-assets

# Deploy to GitHub Pages
bun run deploy
```

### New Astro Version (.claude/atick.dev)

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint code
bun run lint

# Auto-fix lint issues
bun run lint:fix

# Format code
bun run format
```

## Architecture

### Current React Application

- **Framework**: React 19 with Vite build tool
- **Styling**: Bootstrap 5, Reactstrap, Sass, Tailwind CSS v4
- **State Management**: React Context API (theme-context.js)
- **Data Fetching**: TanStack React Query with Axios
- **PWA**: Vite PWA plugin with service worker
- **Analytics**: Google Analytics 4 (react-ga4)
- **Key Components**:
  - `src/App.jsx`: Main app wrapper with theme provider
  - `src/components/`: Modular UI components (Banner, Bio, Projects, Publications, etc.)
  - `src/contexts/theme-context.js`: Theme state management
  - `src/api/demoApi.js`: API integration layer

### New Astro Application

- **Framework**: Astro 5.15+ (static site generator)
- **Styling**: Tailwind CSS v3
- **Code Quality**: Biome (linting + formatting)
- **Icons**: Lucide Astro
- **Key Components**:
  - `src/layouts/Layout.astro`: Base layout with theme support
  - `src/pages/index.astro`: Main landing page
  - `src/components/`: Astro components (Hero, Projects, Publications, Bio, etc.)
  - Theme toggle with dark mode support
  - Floating action button for back-to-top

## Deployment

### Current Setup

- **Hosting**: GitHub Pages
- **Deployment Branch**: `deployment`
- **Deployment Command**: `gh-pages -d dist -b deployment`
- **Repository**: atick-faisal.github.io
- **URL**: https://atick.dev

### New Rewrite

- **Repository**: atick.dev (separate repo)
- **Remote**: git@github.com:atick-faisal/atick.dev.git

## Migration Notes

The codebase is being migrated from React to Astro. The migration strategy involves:

1. Preserving git history from both React (main) and Astro (atick.dev) codebases
2. Using git subtree merge with `--allow-unrelated-histories`
3. Creating a dedicated `migrate-to-astro` branch for the transition
4. Moving old React code to `legacy/` directory
5. Promoting Astro code to repository root

**Important**: Always work on migration in the `migrate-to-astro` branch. Never modify `main` branch directly during migration.

## Code Style

### Current React Code

- Uses ESLint with React plugins
- Component-based architecture with functional components
- Custom hooks for theme management
- Error boundaries for error handling

### New Astro Code

- Uses Biome for linting and formatting
- Component-first architecture with .astro files
- TypeScript configuration enabled
- Semantic HTML with accessibility focus (skip links, proper heading hierarchy)

## Git Workflow

- **Main Branch**: `main` (currently React/Vite)
- **Development Branch**: `dev`
- **Deployment Branch**: `deployment` (GitHub Pages)
- **Migration Branch**: `migrate-to-astro` (for rewrite integration)
- **Remote**: SSH-based (git@github-personal:atick-faisal/...)

## Important Files

- `package.json`: Dependencies and scripts for current React app
- `.claude/atick.dev/package.json`: Dependencies for new Astro app
- `vite.config.js`: Current Vite + PWA configuration
- `.claude/atick.dev/astro.config.mjs`: Astro configuration
- `tailwind.config.mjs`: Tailwind v4 config (current)
- `.claude/atick.dev/tailwind.config.mjs`: Tailwind v3 config (new)
- `.claude/atick.dev/biome.json`: Biome linting/formatting rules

## Package Manager

This project uses **Bun** as the package manager. Always use `bun` commands instead of `npm` or `yarn`.

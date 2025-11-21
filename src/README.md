# Source Directory Structure

This directory contains the source code for the Astro-based portfolio website.

## Directory Overview

```
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable Astro components
├── config/          # Application configuration
├── constants/       # Constant values and configurations
├── data/            # JSON data files for projects and publications
├── layouts/         # Page layout components
├── lib/             # Shared library modules
├── pages/           # Astro page routes
├── styles/          # Global CSS styles
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Directory Details

### `/assets`
Static assets like images, icons, and media files. Processed by Astro's asset pipeline.

### `/components`
Reusable UI components:
- `BackToTop.astro` - Scroll-to-top floating button
- `Bio.astro` - About/bio section
- `Butterfly.astro` - Lorentz attractor animation canvas
- `Card.astro` - Reusable card for projects/publications
- `Footer.astro` - Site footer
- `Hero.astro` - Landing hero section
- `Navbar.astro` - Site navigation
- `Projects.astro` - Projects showcase
- `Publications.astro` - Publications showcase
- `Selector.astro` - Tab selector for projects/publications
- `SkipToContent.astro` - Accessibility skip link

### `/config`
Application-wide configuration:
- `site.ts` - Site metadata, SEO, and analytics config

### `/constants`
Centralized constant values:
- `breakpoints.ts` - Responsive breakpoints
- `butterfly.ts` - Butterfly animation configuration
- `cardButtons.ts` - Card button configurations
- `colors.ts` - Color definitions and gradients
- `ui.ts` - UI-related constants (icon sizes, etc.)
- `index.ts` - Barrel export for all constants

### `/data`
JSON data files:
- `projects.json` - Project data
- `publications.json` - Publication data

### `/layouts`
Page layout wrappers:
- `Layout.astro` - Base layout with HTML structure, theme, and analytics

### `/lib`
Shared library modules:
- `butterfly.ts` - Butterfly animation classes and logic
- `theme.ts` - Theme management utilities
- `index.ts` - Barrel export for all lib modules

### `/pages`
Astro page routes:
- `index.astro` - Homepage

### `/styles`
Global CSS:
- `global.css` - Global styles and Tailwind imports

### `/types`
TypeScript type definitions:
- `index.ts` - Project and Publication interfaces
- `global.d.ts` - Global type declarations (Window interface, etc.)

### `/utils`
Utility functions:
- `cardLinks.ts` - Card link extraction helpers
- `logger.ts` - Development logging utilities
- `validators.ts` - Validation helpers
- `index.ts` - Barrel export for all utils

## Code Organization Principles

1. **Separation of Concerns**: Logic separated from presentation
2. **Reusability**: Shared code in `lib/`, `utils/`, and `constants/`
3. **Type Safety**: Strong TypeScript typing throughout
4. **Maintainability**: Clear directory structure and documentation
5. **Performance**: Optimized imports and code splitting

## Import Conventions

Use barrel exports for cleaner imports:

```typescript
// ✅ Good - use barrel exports
import { BREAKPOINTS, BUTTERFLY_CONFIG } from '../constants';
import { extractCardLinks } from '../utils';
import { LorentzParticle } from '../lib';

// ❌ Avoid - direct imports (unless for tree-shaking reasons)
import { BREAKPOINTS } from '../constants/breakpoints';
```

## Adding New Features

1. **New Component**: Add to `/components/`
2. **New Utility**: Add to `/utils/` and export in `index.ts`
3. **New Constant**: Add to `/constants/` and export in `index.ts`
4. **New Type**: Add to `/types/`
5. **New Config**: Add to `/config/`
6. **New Page**: Add to `/pages/`

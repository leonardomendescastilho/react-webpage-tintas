# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # TypeScript check + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Architecture

**Stack:** React 19 + TypeScript + Vite 7 + Tailwind CSS v4

**UI Components:** shadcn/ui (new-york style) with Radix UI primitives
- Add components via: `npx shadcn@latest add <component>`
- Components live in `src/components/ui/`
- Uses class-variance-authority (CVA) for variant management

**Styling:**
- Tailwind v4 with CSS variables in oklch color space
- Theme colors defined in `src/index.css`
- Dark mode via `.dark` class on root element

**Path Aliases:**
- `@/*` → `src/*` (configured in tsconfig and vite.config)
- Import patterns: `@/components/ui/button`, `@/lib/utils`

**Icons:** lucide-react

## Key Files

- `src/index.css` - Global styles and CSS theme variables
- `src/lib/utils.ts` - Utility functions including `cn()` for class merging
- `components.json` - shadcn/ui configuration

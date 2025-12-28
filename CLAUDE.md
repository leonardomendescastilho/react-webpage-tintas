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

**Type:** Single Page Application (landing page) com navegacao por ancoras

**UI Components:** shadcn/ui (new-york style) with Radix UI primitives
- Add components via: `npx shadcn@latest add <component>`
- Uses class-variance-authority (CVA) for variant management

**Styling:**
- Tailwind v4 with CSS variables in oklch color space
- Theme colors defined in `src/index.css`
- Dark mode via `.dark` class on root element

**Icons:** lucide-react

## Code Standards

### Components
- Usar **arrow functions** com tipagem forte
- Sempre usar **TypeScript** com tipos explicitos
- Usar `interface`, `type` e `enum` adequadamente
- Usar **Helmet** para SEO em cada secao

```tsx
// Correto
interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section id="hero">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* content */}
    </section>
  );
};
```

### Comments
- NAO usar comentarios de bloco `/** */`
- Usar apenas `//` quando necessario, acima do trecho relevante

```tsx
// Correto
// Calcula o total com desconto
const total = price * (1 - discount);

// Errado - NAO fazer
/**
 * Calcula o total com desconto
 */
const total = price * (1 - discount);
```

### Modularizacao
- NAO modularizar demais - este e um projeto de uma pagina
- Manter trechos pequenos juntos no mesmo arquivo
- Separar apenas quando realmente necessario

### Workflow
- SEMPRE verificar Context7 MCP para documentacao atualizada
- NAO modificar arquivos fora do plano sem perguntar antes
- Seguir melhores praticas e padroes de escrita

## Path Aliases

| Alias | Path | Uso |
|-------|------|-----|
| `@/*` | `src/*` | Geral |
| `@/sections/*` | `src/components/sections/*` | Secoes da landing |
| `@/layout/*` | `src/components/layout/*` | Header/Footer |
| `@/ui/*` | `src/components/ui/*` | shadcn/ui |
| `@/data/*` | `src/data/*` | Configuracoes |
| `@/lib/*` | `src/lib/*` | Utilitarios |

## Project Structure

```text
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Secoes da landing page
│   │   ├── HeroSection
│   │   ├── StatsSection
│   │   ├── PortfolioSection
│   │   ├── ServicesSection
│   │   ├── ProcessSection
│   │   ├── TestimonialsSection
│   │   ├── CTASection
│   │   └── ContactSection
│   └── ui/              # shadcn/ui components
├── data/                # Dados e configuracoes do site
├── lib/                 # Utilitarios (cn, etc)
├── App.tsx
└── index.css
```

## Key Files

- `src/index.css` - Global styles and CSS theme variables
- `src/lib/utils.ts` - Utility functions including `cn()` for class merging
- `src/data/site-config.ts` - Textos e dados centralizados do site
- `components.json` - shadcn/ui configuration

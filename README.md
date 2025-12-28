# Webpage Tintas

Website institucional para loja de tintas - Landing Page SPA.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- shadcn/ui (componentes)
- Lucide React (ícones)

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Verificar linting
npm run lint

# Preview do build
npm run preview
```

## Estrutura

```text
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Seções da landing page
│   │   ├── HeroSection
│   │   ├── StatsSection
│   │   ├── PortfolioSection
│   │   ├── ServicesSection
│   │   ├── ProcessSection
│   │   ├── TestimonialsSection
│   │   ├── CTASection
│   │   └── ContactSection
│   └── ui/              # Componentes shadcn/ui
├── data/                # Dados e configurações do site
├── lib/                 # Utilitários
├── App.tsx              # Componente raiz
└── index.css            # Estilos globais
```

## Path Aliases

```tsx
import { Button } from "@/ui/button"
import { HeroSection } from "@/sections/HeroSection"
import { Header } from "@/layout/Header"
import { siteConfig } from "@/data/site-config"
```

## Adicionar Componentes

```bash
npx shadcn@latest add <componente>
```

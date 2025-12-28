# Plano de Implementação - Webpage Tintas

## Visão Geral

**Tipo:** Single Page Application com navegação por âncoras
**Total de Seções:** 10
**Stack:** React 19 + TypeScript + Tailwind CSS v4 + Motion (framer-motion)

---

## Pré-requisitos

Antes de iniciar as seções, garantir:

```bash
# Instalar motion
npm install motion

# Componentes shadcn/ui necessários
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add card
```

---

## Ordem de Implementação

1. [x] Estrutura base (App.tsx + site-config.ts)
2. [ ] Header (Navegação)
3. [ ] HeroSection
4. [ ] StatsSection
5. [ ] PortfolioSection
6. [ ] ServicesSection
7. [ ] ProcessSection
8. [ ] TestimonialsSection
9. [ ] CTASection
10. [ ] ContactSection
11. [ ] Footer

---

## ETAPA 0: Estrutura Base

### Arquivo: `src/data/site-config.ts`

```typescript
export const siteConfig = {
  empresa: {
    nome: "Webpage Tintas",
    anoFundacao: 2010,
    telefone: "(11) 99999-9999",
    email: "contato@webpagetintas.com.br",
    cidade: "São Paulo",
    estado: "SP",
  },
  stats: {
    projetos: "500+",
    anosExperiencia: "15",
    satisfacao: "98%",
    avaliacoes: "200+",
    nota: "4.9",
  },
  // ... demais dados
} as const;
```

### Arquivo: `src/App.tsx`

```typescript
// Estrutura base com HelmetProvider e todas as seções
```

---

## ETAPA 1: Header (Navegação)

### Arquivo: `src/components/layout/Header.tsx`

### Especificações:
- **Layout:** Flexbox horizontal 3 colunas
- **Posição:** Fixa no topo (fixed)
- **Efeito:** Background com blur ao rolar

### Elementos:
| Posição | Conteúdo |
|---------|----------|
| Esquerda | Logo (ícone + nome) |
| Centro | Links de navegação (Início, Portfólio, Serviços, Sobre, Contato) |
| Direita | Botão CTA "Orçamento Gratuito →" |

### Animações (Motion):
- Nenhuma animação de entrada
- Links: `whileHover={{ color: primary }}`
- Botão CTA: `whileHover={{ scale: 1.05 }}`, `whileTap={{ scale: 0.95 }}`

### Tailwind:
```
fixed top-0 left-0 right-0 z-50
backdrop-blur-md bg-background/80
```

---

## ETAPA 2: HeroSection

### Arquivo: `src/components/sections/HeroSection.tsx`

### Especificações:
- **Layout:** Grid 2 colunas (50/50)
- **Altura:** min-h-screen
- **Animação:** Elementos surgem com fade-in e slide-up escalonado

### Coluna Esquerda (ordem de elementos):
1. Badge/Tag: "◆ Excelência em Pintura desde 2010"
2. Título H1: "Transformamos Ambientes em Obras de Arte" (palavra "Ambientes" com gradiente)
3. Subtítulo: texto descritivo
4. Botões CTA: Primário (solid) + Secundário (outline)

### Coluna Direita:
1. Imagem principal (aspect-ratio 4:5, rounded-3xl)
2. Card flutuante inferior esquerdo: Avaliações (★ 4.9 +200 avaliações)
3. Card flutuante superior direito: Anos de experiência (15+)

### Rodapé da seção:
- Indicador de scroll: linha + "Role para explorar"

### Animações (Motion):
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}
```

### Imagem coluna direita:
```typescript
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
```

---

## ETAPA 3: StatsSection

### Arquivo: `src/components/sections/StatsSection.tsx`

### Especificações:
- **Layout:** Grid 4 colunas iguais
- **Bordas:** Superior e inferior + divisórias verticais

### Itens:
| Número | Label |
|--------|-------|
| 500+ | Projetos Concluídos |
| 15 | Anos de Experiência |
| 98% | Clientes Satisfeitos |
| 0 | Projetos Abandonados |

### Animações (Motion):
```typescript
// Cada stat item
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.5 }}
transition={{ duration: 0.5, delay: index * 0.1 }}
```

---

## ETAPA 4: PortfolioSection

### Arquivo: `src/components/sections/PortfolioSection.tsx`

### Especificações:
- **Layout:** Grid assimétrico (Bento Grid) 3 colunas x 2 linhas
- **Destaque:** Primeiro item ocupa 2 colunas e 2 linhas

### Cabeçalho:
- Tag: "Portfólio"
- Título: "Trabalhos Recentes"
- Subtítulo: texto descritivo

### Card de Projeto:
- Imagem (object-cover)
- Overlay no hover com: Tag (tipo), Título, Área em m², Botão seta ↗

### Rodapé:
- Link: "Ver todos os projetos →"

### Animações (Motion):
```typescript
// Container grid
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

// Card
whileHover: imagem scale(1.05), overlay opacity 1
```

---

## ETAPA 5: ServicesSection

### Arquivo: `src/components/sections/ServicesSection.tsx`

### Especificações:
- **Layout:** Grid 2 colunas (30/70)
- **Coluna esquerda:** Sticky
- **Coluna direita:** Cards empilhados

### Coluna Esquerda:
- Tag: "Serviços"
- Título: "Soluções Completas"
- Descrição: texto
- Link: "Fale sobre seu projeto →"

### Serviços (cards):
| Ícone | Título | Descrição |
|-------|--------|-----------|
| ◈ | Pintura Residencial | Transformação completa... |
| ◇ | Pintura Comercial | Soluções para escritórios... |
| △ | Texturas Especiais | Efeitos decorativos... |
| ○ | Restauração | Recuperação de superfícies... |

### Animações (Motion):
```typescript
// Card
whileHover={{ backgroundColor: "hsl(var(--muted))", borderColor: "hsl(var(--primary))" }}
transition={{ duration: 0.3 }}
```

---

## ETAPA 6: ProcessSection

### Arquivo: `src/components/sections/ProcessSection.tsx`

### Especificações:
- **Layout:** Grid 3 colunas x 2 linhas
- **Total:** 6 etapas

### Cabeçalho:
- Tag: "Processo"
- Título: "Como Trabalhamos"

### Etapas:
| Nº | Título | Descrição |
|----|--------|-----------|
| 01 | Visita Técnica | Avaliação presencial... |
| 02 | Orçamento Detalhado | Proposta transparente... |
| 03 | Preparação | Proteção de móveis... |
| 04 | Execução | Aplicação das demãos... |
| 05 | Acabamento | Retoques finais... |
| 06 | Garantia | Acompanhamento pós-obra... |

### Animações (Motion):
```typescript
// Cards com stagger
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
staggerChildren: 0.1
```

---

## ETAPA 7: TestimonialsSection

### Arquivo: `src/components/sections/TestimonialsSection.tsx`

### Especificações:
- **Layout:** Grid 3 colunas iguais
- **Background:** Diferenciado (muted)

### Cabeçalho:
- Tag: "Depoimentos"
- Título: "O que dizem nossos clientes"

### Card de Depoimento:
- Aspas decorativas grandes "
- Texto do depoimento
- Avatar (inicial do nome)
- Nome do cliente
- Profissão/cargo

### Animações (Motion):
```typescript
// Cards com stagger
whileInView="visible"
staggerChildren: 0.15
```

---

## ETAPA 8: CTASection

### Arquivo: `src/components/sections/CTASection.tsx`

### Especificações:
- **Layout:** Centralizado
- **Largura:** max-w-3xl
- **Background:** Gradiente primary

### Elementos:
- Título: "Pronto para transformar seu ambiente?"
- Subtítulo: "Solicite um orçamento gratuito..."
- Botão: "Solicitar Orçamento Gratuito ↗"

### Animações (Motion):
```typescript
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

---

## ETAPA 9: ContactSection

### Arquivo: `src/components/sections/ContactSection.tsx`

### Especificações:
- **Layout:** Grid 2 colunas (50/50)

### Coluna Esquerda:
- Tag: "Contato"
- Título: "Vamos conversar sobre seu projeto"
- Descrição
- Info de contato: Telefone, Email, Localização
- Redes sociais: Instagram, Facebook, WhatsApp

### Coluna Direita (Formulário):
| Campo | Tipo | Largura |
|-------|------|---------|
| Nome completo | text | 100% |
| E-mail | email | 50% |
| Telefone | tel | 50% |
| Tipo de serviço | select | 100% |
| Mensagem | textarea | 100% |
| Botão | submit | 100% |

### Animações (Motion):
```typescript
// Formulário com stagger nos campos
staggerChildren: 0.1
```

---

## ETAPA 10: Footer

### Arquivo: `src/components/layout/Footer.tsx`

### Especificações:
- **Layout:** 2 blocos verticais

### Bloco Superior:
- Logo
- Tagline: "Transformando ambientes com excelência..."

### Bloco Inferior:
- Copyright: "© 2025 Webpage Tintas. Todos os direitos reservados."
- Links: Política de Privacidade, Termos de Uso

---

## Checklist de Animações Premium

- [ ] Hero section com stagger (badge → título → subtítulo → CTAs)
- [ ] Seções aparecem com whileInView ao scrollar
- [ ] Cards com whileHover (scale ou y)
- [ ] Botões com whileTap
- [ ] Stats animam ao entrar na viewport
- [ ] Grid de portfólio com stagger
- [ ] Respeita prefers-reduced-motion
- [ ] Durações entre 0.3s-0.8s
- [ ] Stagger entre 0.05s-0.15s

---

## Padrão de Código

```tsx
// Exemplo de componente seguindo os padrões do projeto

interface SectionProps {
  id: string;
  className?: string;
}

export const ExampleSection = ({ id, className }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20", className)}>
      <Helmet>
        <title>Título da Seção | Webpage Tintas</title>
      </Helmet>
      {/* conteúdo */}
    </section>
  );
};
```

---

## Próximos Passos

Após finalizar todas as seções:
1. [ ] Testar responsividade (mobile, tablet, desktop)
2. [ ] Testar animações com prefers-reduced-motion
3. [ ] Otimizar imagens
4. [ ] Configurar SEO final
5. [ ] Deploy

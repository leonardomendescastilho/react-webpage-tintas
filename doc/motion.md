# Motion - Guia de Melhores Práticas 2025
## Padrão de Mercado para Websites Premium

---

## 📌 RESUMO RÁPIDO

| Tipo | Hook/Prop Principal | Quando Usar |
|------|---------------------|-------------|
| Componente Individual | `initial`, `animate`, `whileHover`, `whileTap` | Botões, cards, elementos isolados |
| Sequência (A→B→C) | `variants` + `staggerChildren` | Listas, grids, hero sections |
| Scroll Reveal | `whileInView` | Seções que aparecem ao scrollar |
| Scroll Progress | `useScroll` + `useTransform` | Progress bars, parallax, sticky |

---

## 1. COMPONENTE INDIVIDUAL

### 1.1 Animação de Entrada Básica

```tsx
import { motion } from 'motion/react'

// ✅ PADRÃO DE MERCADO - Fade + Slide Up
const Card = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] // ease-out cubic
    }}
  >
    Conteúdo do card
  </motion.div>
)
```

### 1.2 Micro-interações (Hover + Tap)

```tsx
// ✅ PADRÃO RECOMENDADO - Botões e elementos clicáveis
const Button = ({ children }) => (
  <motion.button
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
)

// ✅ Card com hover mais elaborado
const InteractiveCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ 
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 }
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.5 }}
  >
    Card interativo
  </motion.div>
)
```

### 1.3 Valores Recomendados

```tsx
// 📐 MEDIDAS PADRÃO DE MERCADO

// Escalas
whileHover={{ scale: 1.02 }}  // Sutil - cards grandes
whileHover={{ scale: 1.05 }}  // Padrão - botões, cards médios
whileHover={{ scale: 1.1 }}   // Enfático - ícones, elementos pequenos

whileTap={{ scale: 0.95 }}    // Padrão para todos os clicáveis
whileTap={{ scale: 0.9 }}     // Mais enfático

// Durações
transition={{ duration: 0.15 }}  // Micro-interações (hover/tap)
transition={{ duration: 0.3 }}   // Animações rápidas
transition={{ duration: 0.5 }}   // Animações padrão
transition={{ duration: 0.8 }}   // Animações lentas/dramáticas

// Easing recomendados
ease: "easeOut"                          // Simples
ease: [0.25, 0.1, 0.25, 1]              // Cubic ease-out (padrão Apple)
ease: [0.16, 1, 0.3, 1]                 // Ease-out expo (mais suave)

// Spring para movimento natural
transition={{ type: "spring", stiffness: 300, damping: 20 }}
```

### 1.4 AnimatePresence (Entrada/Saída)

```tsx
import { motion, AnimatePresence } from 'motion/react'

// ✅ Para elementos que entram e saem do DOM
const Modal = ({ isOpen, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
)
```

---

## 2. SEQUENCIAMENTO (A → B → C)

### 2.1 Stagger Básico com Variants

```tsx
// ✅ PADRÃO DE MERCADO - Hero section, listas, grids

// 1. Defina as variants do container (pai)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,      // Delay entre cada filho
      delayChildren: 0.2,        // Delay antes de começar
      when: "beforeChildren"     // Pai anima antes dos filhos
    }
  }
}

// 2. Defina as variants dos itens (filhos)
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// 3. Aplique no componente
const StaggeredList = ({ items }) => (
  <motion.ul
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {items.map((item, i) => (
      <motion.li key={i} variants={itemVariants}>
        {item}
      </motion.li>
    ))}
  </motion.ul>
)
```

### 2.2 Hero Section Completa (Padrão Premium)

```tsx
// ✅ EXEMPLO REAL - Landing page profissional

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const HeroSection = () => (
  <motion.section
    variants={heroContainerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* 1º - Badge/Tag */}
    <motion.span variants={heroItemVariants} className="badge">
      ◆ Desde 2010
    </motion.span>
    
    {/* 2º - Título */}
    <motion.h1 variants={heroItemVariants}>
      Transformamos Ambientes
    </motion.h1>
    
    {/* 3º - Subtítulo */}
    <motion.p variants={heroItemVariants}>
      Pintura profissional premium
    </motion.p>
    
    {/* 4º - CTAs */}
    <motion.div variants={heroItemVariants} className="ctas">
      <button>Orçamento</button>
      <button>Ver Trabalhos</button>
    </motion.div>
  </motion.section>
)
```

### 2.3 Grid de Cards com Stagger

```tsx
// ✅ Para portfólios, grids de serviços, etc.

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,  // Mais rápido para grids
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const PortfolioGrid = ({ projects }) => (
  <motion.div
    className="grid"
    variants={gridVariants}
    initial="hidden"
    animate="visible"
  >
    {projects.map((project, i) => (
      <motion.div 
        key={i} 
        variants={cardVariants}
        whileHover={{ y: -10 }}
      >
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
      </motion.div>
    ))}
  </motion.div>
)
```

### 2.4 Valores de Stagger Recomendados

```tsx
// ⏱️ TIMING PADRÃO DE MERCADO

// Para listas (3-8 itens)
staggerChildren: 0.1    // Padrão - ritmo confortável

// Para grids grandes (8+ itens)
staggerChildren: 0.05   // Mais rápido - evita espera longa

// Para hero sections (2-5 elementos)
staggerChildren: 0.15   // Mais lento - mais dramático

// Para texto letra por letra
staggerChildren: 0.03   // Bem rápido

// Delay inicial
delayChildren: 0.2      // Padrão
delayChildren: 0.5      // Page load (após transição de página)
```

---

## 3. SCROLL ANIMATIONS

### 3.1 whileInView (Mais Simples)

```tsx
// ✅ MÉTODO MAIS FÁCIL - Para a maioria dos casos

const ScrollRevealSection = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ 
      once: true,           // Anima apenas 1 vez
      amount: 0.3           // 30% visível para disparar
    }}
    transition={{ 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }}
  >
    {children}
  </motion.section>
)

// Uso
<ScrollRevealSection>
  <h2>Nossos Serviços</h2>
  <p>Conteúdo da seção...</p>
</ScrollRevealSection>
```

### 3.2 whileInView + Stagger (Seções Completas)

```tsx
// ✅ PADRÃO PREMIUM - Seções que aparecem com elementos em sequência

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const ServicesSection = ({ services }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.h2 variants={itemVariants}>
      Nossos Serviços
    </motion.h2>
    
    <motion.div className="services-grid">
      {services.map((service, i) => (
        <motion.div key={i} variants={itemVariants}>
          {service.title}
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
)
```

### 3.3 useInView (Controle Manual)

```tsx
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

// ✅ Para animações mais complexas ou condicionais

const AnimatedCounter = ({ value }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.5 
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {isInView ? value : 0}
    </motion.div>
  )
}
```

### 3.4 useScroll + useTransform (Progress/Parallax)

```tsx
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

// ✅ PROGRESS BAR - Barra de leitura no topo

const ReadingProgressBar = () => {
  const { scrollYProgress } = useScroll()
  
  return (
    <motion.div
      className="progress-bar"
      style={{ 
        scaleX: scrollYProgress,
        transformOrigin: "left"
      }}
    />
  )
}

// ✅ PARALLAX - Elemento que move mais lento

const ParallaxImage = ({ src }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  
  return (
    <div ref={ref} className="parallax-container">
      <motion.img 
        src={src} 
        style={{ y }}
      />
    </div>
  )
}

// ✅ FADE OUT no scroll

const FadeOnScroll = ({ children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  
  return (
    <motion.div ref={ref} style={{ opacity, scale }}>
      {children}
    </motion.div>
  )
}
```

### 3.5 Offset Reference

```tsx
// 📐 EXPLICAÇÃO DOS OFFSETS

offset: ["start end", "end start"]
//       ↑           ↑
//       |           └── Quando termina: bottom do elemento = top da viewport
//       └── Quando começa: top do elemento = bottom da viewport

// Opções de posição:
// "start" = topo do elemento/viewport
// "center" = centro
// "end" = bottom

// Exemplos comuns:
offset: ["start end", "end start"]    // Elemento atravessa toda viewport
offset: ["start center", "end center"] // Centralizado na viewport
offset: ["start 0.8", "end 0.2"]      // Customizado (80% e 20%)
```

---

## 4. COMPONENTES REUTILIZÁVEIS

### 4.1 FadeIn Genérico

```tsx
// ✅ Componente reutilizável para qualquer elemento

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  className?: string
}

const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.5,
  className 
}: FadeInProps) => {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Uso:
<FadeIn delay={0.2} direction="up">
  <h2>Título</h2>
</FadeIn>
```

### 4.2 StaggerContainer Genérico

```tsx
// ✅ Container com stagger automático

interface StaggerContainerProps {
  children: React.ReactNode
  staggerDelay?: number
  initialDelay?: number
  className?: string
}

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: (custom: { stagger: number, delay: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay
    }
  })
}

export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  initialDelay = 0,
  className 
}: StaggerContainerProps) => (
  <motion.div
    variants={staggerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    custom={{ stagger: staggerDelay, delay: initialDelay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Item que vai dentro do StaggerContainer
export const StaggerItem = ({ children, className }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Uso:
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem><Card /></StaggerItem>
  <StaggerItem><Card /></StaggerItem>
  <StaggerItem><Card /></StaggerItem>
</StaggerContainer>
```

---

## 5. ESTRUTURA COMPLETA DE PÁGINA

```tsx
// ✅ EXEMPLO DE LANDING PAGE COM TODAS AS TÉCNICAS

const LandingPage = () => {
  return (
    <>
      {/* 1. Progress bar */}
      <ReadingProgressBar />
      
      {/* 2. Hero com stagger */}
      <HeroSection />
      
      {/* 3. Stats com scroll reveal */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <StaggerContainer>
          {stats.map(stat => (
            <StaggerItem key={stat.id}>
              <StatCard {...stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.section>
      
      {/* 4. Portfolio grid */}
      <PortfolioSection />
      
      {/* 5. Services com cards interativos */}
      <ServicesSection />
      
      {/* 6. Testimonials com parallax */}
      <TestimonialsSection />
      
      {/* 7. CTA final */}
      <FadeIn direction="up">
        <CTASection />
      </FadeIn>
    </>
  )
}
```

---

## 6. PERFORMANCE & ACESSIBILIDADE

### 6.1 Respect Reduced Motion

```tsx
import { useReducedMotion } from 'motion/react'

const AnimatedComponent = () => {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      animate={{ 
        x: prefersReducedMotion ? 0 : 100 
      }}
    >
      Conteúdo
    </motion.div>
  )
}
```

### 6.2 Best Practices de Performance

```tsx
// ✅ FAÇA
- Use transform (x, y, scale, rotate) - GPU accelerated
- Use opacity - GPU accelerated
- Use viewport={{ once: true }} para scroll animations
- Use layout animations apenas quando necessário

// ❌ EVITE
- Animar width, height, margin, padding (causa reflow)
- Muitos elementos animando simultaneamente
- Animações infinitas sem propósito
- Stagger muito longo em grids grandes
```

---

## 7. REFERÊNCIA RÁPIDA DE VALORES

```tsx
// 🎯 COPY-PASTE READY

// Fade in básico
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}

// Hover de botão
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Scroll reveal
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}

// Stagger container
transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}

// Spring natural
transition={{ type: "spring", stiffness: 300, damping: 20 }}

// Easing premium
ease: [0.16, 1, 0.3, 1]  // Expo out
ease: [0.25, 0.1, 0.25, 1]  // Cubic out
```

---

## 8. CHECKLIST PARA PÁGINA PREMIUM

- [ ] Hero section com stagger (badge → título → subtítulo → CTAs)
- [ ] Seções aparecem com whileInView ao scrollar
- [ ] Cards com whileHover (scale ou y)
- [ ] Botões com whileTap
- [ ] Stats/números animam ao entrar na viewport
- [ ] Grid de portfólio com stagger
- [ ] Progress bar de leitura (opcional)
- [ ] Respeita prefers-reduced-motion
- [ ] Durações entre 0.3s-0.8s
- [ ] Stagger entre 0.05s-0.15s
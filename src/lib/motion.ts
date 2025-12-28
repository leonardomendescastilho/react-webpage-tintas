import type { Variants, Transition } from "motion/react"

// Easing padrão premium
export const easing = {
  easeOut: [0.25, 0.1, 0.25, 1] as const,
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,
}

// Durações padrão
export const duration = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
}

// Transições prontas para uso
export const transitions = {
  default: {
    duration: duration.slow,
    ease: easing.easeOut,
  } as Transition,
  fast: {
    duration: duration.fast,
    ease: easing.easeOut,
  } as Transition,
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  } as Transition,
}

// Variants para container com stagger
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Variants para hero section (stagger mais lento)
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

// Variants para grids (stagger mais rápido)
export const gridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// Variants para itens com fade + slide up
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.easeOutExpo,
    },
  },
}

// Variants para itens com fade + slide down
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.easeOutExpo,
    },
  },
}

// Variants para itens com fade + scale
export const fadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.slower,
      ease: easing.easeOutExpo,
    },
  },
}

// Variants para cards com hover
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      duration: duration.normal,
      ease: easing.easeOut,
    },
  },
}

// Configurações de viewport padrão
export const viewport = {
  once: true,
  amount: 0.3,
}

// Animações de hover/tap para botões
export const buttonAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: transitions.fast,
}

// Animação de hover sutil para cards
export const cardAnimation = {
  whileHover: { y: -4 },
  transition: transitions.default,
}

import { motion } from "motion/react"
import { FaStar, FaArrowRight, FaChevronDown } from "react-icons/fa6"
import { Button } from "@/ui/button"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"
import { heroContainer, fadeUp, easing, duration } from "@/lib/motion"

interface HeroSectionProps {
  id?: string
  className?: string
}

export const HeroSection = ({ id = "inicio", className }: HeroSectionProps) => {
  const { textos, stats } = siteConfig

  const handleScrollToPortfolio = () => {
    const element = document.querySelector("#portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollToContato = () => {
    const element = document.querySelector("#contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id={id}
      aria-label="Seção principal"
      className={cn(
        "relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna Esquerda - Conteúdo */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                {textos.hero.badge}
              </span>
            </motion.div>

            {/* Título H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              {textos.hero.titulo.split(textos.hero.palavraDestaque)[0]}
              <span className="bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                {textos.hero.palavraDestaque}
              </span>
              {textos.hero.titulo.split(textos.hero.palavraDestaque)[1]}
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-lg"
            >
              {textos.hero.subtitulo}
            </motion.p>

            {/* Botões CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                onClick={handleScrollToContato}
                aria-label="Solicitar orçamento gratuito"
                className="group"
              >
                {textos.hero.ctaPrimario}
                <FaArrowRight
                  className="ml-2 size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleScrollToPortfolio}
                aria-label="Ver portfólio de trabalhos"
              >
                {textos.hero.ctaSecundario}
              </Button>
            </motion.div>
          </motion.div>

          {/* Coluna Direita - Imagem */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: easing.easeOutExpo,
              delay: 0.3,
            }}
          >
            {/* Imagem Principal */}
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=1000&fit=crop"
                alt="Profissional de pintura trabalhando em ambiente residencial"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* Card Flutuante - Avaliações */}
            <motion.div
              className="absolute bottom-0 -left-6 md:bottom-30 md:-left-12 bg-background rounded-2xl p-4 shadow-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: duration.slow,
                ease: easing.easeOutExpo,
                delay: 0.8,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <FaStar className="size-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.nota}</p>
                  <p className="text-sm text-muted-foreground">
                    +{stats.avaliacoes} avaliações
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card Flutuante - Anos de Experiência */}
            <motion.div
              className="absolute -top-4 -right-4 md:top-8 md:-right-8 bg-background rounded-2xl p-4 shadow-lg border border-border"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: duration.slow,
                ease: easing.easeOutExpo,
                delay: 1,
              }}
            >
              <p className="text-3xl font-bold">{stats.anosExperiencia}+</p>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: duration.slow }}
      >
        <span className="text-sm">Role para explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaChevronDown className="size-4" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  )
}

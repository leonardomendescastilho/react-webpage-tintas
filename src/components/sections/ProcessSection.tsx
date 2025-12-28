import { motion } from "motion/react"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"
import { staggerContainer, fadeUp, viewport } from "@/lib/motion"

interface ProcessSectionProps {
  id?: string
  className?: string
}

export const ProcessSection = ({ id = "processo", className }: ProcessSectionProps) => {
  const { textos, processo } = siteConfig

  return (
    <section
      id={id}
      aria-label="Nosso processo de trabalho"
      className={cn("py-20 md:py-28 bg-muted/30", className)}
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-background rounded-full text-muted-foreground">
            {textos.processo.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {textos.processo.titulo}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {textos.processo.subtitulo}
          </p>
        </motion.div>

        {/* Grid de Etapas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {processo.map((etapa) => (
            <motion.article
              key={etapa.numero}
              variants={fadeUp}
              className="group relative p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors"
            >
              {/* Número */}
              <span className="inline-block text-5xl md:text-6xl font-bold text-muted-foreground/20 mb-4 group-hover:text-primary/20 transition-colors">
                {etapa.numero}
              </span>

              {/* Conteúdo */}
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {etapa.titulo}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {etapa.descricao}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

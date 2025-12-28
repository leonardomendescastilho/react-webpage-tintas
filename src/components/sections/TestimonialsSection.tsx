import { motion } from "motion/react"
import { FaQuoteLeft } from "react-icons/fa6"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"
import { staggerContainer, fadeUp, viewport } from "@/lib/motion"

interface TestimonialsSectionProps {
  id?: string
  className?: string
}

export const TestimonialsSection = ({ id = "depoimentos", className }: TestimonialsSectionProps) => {
  const { textos, depoimentos } = siteConfig

  return (
    <section
      id={id}
      aria-label="Depoimentos de clientes"
      className={cn("py-20 md:py-28 bg-muted/50", className)}
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
            {textos.depoimentos.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {textos.depoimentos.titulo}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {textos.depoimentos.subtitulo}
          </p>
        </motion.div>

        {/* Grid de Depoimentos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {depoimentos.map((depoimento) => (
            <motion.article
              key={depoimento.nome}
              variants={fadeUp}
              className="relative p-6 md:p-8 rounded-2xl bg-background border border-border"
            >
              {/* Aspas decorativas */}
              <FaQuoteLeft
                className="absolute top-5 right-6 size-6 text-primary/10"
                aria-hidden="true"
              />

              {/* Texto do depoimento */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{depoimento.texto}"
              </p>

              {/* Info do cliente */}
              <div className="flex items-center gap-4">
                {/* Avatar com inicial */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {depoimento.nome.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold">{depoimento.nome}</p>
                  <p className="text-sm text-muted-foreground">{depoimento.cargo}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from "motion/react"
import { FaArrowRight, FaHouse, FaBuilding, FaPaintRoller, FaWrench } from "react-icons/fa6"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"
import { staggerContainer, fadeUp, viewport } from "@/lib/motion"

interface ServicesSectionProps {
  id?: string
  className?: string
}

// Ícones para cada serviço
const serviceIcons = [
  FaHouse,        // Pintura Residencial
  FaBuilding,     // Pintura Comercial
  FaPaintRoller,  // Texturas Especiais
  FaWrench,       // Restauração
]

export const ServicesSection = ({ id = "servicos", className }: ServicesSectionProps) => {
  const { textos, servicos } = siteConfig

  const handleScrollToContato = () => {
    const element = document.querySelector("#contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id={id}
      aria-label="Nossos serviços"
      className={cn("py-20 md:py-28", className)}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Coluna Esquerda - Sticky */}
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-muted rounded-full text-muted-foreground">
              {textos.servicos.tag}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {textos.servicos.titulo}
            </h2>
            <p className="text-muted-foreground mb-6">
              {textos.servicos.subtitulo}
            </p>
            <button
              type="button"
              onClick={handleScrollToContato}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline group"
              aria-label="Ir para seção de contato"
            >
              {textos.servicos.cta}
              <FaArrowRight
                className="size-3 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </motion.div>

          {/* Coluna Direita - Cards */}
          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {servicos.map((servico, index) => {
              const Icon = serviceIcons[index]
              return (
                <motion.article
                  key={servico.titulo}
                  variants={fadeUp}
                  // whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="p-6 md:p-8 rounded-2xl border border-border bg-background hover:bg-muted/50 hover:border-primary/30 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Ícone */}
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-muted shrink-0">
                      <Icon className="size-6 md:size-7 text-primary" aria-hidden="true" />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {servico.titulo}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {servico.descricao}
                      </p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from "motion/react"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { Button } from "@/ui/button"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"
import { fadeUp, viewport } from "@/lib/motion"

interface CTASectionProps {
  id?: string
  className?: string
}

export const CTASection = ({ id = "cta", className }: CTASectionProps) => {
  const { textos } = siteConfig

  const handleScrollToContato = () => {
    const element = document.querySelector("#contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id={id}
      aria-label="Chamada para ação"
      className={cn("py-20 md:py-28", className)}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 md:px-12 md:py-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {textos.cta.titulo}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              {textos.cta.subtitulo}
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleScrollToContato}
              className="group"
              aria-label="Solicitar orçamento gratuito"
            >
              {textos.cta.botao}
              <FaArrowUpRightFromSquare
                className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

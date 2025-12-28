import { motion } from "motion/react"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"
import { gridContainer, fadeUp, viewport } from "@/lib/motion"

interface PortfolioSectionProps {
  id?: string
  className?: string
}

export const PortfolioSection = ({ id = "portfolio", className }: PortfolioSectionProps) => {
  const { textos, portfolio } = siteConfig

  return (
    <section
      id={id}
      aria-label="Portfólio de trabalhos"
      className={cn("py-20 md:py-28", className)}
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-muted rounded-full text-muted-foreground">
            {textos.portfolio.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {textos.portfolio.titulo}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {textos.portfolio.subtitulo}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] md:auto-rows-[300px] gap-4 md:gap-6"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {portfolio.map((projeto, index) => (
            <motion.article
              key={projeto.titulo}
              variants={fadeUp}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-muted cursor-pointer",
                index === 0 && "lg:col-span-2 lg:row-span-2"
              )}
            >
              <div className="relative w-full h-full overflow-hidden">
                {/* Imagem */}
                <img
                  src={`https://images.unsplash.com/photo-${
                    index === 0
                      ? "1560185893-a55cbc8c57e8"
                      : index === 1
                        ? "1497366216548-37526070297c"
                        : index === 2
                          ? "1585128792020-803d29415281"
                          : index === 3
                            ? "1517248135467-4c7edcad34c4"
                            : index === 4
                              ? "1560185007-cde436f6a4d0"
                              : "1629909613654-28e377c37b09"
                  }?w=${index === 0 ? "800" : "600"}&h=${index === 0 ? "800" : "450"}&fit=crop`}
                  alt={`Projeto ${projeto.titulo} - ${projeto.tipo}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Conteúdo no hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-white/20 backdrop-blur-sm rounded text-white w-fit">
                    {projeto.tipo}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {projeto.titulo}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{projeto.area}</p>
                  <button
                    type="button"
                    className="flex items-center gap-2 text-white text-sm font-medium hover:underline w-fit"
                    aria-label={`Ver detalhes do projeto ${projeto.titulo}`}
                  >
                    Ver projeto
                    <FaArrowUpRightFromSquare className="size-3" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Link para ver todos */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            {textos.portfolio.verTodos}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from "motion/react"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"
import { fadeUp, viewport } from "@/lib/motion"

interface StatsSectionProps {
  className?: string
}

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: siteConfig.stats.projetos, label: "Projetos Concluídos" },
  { value: siteConfig.stats.anosExperiencia, label: "Anos de Experiência" },
  { value: siteConfig.stats.satisfacao, label: "Clientes Satisfeitos" },
  { value: siteConfig.stats.projetosAbandonados, label: "Projetos Abandonados" },
]

export const StatsSection = ({ className }: StatsSectionProps) => {
  return (
    <section
      aria-label="Estatísticas da empresa"
      className={cn(
        "py-16 border-y border-border bg-muted/30",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <ul
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
          role="list"
          aria-label="Números da empresa"
        >
          {stats.map((stat, index) => (
            <motion.li
              key={stat.label}
              className={cn(
                "flex flex-col items-center text-center",
                index < stats.length - 1 && "md:border-r md:border-border"
              )}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-4xl md:text-5xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

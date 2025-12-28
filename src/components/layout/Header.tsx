import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FaBars, FaXmark, FaPaintRoller } from "react-icons/fa6"
import { Button } from "@/ui/button"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"
import { buttonAnimation } from "@/lib/motion"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Skip to main content - Acessibilidade */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Pular para o conteúdo principal
      </a>

      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent",
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#inicio"
              className="flex items-center gap-2 text-foreground"
              title={`${siteConfig.empresa.nome} - Voltar ao início`}
              aria-label={`${siteConfig.empresa.nome} - Página inicial`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#inicio")
              }}
            >
              <FaPaintRoller className="size-6 text-primary" aria-hidden="true" />
              <span className="font-semibold text-lg">{siteConfig.empresa.nome}</span>
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Navegação principal" className="hidden md:block">
              <ul className="flex items-center gap-8" role="menubar">
                {siteConfig.navegacao.map((item) => (
                  <li key={item.href} role="none">
                    <motion.a
                      href={item.href}
                      role="menuitem"
                      title={`Ir para ${item.label}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ color: "hsl(var(--primary))" }}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <motion.div
              className="hidden md:block"
              whileHover={buttonAnimation.whileHover}
              whileTap={buttonAnimation.whileTap}
            >
              <Button
                onClick={() => handleNavClick("#contato")}
                aria-label="Solicitar orçamento gratuito"
              >
                Orçamento Gratuito →
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <FaXmark className="size-6" aria-hidden="true" />
              ) : (
                <FaBars className="size-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                id="mobile-menu"
                aria-label="Menu de navegação mobile"
                className="md:hidden py-4 border-t border-border"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="flex flex-col gap-4" role="menu">
                  {siteConfig.navegacao.map((item) => (
                    <li key={item.href} role="none">
                      <a
                        href={item.href}
                        role="menuitem"
                        title={`Ir para ${item.label}`}
                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className="pt-2" role="none">
                    <Button
                      className="w-full"
                      onClick={() => handleNavClick("#contato")}
                      aria-label="Solicitar orçamento gratuito"
                    >
                      Orçamento Gratuito →
                    </Button>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}

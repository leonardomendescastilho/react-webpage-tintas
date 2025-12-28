import { FaPaintRoller, FaPhone, FaEnvelope, FaLocationDot, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  const { empresa, navegacao, social, textos } = siteConfig

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer
      role="contentinfo"
      className={cn("bg-muted/50 border-t border-border", className)}
    >
      <div className="container mx-auto px-4">
        {/* Grid principal */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Coluna 1 - Logo e Tagline */}
          <div className="lg:col-span-1">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2 text-foreground mb-4"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#inicio")
              }}
            >
              <FaPaintRoller className="size-6 text-primary" aria-hidden="true" />
              <span className="font-semibold text-lg">{empresa.nome}</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {textos.footer.tagline}
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <nav aria-label="Links do rodapé">
              <ul className="space-y-3">
                {navegacao.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${empresa.telefone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaPhone className="size-4 text-primary" aria-hidden="true" />
                  {empresa.telefone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${empresa.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaEnvelope className="size-4 text-primary" aria-hidden="true" />
                  {empresa.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <FaLocationDot className="size-4 text-primary mt-0.5" aria-hidden="true" />
                <span>
                  {empresa.endereco}<br />
                  {empresa.cidade}, {empresa.estado} - {empresa.cep}
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Siga-nos e acompanhe nossos trabalhos
            </p>
            <div className="flex gap-3">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="size-5" aria-hidden="true" />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="size-5" aria-hidden="true" />
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {textos.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            {textos.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

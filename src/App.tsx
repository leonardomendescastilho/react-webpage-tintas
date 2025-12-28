import { Helmet } from "react-helmet-async"
import { Header } from "@/layout/Header"
import { HeroSection } from "@/sections/HeroSection"
import { StatsSection } from "@/sections/StatsSection"
import { PortfolioSection } from "@/sections/PortfolioSection"
import { ServicesSection } from "@/sections/ServicesSection"
import { ProcessSection } from "@/sections/ProcessSection"
import { TestimonialsSection } from "@/sections/TestimonialsSection"
import { CTASection } from "@/sections/CTASection"
import { ContactSection } from "@/sections/ContactSection"

const App = () => {
  return (
    <>
      <Helmet>
        <title>Webpage Tintas - Pintura Residencial e Comercial em São Paulo</title>
        <meta
          name="description"
          content="Especialistas em pintura residencial e comercial com mais de 15 anos de experiência em São Paulo. Qualidade premium, acabamento impecável e garantia de satisfação."
        />
      </Helmet>

      <Header />

      <main id="main-content">
        <HeroSection />
        <StatsSection />
        <PortfolioSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
    </>
  )
}

export default App

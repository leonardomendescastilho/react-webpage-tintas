import { Helmet } from "react-helmet-async"
import { Header } from "@/layout/Header"
import { HeroSection } from "@/sections/HeroSection"
import { StatsSection } from "@/sections/StatsSection"

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

        {/* Placeholder sections */}
        <section id="portfolio" className="min-h-screen bg-muted/30" />
        <section id="servicos" className="min-h-screen" />
        <section id="processo" className="min-h-screen bg-muted/30" />
        <section id="contato" className="min-h-screen" />
      </main>
    </>
  )
}

export default App

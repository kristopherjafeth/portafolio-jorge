import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Header } from "@/components/header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioGallery } from "@/components/portfolio-gallery"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="inicio">
        <HeroSection />
      </div>
      <div id="portafolio">
        <PortfolioGallery />
      </div>
      <div id="sobre-mi">
        <AboutSection />
      </div>
      <div id="contacto">
        <Footer />
      </div>
  <WhatsAppButton />
    </main>
  )
}

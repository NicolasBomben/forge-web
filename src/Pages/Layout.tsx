import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { LayersSection } from "../components/LayersSection";
import { ProcessSection } from "../components/ProcessSection";
import { ManifestoSection } from "../components/ManifestoSection";
import { ServicesSection } from "../components/ServicesSection";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-dark-background">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <LayersSection />
        <ProcessSection />
        <ManifestoSection />
        <ServicesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

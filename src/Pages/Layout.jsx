import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { ServiceSection } from "../components/ServiceSection";
import { PricingPlans } from "../components/PricingPlans";
import { ClientsSection } from "../components/ClientsSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <PricingPlans />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

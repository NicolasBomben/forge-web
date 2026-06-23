import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { CruceSection } from "../components/CruceSection";
import { PersonalSection } from "../components/PersonalSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CruceSection />
        <PersonalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

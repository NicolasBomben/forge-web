import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CruceSection } from "../components/CruceSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CruceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

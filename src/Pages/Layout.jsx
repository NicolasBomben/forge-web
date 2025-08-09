import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { PlansSection } from "../components/PlansSection";
import { ProcessSection } from "../components/ProcessSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <PlansSection />
        <ProcessSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

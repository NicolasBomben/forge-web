import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { PricingPlans } from "../components/PricingPlans";
import { Clients } from "../components/Clients";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Services />
        <PricingPlans />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

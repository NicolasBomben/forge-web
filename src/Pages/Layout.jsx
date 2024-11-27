import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { PricingPlans } from "../components/PricingPlans";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Services />
        <PricingPlans />
      </main>
    </div>
  );
};

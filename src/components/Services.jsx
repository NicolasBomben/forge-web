import { Link } from "react-router-dom";
import { Laptop, Search, Code, Palette, BarChart, WrenchIcon } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="min-h-screen flex items-center w-full py-12 md:py-24 lg:py-32 bg-background-light dark:bg-background-dark px-4 md:px-6 relative">
      {/* Small circles background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{
        backgroundImage: `radial-gradient(#60A5FA 2px, transparent 2px)`,
        backgroundSize: '30px 30px',
      }}></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard 
            icon={<Laptop className="h-12 w-12 mb-4 text-secondary" />}
            title="Web Development"
            description="Creating responsive and dynamic websites tailored to your needs."
          />
          <ServiceCard 
            icon={<Code className="h-12 w-12 mb-4 text-secondary" />}
            title="Custom Software Solutions"
            description="Developing bespoke software to address your unique business challenges."
          />
          <ServiceCard 
            icon={<Palette className="h-12 w-12 mb-4 text-secondary" />}
            title="Web Design"
            description="Crafting visually stunning and user-friendly interfaces for your digital presence."
          />
          <ServiceCard 
            icon={<Search className="h-12 w-12 mb-4 text-secondary" />}
            title="SEO Services"
            description="Optimizing your online presence to improve visibility and drive organic traffic."
          />
          <ServiceCard 
            icon={<BarChart className="h-12 w-12 mb-4 text-secondary" />}
            title="Analytics Services"
            description="Providing data-driven insights to inform your business decisions and strategies."
          />
          <ServiceCard 
            icon={<WrenchIcon className="h-12 w-12 mb-4 text-secondary" />}
            title="Maintenance"
            description="Ensuring your digital assets remain up-to-date, secure, and performing optimally."
          />
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
      {icon}
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-text-light dark:text-text-dark text-center mb-4">
        {description}
      </p>
    </div>
  )
}

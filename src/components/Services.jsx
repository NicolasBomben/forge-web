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
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">Nuestros Servicios</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard 
            icon={<Laptop className="h-12 w-12 mb-4 text-secondary" />}
            title="Desarrollo Web"
            description="Creamos sitios web responsivos y dinámicos adaptados a tus necesidades."
          />
          <ServiceCard 
            icon={<Code className="h-12 w-12 mb-4 text-secondary" />}
            title="Soluciones de Software Personalizadas"
            description="Desarrollamos software a medida para abordar tus desafíos empresariales únicos."
          />
          <ServiceCard 
            icon={<Palette className="h-12 w-12 mb-4 text-secondary" />}
            title="Diseño Web"
            description="Diseñamos interfaces visualmente atractivas y fáciles de usar para tu presencia digital."
          />
          <ServiceCard 
            icon={<Search className="h-12 w-12 mb-4 text-secondary" />}
            title="Servicios SEO"
            description="Optimizamos tu precensia en línea para mejorar tu visibilidad y atraer tràfico orgánico."
          />
          <ServiceCard 
            icon={<BarChart className="h-12 w-12 mb-4 text-secondary" />}
            title="Servicios de Análisis"
            description="Proporcionamos insights basados en datos para informar tus decisiones y estrategias de negocio."
          />
          <ServiceCard 
            icon={<WrenchIcon className="h-12 w-12 mb-4 text-secondary" />}
            title="Mantenimiento"
            description="Aseguramos que tus activos digitales se mantengan actualizados, seguros y funcionando de manera óptima."
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
      <h3 className="text-xl text-center font-bold text-primary">{title}</h3>
      <p className="text-sm text-text-light dark:text-text-dark text-center mb-4">
        {description}
      </p>
    </div>
  )
}

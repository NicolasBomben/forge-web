import {
  FileText,
  Building,
  ShoppingCart,
  Layout,
  Search,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Landin Pages",
    description:
      "Landing Pages de alto rendimiento diseñadas para captar clientes potenciales a través de formularios o agendar reuniones.",
    icon: FileText,
  },
  {
    title: "Sitios Web Profesionales",
    description:
      "Sitios web profesionales ideales para fábricas y negocios que buscan establecer su presencia online.",
    icon: Building,
  },
  {
    title: "E-commerce",
    description:
      "Tiendas online completas y funcionales con procesamiento de pagos seguro y gestión de inventario.",
    icon: ShoppingCart,
  },
  {
    title: "Diseño Web y UX/UI",
    description:
      "Diseño atractivo y experiencia de usuario optimizada para hacer destacar tu sitio web.",
    icon: Layout,
  },
  {
    title: "SEO",
    description:
      "Optimización para motores de búsqueda y soporte técnico para mantener tu sitio web funcionando sin problemas.",
    icon: Search,
  },
  {
    title: "Mantenimiento",
    description:
      "Actualizaciones continuas, parches de seguridad y soporte técnico para mantener tu sitio web funcionando sin inconvenientes.",
    icon: Settings,
  },
];

export const ServiceSection = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 relative"
    >
      {/* Small circles background */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(#60A5FA 2px, transparent 2px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl">
            Desarrollo web a la medida de tu negocio.
          </p>
        </div>
        {/* Render cards. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((services, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 hover:border-secondary border-2 border-transparent"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 roundel-lg flex items-center justify-center mb-4">
                  <services.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  {services.title}
                </h3>
              </div>
              <div>
                <p className="text-gray-600">{services.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

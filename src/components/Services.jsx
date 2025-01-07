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
      "High-converting landing pages designed to capture leads through forms or schedule meetings",
    icon: FileText,
  },
  {
    title: "Institutional Websites",
    description:
      "Professional websites ideal for factories and businesses looking to establish their online presence",
    icon: Building,
  },
  {
    title: "E-commerce",
    description:
      "Complete and functional online stores whith secure payment proccesing and inventory management",
    icon: ShoppingCart,
  },
  {
    title: "Web Desing and UX/UI",
    description:
      "Professional desing and user experience optimization to ensure your website stands out",
    icon: Layout,
  },
  {
    title: "SEO",
    description:
      "Search engine optimization patches, and technical support to keep your website running smoothly",
    icon: Search,
  },
  {
    title: "Maintenance",
    description:
      "Continuous updates, security patches, and technical support to keep your website running smoothly",
    icon: Settings,
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center w-full py-12 md:py-24 lg:py-32 bg-background-light dark:bg-background-dark px-4 md:px-6 relative"
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business
            needs
          </p>
        </div>
        {/* Render cards. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((services, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
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

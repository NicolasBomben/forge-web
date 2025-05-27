import { useTranslation } from "react-i18next";
import {
  FileText,
  Building,
  ShoppingCart,
  Layout,
  Search,
  Settings,
} from "lucide-react";

export const ServiceSection = () => {
  const { t } = useTranslation();

  const services = [
    { key: "landingPages", icon: FileText },
    { key: "sitiosWeb", icon: Building },
    { key: "ecommerce", icon: ShoppingCart },
    { key: "uxUi", icon: Layout },
    { key: "seo", icon: Search },
    { key: "mantenimiento", icon: Settings },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 relative dark:bg-dark-background"
    >
      {/* Small circles background */}
      <div
        className="absolute inset-2 opacity-25 animate-waveDots dark:animate-waveDotsDark"
        style={{
          backgroundImage: `radial-gradient(var(--dot-color) 4px, transparent 4px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="container mx-auto relative z-10 font-inter">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-6xl mb-4 text-gray-900 dark:text-dark-primary">
            {t("servicesTitle")}
          </h2>
          <h3 className="font-medium tracking-tighter text-gray-600 dark:text-dark-foreground mx-auto text-lg sm:text-xl md:text-3xl">
            {t("servicesSubTitle")}
          </h3>
        </div>
        {/* Render cards. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ key, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-background rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 hover:border-secondary border-2 border-transparent dark:border-dark-primary dark:border"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 roundel-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-2 dark:text-dark-accent">
                  {t(`services.${key}.title`)}
                </h3>
              </div>
              <div>
                <p className="font-mediu md:text-lg text-gray-600 dark:text-dark-foreground">
                  {t(`services.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

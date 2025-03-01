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
    {key: "landingPages", icon: FileText },
    {key: "sitiosWeb", icon: Building },
    {key: "ecommerce", icon: ShoppingCart },
    {key: "uxUi", icon: Layout },
    {key: "seo", icon: Search },
    {key: "mantenimiento", icon: Settings },
  ];

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

      <div className="container mx-auto relative z-10 font-poppins">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-900">
            {t("servicesTitle")}
          </h2>
          <h3 className="font-medium text-gray-600  mx-auto text-lg sm:text-xl md:text-2xl">
            {t("servicesSubTitle")}
          </h3>
        </div>
        {/* Render cards. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({key, icon: Icon}, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 hover:border-secondary border-2 border-transparent"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 roundel-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-2">
                  {t(`services.${key}.title`)}
                </h3>
              </div>
              <div>
                <p className="font-normal text-gray-600">{t(`services.${key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

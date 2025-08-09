import AnimatedContent from "../Animations/AnimatedContent/AnimatedContent";
import { useTranslation } from "react-i18next";
import {
  FileText,
  Building,
} from "lucide-react";

export const PlansSection = () => {
  const { t } = useTranslation();

  const services = [
    { key: "landingPages", icon: FileText },
    { key: "sitiosWeb", icon: Building },
  ];

  return (
    <section
      id="plans"
      className="min-h-screen flex items-center w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 relative dark:bg-dark-background"
    >
      {/* Small circles background */}
      <div
        className="absolute inset-2 opacity-40 animate-waveDots dark:animate-waveDotsDark"
        style={{
          backgroundImage: `radial-gradient(var(--dot-color) 4px, transparent 4px)`,
          backgroundSize: "60px 60px",
          "--dot-color": "#673AB7",
        }}
      ></div>

      <div className="container mx-auto relative z-10 font-inter">
        <div className="text-center mb-12">
          <h2 className="font-inter font-medium tracking-tight text-primary text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4 dark:text-dark-accent2">
            {t("servicesTitle")}
          </h2>
          <h3 className="font-inter tracking-normal text-black dark:text-dark-primary mx-auto text-lg sm:text-xl md:text-4xl">
            {t("servicesSubTitle")}
          </h3>
        </div>
        <AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ key, icon: Icon }, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-dark-background rounded-2xl border-2 border-dashed border-gray-300 dark:border-dark-accent2 p-6 shadow-lg hover:shadow-xl transition-shadow animate-fadeIn"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary dark:text-dark-accent2" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-2 dark:text-dark-primary">
                    {t(`services.${key}.title`)}
                  </h3>
                </div>
                <div>
                  <p className="font-inter font-normal tracking-normal md:text-lg text-gray-600 dark:text-dark-primary">
                    {t(`services.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

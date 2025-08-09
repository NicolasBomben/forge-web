import FadeContent from "../Animations/FadeContent/FadeContent";
import { useTranslation } from "react-i18next";

export const ProcessSection = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: "1",
      title: t("pricing.basic.name"),
      description: t("pricing.basic.description"),
      border: "border-2 border-dashed border-primary dark:border-dark-accent2",
    },
    {
      id: "2",
      title: t("pricing.professional.name"),
      description: t("pricing.professional.description"),
      border: "border-2 border-dashed border-primary dark:border-dark-accent2",
    },
    {
      id: "3",
      title: t("pricing.enterprise.name"),
      description: t("pricing.enterprise.description"),
      border: "border-2 border-dashed border-primary dark:border-dark-accent2",
    },
  ];

  return (
    <section
      id="process"
      className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gray-50 dark:bg-dark-background"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-inter font-medium tracking-tight text-primary text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4 dark:text-dark-accent2">
            {t("pricing.pricingTitle")}
          </h2>
          <h3 className="font-inter font-light tracking-normal text-gray-600 dark:text-dark-primary mx-auto text-lg sm:text-xl md:text-4xl">
            {t("pricing.pricingSubtitle")}
          </h3>
        </div>

        <FadeContent
          blur={false}
          duration={2000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto font-inter">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-dark-background rounded-2xl ${card.border} p-8 shadow-lg hover:shadow-xl transition-shadow animate-fadeIn flex flex-col`}
              >
                <span className="font-inter text-4xl mb-4 text-gray-500 dark:text-dark-primary">
                  {card.id}
                </span>
                <h3 className="font-inter text-2xl md:text-3xl font-medium dark:text-dark-primary mb-4 whitespace-nowrap text-balance">
                  {card.title}
                </h3>
                <div className="flex-1 flex items-start">
                  <p className="font-inter text-gray-600 dark:text-dark-primary font-normal md:text-lg text-left w-full">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

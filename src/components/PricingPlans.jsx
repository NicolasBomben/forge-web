import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const PricingPlans = () => {
  const { t } = useTranslation();

  const translations = useMemo(
    () => ({
      title: t("pricing.pricingTitle"),
      subtitle: t("pricing.pricingSubtitle"),
      mostPopular: t("pricing.pricingMostPopular"),
      button: t("pricing.pricingButton"),
      plans: [
        {
          key: "basic",
          popular: false,
        },
        {
          key: "professional",
          popular: true,
        },
        {
          key: "enterprise",
          popular: false,
        },
      ].map((plan) => ({
        ...plan,
        name: t(`pricing.${plan.key}.name`),
        description: t(`pricing.${plan.key}.description`),
        features: t(`pricing.${plan.key}.features`, { returnObjects: true }),
      })),
    }),
    [t]
  );

  //whatsapp.
  const phoneNumber = "5491157628934";
  const message = encodeURIComponent("Hola, me interesa uno de tus servicios.");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gray-50 dark:bg-dark-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-inter font-medium tracking-tighter taxt-balance text-3xl sm:text-4xl md:text-6xl mb-4 dark:text-dark-primary">
            {translations.title}
          </h2>
          <h3 className="font-inter font-medium text-gray-600 dark:text-dark-foreground mx-auto text-lg sm:text-xl md:text-3xl break-words">{translations.subtitle}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto font-inter">
          {translations.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-dark-background rounded-lg border ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200 dark:border-dark-secondary"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {translations.mostPopular}
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-medium dark:text-dark-accent ">{plan.name}</h3>
                <p className="text-gray-600 dark:text-dark-foreground font-normal md:text-lg mt-2">{plan.description}</p>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600 dark:text-dark-foreground font-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <button
                  className={`w-full px-4 py-2 rounded-md text-white font-medium ${
                    plan.popular ? "bg-primary" : "bg-secondary"
                  } hover:opacity-90  hover:scale-105 transition-all duration-300`}
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  {translations.button}
                  <FaWhatsapp className="inline-block h-6 w-6 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Check } from "lucide-react";


export const PricingPlans = () => {

  const { t } = useTranslation();

  const translations = useMemo(() => ({
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
  }), [t]);

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {translations.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {translations.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {translations.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg border ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
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
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              <div className="p-6 pt-0">
                <div className="mb-6">
                  <span className="text-lg font-medium text-gray-600">
                    Contact us for pricing
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <button
                  className={`w-full px-4 py-2 rounded-md text-white ${
                    plan.popular ? "bg-primary" : "bg-secondary"
                  } hover:opacity-90 transition-opacity`}
                >
                  {translations.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for small businesses and startups",
    features: [
      "Custom Website Development",
      "Responsive Design",
      "Basic SEO Optimization",
      "3 Rounds of Revisions",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Basic",
      "E-commerce Integration",
      "Advanced SEO Package",
      "Performance Optimization",
      "3 Months Support",
      "Priority Response",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale projects",
    features: [
      "Everything in Professional",
      "Custom Features Development",
      "API Integration",
      "Database Design",
      "12 Months Support",
      "Dedicated Project Manager",
    ],
  },
];

export const PricingPlans = () => {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 mb-4">
            Choose the perfect plan for your business. Contact us to get a
            customized quote tailored to your specefic requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
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
                    Most Popular
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
                  Get Custom Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

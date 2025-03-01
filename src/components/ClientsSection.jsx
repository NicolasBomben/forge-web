import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Globe } from "lucide-react";



export const ClientsSection = () => {

  const { t } = useTranslation();

  const testimonials = useMemo(() => t("clients.testimonials", { returnObjects: true }), [t]);

  return (
    <section id="clients" className="py-24 relative">
      
      {/* circles background */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(#60A5FA 2px, transparent 2px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 font-poppins">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          {t("clients.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-none"
            >
              <div className="mb-4">
                <div className="text-primary text-4xl">&quot;</div>
              </div>
              <div>
                <p className="text-gray-700 font-normal mb-4">{testimonial.quote}</p>
                <div className="text-sm flex gap-2">
                  <p className="font-normal">{testimonial.author}</p>
                  <a
                    href={testimonial.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-light text-primary hover:text-primary/80 transition-colors flex gap-2"
                    aria-label={`Visit ${testimonial.author}'s website`}
                  >
                    {t("clients.visitSite")}
                    <Globe size={20}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

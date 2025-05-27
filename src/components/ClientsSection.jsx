import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Globe } from "lucide-react";



export const ClientsSection = () => {

  const { t } = useTranslation();

  const testimonials = useMemo(() => t("clients.testimonials", { returnObjects: true }), [t]);

  return (
    <section id="clients" className="py-24 relative dark:bg-dark-background">
      
      {/* circles background */}
      <div
        className="absolute inset-2 opacity-25 animate-waveDots dark:animate-waveDotsDark"
        style={{
          backgroundImage: `radial-gradient(var(--dot-color) 4px, transparent 4px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 font-inter">
        <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter text-balance font-medium text-center mb-12 dark:text-dark-primary">
          {t("clients.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-background rounded-lg shadow-lg p-6 border-none"
            >
              <div className="mb-4">
                <div className="text-primary text-4xl">&quot;</div>
              </div>
              <div>
                <p className="text-gray-700 dark:text-dark-foreground font-normal md:text-lg mb-4">{testimonial.quote}</p>
                <div className="text-sm flex gap-2">
                  <p className="font-medium dark:text-dark-accent">{testimonial.author}</p>
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

import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Globe } from "lucide-react";

export const ProjectsSection = () => {
  const { t } = useTranslation();

  const testimonials = useMemo(
    () => t("clients.testimonials", { returnObjects: true }),
    [t]
  );

  return (
    <section id="projects" className="py-10 md:py-24 relative dark:bg-dark-background">
      {/* circles background */}
      <div
        className="absolute inset-2 opacity-40 animate-waveDots dark:animate-waveDotsDark"
        style={{
          backgroundImage: `radial-gradient(var(--dot-color) 4px, transparent 4px)`,
          backgroundSize: "60px 60px",
          "--dot-color": "#673AB7",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 font-inter">
        <h2 className="font-inter text-primary text-3xl sm:text-4xl md:text-6xl tracking-tighter text-balance font-medium text-center mb-12 dark:text-dark-accent2">
          {t("clients.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-background rounded-2xl shadow-lg p-4 border-2 border-dashed border-primary dark:border-dark-accent flex flex-col"
            >
              {/* Imagen del sitio */}
              <div className="mb-4 w-full">
                <picture>
                  <source srcSet={testimonial.imageWbp} type="image/webp" />

                  <img
                    src={testimonial.image}
                    alt={`Captura de ${testimonial.author}`}
                    className="w-full h-60 object-cover object-top rounded-lg"
                    loading="lazy"
                    width="1440"
                    height="943"
                  />
                </picture>
              </div>
              {/* Título: Author */}
              <h3 className="text-xl md:text-2xl font-semibold dark:text-dark-primary mb-2 ">
                {testimonial.author}
              </h3>

              <p className="text-dark-accent dark:text-dark-accent mb-2 text-base font-medium">
                {testimonial.plan}
              </p>
              {/* Testimonial */}
              <p className="text-gray-700 dark:text-dark-primary font-medium md:text-lg mb-4 flex-1">
                {testimonial.quote}
              </p>
              {/* Link a la web */}
              <a
                href={testimonial.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xl font-medium text-primary dark:text-dark-accent2 hover:text-primary/80 dark:hover:text-dark-primary transition-colors mt-2 p-2"
                aria-label={`Visitar el sitio de ${testimonial.author}`}
              >
                {t("clients.visitSite")}
                <Globe size={30} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

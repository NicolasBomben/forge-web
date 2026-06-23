import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const FeaturedProject = ({ project, index }) => {
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = project.images && project.images.length > 0;
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image side */}
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="relative overflow-hidden rounded-xl bg-muted border border-border aspect-[16/10] shadow-sm">
          {hasImages && (
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={project.images[activeImage]}
                alt={`${project.name} - vista ${activeImage + 1}`}
                crossOrigin="anonymous"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>
          )}
        </div>
        {hasImages && project.images.length > 1 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                aria-label={`Ver imagen ${i + 1} de ${project.name}`}
                className={`h-12 w-16 rounded-md overflow-hidden border-2 transition-all ${
                  activeImage === i
                    ? "border-foreground"
                    : "border-border opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content side */}
      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-mono text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
            {project.category}
          </span>
          {project.status && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-foreground text-background">
              {project.status}
            </span>
          )}
        </div>

        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {project.name}
        </h3>

        <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted border border-border text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mt-8 font-medium text-foreground hover:gap-3 transition-all"
          >
            Visitar sitio
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export const PersonalSection = () => {
  const { t } = useTranslation();
  const projects = t("personal.projects", { returnObjects: true });

  return (
    <section id="personal" className="py-24 md:py-32 bg-muted overflow-hidden">
      {/* Marquee Title */}
      <div className="overflow-hidden mb-16">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="marquee-text mx-8">
              {t("personal.title")}
            </span>
          ))}
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-16"
          >
            {t("personal.subtitle")}
          </motion.p>

          <div className="flex flex-col gap-24 md:gap-32">
            {projects.map((project, index) => (
              <FeaturedProject key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

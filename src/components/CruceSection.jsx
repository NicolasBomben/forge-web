import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

export const CruceSection = () => {
  const { t } = useTranslation();
  const projects = t("cruce.projects", { returnObjects: true });

  return (
    <section id="cruce" className="py-24 md:py-32 overflow-hidden">
      {/* Marquee Title */}
      <div className="overflow-hidden mb-16">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="marquee-text mx-8">
              {t("cruce.title")}
            </span>
          ))}
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              {t("cruce.subtitle")}
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground text-pretty">
              {t("cruce.description")}
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

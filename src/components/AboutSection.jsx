import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const { t } = useTranslation();
  const skills = t("about.skills", { returnObjects: true });

  return (
    <section id="about" className="py-32 section-padding bg-muted">
      {/* Marquee Title */}
      <div className="overflow-hidden mb-16">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="marquee-text mx-8">
              {t("about.title")}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-foreground">
              {t("about.description")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.description2")}
            </p>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

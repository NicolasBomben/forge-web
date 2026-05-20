import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById("cruce")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center section-padding py-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <p className="text-muted-foreground text-lg md:text-xl font-medium tracking-wide">
            {t("hero.greeting")}
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tight leading-none">
            {t("hero.name")}
          </h1>

          {/* Role */}
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-foreground/30" />
            <span className="text-xl md:text-2xl font-medium text-muted-foreground">
              {t("hero.role")}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t("hero.description")}
          </p>

          {/* CTA */}
          <motion.button
            onClick={scrollToProjects}
            className="group flex items-center gap-3 text-foreground font-medium text-lg mt-8 hover:gap-5 transition-all duration-300"
            whileHover={{ x: 10 }}
          >
            {t("hero.cta")}
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

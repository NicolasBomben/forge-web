import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const ContactSection = () => {
  const { t } = useTranslation();
  const email = t("contact.email");
  const linkedin = t("contact.linkedin");
  const github = t("contact.github");

  return (
    <section
      id="contact"
      className="bg-foreground text-background py-24 md:py-36 section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-background/50 mb-6">
            {t("contact.subtitle")}
          </p>

          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-12">
            {t("contact.title")}
          </h2>

          {/* Email CTA */}
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 text-2xl md:text-4xl font-display font-medium border-b-2 border-background/30 pb-2 hover:border-background transition-colors"
          >
            {email}
            <ArrowUpRight className="w-7 h-7 md:w-9 md:h-9 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Social links */}
          <div className="flex flex-wrap gap-8 mt-16">
            <a
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

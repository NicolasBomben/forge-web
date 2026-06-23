import { useTranslation } from "react-i18next";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background border-t border-background/10 py-10 section-padding">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-xl font-bold tracking-tight">
          {t("footer.copyright")}
        </p>

        <p className="text-sm text-background/50 order-last md:order-none">
          © {currentYear} — Software Engineer
        </p>

        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
          aria-label="Volver arriba"
        >
          <span className="text-sm font-medium">Volver arriba</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

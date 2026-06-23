import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export const NavMobile = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();
  const navItems = ["about", "cruce", "personal", "contact"];

  return (
    <nav
      className={`fixed inset-0 z-[100] bg-foreground text-background transition-transform duration-300 md:hidden ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-5 h-16 border-b border-background/10">
        <span className="font-display font-bold text-lg tracking-tight">
          Nicolas Bomben<span className="text-background/50">.</span>
        </span>
        <button
          className="text-sm font-semibold border border-background/20 rounded-md px-4 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Cerrar
        </button>
      </div>

      <div className="flex flex-col px-6 py-10 gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="font-display text-4xl font-bold tracking-tight text-background/80 hover:text-background transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t(`navBar.${item}`)}
          </a>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
};

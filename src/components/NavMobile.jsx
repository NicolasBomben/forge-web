import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import LogoMobile from "/assets/logo-mobile.svg";
import LogoDark from "/assets/logo-footer.svg";

const navItems = ["asistente", "como", "servicios", "faq", "contact"];

export const NavMobile = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();

  return (
    <nav
      className={`fixed inset-0 z-[100] bg-brand transition-transform duration-300 md:hidden ${
        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      style={{ top: "0px" }}
    >
      <div className="flex justify-end p-4">
        <button
          className="font-inter rounded-md bg-white p-2 text-lg font-semibold text-brand shadow-md"
          onClick={() => setIsMenuOpen(false)}
        >
          CLOSE MENU
        </button>
      </div>

      <div className="container mx-auto flex flex-col space-y-4 p-8 px-4 text-2xl">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="transform cursor-pointer border-b border-white/40 text-white transition-all duration-200 hover:translate-x-2 hover:text-ink"
            onClick={() => setIsMenuOpen(false)}
          >
            {t(`navBar.${item}`)}
          </a>
        ))}
      </div>

      <div className="flex justify-center gap-4 py-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="flex justify-center py-2">
        <img src={LogoMobile} alt="mobile-logo-forgeTech" className="h-16 w-auto dark:hidden" />
        <img src={LogoDark} alt="logo forgeTech" className="hidden h-16 w-auto dark:block" />
      </div>
    </nav>
  );
};

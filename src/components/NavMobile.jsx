import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import LogoMobile from "/assets/logo-mobile.svg";
import LogoDark from "/assets/logo-footer.svg";

export const NavMobile = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();
  const navItems = ["plans", "projects", "process", "contact"];

  return (
    <nav
      className={`fixed inset-0 z-[100] bg-primary transition-transform duration-300 md:hidden ${
        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      style={{ top: "0px" }}
    >
      <div className="flex justify-end p-4">
        <button onClick={() => setIsMenuOpen(false)}>
          <X className="h-6 w-6 text-white" />
        </button>
      </div>
      <div className="container mx-auto text-2xl px-4 flex flex-col space-y-4 p-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-white hover:text-gray-900 cursor-pointer border-b border-[#F5F5F5] transition-all duration-200 transform hover:translate-x-2"
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
        <img src={LogoDark} alt="logo forgeTech" className="h-16 w-auto hidden dark:block" />
      </div>
    </nav>
  );
};

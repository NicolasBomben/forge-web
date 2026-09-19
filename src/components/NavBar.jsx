import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { NavMobile } from "./NavMobile";
import Logo from "/assets/logo-forge.svg";
import LogoDark from "/assets/logo-footer.svg";

const navItems = ["asistente", "como", "servicios", "faq"];

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY || window.scrollY < 50);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 hidden border-b border-line bg-background/85 backdrop-blur-[14px] transition-all duration-500 ease-in-out dark:border-dark-line dark:bg-dark-background/85 md:block ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        }`}
      >
        <div className="container mx-auto flex min-h-[68px] flex-wrap items-center justify-between gap-x-4 gap-y-2.5 px-4 py-2.5">
          <a href="#top" className="flex shrink-0 items-center">
            <img src={Logo} alt="logo forgeTech" className="h-11 w-auto dark:hidden" />
            <img src={LogoDark} alt="logo forgeTech" className="hidden h-11 w-auto dark:block" />
          </a>

          <nav className="flex flex-1 basis-[340px] flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground dark:text-dark-muted dark:hover:text-dark-primary"
              >
                {t(`navBar.${item}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <LanguageToggle />
            <ThemeToggle />
            <a href="#contact" className="font-inter inline-flex h-10 items-center rounded-full bg-brand px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-dark">
              {t("navBar.demo")}
            </a>
          </div>
        </div>
      </header>

      <div className="fixed left-2 top-1 z-[60] md:hidden">
        <img src={Logo} alt="logo forgeTech" className="h-16 w-auto dark:hidden" />
        <img src={LogoDark} alt="logo forgeTech" className="hidden h-16 w-auto dark:block" />
      </div>

      <button
        className="font-inter fixed right-4 top-4 z-[60] w-28 rounded-md bg-brand p-2 text-lg font-semibold text-white shadow-md md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menu
      </button>

      <NavMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

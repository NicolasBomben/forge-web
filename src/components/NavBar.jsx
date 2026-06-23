import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { NavMobile } from "./NavMobile";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const navItems = ["about", "cruce", "personal", "contact"];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY || window.scrollY < 50);
      setScrolled(window.scrollY > 50);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Wordmark */}
          <a href="#" className="font-display font-bold text-xl tracking-tight">
            Nicolas Bomben<span className="text-muted-foreground">.</span>
          </a>

          {/* Nav */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(`navBar.${item}`)}
              </a>
            ))}
            <div className="flex items-center gap-2 pl-4 border-l border-border">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[55] flex items-center justify-between px-5 h-16 bg-background/90 backdrop-blur-md border-b border-border">
        <a href="#" className="font-display font-bold text-lg tracking-tight">
          Nicolas Bomben<span className="text-muted-foreground">.</span>
        </a>
        <button
          className="text-sm font-semibold border border-border rounded-md px-4 py-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>

      <NavMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Code, Menu } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { NavMobile } from "./NavMobile";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();
  const navItems = ["services", "pricing", "about", "contact"];

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
      {/* Navbar de escritorio */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out delay-200 hidden md:block ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-gray-900" />
            <span className="text-primary text-xl font-bold">DevCo</span>
          </a>
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="text-gray-900 hover:text-white transition">
                {t(`navBar.${item}`)}
              </a>
            ))}
            <LanguageToggle />
          </nav>
        </div>
      </header>

      {/* Botón para abrir menú en móvil */}
      <button
        className="md:hidden fixed top-4 right-4 z-[60] text-primary bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Menú móvil */}
      <NavMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

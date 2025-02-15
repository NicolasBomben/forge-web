import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Code, Menu, X } from "lucide-react";

import { LanguageToggle } from "./LanguageToggle";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed md:static top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-gray-900" />
          <span className="text-primary text-xl font-bold">DevCo</span>
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-900 ">
            {t("navBar.services")}
          </a>
          <a href="#pricing" className="text-gray-900 ">
            {t("navBar.pricing")}
          </a>
          <a href="#about" className="text-gray-900 ">
            {t("navBar.about")}
          </a>
          <a href="#contact" className="text-gray-900 ">
            {t("navBar.contact")}
          </a>

          <LanguageToggle />
        </nav>
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* navbar menu */}
      {isMenuOpen && (
        <nav
          className={`
          md:hidden fixed inset-0 bg-primary transition-all duration-300 ease-in-out transform
          ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }
          ${!isMenuOpen && "pointer-events-none"}
        `}
          style={{ top: "72px" }} // Adjust based on your header height
        >
          <div className="flex justify-end py-2">
            <LanguageToggle />
          </div>
          <div className="container mx-auto text-2xl px-4 flex flex-col space-y-4 p-8">
            <a
              href="#services"
              className="text-white hover:text-gray-900 cursor-pointer border-b border-[#F5F5F5] transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navBar.services")}
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-gray-900 cursor-pointer border-b border-[#F5F5F5] transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navBar.pricing")}
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-900 cursor-pointer border-b border-[#F5F5F5] transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navBar.about")}
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-900 cursor-pointer border-b border-[#F5F5F5] transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navBar.contact")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

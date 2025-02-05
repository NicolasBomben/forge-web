import i18next from "i18next";
import { Globe } from "lucide-react";

const toggleLanguage = () => {
  const newLang = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(newLang);
};

export const LanguageToggle = () => {
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-md bg-primary text-white px-2"
    >
      <Globe className="w-4 h-4" />
      {i18next.language === "es" ? "ES/EN" : "EN/ES"}
    </button>
  );
};

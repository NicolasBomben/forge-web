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
      className="flex items-center gap-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
    >
      <Globe className="w-4 h-4" />
      {i18next.language === "es" ? "ES/EN" : "EN/ES"}
    </button>
  );
};

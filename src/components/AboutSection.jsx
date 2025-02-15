import { useTranslation } from "react-i18next";
import { PopupButton } from "react-calendly";
import { CalendarDays } from "lucide-react";

export const AboutSection = () => {

  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("ourMissionTitle")}
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl text-center">
            {t("ourMissionSubTitle")}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 px-4 sm:px-6">
            {t("ourMissionText")}
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600 px-4 sm:px-6">
            {t("ourMissionTextSecond")}
            </p>
          </div>
          <div className="mt-12 text-center">
            <a className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-primary hover:bg-primary/90 text-white font-medium transition-colors">
              <PopupButton
                url="https://calendly.com/nicolasbomben"
                rootElement={document.getElementById("root")}
                text={t("ourServicesButton")}
              />
              <CalendarDays className="h-4 w-4 ml-2"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useTranslation } from "react-i18next";
import { PopupButton } from "react-calendly";
import { Sparkles, Target, Rocket, Globe } from "lucide-react";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-inter font-medium tracking-tighter text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4 dark:text-dark-primary">
            {t("weDoTitle")}
          </h2>

          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-200 dark:border-dark-accent"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-dark-background px-4">
                <Rocket className="h-6 w-6 text-primary dark:text-dark-secondary" />
              </span>
            </div>
          </div>

          <h3 className="ont-medium tracking-tighter text-gray-600 dark:text-dark-foreground mx-auto text-lg sm:text-xl md:text-3xl">
            {t("weDoSubtitle")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-dark-background rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <Globe className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-foreground">
              {t("weDoWebTitle")}
            </h3>
            <p className="text-gray-600 dark:text-dark-foreground">
              {t("weDoWebSubtitle")}
            </p>
          </div>

          <div className="bg-white dark:bg-dark-background rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <Target className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-foreground">
              {t("weDoClientTitle")}
            </h3>
            <p className="text-gray-600 dark:text-dark-foreground">
              {t("weDoClientSubtitle")}
            </p>
          </div>

          <div className="bg-white dark:bg-dark-background rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <Sparkles className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-foreground">
              {t("weDoApproachTitle")}
            </h3>
            <p className="text-gray-600 dark:text-dark-foreground">
              {t("weDoApproachSubtitle")}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-background rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-dark-foreground mb-8">
              {t("weDoText")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
              <p className="font-medium text-gray-900 dark:text-dark-foreground">
                {t("weDoCallToAction")}
              </p>

              <PopupButton
                url="https://calendly.com/nicolasbomben"
                rootElement={document.getElementById("root")}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md  shadow-sm hover:shadow hover:scale-105 transition-all duration-300"
                text={t("weDoButton")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

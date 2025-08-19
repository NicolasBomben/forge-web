import Particles from "../Animations/Backgrounds/Particles/Particles";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();

  // Scroll suave al formulario de contacto
  const handleContactScroll = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex pt-10 md:pt-40 w-full px-4 bg-gray-50 dark:bg-dark-background overflow-hidden">
      {/* Particles como background absoluto */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          particleColors={["#673AB7", "#673AB7"]}
          particleCount={300}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="container mx-auto pt-20 relative z-10">
        <h1 className="font-inter font-bold tracking-normal text-black dark:text-dark-primary text-4xl sm:text-5xl md:text-7xl whitespace-pre-line">
          {t("heroSection.heroLine1")}
        </h1>
        <p className="font-inter font-normal mt-4 text-lg md:text-xl text-gray-700 dark:text-dark-primary max-w-2xl whitespace-pre-line">
          {t("heroSection.heroSubtitle")}
        </p>
        <button onClick={handleContactScroll}>
          <span className="font-inter text-base text-white tracking-tight mt-6 inline-block bg-accent px-6 py-3 rounded-lg dark:bg-dark-accent dark:text-dark-primary">
            {t("heroSection.contactButton")}
          </span>
        </button>
      </div>
    </section>
  );
};

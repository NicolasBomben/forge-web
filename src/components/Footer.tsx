import { useTranslation } from "react-i18next";
import Logo from "/assets/logo-footer.svg";
import { CONTACT_EMAIL, WHATSAPP_URL, trackContact } from "../utils/contact";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const nav = ["asistente", "como", "servicios", "faq"];

  return (
    <footer className="mt-auto overflow-hidden bg-ink px-4 pb-7 pt-24 text-ink-foreground">
      <div className="container mx-auto">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              {t("footer.eyebrow")}
            </p>
            <h2 className="font-poppins mt-4 text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-[62px]">
              {t("footer.title")}
            </h2>
            <a href={`mailto:${CONTACT_EMAIL}`} onClick={trackContact} className="font-poppins mt-7 inline-block border-b-2 border-white/25 pb-1 text-xl font-medium text-ink-foreground transition-colors hover:border-white hover:text-white sm:text-2xl lg:text-[28px]">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:justify-items-end">
            <div className="flex flex-col gap-3.5">
              <p className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/45">
                {t("footer.navTitle")}
              </p>
              {nav.map((item) => (
                <a key={item} href={`#${item}`} className="font-inter text-[15.5px] text-white/75 transition-colors hover:text-white">
                  {t(`navBar.${item}`)}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3.5">
              <p className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/45">
                {t("footer.writeTitle")}
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={trackContact} className="font-inter text-[15.5px] text-white/75 transition-colors hover:text-white">WhatsApp</a>
              <a href="#contact" className="font-inter text-[15.5px] text-white/75 transition-colors hover:text-white">{t("footer.demoLink")}</a>
            </div>
          </div>
        </div>

        <img src={Logo} alt="logo forgeTech" className="mx-auto mt-16 block h-auto w-full max-w-[1200px] opacity-90" />

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3.5 border-t border-dark-line pt-6">
          <p className="font-inter text-[13px] text-white/50">
            {t("footer.rights")} &copy; {currentYear}
          </p>
          <p className="font-inter text-[13px] text-white/50">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

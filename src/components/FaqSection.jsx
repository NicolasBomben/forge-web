import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const FaqSection = () => {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true });
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-t border-line bg-muted px-4 py-24 dark:border-dark-line dark:bg-dark-card/40">
      <div className="container mx-auto max-w-[1000px]">
        <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} />

        <div className="mt-12 grid gap-3.5">
          {(Array.isArray(items) ? items : []).map((item, i) => (
            <Reveal
              key={item.q}
              delay={i * 60}
              className="overflow-hidden rounded-[20px] border border-line bg-white dark:border-dark-line dark:bg-dark-card"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                className="font-poppins flex w-full items-start justify-between gap-6 px-7 py-6 text-left text-lg font-semibold leading-tight tracking-[-0.015em] text-foreground transition-colors hover:text-brand dark:text-dark-primary sm:text-xl"
              >
                {item.q}
                <span className="font-inter shrink-0 text-2xl font-light leading-tight text-brand">{open === i ? "\u2212" : "+"}</span>
              </button>
              {open === i && (
                <p className="font-inter animate-fadeIn px-7 pb-7 text-[16.5px] leading-relaxed text-muted-foreground dark:text-dark-muted">
                  {item.a}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

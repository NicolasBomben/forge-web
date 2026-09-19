import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, subtitle, onDark = false }) => (
  <div>
    <span
      className={`font-inter text-xs font-semibold uppercase tracking-[0.16em] ${
        onDark ? "text-white/50" : "text-muted-foreground dark:text-dark-muted"
      }`}
    >
      {eyebrow}
    </span>
    <Reveal
      as="h2"
      className="font-poppins mt-5 max-w-[17ch] text-3xl font-bold uppercase leading-[1.04] tracking-[-0.04em] text-foreground dark:text-dark-primary sm:text-5xl lg:text-[76px]"
    >
      {title}
    </Reveal>
    {subtitle && (
      <Reveal
        as="p"
        delay={80}
        className={`font-inter mt-5 max-w-[620px] text-lg leading-relaxed ${
          onDark ? "text-white/70" : "text-muted-foreground dark:text-dark-muted"
        }`}
      >
        {subtitle}
      </Reveal>
    )}
  </div>
);

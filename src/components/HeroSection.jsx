import { motion } from "framer-motion";
import Marquee from "./Marquee";

export const HeroSection = () => {
  const techStack = [
    "React",
    "TypeScript",
    "VTEX IO",
    "Node.js",
    "Next.js",
    "AWS",
    "GraphQL",
    "NestJS",
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-between bg-[#0a0a0a] pt-20">
      <div className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="heading-display text-white">
            FRONTEND
            <br />
            DEVELOPER.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-[#888888] max-w-2xl leading-relaxed"
        >
          Construyo interfaces que funcionan. Ecommerce, productos SaaS y sitios
          institucionales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#proyectos"
            onClick={(e) => handleScroll(e, "#proyectos")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a0a0a] font-medium text-sm uppercase tracking-wider hover:bg-[#f5e642] transition-colors duration-300"
          >
            Ver proyectos
            <span className="text-lg">&rarr;</span>
          </a>
          <a
            href="#cruce"
            onClick={(e) => handleScroll(e, "#cruce")}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#222222] text-white font-medium text-sm uppercase tracking-wider hover:border-[#f5e642] hover:text-[#f5e642] transition-colors duration-300"
          >
            Mi paso por CRUCE
            <span className="text-lg">&rarr;</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Marquee items={techStack} />
      </motion.div>
    </section>
  );
};

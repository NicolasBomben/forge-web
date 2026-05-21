import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techTags = [
    "React",
    "TypeScript",
    "VTEX IO",
    "Next.js",
    "Node.js",
    "NestJS",
    "AWS",
    "GraphQL",
    "SQL",
    "Docker",
  ];

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#222222]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left - Vertical Text */}
          <div className="md:col-span-3 flex md:justify-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-bold text-[#222222] uppercase md:-rotate-90 md:origin-center md:whitespace-nowrap md:translate-y-32"
              style={{ writingMode: "horizontal-tb" }}
            >
              SOBRE MÍ
            </motion.span>
          </div>

          {/* Right - Content */}
          <div className="md:col-span-9">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl"
            >
              Soy Fernando, desarrollador frontend con foco en ecommerce y productos
              web a medida. Trabajo con React, TypeScript y Node.js tanto en
              proyectos freelance como en entornos de agencia. Actualmente en CRUCE,
              agencia especializada en VTEX IO, donde desarrollé componentes,
              rediseños y soluciones para marcas líderes del retail argentino.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-[#222222] text-sm text-[#888888] uppercase tracking-wider hover:border-[#f5e642] hover:text-[#f5e642] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

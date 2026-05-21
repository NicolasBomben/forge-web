import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#222222]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="heading-large text-white">
            {"¿Trabajamos juntos?"}
          </h2>
          <p className="mt-6 text-lg text-[#888888] max-w-xl mx-auto">
            Estoy disponible para proyectos freelance y oportunidades de trabajo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <a
            href="mailto:nicolasbomben@gmail.com"
            className="group text-2xl md:text-4xl font-bold text-white hover:text-[#f5e642] transition-colors duration-300 flex items-center gap-3"
          >
            nicolasbomben@gmail.com
            <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              {"↗"}
            </span>
          </a>

          <a
            href="https://linkedin.com/in/nicolas-bomben"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-xl md:text-2xl text-[#888888] hover:text-[#f5e642] transition-colors duration-300 flex items-center gap-3"
          >
            linkedin.com/in/nicolas-bomben
            <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              {"↗"}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "./Marquee";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative bg-[#0a0a0a] border border-[#222222] hover:border-[#f5e642] transition-all duration-500"
    >
      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden bg-[#111] relative">
        {project.badge && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#f5e642] text-[#0a0a0a] text-xs font-medium uppercase tracking-wider">
            {project.badge}
          </span>
        )}
        {project.images ? (
          <div className="grid grid-cols-2 gap-1 p-4 h-full">
            {project.images.map((img, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#888888] text-sm uppercase tracking-wider">Preview</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#f5e642] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-3 text-[#888888] text-sm leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs text-[#888888] border border-[#222222] uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white uppercase tracking-wider hover:text-[#f5e642] transition-colors duration-200"
          >
            {project.linkText || "Ver proyecto"}
            <span>{"↗"}</span>
          </a>
        )}

        {project.note && (
          <p className="mt-4 text-xs text-[#888888] italic">{project.note}</p>
        )}
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "TELMEC",
      description:
        "Sitio institucional para empresa de precisión mecánica con historia desde 1967. Incluye catálogo de productos y soporte multilenguaje.",
      image: "/assets/telmec-site.jpg",
      tags: ["React", "Node.js", "CSS", "Bilingual"],
      link: "https://telmec.com.ar",
      linkText: "telmec.com.ar",
    },
    {
      title: "Chatbot SaaS",
      badge: "En desarrollo",
      description:
        "Plataforma SaaS para crear y gestionar chatbots con IA. Dashboard completo: configuración del bot, captura de leads y entrenamiento desde documentos o URLs. Backend en Supabase.",
      images: [
        "/assets/chatbot-login.jpg",
        "/assets/chatbot-dashboard.jpg",
        "/assets/chatbot-leads.jpg",
        "/assets/chatbot-docs.jpg",
      ],
      tags: ["React", "Next.js", "Supabase", "AI", "SaaS", "Node.js"],
      note: "Proyecto propio — lanzamiento próximo",
    },
  ];

  const marqueeItems = [
    "Proyectos",
    "ForgeTech",
    "Chatbot SaaS",
    "CRUCE",
    "VTEX IO",
    "Ecommerce",
    "React",
  ];

  return (
    <>
      <Marquee items={marqueeItems} speed="slow" />

      <section id="proyectos" ref={ref} className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="section-label">01 / PROYECTOS PERSONALES</span>
            <h2 className="heading-large mt-4 text-white">
              Lo que construí por mi cuenta.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

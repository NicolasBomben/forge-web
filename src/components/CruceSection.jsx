import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "./Marquee";

const AgencyCard = ({ project, index, size = "normal" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const sizeClasses = {
    large: "md:col-span-2",
    normal: "md:col-span-1",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-[#0a0a0a] border border-[#222222] hover:border-[#f5e642] transition-all duration-500 ${sizeClasses[size]}`}
    >
      {/* Image Container */}
      <div className={`${size === "large" ? "aspect-[2/1]" : "aspect-[16/10]"} overflow-hidden bg-[#111] relative`}>
        {project.images ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 p-3 h-full">
            {project.images.slice(0, size === "large" ? 3 : 2).map((img, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto text-[#222222] mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-[#888888] text-xs uppercase tracking-wider">
                Sin capturas disponibles
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#f5e642] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-2 text-[#888888] text-sm leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs text-[#888888] border border-[#222222] uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.note && (
          <p className="mt-3 text-xs text-[#888888] italic">{project.note}</p>
        )}
      </div>
    </motion.div>
  );
};

export const CruceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "FarmaPlus",
      description:
        "Soporte evolutivo y desarrollo de componentes custom. Incluye barra de progreso de envíos con lógica de umbrales dinámica.",
      images: [
        "/assets/farmaplus-home.jpg",
        "/assets/farmaplus-plp.jpg",
        "/assets/farmaplus-shipping.jpg",
      ],
      tags: ["VTEX IO", "React", "GraphQL", "Components"],
      size: "large",
    },
    {
      title: "Taverniti",
      description:
        "Rediseño y soporte evolutivo de tienda de indumentaria. Implementación de listados con filtros avanzados y páginas de colección.",
      images: ["/assets/taverniti-home.jpg", "/assets/taverniti-collection.jpg"],
      tags: ["VTEX IO", "React", "Figma", "Ecommerce"],
      size: "normal",
    },
    {
      title: "Yuhmak",
      description:
        "Soporte evolutivo de tienda multirrubro (motos, electrodomésticos, hogar). Mantenimiento y desarrollo de secciones de campaña.",
      image: "/assets/yuhmak-home.jpg",
      tags: ["VTEX IO", "React", "Multistore"],
      size: "normal",
    },
    {
      title: "ColorShop",
      description:
        "Desarrollo de componente de product card custom con selector de variantes por volumen y lógica de precios exclusivos online.",
      image: "/assets/colorshop-card.jpg",
      tags: ["VTEX IO", "React", "Custom Component"],
      size: "normal",
    },
    {
      title: "SaludGlobal",
      description:
        "Desarrollo de dashboard interno para gestión centralizada de órdenes de compra. Integración con servicios AWS que consumían datos de VTEX, permitiendo al cliente visualizar y administrar pedidos desde un único panel.",
      image: null,
      tags: ["VTEX IO", "AWS", "Dashboard", "REST API"],
      note: "Sin capturas disponibles — proyecto interno",
      size: "normal",
    },
  ];

  const marqueeItems = [
    "CRUCE",
    "Agencia",
    "VTEX IO",
    "Ecommerce",
    "FarmaPlus",
    "Taverniti",
    "Yuhmak",
    "ColorShop",
    "SaludGlobal",
  ];

  return (
    <>
      <Marquee items={marqueeItems} />

      <section id="cruce" ref={ref} className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="section-label">02 / EXPERIENCIA EN AGENCIA</span>
            <h2 className="heading-large mt-4 text-white">Mi paso por CRUCE.</h2>
            <p className="mt-2 text-[#888888] text-sm uppercase tracking-wider">
              Agencia especializada en ecommerce · VTEX IO · 2025 – Presente
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#888888] max-w-4xl leading-relaxed mb-16"
          >
            En CRUCE trabajé como Frontend Developer en múltiples cuentas de ecommerce
            simultáneas, implementando rediseños desde Figma, desarrollando componentes
            custom reutilizables con React, integrando APIs REST y GraphQL, y
            gestionando el ciclo completo de requerimientos con clientes.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <AgencyCard
                key={project.title}
                project={project}
                index={index}
                size={project.size}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export const ProjectCard = ({ project, index }) => {
  const hasImages = project.images && project.images.length > 0;
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1 }}
      className="group flex flex-col"
    >
      {/* Index + Category */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm font-mono text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
          {project.category}
        </span>
      </div>

      {/* Image / placeholder */}
      <div className="relative overflow-hidden rounded-xl bg-muted border border-border aspect-[16/10]">
        {hasImages ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={project.images[activeImage]}
                alt={`${project.name} - vista ${activeImage + 1}`}
                crossOrigin="anonymous"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </AnimatePresence>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-background/90 backdrop-blur text-foreground text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Visitar <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-bold text-5xl md:text-6xl text-foreground/10">
              {project.name}
            </span>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {hasImages && project.images.length > 1 && (
        <div className="flex gap-2 mt-3">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              aria-label={`Ver imagen ${i + 1} de ${project.name}`}
              className={`h-12 w-16 rounded-md overflow-hidden border-2 transition-all ${
                activeImage === i
                  ? "border-foreground"
                  : "border-border opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt=""
                crossOrigin="anonymous"
                className="w-full h-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="mt-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
            {project.name}
          </h3>
          {project.status && (
            <span className="shrink-0 mt-1 text-xs font-medium px-2.5 py-1 rounded-full bg-foreground text-background">
              {project.status}
            </span>
          )}
        </div>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted border border-border text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

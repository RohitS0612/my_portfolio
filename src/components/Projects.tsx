"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { IconExternalLink, IconBrandGithub, IconArrowUpRight, IconBox } from "@tabler/icons-react";
import { config } from "../config/config";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-background border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      {/* Interactive Visual Header */}
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
        />
        
        {/* Engineering Status Overlay */}
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="px-2 py-1 rounded-lg bg-background/80 backdrop-blur-md border border-border text-[8px] font-bold uppercase tracking-widest text-foreground">
            V 2.0.4
          </div>
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
          {project.href && (
            <motion.a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-foreground text-background rounded-full shadow-2xl"
            >
              <IconExternalLink size={20} />
            </motion.a>
          )}
          <motion.a
            href={project.src}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-surface text-foreground border border-border rounded-full shadow-2xl"
          >
            <IconBrandGithub size={20} />
          </motion.a>
        </div>
      </div>

      {/* Tighter Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h4>
            <p className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              {project.subtitle}
            </p>
          </div>
          <IconArrowUpRight className="text-secondary group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
        </div>

        <p className="text-sm text-secondary leading-relaxed font-light line-clamp-2 mb-6">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-border">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="px-2 py-1 text-[9px] font-bold font-mono text-secondary border border-border/50 rounded uppercase bg-surface/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      
      {/* Accent Indicator */}
      <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-accent transition-all duration-700" />
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const { projects } = config;

  return (
    <section id="projects" className="relative w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <div className="inline-flex p-3 rounded-2xl bg-surface border border-border text-secondary group-hover:text-accent transition-colors">
              <IconBox size={24} />
            </div>
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent font-mono">
                Portfolios
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-none">
                Selected Work.
              </h3>
            </div>
          </div>
          <p className="text-secondary max-w-sm text-base font-light leading-relaxed">
            From technical design to production deployment, these represent my core engineering capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.value} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
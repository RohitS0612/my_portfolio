import React from "react";
import { motion } from "framer-motion";
import { Tabs } from "./ui/tabs";
import { config } from "../config/config";

const ProjectContent = ({ title, description, image, tech, color, src, href }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="relative group">
        <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`}></div>
        <img
          src={image}
          alt={title}
          className="relative rounded-xl object-cover w-full h-[180px] sm:h-[220px] md:h-[240px] shadow-2xl"
        />
      </div>
      <div className="flex flex-col h-full justify-between py-2">
        <div className="space-y-4">
          <p className="text-sm md:text-base text-zinc-300 font-normal leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-medium text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* <div className="mt-8 flex items-center gap-4">
          <button className={`px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r ${color} rounded-full text-white font-bold hover:shadow-lg transition-all text-xs sm:text-sm md:text-base`}>
            <a href={href} target="_blank" rel="noopener noreferrer"> 
            Launch Project
            </a>
          </button>
          <button className="px-4 md:px-8 py-2 md:py-3 bg-zinc-900 border border-white/10 rounded-full text-white font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm md:text-base">
            <a href={src} target="_blank" rel="noopener noreferrer" className="ml-2"> 
            Source Code
            </a>
          </button>
        </div> */}
        <div className="mt-8 flex items-center gap-4">
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r ${color} rounded-full text-white font-bold hover:shadow-lg transition-all text-xs sm:text-sm md:text-base inline-flex items-center justify-center`}
  >
    Launch Project
  </a>

  <a
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 md:px-8 py-2 md:py-3 bg-zinc-900 border border-white/10 rounded-full text-white font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm md:text-base inline-flex items-center justify-center"
  >
    Source Code
  </a>
</div>

      </div>
    </div>
  );
};

export const Projects = () => {
  const tabs = config.projects.map((project) => ({
    title: project.title,
    value: project.value,
    content: (
      <div className={`w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-8 text-lg md:text-2xl font-bold text-white bg-gradient-to-br ${project.bgGradient} border border-white/10 shadow-2xl`}>
        <p className="mb-2 md:mb-3">{project.subtitle}</p>
        <ProjectContent
          title={project.title}
          description={project.description}
          image={project.image}
          tech={project.tech}
          color={project.color}
          src={project.src}
          href={project.href}
        />
      </div>
    ),
  }));

  return (
    <div id="projects" className="relative min-h-screen bg-black py-8 md:py-4 flex flex-col items-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center h-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          {/* <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            A selection of my recent work, ranging from complex SaaS platforms to creative AI experiments.
          </p> */}
        </motion.div>
        
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

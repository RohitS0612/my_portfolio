"use client";

import React from "react";
import { motion } from "framer-motion";
import { config } from "../config/config";
import { IconBolt, IconCode, IconCpu, IconDatabase, IconLayout, IconServer, IconBoxSeam } from "@tabler/icons-react";

const iconMap: Record<string, React.ReactNode> = {
  Frontend: <IconLayout size={20} />,
  Backend: <IconServer size={20} />,
  Database: <IconDatabase size={20} />,
  "Programming Languages": <IconCode size={20} />,
  "AI & Tools": <IconCpu size={20} />,
};

export const Skills: React.FC = () => {
  const { skills } = config;

  return (
    <section id="skills" className="relative w-full py-16 md:py-24 border-b border-border bg-surface/30 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Interactive Info Card */}
          <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-fit p-3 rounded-2xl bg-accent text-accent-foreground shadow-xl"
            >
              <IconBoxSeam size={24} />
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent font-mono">
                Technical Stack
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tighter leading-tight">
                Technical <br /> Expertise.
              </h3>
              <p className="text-secondary text-base font-light leading-relaxed">
                A breakdown of my technical proficiencies across the full stack, optimized for <span className="text-foreground">scalability</span> and <span className="text-foreground">performance</span>.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">System Load</span>
                <span className="text-[10px] font-mono text-accent">Optimal</span>
              </div>
              <div className="h-1 w-full bg-surface rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  className="h-full bg-accent"
                />
              </div>
            </div>
          </div>

          {/* Right: Modern Interactive Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((categoryData, idx) => (
              <motion.div
                key={categoryData.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-6 rounded-2xl border border-border bg-background hover:border-accent/40 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 rounded-xl bg-surface text-secondary group-hover:text-accent group-hover:bg-accent/5 transition-colors">
                    {iconMap[categoryData.category] || <IconCode size={20} />}
                  </div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-widest font-mono">
                    {categoryData.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categoryData.items.map((skill) => (
                    <motion.span 
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-lg bg-surface/50 border border-border/50 text-[11px] text-secondary font-medium hover:text-foreground hover:border-foreground/20 transition-all cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
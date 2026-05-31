"use client";

import React from "react";
import { motion } from "framer-motion";
import { config } from "../config/config";
import { IconBriefcase } from "@tabler/icons-react";

export const Experience: React.FC = () => {
  const { experience } = config.about;

  return (
    <section id="experience" className="relative w-full py-24 md:py-40 border-b border-border bg-background">
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-3 rounded-2xl bg-accent/5 text-accent border border-accent/10"
          >
            <IconBriefcase size={24} />
          </motion.div>
          <h2 className="text-sm font-mono text-secondary tracking-[0.3em] uppercase">
            Career Path
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Work Experience.
          </h3>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-8 premium-card hover:bg-surface/50"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-lg text-secondary font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-2">
                <span className="text-sm font-mono text-accent font-bold uppercase tracking-wider">
                  {exp.period}
                </span>
                <p className="text-sm text-secondary leading-relaxed max-w-md md:text-right font-light italic">
                  {exp.description}
                </p>
              </div>

              <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-l-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
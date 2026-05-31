"use client";

import React from "react";
import { motion } from "framer-motion";
import { config } from "../config/config";
import { IconTarget, IconRocket, IconUsers, IconBolt } from "@tabler/icons-react";

export const About: React.FC = () => {
  const { about } = config;

  return (
    <section id="about" className="relative w-full py-12 md:py-20 border-y border-border bg-background overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Refined Sticky Image Column - More Compact */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] max-w-[320px] mx-auto rounded-2xl overflow-hidden border border-border shadow-xl group cursor-pointer"
            >
              <motion.img
                src={config.profile.avatar}
                alt={config.profile.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-40 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 premium-blur rounded-xl border border-white/10 backdrop-blur-md translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Active Engineer
                </span>
              </div>
            </motion.div>
          </div>

          {/* Content Column - More Dense */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent font-mono">
                  Technical Mission
                </h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-foreground leading-[1] tracking-tighter">
                  Engineering systems <br /> for global scale.
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {about.summary.map((paragraph, index) => (
                  <p key={index} className="text-base text-secondary leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Compact Values Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: <IconTarget size={18} />, title: "Precision" },
                { icon: <IconRocket size={18} />, title: "Scalability" },
                { icon: <IconUsers size={18} />, title: "Collaboration" },
                { icon: <IconBolt size={18} />, title: "Optimization" },
              ].map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl border border-border bg-surface/30 group hover:border-accent/30 transition-all text-center"
                >
                  <div className="text-accent mb-2 flex justify-center">{val.icon}</div>
                  <h4 className="text-[10px] font-bold text-foreground uppercase tracking-widest font-mono">
                    {val.title}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* Engineering Quote - Refined */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 premium-card !bg-accent/5 !border-accent/10 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 p-4 text-accent/5 text-7xl font-bold select-none italic">
                "
              </div>
              <p className="text-xl text-foreground font-light leading-snug italic relative z-10">
                "I don't just write code; I engineer the technical foundations that allow digital products to thrive."
              </p>
              <div className="mt-4 flex items-center gap-3 relative z-10">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                  {config.profile.name}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
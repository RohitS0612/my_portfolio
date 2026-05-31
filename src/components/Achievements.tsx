"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconCertificate, IconSchool, IconCode } from "@tabler/icons-react";
import { config } from "../config/config";

export const Achievements: React.FC = () => {
  const { certifications } = config;

  const academics = [
    {
      degree: "Bachelor Of Computer Application",
      institution: "VSM BBA AND BCA COLLEGE",
      period: "2020 – 2023",
      description: "Core focus on computer science theory and software design."
    }
  ];

  return (
    <section id="achievements" className="relative w-full py-24 md:py-40 border-b border-border bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32 text-center"
        >
          <h2 className="text-sm font-mono text-accent font-bold tracking-[0.3em] uppercase mb-6">
            Milestones
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Credentials & Impact.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card space-y-8"
          >
            <div className="flex items-center gap-3 text-accent">
              <IconCertificate size={24} />
              <h4 className="text-sm font-mono font-bold uppercase tracking-widest">
                Certifications
              </h4>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="space-y-1">
                  <h5 className="text-lg font-bold text-foreground leading-tight">
                    {cert.name}
                  </h5>
                  <p className="text-xs text-secondary font-medium uppercase tracking-widest">
                    {cert.organization} • {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="premium-card space-y-8"
          >
            <div className="flex items-center gap-3 text-accent">
              <IconSchool size={24} />
              <h4 className="text-sm font-mono font-bold uppercase tracking-widest">
                Education
              </h4>
            </div>
            
            <div className="space-y-6">
              {academics.map((academic) => (
                <div key={academic.degree} className="space-y-2">
                  <h5 className="text-lg font-bold text-foreground leading-tight">
                    {academic.degree}
                  </h5>
                  <p className="text-xs text-secondary font-medium uppercase tracking-widest">
                    {academic.institution} • {academic.period}
                  </p>
                  <p className="text-sm text-secondary leading-relaxed font-light">
                    {academic.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="premium-card space-y-8"
          >
            <div className="flex items-center gap-3 text-accent">
              <IconCode size={24} />
              <h4 className="text-sm font-mono font-bold uppercase tracking-widest">
                Impact
              </h4>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Enterprise Apps", desc: "Successfully deployed complex full-stack systems." },
                { title: "40% Performance", desc: "Optimized distributed system latency and throughput." }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <h5 className="text-lg font-bold text-foreground leading-tight">
                    {item.title}
                  </h5>
                  <p className="text-sm text-secondary font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

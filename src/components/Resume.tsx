"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconDownload, IconEye, IconFileText } from "@tabler/icons-react";
import dynamic from "next/dynamic";

const ResumeModal = dynamic(
  () => import("./ResumeModal").then((mod) => mod.ResumeModal),
  { ssr: false }
);

export const Resume: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="resume" className="relative w-full py-24 md:py-40 border-b border-border bg-surface/20">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex p-4 rounded-3xl bg-accent/5 text-accent border border-accent/10 mb-4">
            <IconFileText size={32} />
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-accent font-bold tracking-[0.3em] uppercase">
              Technical Dossier
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Curriculum Vitae.
            </h3>
            <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto font-light">
              Explore my comprehensive technical history, architectural proficiencies, and system design expertise in detail.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary w-full sm:w-auto"
            >
              <IconEye size={20} />
              <span>View Online</span>
            </button>
            <a
              href="/assets/resume.pdf"
              download
              className="btn-secondary w-full sm:w-auto"
            >
              <IconDownload size={20} />
              <span>Download PDF</span>
            </a>
          </div>
        </motion.div>
      </div>

      <ResumeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};
export default Resume;

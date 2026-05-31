"use client";

import React from "react";
import { motion } from "framer-motion";
import { config } from "../config/config";

export const TestimonialMarquee: React.FC = () => {
  const { testimonials } = config;

  return (
    <div className="relative w-full overflow-hidden py-10 mt-12 border-t border-border">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap w-fit"
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-8 rounded-2xl bg-surface/50 border border-border min-w-[320px] max-w-[400px] whitespace-normal group hover:border-foreground/20 transition-colors duration-500"
          >
            <p className="text-secondary text-sm italic leading-relaxed font-light">
              "{item.content}"
            </p>
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-xs uppercase tracking-widest">
                {item.name}
              </span>
              <span className="text-secondary/50 text-[10px] font-mono uppercase tracking-wider">
                {item.role}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

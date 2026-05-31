"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { config } from "../config/config";
import { IconArrowRight, IconCode, IconCpu, IconDatabase, IconLayout } from "@tabler/icons-react";
import { Hero3D } from "./ui/Hero3D";
import { TestimonialMarquee } from "./TestimonialMarquee";

export const Hero: React.FC = () => {
  const { profile } = config;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background md:cursor-none"
    >
      {/* Custom Global Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-foreground rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        animate={{ x: cursorPos.x - 12, y: cursorPos.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.6 bg-accent rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: cursorPos.x - 3, y: cursorPos.y - 3 }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />

      {/* 3D Interactive Background */}
      <Hero3D />

      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:32px_32px]" />

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Professional Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-foreground/5 border border-border shadow-sm"
          >
            
          
          </motion.div>

          {/* Engineering Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                rotateX: useTransform(springY, [-0.5, 0.5], [10, -10]),
                rotateY: useTransform(springX, [-0.5, 0.5], [-10, 10])
              }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-[0.9] perspective-1000"
            >
              Engineering <br /> 
              <span className="text-secondary/40">Digital Systems.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl font-light text-secondary max-w-xl mx-auto leading-relaxed"
            >
              I am <span className="text-foreground font-bold">{profile.name}</span>. I build <span className="text-foreground font-medium">high-performance engines</span> and interactive systems that define modern engineering.
            </motion.p>
          </div>

          {/* Interactive Stack Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 md:gap-10 text-secondary/30"
          >
            {[IconCode, IconCpu, IconDatabase, IconLayout].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, color: "var(--foreground)", opacity: 1 }}
                className="transition-colors duration-300"
              >
                <Icon size={28} strokeWidth={1} />
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto relative z-20"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary !text-[9px] !px-6 !py-3"
            >
              Explore Tech Stack
              <IconArrowRight size={16} />
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary !text-[9px] !px-6 !py-3"
            >
              Start Building
            </motion.a>
          </motion.div>

          {/* Testimonial Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-full relative z-20"
          >
            <TestimonialMarquee />
          </motion.div>
        </div>
      </motion.div>

      {/* Mouse Follower Light */}
      <motion.div
        style={{
          x: useTransform(springX, [-0.5, 0.5], ["-50%", "50%"]),
          y: useTransform(springY, [-0.5, 0.5], ["-50%", "50%"]),
        }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-foreground/[0.03] rounded-full blur-[100px] pointer-events-none -z-10"
      />
    </section>
  );
};
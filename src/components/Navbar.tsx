"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconArrowRight } from "@tabler/icons-react";
import { config } from "../config/config";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    
    const sections = config.navigation.map((item) => item.href.replace("#", ""));
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`premium-blur rounded-2xl px-6 md:px-8 py-3 flex items-center justify-between shadow-xl transition-all duration-500 ${
          scrolled ? "bg-background/80 border-border" : "bg-transparent border-transparent"
        }`}>
          <a href="#home" className="text-foreground font-extrabold text-xl tracking-tighter hover:scale-105 transition-transform flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground text-xs shadow-lg shadow-accent/20">
              R
            </div>
            <span className="hidden sm:inline">ROHIT<span className="text-accent">.</span>SHETAKE</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {config.navigation.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative py-2 px-4 rounded-xl group ${
                    isActive ? "text-accent" : "text-secondary hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-500 group shadow-lg"
            >
              Consult
              <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <button 
              className="lg:hidden text-foreground p-2 hover:bg-foreground/5 rounded-xl transition-colors border border-border"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-6 right-6 mt-4 p-6 premium-blur rounded-3xl lg:hidden shadow-2xl flex flex-col gap-6 overflow-hidden border border-border bg-background/95"
            >
              <div className="flex flex-col gap-1">
                {config.navigation.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-bold uppercase tracking-widest py-4 px-6 rounded-2xl transition-all ${
                        isActive 
                          ? "text-accent bg-accent/5" 
                          : "text-secondary hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-5 bg-accent text-accent-foreground rounded-2xl text-xs font-extrabold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2"
              >
                Consultation
                <IconArrowRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
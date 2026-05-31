"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconSend, IconArrowRight, IconMessageCircle, IconShieldCheck, IconClock, IconCircleCheck } from "@tabler/icons-react";
import { config } from "../config/config";

const IconMap: Record<string, React.ComponentType<any>> = {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
};

export const Contact: React.FC = () => {
  const { contact } = config;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("submitting");
    
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 bg-background overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Refined Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex p-3 rounded-2xl bg-accent text-accent-foreground shadow-lg">
                <IconMessageCircle size={24} />
              </div>
              <div className="space-y-4">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent font-mono">
                  Dialogue
                </h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tighter leading-[1]">
                  Building something <br /> complex? Let's talk.
                </h3>
                <p className="text-lg text-secondary leading-relaxed max-w-md font-light">
                  {contact.message}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/50 border border-border">
                  <IconShieldCheck size={14} className="text-accent" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">Secured</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/50 border border-border">
                  <IconClock size={14} className="text-accent" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">Fast Response</span>
                </div>
              </div>
            </motion.div>

            <div className="flex gap-4">
              {contact.socials.map((social, index) => {
                const Icon = IconMap[social.icon];
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-4 rounded-2xl border border-border bg-background hover:border-accent/40 hover:bg-accent/5 transition-all text-secondary hover:text-accent"
                  >
                    {Icon && <Icon size={24} />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right: Perfected UI Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2rem] border border-border bg-surface/20 backdrop-blur-xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 text-accent flex items-center justify-center border border-accent/20">
                    <IconCircleCheck size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Message Received.</h3>
                    <p className="text-secondary text-base font-light max-w-[240px] mx-auto">
                      Technical briefing transmitted. Response pending review.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[9px] font-bold uppercase tracking-[0.3em] text-secondary ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        className="w-full bg-background border border-border rounded-xl px-5 py-4 text-base text-foreground placeholder-secondary/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-[0.3em] text-secondary ml-1">
                        Email Protocol
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        className="w-full bg-background border border-border rounded-xl px-5 py-4 text-base text-foreground placeholder-secondary/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[9px] font-bold uppercase tracking-[0.3em] text-secondary ml-1">
                        Specs / Inquiry
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        className="w-full bg-background border border-border rounded-xl px-5 py-4 text-base text-foreground placeholder-secondary/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all disabled:opacity-50 resize-none"
                        placeholder="Briefing of the technical challenge..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting" || !formData.name || !formData.email || !formData.message}
                    className="btn-primary w-full py-5 group shadow-2xl hover:shadow-accent/20"
                  >
                    {status === "submitting" ? (
                      <div className="w-5 h-5 border-2 border-background/20 border-t-background rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Initialize Link</span>
                        <IconSend size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            
            {/* Visual Indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent blur-[100px] opacity-10 -z-10" />
          </motion.div>
        </div>

        {/* Dense Engineering Footer */}
        <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 grayscale">
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
            © {new Date().getFullYear()} ROHIT SHETAKE. ENG_BUILD_V2
          </p>
          <div className="flex gap-8">
            <span className="text-[9px] font-mono tracking-widest uppercase">Prod_Mode: Active</span>
            <span className="text-[9px] font-mono tracking-widest uppercase">Engine: Next_16</span>
          </div>
        </div>
      </div>
    </section>
  );
};
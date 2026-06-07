"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconSend, IconArrowRight, IconMessageCircle, IconShieldCheck, IconClock, IconCircleCheck, IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { config } from "../config/config";

const IconMap: Record<string, React.ComponentType<any>> = {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandWhatsapp,
  IconPhone,
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
    
    // Construct mailto link with form data
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Trigger the mail client and show success state
    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
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

            <div className="space-y-6">
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
                      title={social.name}
                    >
                      {Icon && <Icon size={24} />}
                    </motion.a>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <IconBrandWhatsapp size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-[#25D366]">WhatsApp</span>
                    <span className="text-sm font-medium text-foreground">Chat with me</span>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconPhone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-blue-500">Phone</span>
                    <span className="text-sm font-medium text-foreground">{contact.phone}</span>
                  </div>
                </motion.a>
              </div>
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

        {/* Professional Footer */}
        <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 transition-opacity duration-700">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center text-[10px] font-bold shadow-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                RS
              </div>
              <span className="text-sm font-bold tracking-tighter text-foreground uppercase">
                Rohit Shetake<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-[11px] font-medium text-secondary tracking-wide">
              © {new Date().getFullYear()} Rohit Shetake. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {config.navigation.slice(0, 4).map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">
              Built with precision & passion
            </p>
            <div className="flex gap-4 opacity-40 hover:opacity-100 transition-opacity">
               <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
               <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
               <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
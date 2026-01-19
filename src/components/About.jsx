import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { motion } from "framer-motion";
import { config } from "../config/config";

export const About = () => {
  const { about } = config;

  return (
    <div id="about" className="relative w-full bg-black py-10 md:py-4">
      <BackgroundLines className="w-full h-full absolute inset-0" />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{about.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-full max-w-md h-[300px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={config.profile.avatar}
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {about.summary.map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Experience */}
              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-bold text-white">Experience</h3>
                
                <div className="space-y-4">
                  {about.experience.map((exp, index) => (
                    <div key={index} className={`border-l-2 border-${exp.color} pl-4`}>
                      <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                      <p className="text-gray-400">{exp.company} • {exp.period}</p>
                      <p className="text-gray-300 mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

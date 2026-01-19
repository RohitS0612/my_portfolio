import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconEye } from "@tabler/icons-react";
import { config } from "../config/config";
import { PinContainer } from "./ui/3d-pin";
import { ResumeModal } from "./ResumeModal";

export const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="resume" className="relative min-h-screen w-full bg-black flex items-center justify-center py-12 md:py-20 overflow-hidden">
      {/* Ambient background blur blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="border border-white/10 rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-12 backdrop-blur-sm bg-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Skills & Resume</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg px-2">My technical expertise and professional background</p>
          </motion.div>

          {/* Skills Section */}
          <div className="mb-8 md:mb-16">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8"
            >
              Technical Skills
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {config.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 hover:border-white/20 active:border-white/30 transition-all duration-300 overflow-hidden">
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-2 md:mb-3">
                        <h4 className="text-white font-bold text-sm sm:text-base md:text-lg">{skill.name}</h4>
                        <span className="text-blue-400 font-bold text-xs sm:text-sm md:text-base">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-2 md:h-2.5 bg-gray-800/80 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="border-t border-white/10 pt-6 md:pt-12"
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8 text-center"
            >
              Professional Resume
            </motion.h3>
            
            <div className="flex items-center justify-center w-full min-h-[350px] sm:min-h-[400px]">
              <PinContainer
                title="Resume View"
                onClick={() => setIsModalOpen(true)}
                containerClassName="w-full max-w-[90vw] sm:max-w-none"
              >
                <div className="flex basis-full flex-col p-3 sm:p-4 tracking-tight text-slate-100/50 w-full sm:w-[18rem] md:w-[20rem] h-[16rem] sm:h-[18rem] md:h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100">
                    View My Resume
                  </h3>
                  <div className="text-xs sm:text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Check out my detailed experience and professional certifications.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-3 sm:mt-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 items-center justify-center group-hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                    <IconEye className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
              </PinContainer>
            </div>
          </motion.div>
        </div>
      </div>

      <ResumeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

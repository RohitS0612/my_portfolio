import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconDownload, IconEye, IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { config } from "../config/config";
import { Document, Page, pdfjs } from 'react-pdf';

// Import CSS for react-pdf (optional, but good for default styles)
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker to use the CDN version for ease of setup in Vite
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Handle responsive width for the PDF page
  const onContainerResize = (entries) => {
    if (entries[0].contentRect) {
      setContainerWidth(entries[0].contentRect.width);
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(onContainerResize);
    const container = document.getElementById('pdf-container');
    if (container) {
      resizeObserver.observe(container);
    }
    return () => {
      if (container) resizeObserver.unobserve(container);
    };
  }, [isModalOpen]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf'; 
    link.download = 'Developer_Resume.pdf';
    link.click();
  };

  return (
    <div id="resume" className="relative min-h-screen w-full bg-black flex items-center justify-center py-12 md:py-4 overflow-hidden">
      {/* Ambient background blur blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-12 backdrop-blur-sm bg-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Skills & Resume</h2>
            <p className="text-gray-400 text-base md:text-lg">My technical expertise and professional background</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Technical Skills</h3>
              {config.skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 md:space-y-8"
            >
              <div className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 text-center">Resume</h3>
                <p className="text-gray-400 text-sm md:text-base text-center mb-6">
                  Check out my detailed experience and professional certifications.
                </p>
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 hover:shadow-lg hover:shadow-blue-500/50 transition-all group"
                >
                  <IconEye className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  View Resume
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full h-screen bg-black flex flex-col z-[101]"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/80 backdrop-blur-xl sticky top-0 z-20">
                <div className="flex items-center gap-4">
                  {/* <h3 className="text-white font-bold ml-2">Professional Resume</h3> */}
                   <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 transition-all text-sm font-bold shadow-lg shadow-blue-500/20"
                  >
                    <IconDownload size={18} />
                    Download
                  </button>
                  
                  {numPages > 1 && (
                    <div className="flex items-center bg-zinc-900 rounded-full px-2 border border-white/5">
                      <button
                        className="p-1 hover:bg-white/5 text-white rounded-full disabled:opacity-30"
                        disabled={pageNumber <= 1}
                        onClick={() => setPageNumber(prev => prev - 1)}
                      >
                        <IconChevronLeft size={20} />
                      </button>
                      <span className="text-sm text-white px-3 border-x border-white/5 mx-1">
                        {pageNumber} / {numPages}
                      </span>
                      <button
                        className="p-1 hover:bg-white/5 text-white rounded-full disabled:opacity-30"
                        disabled={pageNumber >= numPages}
                        onClick={() => setPageNumber(prev => prev + 1)}
                      >
                        <IconChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/10 text-white/70 hover:text-white rounded-full transition-all"
                  aria-label="Close modal"
                >
                  <IconX size={28} />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-zinc-950 flex justify-center py-10" id="pdf-container">
                <div className="w-full max-w-4xl flex justify-center px-4">
                  <Document
                    file="/assets/resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-white"
                    loading={
                      <div className="flex flex-col items-center justify-center p-20 space-y-4">
                        <div className="w-10 h-10 border-4 border-white/10 border-t-blue-500 rounded-full animate-spin" />
                        <p className="text-white font-medium">Rendering Document...</p>
                      </div>
                    }
                  >
                    <Page 
                      pageNumber={pageNumber} 
                      width={containerWidth ? Math.min(containerWidth - 32, 1000) : 300}
                      renderAnnotationLayer={true}
                      renderTextLayer={true}
                      className="rounded-sm overflow-hidden"
                    />
                  </Document>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

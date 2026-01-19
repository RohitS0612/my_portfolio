import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconDownload, IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Document, Page, pdfjs } from 'react-pdf';

// Import CSS for react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const ResumeModal = ({ isOpen, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const onContainerResize = (entries) => {
    if (entries[0].contentRect) {
      setContainerWidth(entries[0].contentRect.width);
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(onContainerResize);
    const container = document.getElementById('pdf-container-modal');
    if (container) {
      resizeObserver.observe(container);
    }
    return () => {
      if (container) resizeObserver.unobserve(container);
    };
  }, [isOpen]);

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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full h-[90vh] md:h-screen bg-black flex flex-col z-[101] rounded-2xl md:rounded-none overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/80 backdrop-blur-xl sticky top-0 z-20">
              <div className="flex items-center gap-4">
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
                onClick={onClose}
                className="p-2 hover:bg-white/10 text-white/70 hover:text-white rounded-full transition-all"
                aria-label="Close modal"
              >
                <IconX size={28} />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto bg-zinc-950 flex justify-center py-10" id="pdf-container-modal">
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
  );
};

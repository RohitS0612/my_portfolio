"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconDownload, IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Document, Page, pdfjs } from 'react-pdf';

// Import CSS for react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

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

  const onContainerResize = (entries: ResizeObserverEntry[]) => {
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

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf'; 
    link.download = 'Rohit_Shetake_Resume.pdf';
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
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="relative w-full h-[90vh] md:h-screen bg-black flex flex-col z-[101] rounded-2xl md:rounded-none overflow-hidden border border-zinc-800"
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-zinc-900 flex items-center justify-between bg-black/80 backdrop-blur-xl sticky top-0 z-20">
              <div className="flex items-center gap-4">
                 <button
                  onClick={handleDownload}
                  className="px-5 py-2 bg-white hover:bg-zinc-200 text-black rounded-full flex items-center gap-2 transition-all text-xs font-bold shadow-lg"
                >
                  <IconDownload size={16} />
                  Download PDF
                </button>
                
                {numPages && numPages > 1 && (
                  <div className="flex items-center bg-zinc-900 rounded-full px-2 border border-zinc-800">
                    <button
                      className="p-1 hover:bg-white/5 text-white rounded-full disabled:opacity-30"
                      disabled={pageNumber <= 1}
                      onClick={() => setPageNumber(prev => prev - 1)}
                    >
                      <IconChevronLeft size={18} />
                    </button>
                    <span className="text-xs text-white px-3 border-x border-zinc-850 mx-1 font-mono">
                      {pageNumber} / {numPages}
                    </span>
                    <button
                      className="p-1 hover:bg-white/5 text-white rounded-full disabled:opacity-30"
                      disabled={pageNumber >= numPages}
                      onClick={() => setPageNumber(prev => prev + 1)}
                    >
                      <IconChevronRight size={18} />
                    </button>
                  </div>
                )}
              </div>
              
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-full transition-all"
                aria-label="Close modal"
              >
                <IconX size={24} />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto bg-zinc-950 flex justify-center py-10" id="pdf-container-modal">
              <div className="w-full max-w-4xl flex justify-center px-4">
                <Document
                  file="/assets/resume.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="shadow-2xl bg-zinc-950"
                  loading={
                    <div className="flex flex-col items-center justify-center p-20 space-y-4">
                      <div className="w-8 h-8 border-2 border-zinc-850 border-t-white rounded-full animate-spin" />
                      <p className="text-zinc-500 font-medium text-sm font-mono uppercase tracking-wider">Rendering Document...</p>
                    </div>
                  }
                >
                  <Page 
                    pageNumber={pageNumber} 
                    width={containerWidth ? Math.min(containerWidth - 32, 850) : 320}
                    renderAnnotationLayer={true}
                    renderTextLayer={true}
                    className="rounded-lg overflow-hidden border border-zinc-900 shadow-2xl"
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

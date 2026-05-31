import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-white font-bold tracking-[0.3em] uppercase text-xs">
            Rohit Shetake
          </span>
          <div className="h-[1px] w-12 bg-white/20"></div>
          <span className="text-secondary font-mono text-[10px] uppercase tracking-widest">
            Portfolio 2026
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
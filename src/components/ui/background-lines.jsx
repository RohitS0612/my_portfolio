import React from "react";

export const BackgroundLines = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Animated diagonal lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{
              top: `${i * 5}%`,
              left: "-100%",
              width: "200%",
              transform: `rotate(-15deg)`,
              animation: `slideRight ${10 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      
      {children}
      
      <style >{`
        @keyframes slideRight {
          0% {
            transform: translateX(-50%) rotate(-15deg);
          }
          100% {
            transform: translateX(50%) rotate(-15deg);
          }
        }
      `}</style>
    </div>
  );
};

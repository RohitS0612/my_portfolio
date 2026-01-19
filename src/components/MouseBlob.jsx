import React, { useEffect, useRef } from "react";

export const MouseBlob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        const { clientX, clientY } = e;
        
        // Update position with hardware acceleration
        blobRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Listen on document to track across entire page
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Mouse-following light blob - larger with less blur */}
      <div
        ref={blobRef}
        className="fixed inset-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.15) 40%, transparent 70%)",
          filter: "blur(60px)", // Less blur for sharper light
          transform: "translate3d(-100% ,-100%, 0)", // Offscreen initially
          transition: "transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)", // Smoother follow
          zIndex: 1,
        }}
      />
      
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none z-0" />
    </>
  );
};

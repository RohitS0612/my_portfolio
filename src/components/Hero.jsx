import React from "react";
import { EncryptedText } from "./ui/encrypted-text";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import { FloatingIcons } from "./ui/floating-icons";
import { config } from "../config/config";

export const Hero = () => {
  const { profile } = config;

  return (
    <div id="home" className="relative min-h-[80vh] md:min-h-screen w-full bg-black overflow-hidden flex items-center py-12 md:py-10">
      {/* Ambient background icons */}
      <FloatingIcons count={15} />
      
      <div className="relative z-10 w-full mt-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <EncryptedText
              text="DEVELOPER PORTFOLIO"
              className="text-xl md:text-3xl font-bold text-white uppercase tracking-tighter"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {profile.name}
            </h1>
            <p className="text-zinc-400 text-lg md:text-3xl font-medium">
              {profile.title}
            </p>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl">
              {profile.description}
            </p>
            
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-4 w-full">
              <a href="#projects" className="flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center">
                View Projects
              </a>
              <a href="#contact" className="flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 border border-white/20 rounded-full text-white text-sm md:text-base font-bold hover:bg-white/5 transition-all text-center">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Pixelated Canvas Photo */}
          <div className="relative mt-10 hidden md:flex items-center justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/5] max-w-[500px] bg-transparent rounded-3xl overflow-hidden">
              <div className="absolute inset-0 rounded-full" />
              <PixelatedCanvas
                src={profile.avatar}
                width={500}
                height={500}
                cellSize={3}
                dotScale={0.9}
                shape="square"
                dropoutStrength={0.1}
                backgroundColor=""
                className="relative z-10"
                responsive={true}
                distortionStrength={15}
                distortionRadius={50}
                distortionMode="repel"
                followSpeed={0.3}
                jitterStrength={10}
                maxFps={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

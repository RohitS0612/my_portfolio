import React from "react";
import { Globe } from "./ui/globe";
import { IconBrandGithub, IconBrandTwitter, IconMail } from "@tabler/icons-react";
import { config } from "../config/config";

const IconMap = {
  IconBrandGithub,
  IconBrandTwitter,
  IconMail,
};

export const Contact = () => {
  const { contact } = config;

  return (
    <div id="contact" className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center bg-black overflow-hidden py-12 md:py-4 z-10">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-50">
         <Globe className="opacity-60" />
      </div>
      
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h2 className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Get in touch
        </h2>
        <p className="text-neutral-400 mt-4 max-w-lg mx-auto text-lg">
          {contact.message}
        </p>

        <div className="flex items-center justify-center gap-8 mt-12">
          {contact.socials.map((social, index) => {
            const Icon = IconMap[social.icon];
            return (
              <a
                key={index}
                href={social.href}
                className="p-4 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors border border-neutral-800"
              >
                {Icon && <Icon className="h-6 w-6 text-white" />}
              </a>
            );
          })}
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </div>
  );
};

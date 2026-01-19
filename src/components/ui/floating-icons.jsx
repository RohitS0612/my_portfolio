import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { 
  IconBrandReact, 
  IconBrandJavascript, 
  IconBrandTypescript, 
  IconBrandPython, 
  IconBrandNodejs, 
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandCpp,
  IconBrandDocker,
  IconBrandGithub, 
  IconBrandDjango,
  IconBrandSuperhuman
} from "@tabler/icons-react";

const brandIcons = [
  { Icon: IconBrandReact, color: "#61DAFB" },
  { Icon: IconBrandJavascript, color: "#F7DF1E" },
  { Icon: IconBrandTypescript, color: "#3178C6" },
  { Icon: IconBrandPython, color: "#3776AB" },
  { Icon: IconBrandNodejs, color: "#339933" },
  { Icon: IconBrandTailwind, color: "#06B6D4" },
  { Icon: IconBrandNextjs, color: "#FFFFFF" },
  { Icon: IconBrandCpp, color: "#00599C" },
  { Icon: IconBrandDocker, color: "#2496ED" },
  { Icon: IconBrandGithub, color: "#FFFFFF" },
  { Icon: IconBrandDjango, color: "#00ff2aff" },
  { Icon: IconBrandSuperhuman, color: "#ff0000ff" }
];

const FloatingIcon = ({ Icon, color, delay, duration, x1, y1, x2, y2, x3, y3 }) => {
  return (
    <motion.div
      initial={{ left: x1, top: y1, opacity: 0 }}
      animate={{
        left: [x1, x2, x3, x1],
        top: [y1, y2, y3, y1],
        opacity: [0.1, 0.4, 0.7, 0.4, 0.1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      style={{ color: color }}
      className="absolute pointer-events-none select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-[left,top]"
    >
      <div className="text-[24px] md:text-[40px]">
        <Icon size="1em" stroke={1.5} />
      </div>
    </motion.div>
  );
};

export const FloatingIcons = ({ count = 20 }) => {
  const generatedIcons = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const iconData = brandIcons[i % brandIcons.length];
      return {
        id: i,
        Icon: iconData.Icon,
        color: iconData.color,
        delay: Math.random() * 5,
        duration: 25 + Math.random() * 20,
        x1: Math.random() * 100 + "%",
        y1: Math.random() * 100 + "%",
        x2: Math.random() * 100 + "%",
        y2: Math.random() * 100 + "%",
        x3: Math.random() * 100 + "%",
        y3: Math.random() * 100 + "%",
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {generatedIcons.map((item) => (
        <FloatingIcon key={item.id} {...item} />
      ))}
    </div>
  );
};

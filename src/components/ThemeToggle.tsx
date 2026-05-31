"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Palette } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('gray');
    else if (theme === 'gray') setTheme('light');
    else setTheme('dark');
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2.5 rounded-xl premium-blur hover:bg-accent/10 hover:border-accent/20 transition-all group overflow-hidden"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" && (
          <motion.div
            key="dark"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-4 h-4 text-foreground group-hover:text-accent transition-colors" />
          </motion.div>
        )}
        {theme === "gray" && (
          <motion.div
            key="gray"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Palette className="w-4 h-4 text-foreground group-hover:text-accent transition-colors" />
          </motion.div>
        )}
        {theme === "light" && (
          <motion.div
            key="light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-4 h-4 text-foreground group-hover:text-accent transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform" />
    </button>
  );
}
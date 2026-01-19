import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

export const EncryptedText = ({
  text,
  className,
  interval = 50,
}) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let timer;
    let iteration = 0;

    const animate = () => {
      setOutputText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(timer);
      }

      iteration += 1 / 3;
    };

    timer = setInterval(animate, interval);

    return () => clearInterval(timer);
  }, [text, interval, isMounted]);

  return (
    <motion.div className={cn("font-mono", className)}>
      {outputText}
    </motion.div>
  );
};

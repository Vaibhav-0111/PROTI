import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScrambledTextProps {
  text: string;
  className?: string;
  scrambleDuration?: number;
  delay?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export const ScrambledText = ({ 
  text, 
  className = "", 
  scrambleDuration = 2000,
  delay = 0 
}: ScrambledTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    const startAnimation = () => {
      setIsScrambling(true);

      let iteration = 0;
      const totalIterations = Math.floor(scrambleDuration / 50); // 50ms per frame

      const interval = setInterval(() => {
        if (iteration < totalIterations) {
          setDisplayText(prev =>
            text.split('').map((char, i) => {
              if (i < (iteration / totalIterations) * text.length) {
                return char; // lock in correct chars gradually
              }
              return chars[Math.floor(Math.random() * chars.length)];
            }).join('')
          );
          iteration++;
        } else {
          clearInterval(interval);
          setDisplayText(text);   // ✅ Ensure final text is shown
          setIsScrambling(false);
        }
      }, 50);
    };

    const timeout = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, scrambleDuration, delay]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
};

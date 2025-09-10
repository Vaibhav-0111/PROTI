import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({ 
  children, 
  strength = 0.4, 
  className,
  onClick
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 5 }}
      className={cn(
        "relative overflow-hidden group",
        className
      )}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          background: [
            "linear-gradient(45deg, hsl(var(--primary))/20%, hsl(var(--accent))/20%, hsl(var(--primary))/20%)",
            "linear-gradient(225deg, hsl(var(--accent))/20%, hsl(var(--primary))/20%, hsl(var(--accent))/20%)",
            "linear-gradient(45deg, hsl(var(--primary))/20%, hsl(var(--accent))/20%, hsl(var(--primary))/20%)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: "radial-gradient(circle at center, hsl(var(--primary))/30% 0%, transparent 70%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};
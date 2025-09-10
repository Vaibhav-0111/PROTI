import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// import * as anime from 'animejs';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  trigger?: boolean;
  type?: 'fade' | 'slide' | 'typewriter' | 'glitch';
}

export const TextReveal = ({ 
  children, 
  className, 
  delay = 0, 
  trigger = true,
  type = 'fade' 
}: TextRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trigger || !textRef.current) return;

    const text = textRef.current;
    const letters = text.textContent?.split('') || [];
    
    text.innerHTML = letters
      .map((letter, i) => 
        letter === ' ' 
          ? '&nbsp;' 
          : `<span class="inline-block" style="transform: translateY(100px); opacity: 0;">${letter}</span>`
      )
      .join('');

    const spans = text.querySelectorAll('span');

    // Simple CSS animations for now
    spans.forEach((span, i) => {
      const element = span as HTMLElement;
      element.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`;
      element.style.transitionDelay = `${delay + (i * 40)}ms`;
      
      setTimeout(() => {
        element.style.transform = 'translateY(0px)';
        element.style.opacity = '1';
      }, 100);
    });
  }, [trigger, delay, type]);

  return (
    <motion.div
      ref={textRef}
      className={cn("inline-block", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: trigger ? 1 : 0 }}
    >
      {children}
    </motion.div>
  );
};
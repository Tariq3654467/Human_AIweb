'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  const variants = {
    up: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction].initial}
      animate={isInView ? variants[direction].animate : variants[direction].initial}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


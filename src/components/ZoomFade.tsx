'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ZoomFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  zoom?: boolean;
}

export default function ZoomFade({ children, delay = 0, className = '', zoom = true }: ZoomFadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        scale: zoom ? 0.9 : 1,
        y: 20 
      }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1,
        y: 0 
      } : { 
        opacity: 0, 
        scale: zoom ? 0.9 : 1,
        y: 20 
      }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode[];
  delay?: number;
  className?: string;
}

export function StaggerChildren({ children, delay = 0.1, className = '' }: StaggerChildrenProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ZoomFade key={index} delay={delay * index}>
          {child}
        </ZoomFade>
      ))}
    </div>
  );
}


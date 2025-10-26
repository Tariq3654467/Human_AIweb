'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingTextProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  className?: string;
}

export default function FloatingText({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 3,
  className = '' 
}: FloatingTextProps) {
  const variants = {
    up: {
      y: [0, -10, 0],
    },
    down: {
      y: [0, 10, 0],
    },
    left: {
      x: [0, -10, 0],
    },
    right: {
      x: [0, 10, 0],
    },
  };

  return (
    <motion.span
      className={className}
      animate={variants[direction]}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.span>
  );
}

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function StaggeredText({ text, className = '', delay = 0 }: StaggeredTextProps) {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.05,
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`text-gradient-animated ${className}`}>
      {children}
    </span>
  );
}

interface ShimmerTextProps {
  children: ReactNode;
  className?: string;
}

export function ShimmerText({ children, className = '' }: ShimmerTextProps) {
  return (
    <span className={`shimmer-text ${className}`}>
      {children}
    </span>
  );
}


'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxText({ children, speed = 0.5, className = '' }: ParallaxTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${100 * speed}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ['blur(10px)', 'blur(0px)', 'blur(10px)']);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, filter: blur }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface OversizedTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function OversizedText({ text, className = '', speed = 0.3 }: OversizedTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${100 * speed}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity }}
      className={`text-[200px] md:text-[300px] lg:text-[400px] font-bold text-chinese-silver/10 pointer-events-none select-none ${className}`}
    >
      {text}
    </motion.div>
  );
}


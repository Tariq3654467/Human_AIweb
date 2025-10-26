'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

interface SectionProgressProps {
  currentSection: number;
  totalSections: number;
}

export default function SectionProgress({ currentSection, totalSections }: SectionProgressProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 flex flex-col items-center gap-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {/* Progress Counter */}
      <motion.div
        className="flex items-center gap-1 text-off-white text-sm font-mono"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-lime-green">{currentSection}</span>
        <span className="text-chinese-silver">/</span>
        <span className="text-chinese-silver">{totalSections}</span>
      </motion.div>

      {/* Progress Line */}
      <div className="h-24 w-0.5 bg-charcoal-grey relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-lime-green"
          style={{
            height: `${(currentSection / totalSections) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Section Dots */}
      {Array.from({ length: totalSections }).map((_, index) => (
        <motion.div
          key={index}
          className={`w-2 h-2 rounded-full ${
            index < currentSection ? 'bg-lime-green' : 'bg-charcoal-grey'
          }`}
          animate={{
            scale: index === currentSection - 1 ? [1, 1.5, 1] : 1,
          }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </motion.div>
  );
}


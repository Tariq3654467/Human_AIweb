'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  const handleScroll = () => {
    const problemSection = document.querySelector('.bg-off-white');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white z-20 cursor-pointer group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      onClick={handleScroll}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-sm font-medium tracking-wider group-hover:text-lime-green transition-colors">Scroll to Explore</span>
      <motion.div
        className="flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="text-white group-hover:text-lime-green transition-colors"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </motion.div>
  );
}


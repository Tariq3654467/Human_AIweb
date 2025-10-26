'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-50" />
      
      {/* Mesh gradient effect */}
      <div className="absolute inset-0 mesh-background" />
      
      {/* Particle effects */}
      <div className="absolute inset-0 particle-background" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="floating-shape w-96 h-96 rounded-full bg-lime-green blur-3xl"
        style={{
          top: '10%',
          left: '10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="floating-shape w-96 h-96 rounded-full bg-celtic-blue blur-3xl"
        style={{
          bottom: '10%',
          right: '10%',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="floating-shape w-64 h-64 rounded-full bg-jelly-bean blur-3xl"
        style={{
          top: '50%',
          right: '20%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(143, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(143, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}


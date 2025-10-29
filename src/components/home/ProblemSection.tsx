'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParallaxText from '@/components/ParallaxText';
import ZoomFade from '@/components/ZoomFade';

export default function ProblemSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  
  return (
    <section ref={ref} className="bg-white py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34, 36, 40, 0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Flex container for text and image side by side */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content - Left Side */}
          <div className="flex-1 lg:max-w-2xl">
            <ZoomFade>
              <ParallaxText speed={0.2}>
                <motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-bg-black mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
            The Problem: Marketing&apos;s{' '}
            <motion.span 
              className="text-celtic-blue inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Economic Deadlock
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-charcoal-grey leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            BCG research confirms what CMOs know: sustaining marketing returns is nearly impossible. 
            Content demands have exploded{' '}
            <motion.span 
              className="font-bold text-jelly-bean inline-block"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              10x
            </motion.span>
            , but budgets haven&apos;t. Marketing teams are stretched thin, 
            brand consistency suffers, and C-suite demands ROI while complexity grows.{' '}
            <motion.span 
              className="font-semibold text-celtic-blue inline-block"
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              There&apos;s a better way.
            </motion.span>
          </motion.p>
                </motion.div>
              </ParallaxText>
            </ZoomFade>
          </div>
          
          {/* Image Content - Right Side */}
          <motion.div 
            className="flex-1 lg:max-w-lg w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ y: imageY }}
          >
            <motion.div 
              className="relative rounded-lg overflow-hidden group"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              whileHover={{ 
                scale: 1.05
              }}
            >
              {/* Animated shadow container */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(143, 255, 0, 0.3)',
                }}
              />
              
              {/* Image with border glow */}
              <motion.img 
                src="/image.png" 
                alt="Marketing Economic Deadlock" 
                className="w-full h-auto object-cover relative z-10 rounded-lg"
                whileHover={{ 
                  scale: 1.02
                }}
              />
              
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-lime-green/10 to-celtic-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



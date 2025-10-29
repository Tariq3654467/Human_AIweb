'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlobeBackground from '@/components/GlobeBackground';
import { ShimmerText } from '@/components/FloatingText';
import ZoomFade from '@/components/ZoomFade';

export default function SolutionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  return (
    <section ref={ref} className="bg-white py-20 relative overflow-hidden">
      {/* Background Image - AI transformation/neural networks representing command */}
      <motion.div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
        }}
      />
      
      {/* Light overlay for white design */}
      <div className="absolute inset-0 bg-white/70" />
      
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <GlobeBackground />
      </div>
      
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="mesh-background" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ZoomFade>
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Solution: From{' '}
            <motion.span 
              className="text-jelly-bean inline-block"
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Chaos
            </motion.span>{' '}
            to{' '}
            <motion.span 
              className="text-lime-green inline-block"
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3
              }}
            >
              Command
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-secondary leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Brand OS isn&apos;t another tool promising 10-20% gains. It&apos;s the{' '}
            <ShimmerText className="text-lime-green font-semibold">&apos;Reshape&apos; platform</ShimmerText>{' '}
            BCG identifies—delivering{' '}
            <motion.span 
              className="text-lime-green font-semibold inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              50%+ improvements
            </motion.span>{' '}
            by re-engineering your entire brand function.
          </motion.p>
          <motion.p 
            className="text-lg text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We unite human creativity with AI precision to create your{' '}
            <motion.span 
              className="text-celtic-blue font-semibold inline-block"
              animate={{ 
                rotate: [0, 2, -2, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              &apos;Ground Truth&apos;
            </motion.span>
            —a single intelligence source powering always-on-brand content generation, continuous competitive monitoring, 
            and real-time performance insights.
          </motion.p>
        </motion.div>
        </ZoomFade>
      </div>
    </section>
  );
}



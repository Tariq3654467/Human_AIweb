'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlobeBackground from '@/components/GlobeBackground';

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  return (
    <section ref={ref} id="contact" className="bg-white py-20 relative overflow-hidden">
      {/* Background Image - modern energetic workspace */}
      <motion.div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
        }}
      />
      
      {/* Light overlay for white design */}
      <div className="absolute inset-0 bg-white/70" />
      
      {/* Globe Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <GlobeBackground />
      </div>
      
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="mesh-background" />
      </div>
      
      {/* Floating accent orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-lime-green blur-3xl opacity-20"
        style={{ top: '10%', left: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-celtic-blue blur-3xl opacity-20"
        style={{ bottom: '10%', right: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Transform Your Brand?
          </motion.h2>
          <motion.p 
            className="text-xl text-secondary mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Start your journey from chaos to command with a complimentary Brand Health Audit.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="mailto:contact@humanbrand.ai"
              whileHover={{ opacity: 0.9, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-black text-white rounded-sm transition-all font-semibold text-lg"
            >
              Get Started
            </motion.a>
            <motion.a
              href="mailto:contact@humanbrand.ai"
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-border text-primary rounded-sm transition-all font-semibold text-lg"
            >
              Schedule a Call
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



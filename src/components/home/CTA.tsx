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
    <section ref={ref} id="contact" className="dark-section py-20 relative overflow-hidden">
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
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />
      
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
            className="text-4xl md:text-5xl font-bold text-off-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Transform Your Brand?
          </motion.h2>
          <motion.p 
            className="text-xl text-chinese-silver mb-12 leading-relaxed"
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
              whileHover={{ 
                scale: 1.1, 
                y: -4,
                boxShadow: '0 20px 40px rgba(143, 255, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(143, 255, 0, 0.3)',
                  '0 0 40px rgba(143, 255, 0, 0.6)',
                  '0 0 20px rgba(143, 255, 0, 0.3)',
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="px-8 py-4 bg-lime-green text-bg-black rounded-md hover:bg-opacity-90 transition-all font-semibold text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="mailto:contact@humanbrand.ai"
              whileHover={{ 
                scale: 1.1, 
                y: -4,
                backgroundColor: '#3175D4',
                color: 'white',
                borderColor: '#3175D4'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-celtic-blue text-celtic-blue rounded-md transition-all font-semibold text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Schedule a Call</span>
              <motion.div
                className="absolute inset-0 bg-celtic-blue"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



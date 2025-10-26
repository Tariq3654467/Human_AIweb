'use client';

import { motion } from 'framer-motion';
import ScrollIndicator from '@/components/ScrollIndicator';
import { StaggeredText, GradientText } from '@/components/FloatingText';

export default function Hero() {
  return (
    <section className="dark-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="block">
              <StaggeredText 
                text="AI-Powered Brand OS" 
                className="text-white inline-block"
                delay={0.3}
              />
            </div>
            <motion.div 
              className="block mt-2 sm:mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <GradientText className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold inline-block">
                Data-Driven Command
              </GradientText>
            </motion.div>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform marketing chaos into operational command through the alchemy of human creativity and AI precision.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-white transition-all font-medium text-base sm:text-lg hover:text-lime-green w-full sm:w-auto text-center"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 border border-white text-white rounded-sm transition-all font-medium text-base sm:text-lg relative overflow-hidden group w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Contact Us</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
              <motion.span
                className="absolute inset-0 text-black flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Contact Us
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}



'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ScrollIndicator from '@/components/ScrollIndicator';
import { StaggeredText, GradientText } from '@/components/FloatingText';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle video errors
    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setVideoError(true);
    };

    // Ensure video is loaded and ready
    const handleLoadedData = () => {
      setIsVideoReady(true);
      // Try to play after loaded
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Video play prevented:', err);
        });
      }
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    // Try to play the video immediately
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoReady(true);
        })
        .catch((err) => {
          console.warn('Auto-play prevented:', err);
        });
    }

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section className="dots-background min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background Video - preserved */}
      <div className="absolute inset-0 w-full h-full z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover absolute inset-0"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isVideoReady ? 1 : 0.3,
              transition: 'opacity 0.8s ease-in'
            }}
            onError={(e) => {
              console.error('Video failed to load:', e);
              setVideoError(true);
            }}
            onLoadedData={() => {
              setIsVideoReady(true);
            }}
            onLoadedMetadata={() => {
              setIsVideoReady(true);
            }}
            onCanPlay={() => {
              setIsVideoReady(true);
            }}
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 absolute inset-0" />
        )}
        {/* Light overlay for white design */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 sm:mb-12 leading-[1.1] tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="block mb-4">
              <StaggeredText 
                text="AI-Powered Brand OS" 
                className="text-primary inline-block"
                delay={0.3}
              />
            </div>
            <motion.div 
              className="block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-primary inline-block">
                Data-Driven Command
              </span>
            </motion.div>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-secondary mb-12 sm:mb-16 leading-relaxed max-w-4xl font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform marketing chaos into operational command through the alchemy of human creativity and AI precision.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                opacity: 0.9,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-black text-white transition-all font-medium text-lg hover:opacity-90 inline-block"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                opacity: 0.8,
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-border text-primary transition-opacity font-medium text-lg inline-block hover:border-black"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}



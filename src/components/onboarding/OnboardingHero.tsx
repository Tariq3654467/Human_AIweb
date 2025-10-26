'use client';

import { motion } from 'framer-motion';

export default function OnboardingHero() {
  return (
    <section className="dark-section py-20 relative overflow-hidden">
      {/* Background Image - transformation journey */}
      <div 
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/65" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
            Brand OS <span className="text-lime-green">Onboarding</span>
          </h1>
          <p className="text-xl text-chinese-silver leading-relaxed">
            Your Four-Phase Journey from Chaos to Command
          </p>
        </motion.div>
      </div>
    </section>
  );
}


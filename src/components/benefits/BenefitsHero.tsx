'use client';

import { motion } from 'framer-motion';

export default function BenefitsHero() {
  return (
    <section className="dark-section py-20 relative overflow-hidden">
      {/* Background Image - data analytics visualization */}
      <div 
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80)',
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
            Who Benefits <span className="text-lime-green">Most</span>
          </h1>
          <p className="text-xl text-chinese-silver leading-relaxed">
            Built for Leaders Winning in the Era of Human-AI Collaboration
          </p>
        </motion.div>
      </div>
    </section>
  );
}


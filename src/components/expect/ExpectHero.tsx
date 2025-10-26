'use client';

import { motion } from 'framer-motion';

export default function ExpectHero() {
  return (
    <section className="dark-section py-20 relative overflow-hidden">
      {/* Background Image - planning and strategy */}
      <div 
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80)',
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
            What to <span className="text-lime-green">Expect</span>
          </h1>
          <p className="text-xl text-chinese-silver leading-relaxed">
            Transparent Partnership for Real Transformation
          </p>
          <p className="text-lg text-chinese-silver mt-6 leading-relaxed">
            Brand OS requires deep collaboration—the alchemy of your brand expertise and our AI infrastructure. 
            We communicate with unflinching honesty, sharing everything without jargon or hidden agendas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


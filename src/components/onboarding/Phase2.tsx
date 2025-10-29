'use client';

import { motion } from 'framer-motion';

export default function Phase2() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-lime-green rounded-full flex items-center justify-center text-bg-black font-bold text-xl">
              2
            </div>
            <h2 className="text-4xl font-bold text-primary">
              Phase 2: Content Studio Activation <span className="text-secondary">(Weeks 4-6)</span>
            </h2>
          </div>
          
          <p className="text-lg text-secondary mb-6 leading-relaxed">
            We integrate your Ground Truth into the Content Studio, leveraging human creativity with AI efficiency:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="font-semibold text-primary mb-2">Content Templates</h3>
              <p className="text-secondary">Templates for all key social platforms</p>
            </div>
            
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="font-semibold text-primary mb-2">Campaign Mode</h3>
              <p className="text-secondary">Create all written content at one time</p>
            </div>
            
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="font-semibold text-primary mb-2">Session History</h3>
              <p className="text-secondary">Backlog of all project &apos;sessions&apos;</p>
            </div>
          </div>
          
          <div className="bg-bg-light border border-border text-primary p-6 rounded-lg">
            <p className="font-semibold mb-2">Result:</p>
            <p className="text-secondary">
              Limitless on-brand content—10x faster production while maintaining strategic alignment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


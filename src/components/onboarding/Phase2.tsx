'use client';

import { motion } from 'framer-motion';

export default function Phase2() {
  return (
    <section className="dark-section py-20">
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
            <h2 className="text-4xl font-bold text-off-white">
              Phase 2: Content Studio Activation <span className="text-celtic-blue">(Weeks 4-6)</span>
            </h2>
          </div>
          
          <p className="text-lg text-chinese-silver mb-6 leading-relaxed">
            We integrate your Ground Truth into the Content Studio, leveraging human creativity with AI efficiency:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-charcoal-grey p-6 rounded-lg border-l-4 border-lime-green">
              <h3 className="font-semibold text-off-white mb-2">Content Templates</h3>
              <p className="text-chinese-silver">Templates for all key social platforms</p>
            </div>
            
            <div className="bg-charcoal-grey p-6 rounded-lg border-l-4 border-celtic-blue">
              <h3 className="font-semibold text-off-white mb-2">Campaign Mode</h3>
              <p className="text-chinese-silver">Create all written content at one time</p>
            </div>
            
            <div className="bg-charcoal-grey p-6 rounded-lg border-l-4 border-jelly-bean">
              <h3 className="font-semibold text-off-white mb-2">Session History</h3>
              <p className="text-chinese-silver">Backlog of all project &apos;sessions&apos;</p>
            </div>
          </div>
          
          <div className="bg-white text-bg-black p-6 rounded-lg">
            <p className="font-semibold mb-2">Result:</p>
            <p className="text-charcoal-grey">
              Limitless on-brand content—10x faster production while maintaining strategic alignment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';

export default function Vision() {
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
          <h2 className="text-4xl font-bold text-off-white mb-6">Our Vision</h2>
          <div className="bg-charcoal-grey p-8 rounded-lg border-l-4 border-celtic-blue">
            <p className="text-lg text-chinese-silver leading-relaxed">
              To be the trusted Brand OS powering enterprise brands as living, evolving systems. Where brand leaders have 
              operational command. Where the alchemy of human creativity and AI precision creates brands that are both 
              deeply authentic and endlessly scalable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


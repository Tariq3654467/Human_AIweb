'use client';

import { motion } from 'framer-motion';

export default function Approach() {
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
          <h2 className="text-4xl font-bold text-off-white mb-6">Our Approach</h2>
          <div className="bg-charcoal-grey p-8 rounded-lg border-l-4 border-lime-green">
            <p className="text-lg text-chinese-silver leading-relaxed">
              The alchemy of human creativity + AI precision creates what neither can achieve alone: brands that are both 
              deeply authentic and endlessly scalable. This is BCG's <span className="text-lime-green font-semibold">'Reshape' transformation</span>—50%+ 
              improvement by re-engineering how brand management works.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';

export default function VP() {
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
          <div className="bg-charcoal-grey p-8 rounded-lg border-l-4 border-celtic-blue">
            <h2 className="text-3xl font-bold text-off-white mb-4">
              VPs Drowning in Content Demands
            </h2>
            <p className="text-lg text-chinese-silver leading-relaxed">
              Channels exploded, budgets didn&apos;t. Brand OS collapses content costs through human creativity + AI precision, 
              generating weeks of on-brand content in hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


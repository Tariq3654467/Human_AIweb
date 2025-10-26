'use client';

import { motion } from 'framer-motion';

export default function Strategic() {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="bg-white p-8 rounded-lg border-l-4 border-celtic-blue shadow-lg">
            <h2 className="text-3xl font-bold text-bg-black mb-4">
              Strategic Thinkers Stuck in Tactical Work
            </h2>
            <p className="text-lg text-charcoal-grey leading-relaxed">
              You're hired for strategy but buried in execution. Brand OS automates tactical work so you focus on what matters: 
              strategic thinking, not executing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


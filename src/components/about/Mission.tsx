'use client';

import { motion } from 'framer-motion';

export default function Mission() {
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
          <h2 className="text-4xl font-bold text-bg-black mb-6">Our Mission</h2>
          <div className="bg-white p-8 rounded-lg border-l-4 border-lime-green shadow-lg">
            <p className="text-lg text-charcoal-grey leading-relaxed">
              To empower brand leaders with in-house control by providing infrastructure that transforms static guidelines 
              into a dynamic, living system—moving from periodic reviews to real-time visibility and operational command.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


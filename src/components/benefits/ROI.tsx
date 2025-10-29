'use client';

import { motion } from 'framer-motion';

export default function ROI() {
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
          <div className="bg-bg-light p-8 rounded-lg border-l-4 border-border">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Leaders Pressured to Prove ROI
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              C-suite demands data. The Dashboard moves you from periodic reviews to real-time visibility, proving how 
              interventions move metrics. BCG shows <span className="text-lime-green font-semibold">3-6x marketing contribution improvement</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


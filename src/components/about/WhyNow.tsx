'use client';

import { motion } from 'framer-motion';

export default function WhyNow() {
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
          <h2 className="text-4xl font-bold text-bg-black mb-8">Why Now</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-lime-green shadow-md">
              <h3 className="text-2xl font-semibold text-bg-black mb-3">The In-Housing Movement</h3>
              <p className="text-charcoal-grey">
                Brand leader goals: 90% in-housing strategy, 92% bringing analytics in-house—but infrastructure is missing
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-celtic-blue shadow-md">
              <h3 className="text-2xl font-semibold text-bg-black mb-3">GenAI Transformation</h3>
              <p className="text-charcoal-grey">
                AI can scale production, but only through human creativity + AI precision alchemy
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-jelly-bean shadow-md">
              <h3 className="text-2xl font-semibold text-bg-black mb-3">ROI Demands</h3>
              <p className="text-charcoal-grey">
                C-suite wants data. Brand OS makes brand performance quantifiable and optimizable
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


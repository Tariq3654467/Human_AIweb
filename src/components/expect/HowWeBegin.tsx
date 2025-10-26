'use client';

import { motion } from 'framer-motion';

export default function HowWeBegin() {
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
          <h2 className="text-4xl font-bold text-bg-black mb-8">How We Begin</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-lime-green shadow-md">
              <h3 className="text-2xl font-semibold text-bg-black mb-3">Strategy Call</h3>
              <p className="text-charcoal-grey">
                45-minute conversation to assess fit, understand challenges, explore in-housing goals
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-celtic-blue shadow-md">
              <h3 className="text-2xl font-semibold text-bg-black mb-3">Brand Health Audit (Optional)</h3>
              <p className="text-charcoal-grey">
                Complimentary, limited audit revealing your Emergent Brand—demonstrating our methodology before full commitment
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-jelly-bean shadow-md">
              <h3 className="text-2xl font-semibold text-bg-black mb-3">Implementation Plan</h3>
              <p className="text-charcoal-grey">
                Customized proposal with scope, timeline, investment, ROI projections, success metrics
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


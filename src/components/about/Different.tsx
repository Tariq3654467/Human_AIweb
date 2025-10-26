'use client';

import { motion } from 'framer-motion';

export default function Different() {
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
          <h2 className="text-4xl font-bold text-bg-black mb-8">What Makes Us Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-lime-green shadow-md">
              <h3 className="text-xl font-semibold text-bg-black mb-3">Platform + Partnership</h3>
              <p className="text-charcoal-grey">Deep collaboration, not software you figure out alone</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-celtic-blue shadow-md">
              <h3 className="text-xl font-semibold text-bg-black mb-3">Methodology-First</h3>
              <p className="text-charcoal-grey">Proprietary frameworks ensure AI serves your brand</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-jelly-bean shadow-md">
              <h3 className="text-xl font-semibold text-bg-black mb-3">Outcome-Obsessed</h3>
              <p className="text-charcoal-grey">Brand clarity, limitless content, continuous evolution</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-lime-green shadow-md">
              <h3 className="text-xl font-semibold text-bg-black mb-3">Built for In-Housing</h3>
              <p className="text-charcoal-grey">Infrastructure empowering leaders taking brand control</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


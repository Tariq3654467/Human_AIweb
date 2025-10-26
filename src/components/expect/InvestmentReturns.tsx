'use client';

import { motion } from 'framer-motion';

export default function InvestmentReturns() {
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
          <h2 className="text-4xl font-bold text-off-white mb-8">Investment & Returns</h2>
          
          <div className="bg-charcoal-grey p-8 rounded-lg border-l-4 border-lime-green">
            <p className="text-lg text-chinese-silver mb-6 leading-relaxed">
              Platform + partnership model with implementation fee and ongoing subscription.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bg-black p-6 rounded">
                <h3 className="text-xl font-semibold text-lime-green mb-3">BCG Research Shows:</h3>
                <ul className="text-chinese-silver space-y-2">
                  <li>• 40-60% agency spend reduction</li>
                  <li>• 10x content production</li>
                  <li>• 50%+ efficiency improvement</li>
                  <li>• Measurable ROI gains</li>
                </ul>
              </div>
              
              <div className="bg-bg-black p-6 rounded">
                <h3 className="text-xl font-semibold text-lime-green mb-3">Timeline:</h3>
                <p className="text-chinese-silver">
                  Most clients see ROI within <span className="text-lime-green font-semibold">6-12 months</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


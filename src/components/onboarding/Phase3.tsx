'use client';

import { motion } from 'framer-motion';

export default function Phase3() {
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
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-lime-green rounded-full flex items-center justify-center text-bg-black font-bold text-xl">
              3
            </div>
            <h2 className="text-4xl font-bold text-bg-black">
              Phase 3: Dashboard Activation <span className="text-celtic-blue">(Weeks 7-8)</span>
            </h2>
          </div>
          
          <p className="text-lg text-charcoal-grey mb-6 leading-relaxed">
            We activate your command center—moving from the Outside-In Audit Baseline to real-time visibility:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-celtic-blue">
              <h3 className="font-semibold text-bg-black mb-2">Unified Data Integration</h3>
              <p className="text-charcoal-grey">Across all social platforms</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-lime-green">
              <h3 className="font-semibold text-bg-black mb-2">KPIs & Metrics</h3>
              <p className="text-charcoal-grey">Configuration tailored to your goals</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-jelly-bean">
              <h3 className="font-semibold text-bg-black mb-2">Customized Views</h3>
              <p className="text-charcoal-grey">Stakeholder-specific dashboards</p>
            </div>
          </div>
          
          <div className="bg-bg-light border border-border text-primary p-6 rounded-lg">
            <p className="font-semibold mb-2">Result:</p>
            <p className="text-secondary">
              Data-driven command with quantifiable metrics, competitive positioning, and trend analysis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


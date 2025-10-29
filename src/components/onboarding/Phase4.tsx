'use client';

import { motion } from 'framer-motion';

export default function Phase4() {
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
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-lime-green rounded-full flex items-center justify-center text-bg-black font-bold text-xl">
              4
            </div>
            <h2 className="text-4xl font-bold text-primary">
              Phase 4: Continuous Evolution <span className="text-secondary">(Ongoing)</span>
            </h2>
          </div>
          
          <p className="text-lg text-secondary mb-6 leading-relaxed">
            Your brand becomes a living system that never stops learning:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="font-semibold text-primary mb-2">Audience Engagement Monitoring</h3>
              <p className="text-secondary">Ongoing monitoring of audience engagement with generated content</p>
            </div>
            
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="font-semibold text-primary mb-2">Competitive Intelligence</h3>
              <p className="text-secondary">Ongoing monitoring and alerts for the competitive landscape</p>
            </div>
            
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="font-semibold text-primary mb-2">Strategic Reviews</h3>
              <p className="text-secondary">Quarterly strategic reviews and Ground Truth refinement</p>
            </div>
            
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="font-semibold text-primary mb-2">Platform Optimization</h3>
              <p className="text-secondary">Ongoing platform optimization and feature enhancements</p>
            </div>
          </div>
          
          <div className="bg-bg-light border border-border text-primary p-6 rounded-lg mb-8">
            <p className="font-semibold mb-2">Result:</p>
            <p className="text-secondary">
              Continuous brand evolution—always learning, always adapting, always ahead.
            </p>
          </div>
          
          <div className="bg-bg-light border border-border text-primary p-6 rounded-lg">
            <p className="font-semibold text-lg mb-2">Timeline:</p>
            <p>
              Full operational capability in <span className="font-bold">8-10 weeks</span>, with measurable improvements within the first month.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


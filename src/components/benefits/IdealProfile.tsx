'use client';

import { motion } from 'framer-motion';

export default function IdealProfile() {
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
          <h2 className="text-4xl font-bold text-off-white mb-8">Ideal Profile</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-charcoal-grey p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lime-green mb-4">Industries</h3>
              <p className="text-chinese-silver">B2B tech, professional services, healthcare, financial services</p>
            </div>
            
            <div className="bg-charcoal-grey p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lime-green mb-4">Company Size</h3>
              <p className="text-chinese-silver">Growth-stage to Fortune 500</p>
            </div>
            
            <div className="bg-charcoal-grey p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lime-green mb-4">Team Size</h3>
              <p className="text-chinese-silver">5-50+ marketing team</p>
            </div>
            
            <div className="bg-charcoal-grey p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lime-green mb-4">Channels</h3>
              <p className="text-chinese-silver">5+ channels</p>
            </div>
            
            <div className="bg-charcoal-grey p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lime-green mb-4">Budget</h3>
              <p className="text-chinese-silver">$1M-$50M budget</p>
            </div>
            
            <div className="bg-charcoal-grey p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lime-green mb-4">Culture</h3>
              <p className="text-chinese-silver">In-housing mindset, data-driven culture, AI-ready</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


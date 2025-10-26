'use client';

import { motion } from 'framer-motion';

export default function AfterGoLive() {
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
          <h2 className="text-4xl font-bold text-bg-black mb-8">After Go-Live</h2>
          
          <div className="bg-white p-8 rounded-lg border-l-4 border-lime-green shadow-lg">
            <p className="text-lg text-charcoal-grey mb-6 leading-relaxed">
              Quarterly strategic reviews, platform optimization, proactive insights, technical support, and continuous feature enhancements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-off-white p-4 rounded">
                <h4 className="font-semibold text-bg-black mb-2">We Track:</h4>
                <ul className="text-charcoal-grey space-y-1">
                  <li>• Content velocity</li>
                  <li>• Brand consistency</li>
                  <li>• Time savings</li>
                  <li>• Agency spend reduction</li>
                  <li>• ROI improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


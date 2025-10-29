'use client';

import { motion } from 'framer-motion';

export default function Phase1() {
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
              1
            </div>
            <h2 className="text-4xl font-bold text-bg-black">
              Phase 1: Establish Ground Truth <span className="text-celtic-blue">(Weeks 1-3)</span>
            </h2>
          </div>
          
          <p className="text-lg text-charcoal-grey mb-6 leading-relaxed">
            We bring order through our dual-lens discovery:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-celtic-blue">
              <h3 className="font-semibold text-bg-black mb-2">Outside-In Brand Perception Audit</h3>
              <p className="text-charcoal-grey">AI agents analyze your complete digital footprint to uncover your &apos;Emergent Brand&apos;</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-jelly-bean">
              <h3 className="font-semibold text-bg-black mb-2">Competitive Audit</h3>
              <p className="text-charcoal-grey">Same audit on 3-5 competitors, revealing opportunities and white space</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-lime-green">
              <h3 className="font-semibold text-bg-black mb-2">Inside-Out Strategic Audit</h3>
              <p className="text-charcoal-grey">Brand OS maps and aligns your complete brand architecture</p>
            </div>
          </div>
          
          <div className="bg-bg-light border border-border text-primary p-6 rounded-lg">
            <p className="font-semibold mb-2">Result:</p>
            <p className="text-secondary">
              A clarified Ground Truth for your brand, providing operational command, a competitive landscape baseline, 
              and the guardrails for all future content creation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


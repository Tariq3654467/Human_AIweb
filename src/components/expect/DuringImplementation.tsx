'use client';

import { motion } from 'framer-motion';

export default function DuringImplementation() {
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
          <h2 className="text-4xl font-bold text-primary mb-8">During Implementation</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="text-2xl font-semibold text-primary mb-3">Dedicated Team</h3>
              <p className="text-secondary">
                Lead Strategist, Brand Analyst, Platform Engineer, Success Manager
              </p>
            </div>
            
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="text-2xl font-semibold text-primary mb-3">Structured Cadence</h3>
              <p className="text-secondary">
                Deep-dive workshops, weekly sessions, bi-weekly check-ins, quarterly reviews
              </p>
            </div>
            
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="text-2xl font-semibold text-primary mb-3">Radical Transparency</h3>
              <p className="text-secondary">
                Shared workspace, real-time progress visibility, open discussion of challenges
              </p>
            </div>
            
            <div className="bg-bg-light p-6 rounded-lg border-l-4 border-border">
              <h3 className="text-2xl font-semibold text-primary mb-3">Time Investment</h3>
              <p className="text-secondary">
                CMO 2-3 hrs/week, Managers 5-8 hrs/week, Content team 3-5 hrs/week during Phases 1-3
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


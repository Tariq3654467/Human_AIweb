'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="dark-section border-t border-charcoal-grey relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="particle-background" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-off-white mb-4">Humanbrand AI</h3>
            <p className="text-chinese-silver mb-4">
              Empowering brand leaders with in-house control through AI-powered infrastructure.
            </p>
            <p className="text-chinese-silver text-sm">
              © 2024 Humanbrand AI. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-off-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/onboarding" className="text-chinese-silver hover:text-lime-green transition-colors">Onboarding</Link></li>
              <li><Link href="/benefits" className="text-chinese-silver hover:text-lime-green transition-colors">Who Benefits</Link></li>
              <li><Link href="/expect" className="text-chinese-silver hover:text-lime-green transition-colors">What to Expect</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-off-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-chinese-silver hover:text-lime-green transition-colors">About Us</Link></li>
              <li><a href="#contact" className="text-chinese-silver hover:text-lime-green transition-colors">Contact</a></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}



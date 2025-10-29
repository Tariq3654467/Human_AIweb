'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Humanbrand AI</h3>
            <p className="text-sm sm:text-base text-secondary mb-4 leading-relaxed">
              Empowering brand leaders with in-house control through AI-powered infrastructure.
            </p>
            <p className="text-xs sm:text-sm text-tertiary">
              © 2024 Humanbrand AI. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-primary font-medium mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/onboarding" className="text-secondary hover:text-primary transition-colors text-sm">Onboarding</Link></li>
              <li><Link href="/benefits" className="text-secondary hover:text-primary transition-colors text-sm">Who Benefits</Link></li>
              <li><Link href="/expect" className="text-secondary hover:text-primary transition-colors text-sm">What to Expect</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-primary font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-secondary hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><a href="#contact" className="text-secondary hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}



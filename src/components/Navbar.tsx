'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);



  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/onboarding', label: 'Onboarding' },
    { href: '/benefits', label: 'Who Benefits' },
    { href: '/expect', label: 'What to Expect' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 w-full z-[100] border-b border-lime-green/30"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white hover:text-lime-green transition-colors">
            <span className="flex items-center gap-2">
              <span className="text-lime-green">✨</span>
              Humanbrand AI
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-white hover:text-lime-green transition-all duration-300 relative group px-3 py-2"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-green group-hover:w-full transition-all duration-300" />
                <span className="absolute inset-0 bg-lime-green/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" />
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-white/30 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 space-y-3 overflow-hidden"
            >
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="block text-white hover:text-lime-green transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="#contact" 
                className="block px-4 py-2 bg-lime-green text-bg-black rounded-md hover:bg-opacity-90 transition-colors font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

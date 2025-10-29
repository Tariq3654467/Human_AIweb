'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/onboarding', label: 'Onboarding' },
    { href: '/benefits', label: 'Who Benefits' },
    { href: '/expect', label: 'What to Expect' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      {/* Top Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[110] bg-white border-b border-border text-black text-sm py-2 px-4 flex items-center justify-between">
          <span className="flex-1 text-center">Read CEO&apos;s Letter to Shareholders</span>
          <button
            onClick={() => setShowBanner(false)}
            className="ml-4 hover:opacity-70 transition-opacity"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <nav 
        className={`fixed left-0 right-0 w-full z-[100] ${showBanner ? 'top-9' : 'top-0'}`}
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="text-base sm:text-lg font-medium text-black">Humanbrand AI</span>
            </Link>
            
            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              {/* Get Started Button */}
              <Link 
                href="#contact" 
                className="px-5 py-2 bg-black text-white font-medium text-sm hover:bg-gray-800 transition-colors duration-200 rounded-sm"
              >
                Get Started
              </Link>
              
              {/* Search Icon Button */}
              <button
                className="hidden md:flex items-center justify-center w-9 h-9 border border-border text-black hover:bg-bg-light transition-colors duration-200 rounded-sm"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Divider */}
              <div className="hidden md:block w-px h-6 bg-border mx-1" />

              {/* Menu Icon Button */}
              <div className="relative">
                <button
                  className="flex items-center justify-center w-9 h-9 border border-border text-black hover:bg-bg-light transition-colors duration-200 rounded-sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Navigation menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <>
                      {/* Backdrop */}
                      <div 
                        className="fixed inset-0 z-[99]" 
                        onClick={() => setIsMenuOpen(false)}
                      />
                      {/* Menu */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-sm shadow-lg z-[100] overflow-hidden"
                      >
                        {navItems.map((item) => (
                          <Link 
                            key={item.href}
                            href={item.href} 
                            className="block px-4 py-3 text-secondary hover:text-primary hover:bg-bg-light transition-colors text-sm uppercase tracking-wide"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

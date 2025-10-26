'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ZoomFade from '@/components/ZoomFade';

const clients = [
  {
    name: 'Fortune 500 CMO',
    company: 'Technology Sector',
    quote: 'Brand OS transformed our entire marketing operation.',
    avatar: '👤',
  },
  {
    name: 'Marketing Director',
    company: 'Global Enterprise',
    quote: '50% efficiency gains in the first quarter.',
    avatar: '👤',
  },
  {
    name: 'VP of Brand Strategy',
    company: 'Consumer Goods',
    quote: 'Finally, brand consistency at scale.',
    avatar: '👤',
  },
  {
    name: 'Chief Marketing Officer',
    company: 'SaaS Platform',
    quote: 'The AI precision we needed.',
    avatar: '👤',
  },
  {
    name: 'Executive VP',
    company: 'B2B Enterprise',
    quote: 'Radical transformation of our brand operations.',
    avatar: '👤',
  },
  {
    name: 'Digital Marketing Lead',
    company: 'Healthcare Tech',
    quote: 'Unprecedented efficiency and brand alignment.',
    avatar: '👤',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  
  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];
  
  return (
    <section ref={ref} className="dark-section py-20 relative overflow-hidden">
      {/* Background Image - professional business environment */}
      <motion.div 
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-10">
        <div className="mesh-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ZoomFade>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Trusted by Leading Brands
          </h2>
        </ZoomFade>

        {/* Auto-scrolling Testimonials Carousel */}
        <div className="mt-12 overflow-hidden relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
          
          <motion.div 
            ref={containerRef}
            className="flex gap-6"
            animate={{
              x: ['0%', `-${(100 / duplicatedClients.length) * clients.length}%`],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[350px]"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-lime-green/30 rounded-lg p-6 h-full shadow-lg hover:border-lime-green/60 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-lime-green/30 rounded-full flex items-center justify-center text-2xl border-2 border-lime-green/50">
                      {client.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{client.name}</h4>
                      <p className="text-chinese-silver text-sm">{client.company}</p>
                    </div>
                  </div>
                  <p className="text-white italic">"{client.quote}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ZoomFade from '@/components/ZoomFade';

const features = [
  {
    title: 'From Chaos to Command',
    icon: '🎯',
    description: 'Our Brand Perception Audit reveals your "Emergent Brand"—how you\'re perceived versus how you intend to be perceived. Combined with our Brand Action Model, we establish your "Ground Truth"—the single source giving you operational command and ensuring all generated content is on-brand by default.',
    color: 'lime-green',
  },
  {
    title: 'The Alchemy of Art + Science',
    icon: '⚗️',
    description: 'We synthesize human creativity with AI precision. Continuous monitoring of your ecosystem and competitors builds an evolving intelligence layer, keeping your Ground Truth current and strategy sharp.',
    color: 'celtic-blue',
  },
  {
    title: 'Perpetual Evolution, Instant Results',
    icon: '📊',
    description: 'The Dashboard delivers real-time brand performance visibility with trend lines proving impact. Instant clarity today, perpetual evolution through adaptive intelligence tomorrow.',
    color: 'jelly-bean',
  },
  {
    title: 'Deploy vs. Reshape',
    icon: '📈',
    description: 'Deploy tools offer 10-20% gains. Brand OS delivers the Reshape transformation: 50%+ radical improvement. BCG shows this can yield 3-6x improvement in marketing contribution through reduced agency spend, FTE efficiency, and improved ROI.',
    color: 'lime-green',
  },
  {
    title: 'Built for the In-Housing Era',
    icon: '🏢',
    description: '90% of enterprises are in-housing brand strategy, 92% bringing analytics in-house (BCG). But in-housing without infrastructure creates bottlenecks. Brand OS is the smart business layer transforming static guidelines into dynamic, evolving systems—making in-housing successful.',
    color: 'celtic-blue',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  return (
    <section ref={ref} className="bg-off-white py-20 relative overflow-hidden">
      {/* Background image - process flow and transformation */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
        }}
      />
      
      {/* Subtle overlay to maintain readability */}
      <div className="absolute inset-0 bg-white/75" />
      
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34, 36, 40, 0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ZoomFade>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-bg-black mb-4"
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            How It Works: Transformation Through Intelligence
          </motion.h2>
        </motion.div>
        </ZoomFade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-8 rounded-lg border border-chinese-silver hover:border-lime-green transition-all duration-300 shadow-sm hover:shadow-2xl relative overflow-hidden group cursor-pointer"
            >
              {/* Animated gradient background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br from-${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, 360],
                  transition: { duration: 0.5 }
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-bg-black mb-4 relative z-10"
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2
                }}
                whileHover={{ 
                  scale: 1.05,
                  color: '#8FFF00',
                  transition: { duration: 0.2 }
                }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-charcoal-grey leading-relaxed relative z-10"
                whileHover={{ color: '#333333' }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-celtic-blue text-white rounded-md hover:bg-opacity-90 transition-colors font-semibold text-lg"
          >
            Schedule Your Brand Audit
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}



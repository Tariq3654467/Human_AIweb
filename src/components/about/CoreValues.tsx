'use client';

import { motion } from 'framer-motion';

export default function CoreValues() {
  const values = [
    {
      title: 'Bold Experimentation',
      icon: '🚀',
      description: 'Fearless testing to unlock breakthrough possibilities',
      color: 'lime-green'
    },
    {
      title: 'Empowered Governance',
      icon: '🎯',
      description: 'True control and alignment for core business function',
      color: 'celtic-blue'
    },
    {
      title: 'Relentless Evolution',
      icon: '⚡',
      description: 'Never stop learning, adapting, advancing',
      color: 'jelly-bean'
    },
    {
      title: 'Transparent Partnership',
      icon: '🤝',
      description: 'Unflinching honesty, sharing everything without jargon',
      color: 'lime-green'
    }
  ];

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
          <h2 className="text-4xl font-bold text-primary mb-12">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => {
              const borderColors = {
                'lime-green': 'border-border',
                'celtic-blue': 'border-border',
                'jelly-bean': 'border-border'
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-bg-light p-6 rounded-lg border-l-4 ${borderColors[value.color as keyof typeof borderColors]}`}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-secondary">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
          
          <div className="bg-bg-light border border-border text-primary p-8 rounded-lg">
            <p className="text-lg font-semibold leading-relaxed">
              We partner with visionary leaders who see brands as living, operational capabilities and are ready to win 
              in the era of human-AI collaboration.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-celtic-blue text-white rounded-md hover:bg-opacity-90 transition-colors font-semibold text-lg"
            >
              Start Your Brand Transformation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


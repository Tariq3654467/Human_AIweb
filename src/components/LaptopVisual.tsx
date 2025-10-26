'use client';

import { motion } from 'framer-motion';

export default function LaptopVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {/* Laptop Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
          
          {/* Laptop Base */}
          <motion.div
            className="absolute inset-0 mx-auto my-auto"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Laptop Screen */}
            <div className="relative w-[800px] h-[500px] mx-auto" style={{ perspective: '1000px' }}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl"
                animate={{ 
                  rotateX: [0, 5, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Screen Content */}
                <div className="absolute inset-4 bg-black rounded overflow-hidden">
                  {/* UI Interface Lines */}
                  <div className="absolute inset-0 p-8">
                    {/* Top Bar */}
                    <div className="h-12 bg-gray-800 rounded mb-4 opacity-50"></div>
                    
                    {/* Panel Lines */}
                    <div className="grid grid-cols-3 gap-4 h-full">
                      <div className="bg-gray-800 rounded opacity-30"></div>
                      <div className="bg-gray-800 rounded opacity-30"></div>
                      <div className="bg-gray-800 rounded opacity-30"></div>
                    </div>
                  </div>
                  
                  {/* Glowing Data Points */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-lime-green rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                  
                  {/* Grid Overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(143, 255, 0, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(143, 255, 0, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }}
                  />
                </div>
                
                {/* Screen Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-lime-green/20 via-transparent to-transparent blur-2xl opacity-50"></div>
              </motion.div>
              
              {/* Laptop Keyboard Base */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[900px] h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-xl"
                animate={{ 
                  rotateX: [0, -2, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {/* Keyboard Keys Effect */}
                <div className="grid grid-cols-10 gap-1 p-2 h-full">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div 
                      key={i}
                      className="bg-gray-800 rounded-sm opacity-50"
                      style={{ height: '20px' }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Floating Particles Around Laptop */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-celtic-blue rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Additional Glow Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-lime-green/10 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}


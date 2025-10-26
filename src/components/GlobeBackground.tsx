'use client';

import { motion } from 'framer-motion';

export default function GlobeBackground() {
  // Strategically placed data points mimicking real-world locations
  const dataPoints = [
    { id: 0, x: 28, y: 45, name: 'NY', delay: 0, color: '#3175D4' },
    { id: 1, x: 52, y: 48, name: 'EU', delay: 0.5, color: '#8FFF00' },
    { id: 2, x: 82, y: 52, name: 'AS', delay: 1, color: '#DA6E44' },
    { id: 3, x: 88, y: 82, name: 'AU', delay: 1.5, color: '#8FFF00' },
    { id: 4, x: 32, y: 75, name: 'SA', delay: 2, color: '#3175D4' },
    { id: 5, x: 55, y: 68, name: 'AF', delay: 2.5, color: '#DA6E44' },
    { id: 6, x: 75, y: 38, name: 'RU', delay: 3, color: '#3175D4' },
    { id: 7, x: 48, y: 35, name: 'UK', delay: 0.3, color: '#8FFF00' },
    { id: 8, x: 35, y: 38, name: 'CA', delay: 0.8, color: '#3175D4' },
    { id: 9, x: 68, y: 58, name: 'IN', delay: 1.2, color: '#DA6E44' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Stylized Globe/World Map */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          className="opacity-30"
        >
          {/* World Map Outline - Simplified continents */}
          <g>
            {/* North America */}
            <path
              d="M200 100 Q250 80 300 100 T400 150 Q380 200 350 250 Q320 300 280 280 Q240 260 200 240 Q180 200 180 150 Z"
              fill="rgba(49, 117, 212, 0.15)"
              stroke="rgba(49, 117, 212, 0.3)"
              strokeWidth="1"
            />
            
            {/* South America */}
            <path
              d="M250 280 Q300 280 320 320 Q330 380 280 400 Q230 380 240 320 Z"
              fill="rgba(49, 117, 212, 0.15)"
              stroke="rgba(49, 117, 212, 0.3)"
              strokeWidth="1"
            />
            
            {/* Europe */}
            <path
              d="M500 100 Q550 90 580 120 Q600 150 580 180 Q550 160 520 140 Z"
              fill="rgba(143, 255, 0, 0.15)"
              stroke="rgba(143, 255, 0, 0.3)"
              strokeWidth="1"
            />
            
            {/* Africa */}
            <path
              d="M550 200 Q600 200 630 240 Q650 300 620 360 Q580 340 560 280 Q540 240 540 220 Z"
              fill="rgba(218, 110, 68, 0.15)"
              stroke="rgba(218, 110, 68, 0.3)"
              strokeWidth="1"
            />
            
            {/* Asia */}
            <path
              d="M700 80 Q800 70 900 90 Q950 150 1000 200 Q980 250 920 280 Q850 260 780 220 Q720 180 710 120 Z"
              fill="rgba(49, 117, 212, 0.15)"
              stroke="rgba(49, 117, 212, 0.3)"
              strokeWidth="1"
            />
            
            {/* Australia */}
            <path
              d="M850 400 Q900 390 920 420 Q930 440 910 450 Q880 430 860 420 Z"
              fill="rgba(143, 255, 0, 0.15)"
              stroke="rgba(143, 255, 0, 0.3)"
              strokeWidth="1"
            />
          </g>

          {/* Glowing Data Points */}
          {dataPoints.map((point) => (
            <g key={point.id}>
              {/* Outer glow */}
              <circle
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r="35"
                fill={point.color}
                opacity="0.2"
                className="animate-pulse"
                style={{ animationDelay: `${point.delay}s` }}
              />
              {/* Middle glow */}
              <circle
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r="20"
                fill={point.color}
                opacity="0.4"
                className="animate-pulse"
                style={{ animationDelay: `${point.delay}s` }}
              />
              {/* Main point */}
              <circle
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r="10"
                fill={point.color}
                className="animate-pulse"
                style={{ animationDelay: `${point.delay}s` }}
              />
              {/* Inner bright core */}
              <circle
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r="4"
                fill="#8FFF00"
                className="animate-pulse"
                style={{ animationDelay: `${point.delay}s` }}
              />
            </g>
          ))}

          {/* Network Connection Lines */}
          {[
            [0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [1, 7], [0, 8], [2, 9], [1, 5], [3, 9]
          ].map(([startIdx, endIdx], index) => {
            const start = dataPoints[startIdx];
            const end = dataPoints[endIdx];
            if (!start || !end) return null;
            
            return (
              <line
                key={`line-${index}`}
                x1={`${start.x}%`}
                y1={`${start.y}%`}
                x2={`${end.x}%`}
                y2={`${end.y}%`}
                stroke={start.color}
                strokeWidth="1.5"
                strokeDasharray="8,8"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: `${start.delay}s` }}
              />
            );
          })}
        </svg>
      </div>

      {/* Additional Floating Glowing Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-celtic-blue to-lime-green blur-3xl opacity-10"
        style={{ top: '20%', left: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-jelly-bean to-celtic-blue blur-3xl opacity-10"
        style={{ bottom: '20%', right: '15%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(49, 117, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(49, 117, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}


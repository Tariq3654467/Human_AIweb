'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CarouselItem {
  id: number;
  content: React.ReactNode;
}

interface HorizontalCarouselProps {
  items: CarouselItem[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function HorizontalCarousel({ 
  items, 
  speed = 20, 
  direction = 'left',
  className = '' 
}: HorizontalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [items.length, speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === 'left' ? -currentIndex * 100 + '%' : currentIndex * 100 + '%',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {items.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-full">
            {item.content}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

interface InfiniteScrollCarouselProps {
  children: React.ReactNode[];
  speed?: number;
  className?: string;
}

export function InfiniteScrollCarousel({ children, speed = 50, className = '' }: InfiniteScrollCarouselProps) {
  const duplicatedChildren = [...children, ...children];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}


"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
};

export const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
}: AnimatedSectionProps) => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.1 });

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
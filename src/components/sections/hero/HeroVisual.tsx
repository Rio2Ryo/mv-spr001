"use client";

import { motion } from 'framer-motion';
import ProductVisual from '../ProductVisual';

export const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative h-[500px] lg:h-[600px] xl:h-[700px]"
    >
      {/* 背景の装飾要素 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* グロー効果 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-radial from-[var(--accent-gold)] to-transparent opacity-10 blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-radial from-[var(--deep-green)] to-transparent opacity-10 blur-3xl animate-pulse animation-delay-2000" />
        </div>

        {/* パーティクル */}
        <Particle delay={0} className="top-1/4 left-1/4" />
        <Particle delay={1} className="bottom-1/4 right-1/4" size="sm" />
        <Particle delay={2} className="top-1/3 right-1/3" size="xs" />
        <Particle delay={3} className="bottom-1/3 left-1/3" />
      </div>

      {/* 製品ビジュアル */}
      <ProductVisual />
    </motion.div>
  );
};

// パーティクルコンポーネント
interface ParticleProps {
  delay?: number;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
}

const Particle = ({ delay = 0, className = '', size = 'md' }: ParticleProps) => {
  const sizes = {
    xs: 'w-2 h-2',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
  };

  return (
    <motion.div
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute ${sizes[size]} bg-gradient-to-br from-[var(--accent-gold)] to-[var(--muted-gold)] rounded-full blur-sm ${className}`}
    />
  );
};
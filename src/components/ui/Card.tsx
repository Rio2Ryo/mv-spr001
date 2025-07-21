"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'glass';
  hover?: boolean;
  onClick?: () => void;
}

const variants = {
  default: 'bg-white',
  bordered: 'bg-white border-2 border-[var(--pale-gray)]',
  elevated: 'bg-white shadow-xl',
  glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
};

export const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  onClick,
}: CardProps) => {
  const baseClasses = `
    relative rounded-2xl p-8 lg:p-10
    transition-all duration-300
    ${variants[variant]}
    ${hover ? 'hover:shadow-2xl hover:scale-[1.02]' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  if (hover || onClick) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={hover ? { y: -5 } : undefined}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
};
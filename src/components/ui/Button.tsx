"use client";

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-gradient-to-r from-[var(--accent-gold)] to-[var(--muted-gold)] text-[var(--primary-black)] hover:shadow-gold',
  secondary: 'bg-[var(--primary-black)] text-white hover:bg-[var(--charcoal)]',
  outline: 'border border-current bg-transparent hover:bg-white/10',
  ghost: 'bg-transparent hover:bg-white/5',
};

const sizes = {
  sm: 'px-6 py-3 text-sm',
  md: 'px-8 py-4 text-sm',
  lg: 'px-10 py-5 text-base',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  loading = false,
  icon,
  className = '',
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) => {
  const baseClasses = `
    relative inline-flex items-center justify-center
    font-normal tracking-widest uppercase
    transition-all duration-300 transform
    hover:scale-105 active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden group
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const content = (
    <>
      <span className={`relative z-10 flex items-center gap-3 ${loading ? 'opacity-0' : ''}`}>
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </span>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--muted-gold)] to-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseClasses}
      disabled={loading || disabled}
      onClick={onClick}
      type={type}
    >
      {content}
    </motion.button>
  );
};
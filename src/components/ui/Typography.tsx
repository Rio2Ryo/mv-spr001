import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const Display = ({ children, className = '' }: TypographyProps) => (
  <h1 className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.1] ${className}`}>
    {children}
  </h1>
);

export const Heading = ({ children, className = '' }: TypographyProps) => (
  <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal ${className}`}>
    {children}
  </h2>
);

export const Subheading = ({ children, className = '' }: TypographyProps) => (
  <h3 className={`font-japanese text-lg sm:text-xl md:text-2xl font-medium ${className}`}>
    {children}
  </h3>
);

export const Lead = ({ children, className = '' }: TypographyProps) => (
  <p className={`font-japanese text-xl sm:text-2xl md:text-3xl font-light ${className}`}>
    {children}
  </p>
);

export const Body = ({ children, className = '' }: TypographyProps) => (
  <p className={`font-japanese text-base md:text-lg leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Caption = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-sm font-light ${className}`}>
    {children}
  </p>
);

export const Badge = ({ children, className = '' }: TypographyProps) => (
  <span className={`text-sm font-light tracking-[0.3em] uppercase ${className}`}>
    {children}
  </span>
);
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'dark' | 'light' | 'gradient' | 'pattern';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const variants = {
  default: 'bg-white',
  dark: 'bg-[var(--primary-black)] text-white',
  light: 'bg-[var(--off-white)]',
  gradient: 'bg-gradient-to-br from-white via-[var(--off-white)] to-white',
  pattern: 'bg-white bg-noise',
};

const paddings = {
  sm: 'py-12 sm:py-14 md:py-16',
  md: 'py-16 sm:py-20 md:py-24',
  lg: 'py-20 sm:py-24 md:py-28 lg:py-32',
  xl: 'py-24 sm:py-28 md:py-32 lg:py-40',
};

export const Section = ({
  children,
  className = '',
  id,
  variant = 'default',
  padding = 'lg',
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`
        relative overflow-hidden
        ${variants[variant]}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </section>
  );
};
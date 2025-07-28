import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

export const Container = ({
  children,
  className = '',
  size = 'xl',
}: ContainerProps) => {
  return (
    <div className={`w-full mx-auto px-4 sm:px-6 md:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};
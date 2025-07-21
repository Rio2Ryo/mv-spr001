import { useEffect, useState } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
}

export const useScrollEffect = (threshold: number = 100) => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isScrolled: currentScrollY > threshold,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
};
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#usage', label: 'Usage' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#cta', label: 'Purchase' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-[var(--pale-gray)]'
          : 'bg-[var(--primary-black)]/20 backdrop-blur-xl border-b border-white/10'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          <Link
            href="/"
            className={`font-display text-lg sm:text-xl font-medium tracking-wider transition-colors ${
              isScrolled ? 'text-[var(--primary-black)] hover:text-accent-gold' : 'text-white hover:text-accent-gold'
            }`}
          >
            Mother Vegetable
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-normal tracking-wider uppercase transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent-gold)] after:transition-all hover:after:w-full ${
                    isScrolled ? 'text-[var(--soft-black)] hover:text-accent-gold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-full h-0.5 transition-all ${
                isScrolled ? 'bg-[var(--primary-black)]' : 'bg-white'
              } ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 transition-all ${
                isScrolled ? 'bg-[var(--primary-black)]' : 'bg-white'
              } ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 transition-all ${
                isScrolled ? 'bg-[var(--primary-black)]' : 'bg-white'
              } ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <ul className="py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-normal tracking-wider uppercase transition-colors ${
                    isScrolled ? 'text-[var(--soft-black)] hover:text-accent-gold' : 'text-white hover:text-accent-gold'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </motion.header>
  );
};

export default Header;
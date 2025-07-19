"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
          ? 'bg-white/95 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="font-display text-xl font-medium tracking-wider text-[var(--primary-black)] hover:text-accent-gold transition-colors"
          >
            Mother Vegetable
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-normal tracking-wider uppercase text-[var(--soft-black)] hover:text-accent-gold transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent-gold)] after:transition-all hover:after:w-full"
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
              className={`block w-full h-0.5 bg-[var(--primary-black)] transition-all ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-[var(--primary-black)] transition-all ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-[var(--primary-black)] transition-all ${
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
                  className="block text-sm font-normal tracking-wider uppercase text-[var(--soft-black)] hover:text-accent-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
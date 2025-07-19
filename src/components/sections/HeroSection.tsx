"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[var(--pure-white)] to-[var(--off-white)]">
      <HeroBackground />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm font-light tracking-[0.3em] uppercase text-[var(--warm-gray)] mb-6"
          >
            The Perfect Nutrition Solution
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.2] text-[var(--primary-black)] mb-8"
          >
            いつもの食事に、
            <br />
            完璧な栄養を。
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-japanese text-2xl md:text-3xl font-light text-[var(--soft-black)] mb-8"
          >
            1日小さじ1杯で、健康的な食生活が完成
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-japanese text-lg font-light text-[var(--warm-gray)] leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            カレー、スープ、スムージー。
            <br />
            どんな料理にも溶け込む、味を邪魔しない栄養補助食品。
            <br />
            高価な健康食品を買い揃える必要は、もうありません。
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#cta"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-normal tracking-widest uppercase bg-[var(--primary-black)] text-white hover:bg-[var(--accent-gold)] transition-all duration-300 transform hover:scale-105"
            >
              今すぐ購入
            </Link>
            <Link
              href="#solution"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-normal tracking-widest uppercase border border-[var(--primary-black)] text-[var(--primary-black)] hover:bg-[var(--primary-black)] hover:text-white transition-all duration-300"
            >
              詳しく見る
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
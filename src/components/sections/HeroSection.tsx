"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroBackground from './HeroBackground';
import ProductVisual from './ProductVisual';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[var(--primary-black)] via-[var(--charcoal)] to-[var(--primary-black)]">
      {/* 高級感のあるグラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-black)]/50 to-[var(--primary-black)] opacity-50" />
      
      <HeroBackground />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* テキストコンテンツ */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 高級ブランドバッジ */}
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-gold)]" />
                <p className="text-sm font-light tracking-[0.3em] uppercase text-[var(--accent-gold)]">
                  The Perfect Nutrition Solution
                </p>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-gold)]" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.1] text-white mb-8"
            >
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                いつもの食事に、
              </span>
              <span className="block bg-gradient-to-r from-[var(--accent-gold)] to-[var(--muted-gold)] bg-clip-text text-transparent">
                完璧な栄養を。
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 mb-10"
            >
              <p className="font-japanese text-2xl md:text-3xl font-light text-white/90">
                1日小さじ1杯で、健康的な食生活が完成
              </p>
              
              <p className="font-japanese text-lg font-light text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                カレー、スープ、スムージー。
                どんな料理にも溶け込む、味を邪魔しない栄養補助食品。
                高価な健康食品を買い揃える必要は、もうありません。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#cta"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-normal tracking-widest uppercase bg-gradient-to-r from-[var(--accent-gold)] to-[var(--muted-gold)] text-[var(--primary-black)] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--accent-gold)]/25 transform hover:scale-105"
              >
                <span className="relative z-10">今すぐ購入</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--muted-gold)] to-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#solution"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-normal tracking-widest uppercase border border-white/30 text-white backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/60"
              >
                <span className="relative z-10">詳しく見る</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* トラストシグナル */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-white/50 text-sm"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-japanese">100%天然由来</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-japanese">添加物不使用</span>
              </div>
            </motion.div>
          </div>

          {/* 製品ビジュアル */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <ProductVisual />
          </motion.div>
        </div>
      </div>

      {/* 下部の装飾ライン */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
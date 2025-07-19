"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="cta" className="py-24 lg:py-32 bg-gradient-to-br from-[var(--primary-black)] to-[var(--charcoal)] text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-radial-gradient from-[var(--accent-gold)] to-transparent opacity-5"
          style={{
            background: 'radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            今日から始める、新しい健康習慣
          </h2>
          <p className="font-japanese text-xl lg:text-2xl text-muted-gold mb-12 font-light">
            初回限定 特別価格でお試しください
          </p>

          <div className="mb-12">
            <p className="text-xl lg:text-2xl text-[var(--mid-gray)] line-through mb-4">
              通常価格 ¥6,980
            </p>
            <div className="font-number text-6xl lg:text-7xl font-bold mb-4 flex items-baseline justify-center">
              <span className="text-3xl lg:text-4xl align-super">¥</span>
              4,980
            </div>
            <p className="text-base lg:text-lg text-[var(--light-gray)]">
              約1ヶ月分（100g入り）
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-normal tracking-widest uppercase bg-white text-[var(--primary-black)] hover:bg-[var(--accent-gold)] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              今すぐ購入する
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-normal tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[var(--primary-black)] transition-all duration-300"
            >
              定期購入で更に20% OFF
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--light-gray)]">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              30日間返金保証
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              送料無料
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              定期縛りなし
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
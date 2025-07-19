"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const usageItems = [
  {
    number: '01',
    title: '朝のスムージーに',
    description: 'フルーツスムージーやプロテインシェイクに小さじ1杯。タンパク質とビタミンで、エネルギッシュな1日をスタート。',
  },
  {
    number: '02',
    title: 'お味噌汁やスープに',
    description: '温かい汁物に混ぜても栄養素は損なわれません。毎日の味噌汁が、完全栄養食に早変わり。',
  },
  {
    number: '03',
    title: 'カレーやシチューに',
    description: '味の濃い料理には特におすすめ。家族全員の栄養バランスを、ひと振りで整えます。',
  },
];

const UsageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="usage" className="py-24 lg:py-32 bg-gradient-to-br from-[var(--deep-green)] to-[var(--soft-green)] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
            毎日の食事が、スーパーフードに
          </h2>
          <p className="font-japanese text-lg opacity-80">
            使い方は簡単。いつもの料理に混ぜるだけ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {usageItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 lg:p-10 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="font-number text-5xl lg:text-6xl font-bold text-muted-gold mb-6 group-hover:scale-110 transition-transform">
                {item.number}
              </div>
              <h3 className="font-japanese text-xl lg:text-2xl font-medium mb-4">
                {item.title}
              </h3>
              <p className="font-japanese text-sm lg:text-base opacity-90 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageSection;
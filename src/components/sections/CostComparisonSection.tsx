"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Display, Lead } from '@/components/ui/Typography';

const CostComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section className="bg-[var(--off-white)]" padding="lg">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Display className="text-[var(--primary-black)] mb-4">
            もう、高価な健康食品は不要
          </Display>
          <Lead className="text-[var(--warm-gray)]">
            Mother Vegetable 1つで、複数の健康食品の栄養価をカバー
          </Lead>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[var(--warm-gray)] mb-2">
              Before
            </p>
            <div className="font-number text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--primary-black)] mb-4 flex items-baseline justify-center">
              ¥15,800
              <span className="text-lg sm:text-xl lg:text-2xl font-normal ml-2">/月</span>
            </div>
            <div className="font-japanese text-xs sm:text-sm lg:text-base text-[var(--warm-gray)] leading-relaxed text-left">
              オーガニック野菜セット<br />
              プロテインパウダー<br />
              マルチビタミン<br />
              鉄分サプリ<br />
              オメガ3サプリ
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-accent-gold text-center md:rotate-0 rotate-90 my-6 sm:my-8 md:my-0"
          >
            VS
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-white to-[var(--off-white)] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl shadow-[var(--accent-gold)]/20 text-center border-2 border-[var(--accent-gold)] relative overflow-hidden group hover:scale-105 transition-all duration-300"
          >
            <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[var(--warm-gray)] mb-2">
              After
            </p>
            <div className="font-number text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-gold mb-4 flex items-baseline justify-center">
              ¥4,980
              <span className="text-lg sm:text-xl lg:text-2xl font-normal ml-2">/月</span>
            </div>
            <div className="font-japanese text-xs sm:text-sm lg:text-base text-[var(--warm-gray)] leading-relaxed text-left">
              Mother Vegetable<br />
              1日小さじ1杯<br />
              <br />
              すべての栄養素を<br />
              これ1つでカバー
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default CostComparisonSection;
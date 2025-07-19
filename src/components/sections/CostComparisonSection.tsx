"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CostComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 lg:py-32 bg-[var(--off-white)]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--primary-black)] mb-4">
            もう、高価な健康食品は不要
          </h2>
          <p className="font-japanese text-lg text-[var(--warm-gray)]">
            Mother Vegetable 1つで、複数の健康食品の栄養価をカバー
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 lg:p-10 rounded-lg shadow-md text-center"
          >
            <p className="text-sm font-medium tracking-wider uppercase text-[var(--warm-gray)] mb-2">
              Before
            </p>
            <div className="font-number text-5xl lg:text-6xl font-bold text-[var(--primary-black)] mb-4 flex items-baseline justify-center">
              ¥15,800
              <span className="text-xl lg:text-2xl font-normal ml-2">/月</span>
            </div>
            <div className="font-japanese text-sm lg:text-base text-[var(--warm-gray)] leading-relaxed text-left">
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
            className="font-display text-4xl lg:text-5xl text-accent-gold text-center md:rotate-0 rotate-90 my-8 md:my-0"
          >
            VS
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 lg:p-10 rounded-lg shadow-md text-center border-2 border-[var(--accent-gold)]"
          >
            <p className="text-sm font-medium tracking-wider uppercase text-[var(--warm-gray)] mb-2">
              After
            </p>
            <div className="font-number text-5xl lg:text-6xl font-bold text-accent-gold mb-4 flex items-baseline justify-center">
              ¥4,980
              <span className="text-xl lg:text-2xl font-normal ml-2">/月</span>
            </div>
            <div className="font-japanese text-sm lg:text-base text-[var(--warm-gray)] leading-relaxed text-left">
              Mother Vegetable<br />
              1日小さじ1杯<br />
              <br />
              すべての栄養素を<br />
              これ1つでカバー
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostComparisonSection;
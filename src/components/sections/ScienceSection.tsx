"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const nutritionData = [
  {
    value: '70%',
    name: 'タンパク質',
    comparison: '牛肉の3倍',
  },
  {
    value: '16x',
    name: 'β-カロテン',
    comparison: '人参の16倍',
  },
  {
    value: '50x',
    name: '鉄分',
    comparison: 'ほうれん草の50倍',
  },
  {
    value: 'B12',
    name: 'ビタミンB12',
    comparison: '植物性唯一の供給源',
  },
];

const ScienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 lg:py-32 bg-[var(--charcoal)] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4">
            驚異の栄養価
          </h2>
          <p className="font-japanese text-lg text-[var(--light-gray)]">
            一般的な食品と比較した、圧倒的な栄養密度
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {nutritionData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-number text-5xl lg:text-6xl font-bold text-accent-gold mb-4 flex items-center justify-center h-20">
                {item.value}
              </div>
              <p className="font-japanese font-medium text-lg text-white mb-2">
                {item.name}
              </p>
              <p className="font-japanese text-sm text-[var(--light-gray)]">
                {item.comparison}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
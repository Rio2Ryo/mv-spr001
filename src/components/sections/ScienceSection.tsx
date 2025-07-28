"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Display, Lead, Body, Caption } from '@/components/ui/Typography';

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
    <Section className="bg-[var(--charcoal)] text-white" variant="dark" padding="lg">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Display className="text-white mb-4">
            驚異の栄養価
          </Display>
          <Lead className="text-[var(--light-gray)]">
            一般的な食品と比較した、圧倒的な栄養密度
          </Lead>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
          {nutritionData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-number text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-gold mb-4 flex items-center justify-center h-16 sm:h-20">
                {item.value}
              </div>
              <Body className="font-medium text-white mb-2">
                {item.name}
              </Body>
              <Caption className="text-[var(--light-gray)]">
                {item.comparison}
              </Caption>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ScienceSection;
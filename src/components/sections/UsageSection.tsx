"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading, Body } from '@/components/ui/Typography';

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
    <Section id="usage" className="bg-gradient-to-br from-[var(--deep-green)] to-[var(--soft-green)] text-white" padding="lg">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Heading className="mb-4">
            毎日の食事が、スーパーフードに
          </Heading>
          <Body className="opacity-80">
            使い方は簡単。いつもの料理に混ぜるだけ
          </Body>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {usageItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="font-number text-4xl sm:text-5xl lg:text-6xl font-bold text-muted-gold mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                {item.number}
              </div>
              <h3 className="font-japanese text-lg sm:text-xl lg:text-2xl font-medium mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="font-japanese text-sm sm:text-base opacity-90 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default UsageSection;
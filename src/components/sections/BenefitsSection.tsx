"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading, Body } from '@/components/ui/Typography';

const benefitsData = [
  {
    period: '1週間',
    title: '朝の目覚めが変わる',
    description: '豊富なビタミンB群が代謝を活性化。朝からスッキリと活動できるように。',
  },
  {
    period: '1ヶ月',
    title: '肌と髪に輝きが',
    description: '抗酸化物質とタンパク質が、内側から美しさをサポート。',
  },
  {
    period: '3ヶ月',
    title: '健康診断の数値が改善',
    description: 'コレステロール値、血糖値など、各種数値の改善が期待できます。',
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section id="benefits" variant="default" padding="lg">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Heading className="text-[var(--primary-black)] mb-4">
            実感できる、確かな変化
          </Heading>
          <Body className="text-[var(--warm-gray)]">
            継続することで、体が内側から変わっていく
          </Body>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[var(--accent-gold)] to-transparent opacity-50" />

          <div className="space-y-16 lg:space-y-20">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={benefit.period}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-white border-[3px] border-[var(--accent-gold)] rounded-full" />

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:col-start-2'} pl-10 md:pl-0`}>
                  <div className="font-number text-lg sm:text-xl lg:text-2xl font-semibold text-accent-gold mb-4">
                    {benefit.period}
                  </div>
                  <h3 className="font-japanese text-lg sm:text-xl lg:text-2xl font-medium text-[var(--soft-black)] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-japanese text-sm sm:text-base text-[var(--warm-gray)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
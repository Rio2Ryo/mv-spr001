"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Display, Lead, Body, Caption } from '@/components/ui/Typography';

const testimonials = [
  {
    content: '毎朝のプロテインに混ぜて飲んでいます。以前は複数のサプリを飲んでいましたが、これ1つで済むので本当に楽。味も気にならず、続けやすいです。',
    name: '鈴木 健太 様',
    role: '35歳・トレーナー',
  },
  {
    content: '子供の栄養バランスが心配でしたが、カレーや味噌汁に混ぜると全く気づかずに食べてくれます。家族全員の健康管理が簡単になりました。',
    name: '山田 美咲 様',
    role: '42歳・主婦',
  },
  {
    content: 'コストパフォーマンスが素晴らしい。オーガニック食材を買い揃えるより断然お得で、栄養価は圧倒的に高い。もう手放せません。',
    name: '佐藤 裕子 様',
    role: '58歳・会社員',
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section className="bg-white" padding="lg">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Display className="text-[var(--primary-black)] mb-4">
            愛用者の声
          </Display>
          <Lead className="text-[var(--warm-gray)]">
            実際にご使用いただいている方々の体験談
          </Lead>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-[var(--off-white)] p-6 sm:p-8 lg:p-10 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-4 left-4 text-5xl sm:text-6xl lg:text-8xl font-display text-accent-gold opacity-20 leading-none">
                &ldquo;
              </div>

              <Body className="text-[var(--warm-gray)] leading-relaxed italic relative z-10 mb-6 sm:mb-8">
                {testimonial.content}
              </Body>

              <div>
                <Body className="font-medium text-[var(--soft-black)]">
                  {testimonial.name}
                </Body>
                <Caption className="text-[var(--mid-gray)] mt-1">
                  {testimonial.role}
                </Caption>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
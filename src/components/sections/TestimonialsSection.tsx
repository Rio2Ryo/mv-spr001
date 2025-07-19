"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--primary-black)] mb-4">
            愛用者の声
          </h2>
          <p className="font-japanese text-lg text-[var(--warm-gray)]">
            実際にご使用いただいている方々の体験談
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-[var(--off-white)] p-8 lg:p-10 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-4 left-4 text-6xl lg:text-8xl font-display text-accent-gold opacity-20 leading-none">
                &ldquo;
              </div>

              <p className="font-japanese text-sm lg:text-base text-[var(--warm-gray)] leading-relaxed italic relative z-10 mb-8">
                {testimonial.content}
              </p>

              <div>
                <p className="font-japanese text-sm font-medium text-[var(--soft-black)]">
                  {testimonial.name}
                </p>
                <p className="font-japanese text-xs text-[var(--mid-gray)] mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
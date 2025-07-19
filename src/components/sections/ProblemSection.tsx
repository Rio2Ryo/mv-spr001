"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  {
    number: '1',
    title: 'コストの問題',
    description: 'オーガニック野菜、スーパーフード、高品質なサプリメント...健康的な食材は高価で継続が困難',
  },
  {
    number: '2',
    title: '時間の問題',
    description: '栄養バランスを考えた献立作り、買い物、調理、片付け...忙しい日常では理想の食事は難しい',
  },
  {
    number: '3',
    title: '知識の問題',
    description: '何をどれだけ食べればいいのか、どの栄養素が不足しているのか、正しい情報を得るのは困難',
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="problem" className="py-24 lg:py-32 bg-[var(--off-white)]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--primary-black)] mb-4">
            健康的な食生活の、3つの壁
          </h2>
          <p className="font-japanese text-lg text-[var(--warm-gray)]">
            誰もが直面する、栄養バランスの課題
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="font-number text-7xl lg:text-8xl font-bold text-transparent mb-6 h-24 flex items-center justify-center"
                   style={{
                     WebkitTextStroke: '2px var(--pale-gray)',
                   }}>
                {problem.number}
              </div>
              <h3 className="font-japanese text-xl lg:text-2xl font-medium text-[var(--soft-black)] mb-4">
                {problem.title}
              </h3>
              <p className="font-japanese text-sm lg:text-base text-[var(--warm-gray)] leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
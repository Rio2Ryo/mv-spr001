"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="solution" className="py-24 lg:py-32 bg-[var(--pure-white)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--primary-black)] mb-8">
              すべてを解決する、
              <br />
              ひとつの答え
            </h2>
            <p className="text-xl lg:text-2xl text-accent-gold font-normal mb-6">
              小さじ1杯に、60種類以上の栄養素
            </p>
            <div className="space-y-4 text-[var(--warm-gray)] font-japanese leading-relaxed">
              <p>
                Mother Vegetableは、35億年前から存在する地球最古の生命体から抽出した、
                完全栄養補助食品です。
              </p>
              <p>
                タンパク質含有量70%、必須アミノ酸18種類、ビタミンB12、鉄分、
                β-カロテンなど、現代人に不足しがちな栄養素を完璧に補給。
              </p>
              <p>
                味はほんのり青みがかった程度で、料理の味を邪魔しません。
                いつもの食事に加えるだけで、栄養価が飛躍的に向上します。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px]"
          >
            {/* Abstract shapes representing nutrition */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[var(--accent-gold)] opacity-10" />
              <div className="absolute top-[10%] right-[20%] w-[200px] h-[200px] rounded-full bg-[var(--deep-green)] opacity-10" />
              <div className="absolute bottom-[10%] left-[10%] w-[150px] h-[150px] border-2 border-[var(--accent-gold)] opacity-20 rounded-full" />
            </div>
            
            {/* Floating animation elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] left-[30%] w-20 h-20 bg-[var(--muted-gold)] rounded-full opacity-20"
            />
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[30%] right-[20%] w-24 h-24 bg-[var(--soft-green)] rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
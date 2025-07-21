"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Display, Lead, Body, Badge } from '@/components/ui/Typography';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const HeroContent = () => {
  return (
    <div className="text-center lg:text-left">
      {/* ブランドバッジ */}
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-3">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-gold)]" />
          <Badge className="text-[var(--accent-gold)]">
            The Perfect Nutrition Solution
          </Badge>
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-gold)]" />
        </div>
      </motion.div>

      {/* メインタイトル */}
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Display className="mb-8">
          <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            いつもの食事に、
          </span>
          <span className="block bg-gradient-to-r from-[var(--accent-gold)] to-[var(--muted-gold)] bg-clip-text text-transparent">
            完璧な栄養を。
          </span>
        </Display>
      </motion.div>

      {/* サブタイトル */}
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6 mb-10"
      >
        <Lead className="text-white/90">
          1日小さじ1杯で、健康的な食生活が完成
        </Lead>
        
        <Body className="text-white/70 max-w-xl mx-auto lg:mx-0">
          カレー、スープ、スムージー。
          どんな料理にも溶け込む、味を邪魔しない栄養補助食品。
          高価な健康食品を買い揃える必要は、もうありません。
        </Body>
      </motion.div>

      {/* CTA ボタン */}
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
      >
        <Button href="#cta" variant="primary" size="lg">
          今すぐ購入
        </Button>
        <Button href="#solution" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
          詳しく見る
        </Button>
      </motion.div>

      {/* トラストシグナル */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 flex flex-wrap items-center gap-6 lg:gap-8 justify-center lg:justify-start text-white/50 text-sm"
      >
        <TrustBadge icon={<CheckIcon />} text="100%天然由来" />
        <TrustBadge icon={<CheckIcon />} text="添加物不使用" />
        <TrustBadge icon={<ShieldIcon />} text="品質保証" />
      </motion.div>
    </div>
  );
};

// トラストバッジコンポーネント
const TrustBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="font-japanese">{text}</span>
  </div>
);

// アイコンコンポーネント
const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
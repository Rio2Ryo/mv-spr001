"use client";

import { motion } from 'framer-motion';

const ProductVisual = () => {
  return (
    <div className="relative w-full h-full">
      {/* グラスモーフィズム効果のコンテナ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* 背景の光彩エフェクト */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-[var(--accent-gold)] via-transparent to-transparent opacity-20 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-gradient-radial from-[var(--deep-green)] via-transparent to-transparent opacity-15 blur-2xl animate-pulse animation-delay-2000" />
        </div>

        {/* ガラス容器 */}
        <motion.div
          animate={{ 
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="relative z-10"
        >
          <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[500px]">
            {/* ガラス瓶の本体 */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-[50px] shadow-2xl border border-white/20">
              {/* 光の反射 */}
              <div className="absolute top-10 left-10 w-20 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-xl" />
              <div className="absolute top-1/3 right-10 w-16 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-lg" />
              
              {/* 製品ラベル */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-8">
                <div className="bg-gradient-to-b from-[var(--primary-black)] to-[var(--charcoal)] p-6 rounded-2xl shadow-xl">
                  <h3 className="font-display text-2xl text-white text-center mb-2">Mother</h3>
                  <h3 className="font-display text-2xl text-[var(--accent-gold)] text-center">Vegetable</h3>
                  <div className="mt-4 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent" />
                  <p className="text-xs text-white/80 text-center mt-3 font-japanese">完全栄養補助食品</p>
                </div>
              </div>

              {/* 内容物（パウダー） */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[var(--deep-green)] to-[var(--soft-green)] opacity-80 rounded-b-[50px] overflow-hidden"
              >
                {/* パウダーのテクスチャ */}
                <div className="absolute inset-0 bg-noise opacity-20" />
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[var(--deep-green)] opacity-50" />
              </motion.div>
            </div>

            {/* 蓋 */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-gradient-to-b from-[var(--primary-black)] to-[var(--charcoal)] rounded-t-3xl shadow-xl border border-white/10">
              <div className="absolute inset-x-0 top-2 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* 周囲の装飾要素 */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 浮遊する栄養素の粒子 */}
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-[var(--accent-gold)] rounded-full opacity-60 blur-sm"
          />
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              x: [10, -10, 10],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[var(--soft-green)] rounded-full opacity-50 blur-sm"
          />
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              x: [15, -15, 15],
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-[var(--muted-gold)] rounded-full opacity-70 blur-sm"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProductVisual;
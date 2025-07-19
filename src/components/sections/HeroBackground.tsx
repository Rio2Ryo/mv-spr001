"use client";

import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 opacity-10"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#c9a961', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#1e3a2f', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3a5448', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#c9a961', stopOpacity: 0.1 }} />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>

          {/* Organic shape background */}
          <motion.path
            d="M 100 200 Q 300 100 500 200 T 900 200 Q 1000 300 900 400 T 500 400 Q 300 500 100 400 Z"
            fill="url(#gradient1)"
            filter="url(#blur)"
            opacity="0.6"
            animate={{
              d: [
                "M 100 200 Q 300 100 500 200 T 900 200 Q 1000 300 900 400 T 500 400 Q 300 500 100 400 Z",
                "M 150 250 Q 350 150 550 250 T 950 250 Q 1050 350 950 450 T 550 450 Q 350 550 150 450 Z",
                "M 100 200 Q 300 100 500 200 T 900 200 Q 1000 300 900 400 T 500 400 Q 300 500 100 400 Z",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Leaf-like shape */}
          <g transform="translate(200, 300)">
            <motion.path
              d="M 0 0 Q 50 -100 100 -50 Q 150 0 100 50 Q 50 100 0 0"
              className="fill-[var(--accent-gold)] opacity-80"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </g>

          {/* Circular particles */}
          <motion.circle
            cx="800"
            cy="200"
            r="80"
            className="fill-[var(--deep-green)] opacity-30"
            animate={{
              r: [80, 100, 80],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.circle
            cx="300"
            cy="500"
            r="60"
            className="fill-[var(--soft-green)] opacity-40"
            animate={{
              r: [60, 80, 60],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Flowing curves */}
          <motion.path
            d="M 0 600 Q 200 500 400 600 T 800 600 T 1200 600"
            stroke="#c9a961"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
            animate={{
              d: [
                "M 0 600 Q 200 500 400 600 T 800 600 T 1200 600",
                "M 0 650 Q 200 550 400 650 T 800 650 T 1200 650",
                "M 0 600 Q 200 500 400 600 T 800 600 T 1200 600",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Nutrient representation */}
          <g transform="translate(600, 400)">
            <motion.circle
              cx="0"
              cy="0"
              r="5"
              fill="#c9a961"
              opacity="0.6"
              animate={{ r: [5, 8, 5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="30"
              cy="-20"
              r="4"
              fill="#3a5448"
              opacity="0.5"
              animate={{ r: [4, 6, 4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.circle
              cx="-25"
              cy="15"
              r="6"
              fill="#1e3a2f"
              opacity="0.4"
              animate={{ r: [6, 9, 6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </g>

          {/* Spiral pattern */}
          <motion.path
            d="M 900 300 Q 950 250 1000 300 T 1100 300"
            stroke="#1e3a2f"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
            strokeLinecap="round"
            strokeDasharray="200"
            animate={{ strokeDashoffset: [0, -400] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
    </div>
  );
};

export default HeroBackground;
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': 'var(--primary-black)',
        'soft-black': 'var(--soft-black)',
        'charcoal': 'var(--charcoal)',
        'warm-gray': 'var(--warm-gray)',
        'mid-gray': 'var(--mid-gray)',
        'light-gray': 'var(--light-gray)',
        'pale-gray': 'var(--pale-gray)',
        'off-white': 'var(--off-white)',
        'pure-white': 'var(--pure-white)',
        'accent-gold': 'var(--accent-gold)',
        'muted-gold': 'var(--muted-gold)',
        'deep-green': 'var(--deep-green)',
        'soft-green': 'var(--soft-green)',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
        'japanese': ['var(--font-japanese)', 'sans-serif'],
        'number': ['var(--font-number)', 'sans-serif'],
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease forwards',
        'floatPattern': 'floatPattern 8s ease-in-out infinite',
        'pulse': 'pulse 4s ease-in-out infinite',
        'ctaPulse': 'ctaPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        floatPattern: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-52%, -48%) scale(1.05) rotate(1deg)' },
          '66%': { transform: 'translate(-48%, -52%) scale(0.95) rotate(-1deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.08' },
          '50%': { opacity: '0.15' },
        },
        ctaPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
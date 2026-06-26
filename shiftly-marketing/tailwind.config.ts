import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        electric: '#3b82f6',
        'electric-dim': '#1d4ed8',
        glow: '#60a5fa',
        navy: '#070d1b',
        midnight: '#030712',
        deep: '#050810',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'scroll-left': 'scroll-left 40s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
      boxShadow: {
        electric: '0 0 30px rgba(59,130,246,0.4)',
        'electric-lg': '0 0 60px rgba(59,130,246,0.3)',
        'electric-sm': '0 0 15px rgba(59,130,246,0.2)',
        glass: '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config

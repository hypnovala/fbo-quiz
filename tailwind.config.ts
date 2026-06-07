import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair:  ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        jost:      ['Jost', 'sans-serif'],
      },
      colors: {
        cream:      '#F5EED8',
        'cream-dk': '#EDE4C8',
        gold:       '#C9A96E',
        brown:      '#2E1F0E',
        amber:      '#6B4C2A',
        blush:      '#E8CFBA',
        warm:       '#FAF7EF',
        soft:       '#FAF6EE',
      },
      keyframes: {
        fadeSlideIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide': 'fadeSlideIn 0.32s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config

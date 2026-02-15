import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        onyx: '#0B0C0E',
        slate: '#1C1F26',
        mist: '#E8EBF0'
      },
      fontFamily: {
        sans: ['Avenir Next', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        serif: ['Iowan Old Style', 'Baskerville', 'Times New Roman', 'serif']
      },
      boxShadow: {
        glass: '0 8px 30px rgba(0,0,0,0.18)'
      },
      animation: {
        marquee: 'marquee 25s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
};

export default config;

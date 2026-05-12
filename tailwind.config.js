/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          950: '#02040a',
          900: '#060a14',
          800: '#0b1322',
          700: '#111c33',
        },
        slate925: '#0a1120',
        cyanos: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        trust: {
          400: '#34d399',
          500: '#10b981',
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 0 1px rgba(34,211,238,0.25), 0 20px 60px -20px rgba(34,211,238,0.35)',
        'panel': '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 80px -40px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'grid-faint': "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        'radial-cyan': "radial-gradient(60% 50% at 50% 0%, rgba(34,211,238,0.18) 0%, rgba(2,4,10,0) 60%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}

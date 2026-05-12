/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'ui-serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#FAF8F4',
          dark: '#F2EDE5',
        },
        ink: {
          DEFAULT: '#181818',
          soft: '#2A2722',
        },
        smoke: '#5A5550',
        dust: '#8B857E',
        sand: '#E5DFD5',
        accent: {
          DEFAULT: '#1F3A5F',
          soft: '#2E5380',
        },
      },
      letterSpacing: {
        'editorial': '-0.018em',
        'wide-caps': '0.16em',
      },
      maxWidth: {
        'prose-tight': '38rem',
        'prose-wide': '52rem',
      },
    },
  },
  plugins: [],
}

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          header: ['var(--font-rubik)', 'Rubik', 'system-ui', 'sans-serif'],
          sans: ['var(--font-golos)', 'Golos Text', 'system-ui', 'sans-serif'],
          rubik: ['var(--font-rubik)', 'Rubik', 'system-ui', 'sans-serif'],
          golos: ['var(--font-golos)', 'Golos Text', 'system-ui', 'sans-serif'],
          inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
          spacemono: ['var(--font-spacemono)', 'Space Mono', 'system-ui', 'monospace'],
        },
        colors: {
          "hydra-dark": "#191919"
        }
      },
    },
    plugins: [
      require('tailwindcss-animatecss'),
      require('daisyui')
    ],
  };
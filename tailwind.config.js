module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          "BreezeHeader": ['var(--font-rubik)', 'Rubik', 'system-ui', 'sans-serif'],
          "BreezeText": ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
          "BreezeMono": ["Space Mono"],
          "BreezeAltHeader": ["Red Hat Display"]
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
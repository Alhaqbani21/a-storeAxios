/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#b45309',

          secondary: '#78716c',

          accent: '#2800ff',

          neutral: '#170c0a',

          'base-100': '#fff8ff',

          info: '#009eff',

          success: '#5ed649',

          warning: '#f27700',

          error: '#ff92a8',
        },
      },
    ],
  },
};

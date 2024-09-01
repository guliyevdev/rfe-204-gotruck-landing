import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,scss}", // SCSS fayllarını da daxil edin
  ],
  darkMode: ['class'],
  theme: {

      container: {
          center: true,
          padding: {
              DEFAULT: '1rem',
              sm: '1rem',
              md: '1rem',
              lg: '1rem',
              xl: '3rem',
              '2xl': '13rem',
          },
      },

      fontFamily: {
          'body': ['Be Vietnam Pro', 'sans-serif'],
      },

      extend: {
          colors: {
              'primary': colors.blue[600],
          },
      },
  },
  plugins: [
    // require('@frostui/tailwindcss/plugin'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
],
};
export default config;
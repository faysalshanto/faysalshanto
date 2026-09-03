import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: '#2f5fb8',
          cyan: '#8fb4e8',
          deep: '#1b3f8f',
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(47, 95, 184, 0.14)',
        'glow-subtle': '0 0 15px rgba(143, 180, 232, 0.10)',
      },
      fontFamily: {
        sans: ['"Trebuchet MS"', '"Lucida Sans Unicode"', '"Lucida Grande"', '"Lucida Sans"', 'Arial', 'sans-serif'],
        display: ['"Trebuchet MS"', '"Lucida Sans Unicode"', '"Lucida Grande"', '"Lucida Sans"', 'Arial', 'sans-serif'],
        heading: ['"Trebuchet MS"', '"Lucida Sans Unicode"', '"Lucida Grande"', '"Lucida Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
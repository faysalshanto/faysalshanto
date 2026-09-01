import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
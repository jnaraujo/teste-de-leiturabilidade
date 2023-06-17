const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-merriweather)", ...defaultTheme.fontFamily.serif],
    },
    animation: {
      "fade-in": "fade-in 0.4s ease-in-out",
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    }
  },
  plugins: [require("@tailwindcss/typography")],
}

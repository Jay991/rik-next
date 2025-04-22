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
        blue: {
          900: "#003663", // Primary Blue
          800: "#00427A",
          700: "#004E91",
          600: "#005AA8",
          500: "#0066BF",
          400: "#1A7ED4",
          300: "#3397E8",
          200: "#66B3F3",
          100: "#99CEFF",
          50: "#E6F2FF",
        },
        orange: {
          900: "#993A02", // Darker Accent Orange
          800: "#B24402",
          700: "#CC4D02", 
          600: "#E65602",
          500: "#FF6003", // Accent Orange
          400: "#FF7A2B",
          300: "#FF9453",
          200: "#FFAE7B",
          100: "#FFC9A3",
          50: "#FFE4D1",
        },
        gray: {
          900: "#1A1A1A",
          800: "#333333",
          700: "#4D4D4D",
          600: "#666666", // Gray
          500: "#808080",
          400: "#999999",
          300: "#B3B3B3",
          200: "#CCCCCC",
          100: "#E6E6E6",
          50: "#F2F2F2",
        },
      },
      fontFamily: {
        // Body text uses Montserrat
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Headings use Inter
        heading: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
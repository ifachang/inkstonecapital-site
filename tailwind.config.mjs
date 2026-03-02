/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          dark: "#050506",
        },
        stone: {
          DEFAULT: "#1E1F23",
          light: "#2A2B30",
        },
        accent: {
          gold: "#C4A15A",
        },
      },
      fontFamily: {
        sans: ["system-ui", "SF Pro Text", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};

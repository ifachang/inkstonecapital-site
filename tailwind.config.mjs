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
          DEFAULT: "#14120F",
          dark: "#0D0C0A",
        },
        stone: {
          DEFAULT: "#25211C",
          light: "#35302A",
        },
        accent: {
          gold: "#D2A94F",
        },
      },
      fontFamily: {
        sans: ["system-ui", "SF Pro Text", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};

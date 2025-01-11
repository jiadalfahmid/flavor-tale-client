/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "dark",
      {
        light: {
          primary: "#FB923C", // Orange-400
          secondary: "#FDE047", // Yellow-300
          accent: "#F97316", // Orange-500 for accent elements
          neutral: "#F3F4F6", // Neutral light background
          "base-100": "#FFFFFF", // Card background (light)
          "base-200": "#F8FAFC", // Subtle section background
          "base-300": "#f9f9f9", // Main background (slightly lighter)
          "base-content": "#1F2937", // Dark text for high contrast
        },
      },
    ],
  },
}

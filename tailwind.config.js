/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        softBg: "#FEF3ED",
        softBg2: "#EDEDFA",
        textHead: "#010101",
        textPara: "#6B7280",
        textHead2: "#FDF2EC",
        textPara2: "#767575",
        darkBg: "#1C1C1C",
        darkBg2: "#212121",
        orange: "#FE8162"
      },
      borderRadius: {
        large: "2rem",
      },
    },
  },
  plugins: [],
};

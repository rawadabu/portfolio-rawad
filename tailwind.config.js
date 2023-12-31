/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { playpen: "Rajdhani, rajdhani" },
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        backGround: "#141416",
        textColor: "#f0f8ff",
      },
    },
  },
  plugins: [],
};

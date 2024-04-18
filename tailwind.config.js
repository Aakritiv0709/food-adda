/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkyellow: "#f4b618",
        darkred: "#93051c",
        grayish: "#3a3a3a",
      },
    },
  },
  plugins: [],
};

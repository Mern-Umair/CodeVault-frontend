/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // agar public folder me index.html hai
    "./src/**/*.{js,ts,jsx,tsx}"  // src ke sab files scan honge
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

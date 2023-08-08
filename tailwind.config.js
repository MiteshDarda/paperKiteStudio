/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/theme'
export default {
  content: [
    "./src/**/*.{ts,js,tsx,jsx}",
    "./index.html",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}


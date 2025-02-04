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
       "Frost-white": "#EFF6FF",
       "Purple":"#4b0082",
       "Bright" : "	#00F5FF",
      "Cyan":"	#BFD9FF",

      },
      fontFamily: {
        "Bebas":"Bebas Neue",
      }
    },
  },
  plugins: [],
};

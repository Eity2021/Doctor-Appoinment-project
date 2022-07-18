/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#37cdbe",
          neutral: "#647393",
          "base-100": "#ffffff",
          "info": "#fff",
          "success": "#3A4256",
        },
      },
     
    ],
  },
  plugins: [require("daisyui")],
}

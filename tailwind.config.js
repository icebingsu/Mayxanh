/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'bg-active' : "#1E73BE",
        'bg-mayxanh' : "#0A94D1",
        'bg-mayxanh-50': 'rgba(42, 131, 233, 0.5)',
      },
      colors: {
        "text-desc" : "#fff"
      },
      zIndex: {
        '99999': '99999',
        '9999': '9999',
        '999': '999',
        '99': '99',
      }
    },
  },
  plugins: [],
};

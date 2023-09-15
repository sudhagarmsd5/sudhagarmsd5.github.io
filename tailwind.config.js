/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        dark: "var(--dark)",
        darker: "var(--darker)",
      },
      backgroundImage: {
        "primary-gradient": "var(--primary-gradient)",
        "dark-gradient": "var(--dark-gradient)",
      },
    },
    fontFamily: {
      heading: ["Poppins"],
      body: ["Inter"],
    },
  },
  plugins: [],
};

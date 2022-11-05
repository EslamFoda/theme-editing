module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#864B9E",
        "primary-hover": "#2267d8",
        "gray-color": "#999999",
        "gray": "#777777",
        "light-gray": "#f7f8fa",
        "light": "#f7f8fa",
        "font-color": "#191919",
        "gray-border": "#e9e7e7",
      },
      fontSize: {
        "very-small": "4px",
        "small": "6px",
      },
      width:{
        "small":"100px"
      },
      boxShadow:{
        "custom":"0px 0px 5px rgba(0, 0, 0, 0.50)",
        "big":"0 6px 50px rgba(0,0,0,.2)",
        "inside":"inset 0px 0px 0px 4px",
        "inside-small":"inset 0px 0px 0px 3px",
      }
    },
  },
  plugins: [],
};

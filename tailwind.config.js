/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        slackey: "Slackey",
        noto: "Noto Sans",
      },
      colors: {
        kuning: "#fcff3d",
        biru: "#0099ff",
        hover: "rgba(0, 0, 0, 0.603)"
      },
    },
  },
  plugins: [],
}


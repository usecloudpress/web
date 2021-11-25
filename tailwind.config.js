const colors = require("tailwindcss/colors");
const brandColor = colors.indigo;

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: brandColor,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: brandColor["600"],
              textDecoration: "none",
              "&:hover": {
                color: brandColor["500"],
              },
            },
            img: {
              boxShadow:
                "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06) !important",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

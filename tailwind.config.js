/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "bounce-2s": "bounce2s 2s infinite",
      },
      keyframes: {
        bounce2s: {
          "from, 20%, 53%, 80%, to": {
            "animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: "translate3d(0, 0, 0)",
          },

          "40%, 43%": {
            "animation-timing-function":
              "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            transform: "translate3d(0, -30px, 0)",
          },

          "70%": {
            "animation-timing-function":
              "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            transform: "translate3d(0, -15px, 0)",
          },

          "90%": {
            transform: "translate3d(0, -4px, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};

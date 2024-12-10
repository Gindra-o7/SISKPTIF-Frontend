import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      colors: {
        primary: {
          dark: "#1A2D42",
          DEFAULT: "#2E4156",
        },
        secondary: "#AAB7B7",
        neutral: {
          light: "#C0C8CA",
          lighter: "#D4D8DD",
        },
      },
    },
  },
  plugins: [flowbite.plugin(), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};

const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content()
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: '#1A2D42',
                    DEFAULT: '#2E4156',
                },
                secondary: '#AAB7B7',
                neutral: {
                    light: '#C0C8CA',
                    lighter: '#D4D8DD',
                },
            },
        },
    },
    plugins: [
        flowbite.plugin(),
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ],
    },
};

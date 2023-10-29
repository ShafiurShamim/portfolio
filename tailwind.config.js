/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
    ],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                    "primary": "#236284",
                },
                light: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                    "primary": "#236284",
                },

            },
            "synthwave",
            "valentine",
            "coffee",
        ],
        logs: false,
        prefix: "d-",
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui"), require("@tailwindcss/forms")],
}

import type { Config } from 'tailwindcss';

// tailwind.config.ts

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2491DF",
                secondary: "#EBF7FF",
                clr_text: "#001E33",
                clr_lightgrey: "#F9FAFB",
                clr_grey: "#98A2B3",
                clr_red: "#E26E6A",
                clr_yellow: "#F3A218",
                clr_lightyellow: "#FEF6E7",
                clr_green: "#00CD8E",
                clr_lightgreen: "#EBFFF9",

            },
        }
    },
    plugins: [],
};

export default config;
import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
                sm: "3rem",
            },
        },
        extend: {

            colors: {
                black: "#353535",
                green: "#3c6e71",
                white: "#ffffff",
                red: "#c1121f",
                "darkRed": "#780000",
                "cream": "#fdf0d5",
                "success": "#a7c957",
                "softGreen": "#a7c957",
                "softGray": "#9EB7B8",
                "darkBlue": "#003049",
                "Sky-blue": "#81c3d7",
                "softBlue": "#669bbc"
            },
        },
    },
    plugins: [],
} satisfies Config;

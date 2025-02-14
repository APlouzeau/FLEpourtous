import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
        fontFamily: {
            sans: ["Roboto", "system-ui", "sans-serif"],
            title: ["Montserrat", "serif"],
        },
    },
    plugins: [daisyui],
} satisfies Config;

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                dark: '#0F0D0E',
            },
            fontFamily: {
                sans: ['Figtree Variable', ...defaultTheme.fontFamily.sans],
                mono: ['Fira Mono', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

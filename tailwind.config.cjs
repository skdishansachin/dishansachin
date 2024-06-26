const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
                serif: ['Nunito Variable', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

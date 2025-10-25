/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6366f1',
                    dark: '#4f46e5',
                },
                dark: {
                    bg: '#282c34',
                    surface: '#2c313a',
                    border: '#3e4451',
                },
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
};

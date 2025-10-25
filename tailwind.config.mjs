/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Primary colors
                primary: {
                    DEFAULT: '#6366f1',
                    dark: '#4f46e5',
                },
                // Light mode colors
                'surface-light': '#ffffff',
                'surface-hover-light': '#f3f4f6',
                'text-light': '#111827',
                'text-muted-light': '#6b7280',
                'border-light': '#e5e7eb',
                // Dark mode colors (One Dark theme)
                'surface-dark': '#282c34',
                'surface-elevated-dark': '#2c313a',
                'surface-hover-dark': '#2c313a',
                'text-dark': '#abb2bf',
                'text-muted-dark': '#5c6370',
                'border-dark': '#3e4451',
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
};

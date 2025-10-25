/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Primary brand colors
                primary: {
                    DEFAULT: '#3b82f6', // Blue-500
                    hover: '#2563eb',   // Blue-600
                },
                // Button colors
                button: {
                    github: '#1f2937',       // Gray-800
                    'github-hover': '#111827', // Gray-900
                    download: '#dc2626',     // Red-600
                    'download-hover': '#b91c1c', // Red-700
                    web: '#2563eb',          // Blue-600
                    'web-hover': '#1d4ed8',  // Blue-700
                    use: '#eab308',          // Yellow-500
                    'use-hover': '#ca8a04',  // Yellow-600
                    youtube: '#dc2626',      // Red-600
                    'youtube-hover': '#b91c1c', // Red-700
                    pdf: '#374151',          // Gray-700
                    'pdf-hover': '#1f2937',  // Gray-800
                    online: '#2563eb',       // Blue-600
                    'online-hover': '#1d4ed8', // Blue-700
                    dataset: '#16a34a',      // Green-600
                    'dataset-hover': '#15803d', // Green-700
                },
                // Selector toggle colors
                selector: {
                    active: '#3b82f6',       // Blue-500
                    inactive: '#e5e7eb',     // Gray-200
                    'inactive-dark': '#374151', // Gray-700
                    'inactive-text': '#1f2937', // Gray-800
                    'inactive-text-dark': '#e5e7eb', // Gray-200
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

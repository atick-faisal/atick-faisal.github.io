/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Primary brand colors (Deep Purple from original site)
                primary: {
                    DEFAULT: '#512da8', // Deep Purple
                    hover: '#45278f', // Darker Purple
                    light: '#bbdefb', // Light Blue (for selector active state)
                    dark: '#9575cd', // Lighter purple for dark mode
                    'dark-hover': '#7e57c2', // Hover state for dark mode
                },
                // Button colors
                button: {
                    github: '#1F1F1F',          // M3 Neutral
                    'github-hover': '#333333',  // M3 Neutral Variant
                    download: '#B3261E',        // M3 Error
                    'download-hover': '#9E221B',// M3 Error Dark
                    web: '#3461FD',             // M3 Primary
                    'web-hover': '#2F57E3',     // M3 Primary Dark
                    use: '#006A60',             // M3 Tertiary
                    'use-hover': '#00534C',     // M3 Tertiary Dark
                    youtube: '#B3261E',         // M3 Error
                    'youtube-hover': '#9E221B', // M3 Error Dark
                    pdf: '#5C5E62',             // M3 Secondary
                    'pdf-hover': '#4A4B4F',     // M3 Secondary Dark
                    online: '#3461FD',          // M3 Primary
                    'online-hover': '#2F57E3', // M3 Primary Dark
                    dataset: '#3461FD',         // M3 Primary
                    'dataset-hover': '#2F57E3', // M3 Primary Dark
                },
                // Selector toggle colors
                selector: {
                    active: '#bbdefb', // Light Blue (from original)
                    'active-text': '#000000', // Black text on light blue
                    inactive: '#e5e7eb', // Gray-200
                    'inactive-dark': '#374151', // Gray-700
                    'inactive-text': '#1f2937', // Gray-800
                    'inactive-text-dark': '#e5e7eb', // Gray-200
                },
                // Light mode colors
                'surface-light': '#ffffff',
                'surface-hover-light': '#f3f4f6',
                'card-light': 'rgb(232, 234, 246)', // Card surface color
                'card-border-light': 'rgba(0, 0, 0, 0.175)', // Subtle card border
                'text-light': '#111827',
                'text-muted-light': '#6b7280',
                'border-light': '#e5e7eb',
                // Dark mode colors (One Dark theme)
                'surface-dark': '#282c34',
                'surface-elevated-dark': '#2c313a',
                'surface-hover-dark': '#2c313a',
                'card-dark': 'rgb(59, 66, 82)', // Card surface color dark
                'card-border-dark': 'rgba(255, 255, 255, 0.15)', // Subtle card border dark
                'text-dark': '#abb2bf',
                'text-muted-dark': '#5c6370',
                'border-dark': '#3e4451',
            },
            borderRadius: {
                card: '1.5rem', // Card outer wrapper
                'card-image': '1.5rem', // Card image corners
                button: '1.2rem', // Button pill shape
                header: '3rem', // Header cards (Bio, Projects, Publications)
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '486px', // 540px * 0.9
                    md: '648px', // 720px * 0.9
                    lg: '864px', // 960px * 0.9
                    xl: '1026px', // 1140px * 0.9
                    '2xl': '1188px', // 1320px * 0.9
                },
            },
        },
    },
    plugins: [],
};

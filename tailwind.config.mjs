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
                },
                // Button colors
                button: {
                    github: '#181717',          // Neutral variant (like M3 neutral-40)
                    'github-hover': '#0D1117',  // Neutral variant darker tone (neutral-30)
                    download: '#D32F2F',        // M3 error main
                    'download-hover': '#B71C1C',// M3 error dark
                    web: '#1E88E5',             // M3 primary (blue tone)
                    'web-hover': '#1565C0',     // M3 primary dark
                    use: '#009688',             // M3 tertiary teal
                    'use-hover': '#00796B',     // M3 tertiary dark
                    youtube: '#E53935',         // M3 error accent
                    'youtube-hover': '#C62828', // M3 error darker
                    pdf: '#C2185B',             // M3 neutral variant (blue gray)
                    'pdf-hover': '#880E4F',     // Darker neutral
                    online: '#1E88E5',          // Same as web for consistency
                    'online-hover': '#1565C0',
                    dataset: '#43A047',         // M3 success main
                    'dataset-hover': '#2E7D32', // M3 success dark
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
                'card-image': '1.4rem', // Card image corners
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

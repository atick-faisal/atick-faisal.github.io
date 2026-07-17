import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
    integrations: [
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ],
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        build: {
            assetsInlineLimit: 10000,
        },
        plugins: [tailwindcss()],
    },
});

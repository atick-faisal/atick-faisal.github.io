import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
    integrations: [tailwind({ applyBaseStyles: false }), partytown()],
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        build: {
            assetsInlineLimit: 10000,
        },
    },
});

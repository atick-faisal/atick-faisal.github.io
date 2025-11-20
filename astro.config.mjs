import partytown from '@astrojs/partytown';
import { defineConfig } from 'astro/config';

export default defineConfig({
    integrations: [partytown()],
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        build: {
            assetsInlineLimit: 10000,
        },
        css: {
            postcss: './postcss.config.mjs',
        },
    },
});

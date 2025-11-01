import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
    integrations: [tailwind({ applyBaseStyles: false })],
    vite: {
        build: {
            cssInlineLimit: 8,
        },
    },
});

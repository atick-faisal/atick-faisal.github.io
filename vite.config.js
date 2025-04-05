import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import {VitePWA} from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            includeAssets: [
                "favicon.ico",
                "apple-touch-icon.png",
                "mask-icon.svg",
            ],
            manifest: {
                name: "React.js PWA",
                short_name: "PWA",
                description: "Template for React.js PWA",
                theme_color: "#242424",
                icons: [
                    {
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
    server: {
        proxy: {
            "/api": {
                target: "https://xkcd.com/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
                secure: false,
            },
        },
    },
});

// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        sourcemap: true,
        minify: false,
    },
    server: {
        hmr: {
            overlay: false,
        },
        fs: {
            strict: false,
        },
    },
});

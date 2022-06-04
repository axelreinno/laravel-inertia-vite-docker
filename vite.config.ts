import { ConfigEnv, defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ command }: ConfigEnv) => {
    return {
        base: command === 'build' ? '/dist/' : '',
        publicDir: false,
        build: {
            manifest: true,
            outDir: 'public/dist',
            rollupOptions: {
                input: {
                    app: 'resources/scripts/app.ts',
                },
            },
        },
        server: {
            strictPort: true,
            port: 3030,
            hmr: {
                host: 'localhost',
            },
        },
        plugins: [
            vue(),
            eslintPlugin({
                cache: false,
            }),
        ],
        envPrefix: ['VITE_'],
        resolve: {
            alias: {
                '@': resolve(__dirname, './resources/scripts'),
            },
        },
        optimizeDeps: {
            include: ['@inertiajs/inertia', '@inertiajs/inertia-vue3', 'vue'],
        },
    };
});

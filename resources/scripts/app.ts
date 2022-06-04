import './app/styles/index.scss';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';

createInertiaApp({
    resolve: async (name: string) => {
        const pages = import.meta.glob('./app/pages/**/*.vue');

        return (await pages[`./app/pages/${name}.vue`]()).default;
    },
    setup({ el, app, props, plugin }: any) {
        const apps = createApp({ render: () => h(app, props) });
        apps.use(plugin).mount(el);
    },
});

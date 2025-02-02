// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    srcDir: 'src/',
    modules: [
        '@primevue/nuxt-module',
    ],
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..40,200,0..1,0'
                },
                {
                    rel: 'stylesheet',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..40,200,0,0'
                },
            ]
        }
    },
    components: true,
    css: [
        'primeicons/primeicons.css',
    ],
})

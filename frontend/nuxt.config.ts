// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    srcDir: 'src/',
    modules: [
        '@pinia/nuxt',
    ],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..40,200..400,0..1,0'
                },
                {
                    rel: 'stylesheet',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..40,200..400,0,0'
                },
            ]
        },
    },
    components: true,
    css: [
        '~/assets/css/main.css',
        '~/assets/css/element.css',
        'primeicons/primeicons.css',
    ],
    plugins: [
        '~/plugins/animation.js',
    ],
    pinia: {
        storesDirs: ['./src/stores/**'],
      },
})

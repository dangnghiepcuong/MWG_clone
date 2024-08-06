// plugins/animation.js
import { defineNuxtPlugin } from '#app';
import animation from '~/mixins/animation';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.mixin(animation)
})

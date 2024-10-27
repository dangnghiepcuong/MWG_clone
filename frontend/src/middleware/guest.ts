import { useAuthStore } from "~/stores/auth"

const authStore = useAuthStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (authStore.isAuthenticated === true) {
        return navigateTo('/lich-su-mua-hang')
    }
})
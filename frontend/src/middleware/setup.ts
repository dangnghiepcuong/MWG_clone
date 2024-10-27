import { useAuthStore } from "~/stores/auth"

const authStore = useAuthStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log(`setup middleware`)
    await authStore.fetchAuthenticatedUserData()
})
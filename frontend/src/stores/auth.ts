import _get from 'lodash/get'

export const useAuthStore = defineStore('auth', () => {
    const errors = ref([])
    const authUserData = ref({})
    const isAuthenticated = ref(false)

    async function login(form: Object) {
        isAuthenticated.value = false
        errors.value = []
        try {
            const response: unknown = await fetchDefaultApi('/login', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(form),
            })

            authUserData.value = _get(response, 'data', {})
            console.log(`authUserData.value`)
            console.log(authUserData.value)

            isAuthenticated.value = true
            navigateTo('/lich-su-mua-hang')
        } catch (error) {
            errors.value = _get(error, 'response._data.errors', [])
            console.log(errors.value)   
        }
    }

    async function fetchAuthenticatedUserData() {
        try {
            const response = await fetchDefaultApi('/users/get-authenticated', {
                method: 'GET',
                credentials: 'include',
            })

            authUserData.value = _get(response, 'data', {})
            console.log(`data in authStore`)
            console.log(authUserData.value)

            isAuthenticated.value = _get(authUserData.value, 'id') ? true : false
        } catch (error) {
            errors.value = _get(error, 'response._data.errors', [])
            console.log(errors.value)
        }   
    }

    return { errors, login, authUserData, isAuthenticated, fetchAuthenticatedUserData }
})

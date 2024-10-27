// import _get from 'lodash/get'

export default defineEventHandler(async (event) => {
    console.log(`serverMiddleware`)
    // event.context.auth = await fetchDefaultApi('/users/get-authenticated', {
    //     method: 'GET',
    //     credentials: 'include',
    // })

    // let authUserData = _get(event.context.auth, 'data', {})

    // if (!authUserData.isAuthenticated) {
    //     return sendRedirect(event, '/login')
    // }
})

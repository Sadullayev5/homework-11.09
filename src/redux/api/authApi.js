import { api } from './index';

const authApi = api.injectEndpoints({
    endpoints : (build) => ({
        signInUser : build.mutation({
            query : (body) => ({
                url : '/auth/login',
                method : 'POST',
                body
            })
        })
    })
})

export const {useSignInUserMutation} = authApi
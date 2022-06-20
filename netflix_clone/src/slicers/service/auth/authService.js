import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authService = createApi({
    reducerPath: 'authService',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    endpoints: (builder) => ({
        createuser: builder.mutation({
            query: (newbody) => ({
                url: 'auth/createusers',
                method: 'POST',
                body: newbody,
                headers: {
                    'Content-type': 'application/json'
                }
            })
        }),
        loginuser: builder.mutation({
            query: (loginbody) => {
                return {
                    url: 'auth/login',
                    method: 'POST',
                    body: loginbody,
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            },
            invalidatesTags: ['Login']
        }),
       
    })

})


export const { useCreateuserMutation, useLoginuserMutation } = authService
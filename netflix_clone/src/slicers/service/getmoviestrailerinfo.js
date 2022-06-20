import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const getmovietrailerinfo = createApi({
    reducerPath : 'getmovietrailerinfo',
    baseQuery : fetchBaseQuery({baseUrl: ''})
})
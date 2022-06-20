import { configureStore } from '@reduxjs/toolkit'
import newletterReducer from '../slicers/newletter/newsletterSlicer'
import { setupListeners } from '@reduxjs/toolkit/query'
import { getmoviesdetails } from '../slicers/service/getmoviedetails'
import { authService } from '../slicers/service/auth/authService'
import { userService } from '../slicers/service/auth/userServices'

export const store = configureStore({
    reducer: {
        newsletter: newletterReducer,
        [getmoviesdetails.reducerPath]: getmoviesdetails.reducer,
        [authService.reducerPath]: authService.reducer,
        [userService.reducerPath]: userService.reducer,
    },
    middleware:
        (getdefaultMiddleware) =>
           getdefaultMiddleware()
           .concat(userService.middleware)
           .concat(getmoviesdetails.middleware)
           .concat(authService.middleware)
                
                     
            

})

setupListeners(store.dispatch)
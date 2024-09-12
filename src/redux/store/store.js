import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice'
import { api } from '../api/index'

const store = configureStore({
    reducer : {
        auth : authReducer,
        [api.reducerPath] : api.reducer
    },
    middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
})

export {store}
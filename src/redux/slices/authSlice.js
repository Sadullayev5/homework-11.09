import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : localStorage.getItem('token') || null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        signIn : ( state , action) => {
            state.token = action.payload
            localStorage.setItem('token' , action.payload)
        },
        signOut: ( state) => {
            state.token = null
            localStorage.removeItem('token')
        }
    }
})

export const { signIn , signOut} = authSlice.actions;
export default authSlice.reducer
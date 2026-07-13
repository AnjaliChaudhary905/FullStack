import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        Logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
})


export const { setUser, Logout } = authSlice.actions

export default authSlice.reducer
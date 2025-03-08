import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('roleName') || null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.role = action.payload.role;

            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('roleName', action.payload.role);
        },
        logout: state => {
            state.token = null;
            state.role = null;

            localStorage.removeItem('token');
            localStorage.removeItem('roleName');
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

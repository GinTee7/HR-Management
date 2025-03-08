import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('roleName') || null,
    userType: localStorage.getItem('userType') || null,
    department: localStorage.getItem('department') || null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.userType = action.payload.userType;
            state.department = action.payload.department;

            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('roleName', action.payload.role);
            localStorage.setItem('userType', action.payload.userType);
            localStorage.setItem('department', action.payload.department);
        },
        logout: state => {
            state.token = null;
            state.role = null;
            state.userType = null;
            state.department = null;

            localStorage.removeItem('token');
            localStorage.removeItem('roleName');
            localStorage.removeItem('userType');
            localStorage.removeItem('department');
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // ✅ Import reducer

export const store = configureStore({
    reducer: {
        auth: authReducer // ✅ Thêm auth vào Redux Store
    }
});

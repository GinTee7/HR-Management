import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ✅ Tạo Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [role, setRole] = useState(localStorage.getItem('roleName'));
    const navigate = useNavigate();

    // ✅ Cập nhật token khi đăng nhập
    const login = (token, roleName) => {
        localStorage.setItem('token', token);
        localStorage.setItem('roleName', roleName);
        setToken(token);
        setRole(roleName);

        // ✅ Chuyển trang dựa theo vai trò
        switch (roleName) {
            case 'ADMIN':
                navigate('/admin');
                break;
            case 'AGENCY':
                navigate('/');
                break;
            case 'WAREHOUSE MANAGER':
                navigate('/warehouse-manager');
                break;
            case 'SALES MANAGER':
                navigate('/business-manager');
                break;
            default:
                navigate('/');
        }
    };

    // ✅ Đăng xuất (Xóa token và chuyển về login)
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('roleName');
        setToken(null);
        setRole(null);
        navigate('/signin');
    };

    return (
        <AuthContext.Provider value={{ token, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { token, role } = useSelector(state => state.auth);

    if (!token) {
        return <Navigate to='/signin' />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to='/' />; // ✅ Chuyển hướng nếu không có quyền
    }

    return children;
};

export default ProtectedRoute;

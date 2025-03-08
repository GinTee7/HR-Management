import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
    const { token, role } = useSelector(state => state.auth);

    if (!token) {
        return <Navigate to='/signin' replace />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;

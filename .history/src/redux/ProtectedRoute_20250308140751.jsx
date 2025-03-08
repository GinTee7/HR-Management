import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { token, role } = useSelector(state => state.auth);

    if (!token) {
        return <Navigate to='/signin' replace />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to='/' replace />;
    }

    return children;
};

export default ProtectedRoute;

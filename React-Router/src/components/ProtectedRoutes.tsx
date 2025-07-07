import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

type RouteProps = {
    allowedRoles: ('Admin' | 'User' | '')[];
};

export const ProtectedRoute = ({ allowedRoles }: RouteProps) => {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (user && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

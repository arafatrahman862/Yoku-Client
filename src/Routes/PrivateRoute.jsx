import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center">
                    <span className="loading loading-spinner loading-lg text-orange-500"></span>
                    <p className="mt-4 text-orange-600 font-semibold animate-pulse">
                        Checking your access...
                    </p>
                </div>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoute;

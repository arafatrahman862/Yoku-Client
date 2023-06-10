import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(user){
        return children
    }
    if(loading){
        return <span className="loading loading-spinner text-success"></span>
    }
    return <Navigate to="/login" replace  state={{from: location}} ></Navigate>
};

export default PrivateRoute;
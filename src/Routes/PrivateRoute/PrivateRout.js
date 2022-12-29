import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SmallSpinner from '../../Pages/Shared/Spinner/SmallSpinner';

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <SmallSpinner></SmallSpinner>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

};

export default PrivateRout;
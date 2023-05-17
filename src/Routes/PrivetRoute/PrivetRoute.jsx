import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    // if(loading) {
    //     return <progress className="progress w-56"></progress>;
    // }

    if(user) {
        return children;
    }

    return <Navigate to='/sign-in' state={{from: loading}} replace></Navigate>
};

export default PrivetRoute;
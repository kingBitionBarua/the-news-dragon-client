import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({Children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);


    if(user) {
        return Children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;

/***
 * ----------------------------
 *                STEPS
 * ----------------------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to vist the route
 * 3. Else redirect the user to the login page
 * 4. setup the private router
 * 
 */
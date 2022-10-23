import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const PrivetRoutes = ({ children }) => {


    const { user, loading } = useContext(AuthContext);

    const location = useLocation();



    if (loading) {
        return <Spinner animation="grow" variant="secondary" />
    }
    // NB: behind the seeen:  রিয়াক ওয়ালারা state কে লোকেশনে সেট করে দেয়, মইন লোকেশনে 
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivetRoutes;


/*
1. only allow authenticated user to visit the route
2.
3. Redirect user to the route they want to go before login ?
*/
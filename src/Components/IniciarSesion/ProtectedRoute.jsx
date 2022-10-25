import React from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {

    const session = localStorage.getItem('client_id')
    console.log("Protect ", session)
    if (!session) {
        return <Navigate to="/" />;
    }
    return children;
}

export default ProtectedRoute
"use client"
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const getInitialState = () => {
    let storedToken 
    if (typeof window !== 'undefined') {
        storedToken = localStorage.getItem('token');
    }
    return storedToken ? JSON.parse(storedToken) : false;
}

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(getInitialState);
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
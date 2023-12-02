"use client"
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const getInitialState = () => {
    let services = null
    if (typeof window !== 'undefined') {
        services = sessionStorage.getItem('services')
    }
    return services ? JSON.parse(services) : [];
}

const UserContextProvider = ({ children }) => {
    const [items, setItems] = useState(getInitialState);

    useEffect(() => {
        sessionStorage.setItem('services', JSON.stringify(items));
    }, [items]);

    const addItem = (element) => {
        setItems([...items, element])
    }

    const removeItem = (itemId) => {
        const updatedItems = items.filter((item) => item._id !== itemId)
        setItems(updatedItems)
    }

    const clearItems = () => {
        setItems([])
    }

    return (
        <UserContext.Provider value={{ items, addItem, removeItem, clearItems }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };



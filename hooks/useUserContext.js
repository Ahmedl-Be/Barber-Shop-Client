"use client"
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

const useUserContext = () => {
    const { items, addItem, removeItem, clearItems } = useContext(UserContext);
    return { items, addItem, removeItem, clearItems };
};

export default useUserContext;

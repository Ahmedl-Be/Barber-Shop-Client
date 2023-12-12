"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Accordion from '@/UI/accordion/Accordion';
import CalendarComponent from '@/UI/calendar/Calendar';
import axios from 'axios';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useUserContext from '@/hooks/useUserContext';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';


const reservation = () => {
    const { items } = useUserContext()
    const [navValue, setNavValue] = useState("Services")
    const [services, setServices] = useState()
    const router = useRouter();
    const { setToken } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    const handelLogout = () => {
        setToken(false);
        localStorage.removeItem('user');
        window.location.reload();
    }

    useEffect(() => {
        const checkAuthorization = async () => {
            try {
                const user = localStorage.getItem('user');
                if (!user) {
                    router.push('/login');
                    return;
                }
                const headers = { Authorization: `Bearer ${user}` };
                const response = await axios.get('https://barber-shop-0w9x.onrender.com/api/users/services', { headers });
                setServices(response.data);
                setIsLoading(false);
                console.log("Loooggggogog")
            } catch (error) {
                console.error(error);
                if (error) {
                    setToken(false)
                    router.push('/login');
                    return
                }
                setIsLoading(false);
            }
        };
        checkAuthorization();
    }, [router]);

    return (!isLoading ?
        (<div className='mt-[15vh] mx-[5%] lg:mx-[12%] h-auto'>
            <div className='flex justify-between bg-gray-200 p-4 
            rounded'>
                <div className='flex gap-3'>
                    <button onClick={() => setNavValue("Services")}>
                        Services
                    </button>
                    <button onClick={() => setNavValue("Book Now")}
                        className='flex gap-1'>
                        Book Now
                        <div className='relative cursor-pointer '>
                            <ShoppingCartIcon />
                            <h1 className='absolute bottom-3 left-6'>
                                {items.length}
                            </h1>
                        </div>
                    </button>
                </div>
                <button onClick={handelLogout} className='text-bold'>LOGOUT</button>
            </div>
            <h1 className='my-5 text-3xl'>{navValue}</h1>
            {navValue == "Services" && <Accordion services={services} />}
            {navValue == "Book Now" && <CalendarComponent />}
        </div>) :
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2
        -translate-y-1/2'>
            LOADING...
        </h1>
    )
}

export default reservation;
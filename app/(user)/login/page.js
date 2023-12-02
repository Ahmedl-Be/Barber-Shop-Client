"use client"
import { useState,useEffect } from 'react'
import Styles from "./login.module.css";
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import OverLayout from '@/UI/overLayout/OverLayout';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

const login = () => {
    const {setToken,token} = useContext(AuthContext);    

    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [resMessage,SetresMessage] = useState("")
    const [overlayActive, setOverlayActive] = useState(false);

    useEffect(()=>{
        if(token){
            router.push("/reservation")
        }
    },[token])

    const submitHandler = async (e) => {
        e.preventDefault();
        setOverlayActive(true)
        try {
            const response = await axios.post('http://localhost:8800/api/users/login', {
                email,
                password,
            })
            localStorage.setItem('user',response.data.data.token)
            router.push('/reservation')
            SetresMessage("Success")
            setToken(true)
        } catch (error) {
            if (error.response) {
                console.error('Backend Error:', error.response.data.message);
                SetresMessage( error.response.data.message)
            } else {
                console.error('Error submitting form:', error.message);
            }
        } finally {
            setTimeout(() => {
                setOverlayActive(false);
            }, 700);
        }
    }

    return (
        <div className='flex flex-col justify-center w-auto'>
            <OverLayout res={resMessage} overlayActive={overlayActive}
            setOverlayActive={setOverlayActive}/>
            <form className={Styles.form} onSubmit={submitHandler}>
                <div className={`${Styles.mainSec}`}>
                    <label>E-MAIL</label>
                    <input className={Styles.input}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        requried="true" 
                        value={email}
                        placeholder='Enter your e-mail' />
                </div>
                <div className={`${Styles.mainSec}`}>
                    <label>PASSWORD</label>
                    <input className={Styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        requried="true" 
                        value={password}
                        placeholder='Enter your phone number' />
                </div>
                <div className='flex items-center gap-3'>
                    <button type="submit" className={Styles.btn}>Login</button>
                    <Link href="/register" className="opacity-50">Register </Link>
                </div>
            </form>
        </div>
    )
}

export default login
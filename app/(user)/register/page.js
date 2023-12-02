"use client"
import { useState } from 'react';
import Styles from "./register.module.css";
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import OverLayout from '@/UI/overLayout/OverLayout';

const register = () => {
    const [overlayActive, setOverlayActive] = useState(false);
    const router = useRouter()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [resMessage, SetResMessage] = useState("")


    const submitHandler = async (e) => {
        e.preventDefault();
        setOverlayActive(true)
        try {
            await axios.post('http://localhost:8800/api/users/register',{
                firstName,
                lastName,
                email,
                password,
            })
                .then(function (response) {
                    router.push('/login')
                    SetResMessage("Success")
                })
        } catch (error) {
            if (error.response) {
                SetResMessage(error.response.data.message)
                console.error('Backend Error:', error.response.data);
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
                setOverlayActive={setOverlayActive} />
            <form className={Styles.form} onSubmit={submitHandler} >
                <div className={`${Styles.mainSec}`}>
                    <label>FIRST NAME</label>
                    <input className={Styles.input}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text" 
                        requried="true"
                        value={firstName} 
                        placeholder='Enter your first name' />
                </div>
                <div className={`${Styles.mainSec}`}>
                    <label>LAST NAME</label>
                    <input className={Styles.input}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text" 
                        requried="true" 
                        value={lastName}
                        placeholder='Enter your last name' />
                </div>
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
                    <button type="submit" className={Styles.btn}>Register</button>
                    <Link href="/login" className="opacity-50">Login </Link>
                </div>
            </form>
        </div>
    )
}

export default register
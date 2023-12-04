"use client"
import React, { useState } from 'react'
import Styles from './form.module.css';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import axios from 'axios';
import OverLayout from '../overLayout/OverLayout';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
    const [resHandel, setResHandel] = useState(null);
    const [overlayActive, setOverlayActive] = useState(false);

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setResHandel("loading...")
        setOverlayActive(true)
        try {
                await axios.post('https://barber-shop-0w9x.onrender.com/api/userMsg',formData)
                .then(function (response) {
                    console.log(response);
                    setResHandel("Your Message has been Received");
                    resetForm();
                })
        } catch (error) {
            if (error.response) {
                setResHandel(error.response.data.errors[0].msg)
            } else {
                console('Error submitting form');
            }
        } finally {
            setTimeout(() => {
                setOverlayActive(false);
            }, 2000);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div>
            <OverLayout res={resHandel} 
            overlayActive={overlayActive} 
            setOverlayActive={setOverlayActive}/>
            
            {/* FORM */}
            <form className={Styles.form} onSubmit={submitHandler} >
                <div className={Styles.head}>
                    <AttachEmailIcon className='text-5xl' />
                    <span>GET IN TOUCH</span>
                </div>
                <div className={`${Styles.mainSec}`}>
                    <label>FIRST NAME</label>
                    <input 
                    className={Styles.input}
                    value={formData.firstName}
                    onChange={handleChange}
                    name="firstName"
                    type="text"
                    placeholder='Enter your first name' />
                </div>
                <div className={`${Styles.mainSec}`}>
                    <label>LAST NAME</label>
                    <input className={Styles.input}
                    value={formData.lastName}
                    onChange={handleChange}
                    name="lastName"
                    type="text"
                    placeholder='Enter your last name' />
                </div>
                <div className={`${Styles.mainSec}`}>
                    <label>E-MAIL</label>
                    <input
                    className={Styles.input}
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    type="email"
                    required
                    placeholder='Enter your e-mail' />
                </div>
                <div className={`${Styles.mainSec}`}>
                    <label>PHONE NUMBER</label>
                    <input 
                        className={Styles.input}
                        onChange={handleChange}
                        value={formData.phoneNumber}
                        type="number" 
                        name='phoneNumber'
                        placeholder='Enter your phone number' />
                </div>
                <div className={`${Styles.mainSec} ${Styles.msg}`}>
                    <label>MESSAGE</label>
                    <input 
                        className={Styles.input}
                        value={formData.message}
                        onChange={handleChange}
                        name='message'
                        type="text" 
                        placeholder='Enter your message' />
                </div>
                <button type="submit" className={Styles.btn}>Send</button>
            </form>
        </div>
    )
}

export default Form;
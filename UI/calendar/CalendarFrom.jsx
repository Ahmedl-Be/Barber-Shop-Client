"use client"
import React, { useState } from 'react'
import styles from './Calendar.module.css';
import useUserContext from '@/hooks/useUserContext';
import axios from 'axios';
import OverLayout from '../overLayout/OverLayout';

const CalendarFrom = ({ formattedDate, selectedHour }) => {
    const { items } = useUserContext()
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [resMessage,SetResMessage] = useState("")
    const [overlayActive, setOverlayActive] = useState(false);

    function convertTo24Hour(hour12h) {
        if (!hour12h || typeof hour12h !== 'string') {
            return ''
        }
        const [hour, period] = hour12h?.split(' ');
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour24 !== 12) {
            hour24 += 12;
        } else if (period === 'AM' && hour24 === 12) {
            hour24 = 0;
        }
        return hour24.toString();
    }
    const hour = convertTo24Hour(selectedHour)


    const submitHandler = async (e) => {
        e.preventDefault();
        setOverlayActive(true)
        try {
            await axios.post('http://localhost:8800/api/reservation/book', {
                date: formattedDate,
                hour,
                bookedBy: fullName,
                phoneNumber: phoneNumber,
                items,
            })
            SetResMessage("Success")
            setPhoneNumber('')
            setFullName('')
        } catch (error) {
            if (error.response) {
                console.log("Backend Error", error.response.data);
                SetResMessage(error.response.data.message)
            } else {
                console.log(error)
                SetResMessage("Something Went Wrong")
            }
        } finally {
            setTimeout(() => {
                setOverlayActive(false);
            }, 3000);
        }
    }

    return (
        <div>
            <OverLayout res={resMessage} 
            overlayActive={overlayActive}
            setOverlayActive={setOverlayActive}
            />
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={`${styles.mainSec}`}>
                    <label>Full Name</label>
                    <input className={styles.input}
                        requried="true"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder='name' />
                </div>
                <div className={`${styles.mainSec}`}>
                    <label>Phone Number</label>
                    <input className={styles.input}
                        requried="true"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder='phone number' />
                </div>
                <div className='flex items-center gap-3'>
                    <button type="submit" className={styles.btn}>SEND</button>
                </div>
            </form>
        </div>

    )
}

export default CalendarFrom;
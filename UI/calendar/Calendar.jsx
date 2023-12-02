"use client"
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.css';
import axios from 'axios';
import CalendarFrom from './CalendarFrom';
import SelectedItem from './SelectedItem';

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());
    const [selectedHour, setSelectedHour] = useState();
    const [availableHours, setAvailableHours] = useState()

    const onChange = (selectedDate) => {
        setDate(selectedDate);
    };

    // FORMATE DATA TO Y-M-D
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    useEffect(() => {
        const fetchAvailableHours = async () => {
            try {
                const response =  axios.get(`http://localhost:8800/api/reservation/available-hours/${formattedDate}`)
                response.then(result => {
                    setAvailableHours(result.data.data.availableHours)
                })
            }catch (error) {
                console.error('Error fetching available hours:', error);
            }
        }
        fetchAvailableHours()
    }, [formattedDate])


    const convertedHours = availableHours?.map(hour => {
        if (hour === 12) {
            return `${hour} PM`;
        } else if (hour > 12) {
            return `${hour - 12} PM`;
        } else {
            return `${hour} AM`;
        }
    });
    

    return (
        <div className='flex flex-col gap-14 mb-5'>

            <div className='flex flex-col lg:flex-row gap-10'>
            <Calendar onChange={onChange} value={date} className='rounded' />
            <div>
                <h1 className='mb-5 text-2xl'>AVALIABLE HOURS</h1>
                <div className={styles.timeGrid}>
                {convertedHours?.map((ele,index)=>(
                    <p className={`${styles.availableHours}
                    ${selectedHour == ele && 'opacity-50'} cursor-pointer`}
                    onClick={() => setSelectedHour(ele)} 
                    key={index}>
                    {ele}
                </p>))}
                </div>
            </div>
            </div>

            <div className='flex flex-col'>
                <SelectedItem />
                <CalendarFrom 
                formattedDate={formattedDate}
                selectedHour={selectedHour}/>
            </div>
        </div>
    )
}

export default CalendarComponent;
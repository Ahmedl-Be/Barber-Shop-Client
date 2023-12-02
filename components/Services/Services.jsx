import React from 'react';
import Menu from '../Menu';
import Styles from './services.module.css';
import Link from 'next/link';

const Services = () => {
    return (
        <div className={`h-auto bg-black mb-50 py-10 ${Styles.mainContainer}`}>
            <div className="flex flex-col gap-10
            mx-[10%] my-[5%] text-white ">
                {/* HEAD */}
                <div className='text-amber-200'>
                    <h1 className=' md:text-6xl text-2xl font-bold'>
                        BARBER SERVICES
                    </h1>
                    <span className='opacity-50 font-extralight text-xs
                    md:text-base'>
                        Walk-ins and Bookings Welcome
                    </span>
                </div>
                {/* MENUE */}
                <Menu  />
                <button className='border w-fit lg:px-6 lg:py-3 px-3 py-2
                hover:bg-white hover:text-black m-auto'>
                    <Link href="/login">Book an Appointment</Link>
                </button>
            </div>
        </div>
    )
}

export default Services;
import React from 'react'
import { time } from '@/data/data'
import Image from 'next/image'
import BgImg from '@/assets/great_pride_barber.jpg'
import Link from 'next/link'
const Timing = () => {
    return (
        // CONTAINER
        <div className='h-auto mb-14 mt-14 overflow-hidden flex
        flex-col lg:flex-row items-center  w-[100%]'
            style={{ "backgroundColor": "#d3bb8c" }}>
            {/*LEFT-SIDE-WRAPPER */}
            <div className='flex flex-col justify-center
            items-center md:w-[70%] p-6'>
                <div className='text-center'>
                    <span className='text-xs opacity-50'>
                        WE TAKE GREAT PRIDE IN OUR CRAFT</span>
                    <h1 className='text-3xl font-bold tracking-widest'>HOURS OF GROOMING</h1>
                </div>
                <div>
                    {time.map((ele, index) => (
                        <section className='mx-0 mt-10' key={index}>
                            <div className={`flex justify-between gap-14
                            md:text-2xl
                        ${!index == 0 && 'opacity-50'}`}>
                                <span>{ele.day}</span>
                                <span>{ele.date}</span>
                            </div>
                            <div className='bg-black w-[10] h-0.5 opacity-50'></div>
                        </section>
                    ))}
                </div>
                <button className='w-fit lg:px-6 lg:py-3 px-3 py-2
                bg-black text-white mt-14 mb-4'>
                    <Link href="/login">  Book an Appointment</Link> 
                </button>
            </div>
            {/* RIGHT-SIDE-WRAPPER */}
            <div className=''>
                <Image
                    src={BgImg}
                    alt='Image'
                    className='w-[70%] h-[100%] m-auto md:mb-0 mb-5'
                />
            </div>
        </div>
    )
}

export default Timing
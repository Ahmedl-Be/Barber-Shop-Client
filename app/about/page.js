import React from 'react'
import Slider from '@/components/Slider/Slider';
import MonvingText from '@/UI/MovingText/MonvingText';
import pic from "@/assets/ceo.jpg"
import Image from 'next/image';
import Button from '@/UI/button/Button';

const about = () => {
    return (
        <div>
            <MonvingText text="ABOUT B&H BARBERSHOP."/>
            {/* SECTION-TOW */}
            <div className='text-center mx-10 my-14'>
                <h1 className='text-4xl'>
                    GROOMING GENERATIONS OF GENTELMEN</h1>
                <p className='text-lg opacity-70'>B & H Barbershop gives the best quality haircuts and razor
                    cut shaves.Our staff are hand-picked for their exceptional
                    skills and are carefully trained to guarantee you always
                    receive our high barber standard.
                </p>
            </div>
            {/*SECTION-TOW  */}

            {/* MAIN-SECTION */}
            <div className='h-auto border flex flex-col lg:flex-row
            lg:py-10 lg:px-20 w-full' 
            style={{ "backgroundColor": "#d3bb8c" }}>

                {/* LEFT-SIDE */}
                <div className='flex flex-col gap-10 items-center 
                p-16 lg:w-2/3'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl text-center'>
                        "BEING A BARBER IS ABOUT TAKING CARE OF THE PEOPLE"
                        </h1>
                        <span className='opacity-60'>- Joseph, Owner/Master Barber</span>
                    </div>
                    <div className='leading-8 flex flex-col 
                    items-center gap-5 tracking-widest
                    opacity-80 lg:text-center'>
                        <p>Having been in the field our entire professional careers, our team has decades of cutting edge experience. Our skill-set allows us to surpass all our clients’ needs and expectations. At B & H Barbershop, we maintain an excitement toward honing our abilities, developing new skills and staying abreast of current and historic grooming treads to keep ahead of the curve.</p>
                        <p>Our top priority is for each and every customer to be thrilled with the way they look in the mirror. So stop by B & H Barber shop in the East Village of NYC for your next and all future grooming experiences.</p>
                    </div>
                    <div className='flex flex-col gap-2 text-center'>
                        <Button text='Book an Appointment'/>
                        <Button text='Barbar Services'/>
                    </div>
                </div>
                {/* left-side */}


                {/* Right-side */}
                <Image  src={pic} alt='OWNER PIC'
                className = 'lg:w-1/3 object-contain p-10 lg:p-0'/>
            </div>
            {/* MAIN-SECTION */}

            <div className='mt-14'>
            <Slider />
            </div>
        </div>
    )
}

export default about
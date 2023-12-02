import React from 'react'

const Welcome = () => {
    return (
        <section className='flex flex-col justify-center items-center m-20 gap-5'>
            <span className='font-light opacity-50'>WELCOME TO</span>
            <h1 className='font-extralight text:2xl md:text-5xl text-center'>
                B&H Barber Shop in East Village NYC
                Excellent Grooming Services in a Modern Manner
                with over 15 years of experience
            </h1>
            <span className='font-light opacity-50 text-center text-xs'>
                The best shaves and haircuts in East Village NYC. Stop by B & H
                Barber Shop and find out while we are the best barbers in east 
                village 10009.</span>
        </section>
    )
}

export default Welcome
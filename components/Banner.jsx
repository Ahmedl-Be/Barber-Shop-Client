import React from 'react'
import HeroBanner from '@/assets/Banner.jpg'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative h-[70vh] md:h-[89vh]">
            <Image
                src={HeroBanner}
                alt="Hero Banner"
                className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex flex-col
                justify-center gap-6 pl-10
                bg-black bg-opacity-50 text-white">
                <span className="text-l font-light opacity-50">
                    Walk-ins Welcome
                </span>
                <span className="text-3xl md:text-6xl mt-2 font-bold 
                text-amber-200 bold">
                    THE BEST CLASSIC <br/>
                    BARBER SERVICES<br/>
                    IN NEW YORK</span>
                <span className="text-lg mt-2 font-light opacity-25">
                    Best Barber in East Village NYC
                </span>
            </div>
        </div>
    )
}

export default Banner
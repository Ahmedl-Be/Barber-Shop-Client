"use client"
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/BH-WJITE-LOGO.png'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

const Nav = () => {
    const [isopened, setIsopend] = useState(false)
    const setTOOppsite = () => {
        setIsopend(prev => !prev)
    }

    return (
        <main className="fixed top-0 z-40 w-full">
            {/* S-VISABLE PART */}
            <nav className='flex justify-between items-center
                            bg-black pt-2 pb-1 pr-5 pl-5'>
                <Link href='/' onClick={()=>setIsopend(false)}>
                    <Image src={Logo} alt='B & H' width={200}
                    className='object-contain' priority/>
                </Link>
                <div className='flex gap-5 '>
                    <div className='hidden md:flex gap-5'>
                        <p className="relative group cursor-pointer text-white
                        hover:text-amber-200">
                            <Link href="/login" onClick={()=>setIsopend(false)}>Book-Now</Link>  
                            <span className="absolute w-full h-0.5 bg-amber-200 left-0 bottom-0 origin-right transform scale-x-100 transition-transform duration-300 group-hover:scale-x-0"></span>
                        </p>
                        <span className='text-white'>646-896-1090</span>
                    </div>
                    <div className='text-amber-200 cursor-pointer hover:scale-110'>
                        {!isopened ?
                            <DensityMediumIcon onClick={setTOOppsite} className='text-2xl' /> :
                            <CloseIcon onClick={setTOOppsite} className='text-2xl' />}
                    </div>
                </div>
            </nav>
            {/* E-VISABLE PART */}

            {/* S-DROP-DOWN-NAV */}
            <nav
                className={`shadow-md transform
            origin-top opacity-0 transition-opacity duration-300 z-10
            ${isopened ? 'opacity-100 h-[100vh]' : ''} bg-black w-[100%]`}>
                {isopened && (
                    <>
                        <div className='flex justify-center md:hidden gap-5
                        bg-black pt-5 text-amber-200'>
                            <p className="relative group cursor-pointer">
                                <Link href="/login" onClick={setTOOppsite}>Book-Now</Link>
                                <span className="absolute w-full h-0.5 bg-amber-200 left-0 bottom-0 origin-right transform scale-x-100 transition-transform duration-300 group-hover:scale-x-0"></span>
                            </p>
                            <span>646-896-1090</span>
                        </div>
                        <div className="
                        bg-black text-white
                        flex flex-col items-center justify-start gap-5 
                        pt-10 z-10 cursor-pointer text-3xl">
                            <Link href={"/"} onClick={setTOOppsite}
                                className='hover:text-amber-200'>
                                HOME
                            </Link>
                            <Link href={"/services"} onClick={setTOOppsite}
                                className='hover:text-amber-200'>
                                SERVICES
                            </Link>
                            <Link href={"/reservation"} onClick={setTOOppsite}
                                className='hover:text-amber-200'>
                                RESERVATION
                            </Link>
                            <Link href={"/about"} onClick={setTOOppsite}
                                className='hover:text-amber-200'>
                                ABOUT
                            </Link>
                            <Link href={"/contact"} onClick={setTOOppsite}
                                className='hover:text-amber-200'>
                                CONTACT
                            </Link>
                        </div>
                    </>
                )
                }
            </nav>
            {/* E-DROP-DOWN-NAV */}
        </main>
    )
}

export default Nav;
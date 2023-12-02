import React from 'react'
import Logo from '@/assets/BH-WJITE-LOGO.png'
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
    return (
        <div className='mt-auto'>
            <div className='w-full h-0.5 bg-black'></div>
            <div className='flex flex-col items-center
                lg:flex-row justify-between gap-5
                px-5 my-4'>
                <div>
                    <Image src={Logo} alt='B & H' width={200}
                        className='object-contain' />
                    <div className='flex gap-3 justify-center'>
                        <FacebookIcon />
                        <InstagramIcon />
                        <GoogleIcon />
                    </div>
                </div>
                <div className='flex flex-col opacity-75 
                text-center lg:text-left'>
                    <span>199 East 4th St, New York NY 10009</span>
                    <span>BandHBarbershop@gmail.com</span>
                    <span className=''>Hours: M-Thur: 9:30am-7:30pm
                    | Fri: 9:30am to 4pm
                        | Sat: CLOSED | Sun: 10am to 7pm</span>
                </div>
            </div>

        </div>
    )
}

export default Footer;
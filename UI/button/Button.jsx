import React from 'react'
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';
const Button = ({ text }) => {
    return (
        <div className='bg-black text-white px-5 py-2 
        flex gap-3 justify-between text-center cursor-pointer'>
            <Link href={`${text=="Barbar Services" ? '/services':'/login'}`}>
                {text}</Link>
            <EastIcon />
        </div>
    )
}

export default Button
import MonvingText from '@/UI/MovingText/MonvingText'
import React from 'react'
import Form from '@/UI/form/Form'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';


const Contact = () => {
    return (
        <div>
            <MonvingText text="CONTACT US. " />
            {/* SECTION-2 */}
            <div className="grid lg:grid-cols-2  grid-cols-1  gap-3 my-16 bg-black
            text-white py-10 lg:px-20">
                <div className="col-span-1 lg:p-4">
                    <h1 className='text-5xl p-4'>GET IN TOUCH</h1>
                </div>
                <div className="col-span-1 p-4">
                    <p className='text-sm opacity-70'>
                    B & H Barber Shop in East Village of NYC, welcomes all new clients to experiences an elevated grooming experience at one of the best barber shops in East Village.</p>
                </div>
                <div className="col-span-1 p-4 flex gap-4">
                    {/* PIC */}
                    <LocationOnIcon className='text-6xl'/>
                    <div className='leading-8 text-2xl'>
                        <h2>LOCATION</h2>
                        <span>199 East 4th St, New York NY 10009</span>
                    </div>
                </div>
                <div className="col-span-1 p-4 flex gap-4">
                    <EmailIcon className='text-6xl'/>
                    <div className='leading-8'>
                        <h2 className='text-2xl'>EMAIL</h2>
                        <span>BandHBarbershop@gmail.com</span>
                    </div>
                </div>
                <div className="col-span-1  p-4 flex gap-4">
                    <LocalPhoneIcon className='text-6xl'/>
                    <div className='leading-8'>
                        <h2 className='text-2xl'>CALL</h2>
                        <span>646-896-1090</span>
                    </div>
                </div>
                <div className="col-span-1 p-4 flex  gap-4">
                    <QueryBuilderIcon  className='text-6xl'/>
                    <div className='leading-8'>
                        <h2 className='text-2xl'>HOURS</h2>
                        <span>Mon – Thurs : 9:30am to 7:30pm<br />
                            Friday : 9:30am to 4pm <br />
                            Saturday : CLOSED <br />
                            Sunday : 10am to 7pm
                        </span>
                    </div>
                </div>
            </div>
            {/* SECTION-2 */}
            <div className=''>
                <Form />
            </div>
        </div>
    )
}

export default Contact;
import React from 'react'
import Styles from "@/app/services/services.module.css";
import Services from '@/components/Services/Services';
import Slider from '@/components/Slider/Slider';
import MonvingText from '@/UI/MovingText/MonvingText';
const Service = () => {
    return (
        <div>
            <MonvingText text="B&H SERVICES. "/>
            <div>
                <h1 className={Styles.secTow}>
                    For over 15 years we have been a landmark of the
                    old school barber shop experience.
                    Barbering is not a job, it’s art at B & H Barber
                    Shop in East Village NYC.
                </h1>
            </div>
            <Services />
            <div className='mt-14' >
            <Slider  /> 
            </div>
        </div>
    )
}

export default Service;
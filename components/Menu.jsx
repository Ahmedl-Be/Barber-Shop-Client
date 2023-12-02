"use client"
import React, { useState } from 'react'
import data from "@/data/data.js"
const HeadersNames = Object.keys(data);

const Menu = () => {
    const [active,setActive] = useState(HeadersNames[0])
    return (
        <div className="mt-5 md:mt-10 ">
            {/* HEADERS */}
            <div className="flex flex-col lg:flex-row md:gap-3 cursor-pointer ">
                {HeadersNames.map((head,index)=>(
                    <div key={index} onClick={()=>setActive(head)}
                    className={`opacity-${active === head ? '100':'50'} mb-5`}>
                    <span className='font-bold md:text-2xl text-l'>
                        {head}
                    </span>
                    <div className="w-[100%] h-0.5 bg-white
                    lg:w-[25vw]
                    "></div>
                    </div>))}
            </div>
            {/* MAIN MENU */}
            <div className="md:px-[5%] px-[1%] mt-2">
                {data[active].map((ele,index) => (
                    <div key={index} className={`flex justify-between
                    items-center mt-4 lg:mt-2 ${index%2===0 && 'text-amber-200'}`}>
                    <span className='md:text-2xl'>{ele.name}</span>
                    <span className='md:text-2xl'>${ele.price}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu;
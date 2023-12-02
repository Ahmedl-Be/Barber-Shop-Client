import React from 'react'

const layout = ({children}) => {
    return (
        <div className='flex justify-center items-center
        md:h-[100vh] h-[88vh]'>
            {children}
        </div>
    )
}

export default layout;
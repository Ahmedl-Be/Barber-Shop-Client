"use client"
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Styles from "./overLayout.module.css"

const OverLayout = ({res,overlayActive,setOverlayActive}) => {
    const closeOverlay = () => {
        setOverlayActive(false);
    };
    const overlayClass = overlayActive ? `${Styles.overlay} ${Styles.active}`:
    Styles.overlay;
    return (
        <div className={overlayClass} onClick={closeOverlay}>
            <div className="bg-black p-10 text-white opacity-80 flex
    flex-col gap-6 rounded">
                <button className="text-2xl"
                    onClick={closeOverlay}>
                    {res === "Success" ?
                        <CheckIcon /> :
                        <CloseIcon />}
                </button>
                <p className='text-white text-2xl text-center'>{res}</p>
            </div>
        </div>
    )
}

export default OverLayout;
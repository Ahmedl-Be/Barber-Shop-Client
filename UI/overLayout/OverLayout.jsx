"use client"
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';
import Styles from "./overLayout.module.css"

const OverLayout = ({ res, overlayActive, setOverlayActive }) => {
    const closeOverlay = () => {
        setOverlayActive(false);
    };
    const overlayClass = overlayActive ? `${Styles.overlay} ${Styles.active}` :
        Styles.overlay;
    let iconToRender;

    if (res === 'Success') {
        iconToRender = <CheckIcon />;
    } else if (res === 'loading...') {
        iconToRender = <HourglassFullTwoToneIcon />;
    } else {
        iconToRender = <CloseIcon />;
    }
    return (
        <div className={overlayClass} onClick={closeOverlay}>
            <div className="bg-black p-10 text-white opacity-80 flex
    flex-col gap-6 rounded">
                <button className="text-2xl"
                    onClick={closeOverlay}>
                        {iconToRender}
                </button>
                <p className='text-white text-2xl text-center'>{res}</p>
            </div>
        </div>
    )
}

export default OverLayout;
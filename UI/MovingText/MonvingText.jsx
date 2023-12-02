import React from 'react'
import Styles from "./movingText.module.css";

const MonvingText = ({text}) => {
    return (
        <div className={Styles.movingTextContainer}>
            <div className={Styles.backgroundImage}>
                <div className={Styles.movingText}>
                    {text + text + text}
                </div>
            </div>
        </div>
    )
}

export default MonvingText;
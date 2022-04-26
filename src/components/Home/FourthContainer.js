import React from 'react'
import styles from "../../styles/FourthContainer.module.css"

export default function FourthContainer() {
    return (
        <div className={styles.FourthContainer}>
            <div className={styles.firstbox4}>

            </div>
            <div className={styles.secondbox4}>
                <h1 className={styles.fourthTitle}>Even better with Fire TV Stick</h1>
                <p className={styles.fourthPara}>
                The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.
                </p>
                <button className={styles.btn4}>
                    Get Started
                </button>
            </div>
        </div>
    )
}

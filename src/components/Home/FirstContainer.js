import React from 'react'
import styles from "../../styles/FirstContainer.module.css"
  

export default function FirstContainer() {
    return (
        <div className={styles.FirstContainer}>
            <div className={styles.firstbox}>
                <h1>Welcome to Prime Video</h1>
                <p>
                    Join Prime to watch the latest movies, TV shows and award winning Amazon Originals
                </p>
                <button className={styles.btn}>
                    Start your 30-day free trail
                </button>
                <p className={styles.subpara}>
                    With select credit or debit cards
                </p>
            </div>
            <div className={styles.secondbox}>

            </div>
        </div>
    )
}

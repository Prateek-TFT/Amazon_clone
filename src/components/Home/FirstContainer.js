import React from 'react'
import styles from "../../styles/Home.module.css"
  

export default function FirstContainer() {
    return (
        <div className={styles['outer-container']}>
            <div className={styles['first-container']}>
                <div className={styles['first-box']}>
                    <h1>Welcome to Prime Video</h1>
                    <p>
                        Join Prime to watch the latest movies, TV shows and award winning Amazon Originals
                    </p>
                    <button className={styles['btn']}>
                        Start your 30-day free trail
                    </button>
                    <div className={styles['subpara']}>
                        With select credit or debit cards
                    </div>
                </div>
            </div>
        </div>
    )
}

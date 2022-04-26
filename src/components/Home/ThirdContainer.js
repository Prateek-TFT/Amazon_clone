import React from 'react'
import styles from "../../styles/ThirdContainer.module.css"

export default function ThirdContainer() {
    return (
        <div className={styles.ThirdContainer}>
            <div className={styles.firstbox3}>
                <h1 className={styles.thirdTitle}>One membership, many benefits</h1>
                <p className={styles.thirdPara}>
                    Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals & more.
                </p>
                <button className={styles.btn3}>
                    Get Started
                </button>
            </div>
            <div className={styles.secondbox3}>
            </div>
        </div>
    )
}

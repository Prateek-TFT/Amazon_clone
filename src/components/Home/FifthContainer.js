import React from 'react'
import styles from "../../styles/FifthContainer.module.css"

export default function FifthContainer() {
    return (
        <div className={styles.FifthContainer}>
            <div className={styles.firstbox5}>
                <h1 className={styles.fifthTitle}>Family Friendly</h1>
                <p className={styles.fifthPara}>
                    With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
                </p>
                <button className={styles.btn5}>
                    Get Started
                </button>
            </div>
            <div className={styles.secondbox5}>

            </div>
        </div>
    )
}

import React from 'react'
import styles from "../../styles/Home.module.css"

export default function FifthContainer() {
    return (
        <div className={styles['fifth-container']}>
            <div className={styles['fifth-box']}>
                <h1>Family Friendly</h1>
                <p>
                    With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
                </p>
                <button className={styles['btn']}>
                    Get Started
                </button>
            </div>
        </div>
    )
}


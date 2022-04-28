import React from 'react'

// import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo/logo.png"
import styles from "../../styles/Navbar.module.css"


export default function Navbar() {
    return (
        <header className={styles.nav}>
            <div className={styles.navContainer}>
                <a to="">
                    <img
                        src={logo}
                        alt=""
                        className={styles.logo}
                    />
                </a>
                <div className={styles.navPrimaryComponents}>
                    <div className={styles.navMainMenu}>
                        <ul className={styles.navUl}>
                            <li className={styles.navLi}>
                                <a to="">Home</a>
                            </li>
                            <li className={styles.navLi}>
                                <a to="">TV Shows</a>
                            </li>
                            <li className={styles.navLi}>
                                <a to="">Movies</a>
                            </li>
                            <li className={styles.navLi}>
                                <a to="">Channels</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navSearchbar}>
                        <form className={styles.nosubmit}>
                            <input className={styles.nosubmit} type="search" placeholder="Search" />
                        </form>
                    </div>
                    <div className={styles.navLanguage}>
                        <select>
                            {/* <option>EN</option> */}
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
                    <span className={styles.navAccounts}>Sign In</span>
                </div>
            </div>
        </header>
    )
}

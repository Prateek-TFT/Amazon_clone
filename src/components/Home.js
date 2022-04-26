import React from 'react'
import styles from "../styles/Home.module.css"
import FifthContainer from './Home/FifthContainer'
import FourthContainer from './Home/FourthContainer'
import ThirdContainer from './Home/ThirdContainer'
import SecondContainer from './Home/SecondContainer'
import FirstContainer from './Home/FirstContainer'
import Navbar from './Home/Navbar'
import Footer from './Home/Footer'

export default function Home() {
    return (
        <div className={styles.App}>
            <Navbar />
            <FirstContainer />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />
            <FifthContainer />
            <Footer />
        </div>
    )
}

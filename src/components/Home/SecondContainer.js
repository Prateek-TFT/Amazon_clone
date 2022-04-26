import React from 'react'
import styles from "../../styles/SecondContainer.module.css"
// import img1 from "../assets/images/img1.jpg"
const ImageData = [
    { alt: 'LionGate', src: require("../../assets/images/img1.jpg") },
    { alt: 'Discovery+', src: require('../../assets/images/img2.jpg') },
    { alt: 'ErosNow', src: require('../../assets/images/img3.jpg') },
    { alt: 'hoichoi', src: require('../../assets/images/img4.jpg') },
    { alt: 'DocuBay', src: require('../../assets/images/img5.jpg') },
    { alt: 'ShortsTv', src: require('../../assets/images/img6.jpg') },
    { alt: 'MUBI', src: require('../../assets/images/img7.jpg') },
    { alt: 'manoramamax', src: require('../../assets/images/img8.jpg') },
    { alt: 'hayu', src: require('../../assets/images/img9.jpg') },

]

export default function SecondContainer() {
    return (
        <div className={styles.SecondContainer}>
            <div className={styles.firstbox2}>
                <h1 className={styles.secondTitle}>Your favorite channels all in one place</h1>
                <p className={styles.secondPara}>
                    With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice
                </p>
            </div>
            <div className={styles.secondbox2}>
                {ImageData.map((item, index) => {
                    console.log("Images", item.src)
                    return (
                        <img className={styles.PlatformImg} src={item.src} alt={item.alt} key={index} ></img>
                    )
                })}
            </div>
        </div>
    )
}

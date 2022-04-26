import React from 'react'
import styles from "../../styles/Footer.module.css"
import logo from "../../assets/images/logo/logo2.png"
export default function Footer() {
    return (
        <div className={styles.Footer}>
            <img className={styles.footerLogo} src={logo} alt="logo" />
            <div className={styles.paraTerm}>
                <span style={{ color: "#0f79af" }}>Terms and Privacy Notice</span>
                <span style={{ color: "#0f79af" }}>Send us feedback</span>
                <span style={{ color: "#0f79af" }}>Help</span>
                <span style={{ color: "#818671" }}>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}

import React from "react";
import styles from "../../styles/CastDetails.module.css";
const CastDetails = () => {
  return (
    <div className={styles.castDetail}>
      <div className={styles.director}>
        <dt className={styles.castTitle}>Directors</dt>
        <dd className={styles.castDetailrightsubdivblue}>Ridley Scott</dd>
      </div>

      <div className={styles.starring}>
        <dt className={styles.castTitle}>Starring</dt>
        <dd className={styles.castDetailrightsubdivblue}>
          Lady Gaga, Adam Driver, Jared Leto
        </dd>
      </div>

      <div className={styles.genres}>
        <dt className={styles.castTitle}>Genres</dt>

        <dd className={styles.castDetailrightsubdivblue}>Drama,Suspense</dd>
      </div>

      <div className={styles.subtitle}>
        <dt className={styles.castTitle}>Subtitles</dt>
        <dd>Dansk [CC] , English [CC]</dd>
      </div>

      <div className={styles.language}>
        <dt className={styles.castTitle}>AudioLanguages</dt>
        <dd>Français (Canada) , Español (España) ,</dd>
      </div>
    </div>
  );
};
export default CastDetails;

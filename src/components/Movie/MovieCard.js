import React from "react";
// import Image from "../../assets/Image/mission-impossible-3.png";
// import prime from "../../assets/logo/prime.svg";
import styles from "../../styles/MoviesCard.module.css";
// import play from "../../assets/logo/play-button-arrowhead.png";
const MovieCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src='https://raw.githubusercontent.com/Prateek-TFT/Amazon_clone/sudip/src/assets/logo/prime.svg' />
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src="https://raw.githubusercontent.com/Prateek-TFT/Amazon_clone/sudip/src/assets/Image/mission-impossible-3.png" />
        </div>
        <div className={styles.details}>
          <button className={styles.button}>
            <div className={styles.play}></div>
          </button>
          <span>Included with Prime</span>
          <span className={styles.title}>Mission: Impossible III (2006)</span>
          <p className={styles.description}>
            Ethan Hunt comes face to face with a dangerous and sadistic arms
            dealer while trying to keep his identity secret in order to protect
            his girlfriend.
          </p>
          <div className={styles.runTime}>
            <span>2 h 5 min</span>
            <span>2006</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
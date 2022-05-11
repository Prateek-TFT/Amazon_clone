import React, { useState } from "react";
// import Image from "../assets/Image/mission-impossible-3.png";
// import prime from "../assets/logo/prime.svg";
import styles from "../../styles/MoviesCard.module.css";
const MovieCard = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={styles.content}>
        <div className={styles.image}>
          <img src="https://raw.githubusercontent.com/Prateek-TFT/Amazon_clone/sudip/src/assets/Image/mission-impossible-3.png" alt="movie_image" />
        </div>
        <div className={styles.logo}>
          <img src='https://raw.githubusercontent.com/Prateek-TFT/Amazon_clone/sudip/src/assets/logo/prime.svg' alt="prime_logo" />
        </div>
        {isShown && (
          <div className={styles.details}>
            <button className={styles.button}>
              <div className={styles.play}></div>
            </button>
            <span>Included with Prime</span>
            <span className={styles.title}>Mission: Impossible III (2006)</span>
            <p className={styles.description}>
              Ethan Hunt comes face to face with a dangerous and sadistic arms
              dealer while trying to keep his identity secret in order to
              protect his girlfriend.
            </p>
            <div className={styles.runTime}>
              <span>2 h 5 min</span>
              <span>2006</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieCard;
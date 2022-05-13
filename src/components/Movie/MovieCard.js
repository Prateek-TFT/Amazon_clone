import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/MoviesCard.module.css";
const MovieCard = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    window.location.replace(movie.link)
  }
  return (
    <div onClick={handleClick}
      className={styles.container}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={styles.content}>
        <div className={styles.image}>
          {/* <a href={movie.link} target="_blank"  rel="noreferrer">
            <img src={movie["Movie Image"]} alt="movie_image" />
          </a> */}
          <img src={movie["Movie Image"]} alt="movie_image" />
        </div>
        <div className={styles.logo}>
          <img
            src="https://raw.githubusercontent.com/Prateek-TFT/Amazon_clone/sudip/src/assets/logo/prime.svg"
            alt="prime_logo"
          />
        </div>
        {isShown && (
          <div className={styles.details}>
            <button className={styles.button}>
              <div className={styles.play}></div>
            </button>
            <span>Included with Prime</span>
            <span className={styles.title}>{movie["Movie name"]}</span>
            <p className={styles.description}>
              {movie["Description"].length > 100
                ? movie["Description"].substring(0, 100) + "..."
                : movie["Description"]}
            </p>
            <div className={styles.runTime}>
              <span>{movie["Movie time"]}</span>
              <span>{movie["Movie year"]}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieCard;

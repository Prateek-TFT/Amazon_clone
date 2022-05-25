import React from "react";
import styles from "./HoverScreen.module.css";
import prime from "../../assets/logo/prime.svg";
import { useNavigate } from "react-router-dom";

const HoverScreen = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate(`/movie/detail/${movie["_id"]}`);
  };
  const moviePlayHandler = () => {
    navigate("/player", { state: { link: movie?.["link"] } });
  };
  var overview;
  const description = movie["description"]?.split(" ");
  if (description.length > 19) {
    overview = description.slice(0, 19).join(" ") + "...";
  } else {
    overview = description.slice(0, description.length - 1).join(" ");
  }
  return (
    <div className={styles.hoverScreen}>
      <img src={prime} alt="logo" className={styles.mediaHoverPrimeImg} />

      <img
        src={movie["image"]}
        alt="movie_image"
        className={styles.mediaHoverImg}
        onClick={handleClick}
      />

      <div className={styles.hoverData}>
        <div className={styles.playDiv}>
          <button className={styles.button} onClick={moviePlayHandler}>
            <div className={styles.play}></div>
          </button>
          <div className={styles.playtext}>Play</div>
        </div>
        <div className={styles.primeText}>Included with Prime</div>
        <div className={styles.title}>{movie?.["movie-name"]}</div>
        <div className={styles.overview}>
          {/* {movie["description"]?.split(" ").length > 30
            ? movie["description"]?.substring(0, 100) + "..."
            : movie["description"]} */}
          {overview}
        </div>
        <div className={styles.footerScreen}>
          <div className={styles.runTime}>{movie["duration"]}</div>
          <div className={styles.releaseYear}>{movie["movie-year"]}</div>
        </div>
      </div>
    </div>
  );
};

export default HoverScreen;

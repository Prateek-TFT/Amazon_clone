import React from "react";
import HoverScreen from "../HoverScreen/HoverScreen";
import styles from "./WatchListCard.module.css";
import prime from "../../assets/logo/prime.svg";
const WatchListCard = ({ movie, key }) => {
  const setPosition = (id) => {
    let x = document.getElementById(`1${id}`);
    let divItem = document.getElementById(`2${id}`);
    if (divItem) {
      divItem.style.position = "absolute";
      divItem.style.top = parseInt(x.offsetTop, 10) + "px";
      divItem.style.left = parseInt(x.offsetLeft, 10) + "px";
    }
    return divItem.style;
  };
  return (
    <div key={key} id={key}>
      <div
        className={styles.mediaDiv}
        id={`1${key}`}
        onMouseEnter={() => {
          setPosition(key);
        }}
      >
        <div className={styles.media}>
          <img src={prime} alt="logo" className={styles.mediaHoverPrimeImg} />
          <img
            src={movie?.["image"]}
            alt="movie_image"
            className={styles.movieImg}
          />
        </div>

        <div className={styles.displayhoverScreen} id={`2${key}`}>
          <HoverScreen movie={movie} />
        </div>
      </div>
    </div>
  );
};
export default WatchListCard;

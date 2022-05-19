import React from "react";
import styles from "../MediaScreen/MediaScreen.module.css";
import HoverScreen from "../HoverScreen/HoverScreen";
import prime from "../../assets/logo/prime.svg";
import leftScrollIcon from "../../assets/logo/left-arrow.svg";
import rightScrollIcon from "../../assets/logo/right-arrow.svg";

const MediaScreen = ({ movies }) => {
  var count = 0;
  var moveCount = "movie10";

  const scrollToLeft = () => {
    document.getElementById("bannerDiv" + moveCount.toString()).scrollBy({
      left: -800,
    });
    if (count === -5.4) {
      count = -5;
    }
    count++;

    console.log("Left count is ", count);
    if (count > 0) {
      count = 0;
    }
  };
  const scrollToRight = () => {
    document.getElementById("bannerDiv" + moveCount.toString()).scrollBy({
      left: 800,
    });
    count--;
    console.log("RIght count is ", count);
    if (count < -9) {
      count = -9;
    }
  };

  const setPosition = (id) => {
    var x = document.getElementById(`1${id}`);
    var divItem = document.getElementById(`2${id}`);
    if (divItem) {
      divItem.style.position = "absolute";
      divItem.style.top = parseInt(x.offsetTop, 10) + "px";
      divItem.style.left = parseInt(x.offsetLeft, 10) + count * 800 + "px";
    }
    return divItem.style;
  };

  const shuffleData = (arr) => {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };
  if (movies.length > 0) {
    shuffleData(movies);
  }
  return (
    <div className={styles.mediaScreen}>
      <div className={styles.leftIconDiv} onClick={scrollToLeft}>
        <img
          src={leftScrollIcon}
          alt="left_Scroll"
          className={styles.leftIcon}
        />
      </div>
      <div className={styles.banner} id={"bannerDiv" + moveCount.toString()}>
        &nbsp;
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <div
                className={styles.mediaDiv}
                id={`1${index}`}
                onMouseEnter={() => {
                  setPosition(index);
                }}
              >
                <div className={styles.media}>
                  <img
                    src={prime}
                    alt="logo"
                    className={styles.mediaHoverPrimeImg}
                  />
                  <img
                    src={movie?.["image"]}
                    alt="movie_image"
                    className={styles.movieImg}
                  />
                </div>

                <div className={styles.displayhoverScreen} id={`2${index}`}>
                  <HoverScreen movie={movie} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.rightIconDiv} onClick={scrollToRight}>
        <img
          src={rightScrollIcon}
          alt="left_Scroll"
          className={styles.rightIcon}
        />
      </div>
    </div>
  );
};

export default MediaScreen;

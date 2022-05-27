import React, { useState } from "react";
import styles from "./ContinueWatchList.module.css";
import HoverScreen from "../HoverScreen/HoverScreen";
import prime from "../../assets/logo/prime.svg";
import leftScrollIcon from "../../assets/logo/left-arrow.svg";
import rightScrollIcon from "../../assets/logo/right-arrow.svg";
import crossIcon from "../../assets/logo/cross.svg";
const ContinueWatchList = ({ movies, id, heading }) => {
  const [toggle, setToggle] = useState(false);
  // const [showEditContinueWatchList, setShowEditContinueWatchList] =
  //   useState(false);
  // const [color, setColor] = useState("#FFFFFF");
  var count = 0;
  const scrollToLeft = () => {
    document.getElementById("bannerDiv" + id.toString()).scrollBy({
      left: -800,
    });
    if (count === -5.4) {
      count = -5;
    }
    count++;

    if (count > 0) {
      count = 0;
    }
  };
  const scrollToRight = () => {
    document.getElementById("bannerDiv" + id.toString()).scrollBy({
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
  if (movies?.length > 0) {
    shuffleData(movies);
  }
  const editContinueWatchListHandler = () => {
    setToggle(!toggle);
    // setShowEditContinueWatchList(!showEditContinueWatchList);
  };
  const editedContinueWatchListHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.mediaScreen}>
      <div className={styles.action}>
        <div className={styles.heading}>{heading}</div>
        {!toggle ? (
          <div
            className={styles.editButton}
            onClick={editContinueWatchListHandler}
          >
            Edit
          </div>
        ) : (
          <div
            className={styles.editButton}
            onClick={editedContinueWatchListHandler}
          >
            Done
          </div>
        )}
      </div>
      <div className={styles.leftIconDiv} onClick={scrollToLeft}>
        <img
          src={leftScrollIcon}
          alt="left_Scroll"
          className={styles.leftIcon}
        />
      </div>
      <div className={styles.banner} id={"bannerDiv" + id.toString()}>
        &nbsp;
        {movies.map((movie, index) => {
          return (
            <div key={index} id={movie._id}>
              <div className={styles.mediaDiv}>
                {!toggle && (
                  <>
                    <div
                      className={styles.media}
                      id={`1${index}`}
                      onMouseEnter={() => {
                        setPosition(index);
                      }}
                    >
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
                  </>
                )}
                {toggle && (
                  <>
                    <div className={styles.continueWatchListDeleteButton}>
                      <svg className={styles.crossIcon}>
                        <defs></defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <path
                            d="M26.5359445,24.3809524 L31.9234247,18.9934721 L29.7684326,16.83848 L24.3809524,22.2259603 L18.9934721,16.83848 L16.83848,18.9934721 L22.2259603,24.3809524 L16.83848,29.7684326 L18.9934721,31.9234247 L24.3809524,26.5359445 L29.7684326,31.9234247 L31.9234247,29.7684326 L26.5359445,24.3809524 Z M24,0 C37.2552,0 48,10.7448 48,24 C48,37.2552 37.2552,48 24,48 C10.7448,48 0,37.2552 0,24 C0,10.7448 10.7448,0 24,0 Z"
                            id="Combined-Shape"
                            fill='#FFFFFF'
                            // onMouseEnter={() => setColor("#FFFFFF00")}
                            // onmouseleave={() => setColor("#FFFFFF")}
                          />
                        </g>
                      </svg>
                    </div>
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
                  </>
                )}
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

export default ContinueWatchList;

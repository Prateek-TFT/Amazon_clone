import React, { useState } from "react";
import styles from "../../styles/MovieDetails.module.css";
import playbutton from "../../assets/logo/play.png";
import IconButton from "./IconButton";
import CastDetails from "./CastDetails";
import FeedbackButton from "./FeedbackButton";
import RelatedMovieList from "./RelatedMovieList";
import ProductionDetails from "./ProductionDetails";
const MovieDetails = () => {
  const [isShowMovie, setIsShowMovie] = useState(true);
  const [isShowDetails, setIsShowDetails] = useState(false);
  const showRelatedMoviesHandler = () => {
    setIsShowMovie(true);
    setIsShowDetails(false);
  };
  const showDetailsHandler = () => {
    setIsShowMovie(false);
    setIsShowDetails(true);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading}>House of Gucci</h1>
        {/* Badges Container */}
        <div className={styles.badgesContainer}>
          <div className={styles.badges}>
            <p>IMDb</p>
          </div>
          <span>6.6</span>
          <span>2 h 38 min</span>
          <span>2021</span>
          <div className={styles.badges}>
            <p>X-Ray</p>
          </div>
          <div className={styles.badges}>
            <p>U/A 13+</p>
          </div>
        </div>
        {/* Button Container */}
        <div className={styles.buttonContainer}>
          <div className={styles.playButton}>
            <img
              className={styles.buttonImage}
              alt={"playButton"}
              src={playbutton}
            />
            <div>Play</div>
          </div>
          <IconButton />
        </div>
        {/* Description */}
        <p className={styles.description}>
          Inspired by the true story of the family behind the Italian fashion
          empire. When Patrizia Reggiani marries into the Gucci family, her
          unbridled ambition begins to unravel the family legacy and triggers a
          spiral of betrayal, decadence, and murder.
        </p>
        {/* Cast details */}
        <CastDetails />
        {/* Terms and condition and feedback container */}
        <div className={styles.termContainer}>
          <p className={styles.term}>
            By clicking play, you agree to our
            <a href="https://www.primevideo.com/help/ref=atv_dp_terms?nodeId=202095490">
              Terms of Use.
            </a>
          </p>
          <FeedbackButton />
        </div>
        {/* Details and Related component */}
        <div className={styles.lastContainer}>
          <div className={styles.options}>
            <span
              className={isShowMovie ? styles.activeRelated : styles.related}
              onClick={showRelatedMoviesHandler}
            >
              Related
            </span>
            <span
              className={isShowDetails ? styles.activeDetails : styles.details}
              onClick={showDetailsHandler}
            >
              Details
            </span>
          </div>
          {isShowMovie && <RelatedMovieList />}
          {isShowDetails && <ProductionDetails />}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;

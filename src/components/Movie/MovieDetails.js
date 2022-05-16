import React, { useState , useEffect } from "react";
import { useDispatch  , useSelector} from 'react-redux';
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/MovieDetails.module.css";
import playbutton from "../../assets/logo/play.png";
import IconButton from "./IconButton";
import CastDetails from "./CastDetails";
import FeedbackButton from "./FeedbackButton";
import RelatedMovieList from "./RelatedMovieList";
import ProductionDetails from "./ProductionDetails";
import {handleFetchMovieDetail , handleFetchMovies} from '../../store/actions/movie-action'
const MovieDetails = () => {
  const [isShowMovie, setIsShowMovie] = useState(true);
  const [isShowDetails, setIsShowDetails] = useState(false);

  const {id} = useParams();
  const dispatch = useDispatch();
  const {loading ,movieDetail , listOfMovies} = useSelector(state => state.movie)

  useEffect(()=>{
    dispatch(handleFetchMovieDetail(id))
    dispatch(handleFetchMovies())
  },[])

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
        <h1 className={styles.heading}>{movieDetail?.['movie-name']}</h1>
        {/* Badges Container */}
        <div className={styles.badgesContainer}>
          <div className={styles.badges}>
            <p>IMDb</p>
          </div>
          <span>{movieDetail?.['imdb']}</span>
          <span>{movieDetail?.['duration']}</span>
          <span>{movieDetail?.['movie-year']}</span>
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
        <p className={styles.description}>{movieDetail?.['description']}</p>
        <CastDetails />
        <div className={styles.termContainer}>
          <p className={styles.term}>
            By clicking play, you agree to our
            <Link to="/">
              Terms of Use.
            </Link>
          </p>
          <FeedbackButton />
        </div>
        <div className={styles.lastContainer}>
          <div className={styles.options}>
            <span
              className={isShowMovie ? styles.activeRelated : styles.related}
              onClick={showRelatedMoviesHandler}
            >
              Related
            </span>
            <span
              className={isShowDetails ? styles.activeDetails : styles.details} onClick={showDetailsHandler} >
              Details
            </span>
          </div>
          {isShowMovie && <RelatedMovieList />}
          {isShowDetails && <ProductionDetails movieDetail={movieDetail} />}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;

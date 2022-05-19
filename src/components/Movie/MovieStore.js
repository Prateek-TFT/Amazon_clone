import { useSelector } from "react-redux";
import styles from "../../styles/MovieStore.module.css";
import MediaScreen from "../MediaScreen/MediaScreen";

const MovieStore = () => {
  const { listOfMovies, englishMoviesList, hindiMoviesList } = useSelector((state) => state.movie);

  return (
    <div className={styles["movie-container"]}>
      {englishMoviesList.length > 0 && (
        <MediaScreen movies={englishMoviesList} />
      )}
    </div>
  );
};

export default MovieStore;

import { useSelector } from "react-redux";
// import Slider from "react-slick";
// import MovieCard from './MovieCard';
import styles from "../../styles/MovieStore.module.css";
// import MovieSlider from './MovieSlider';
import MediaScreen from "../MediaScreen/MediaScreen";

const MovieStore = () => {
  const { listOfMovies, englishMoviesList, hindiMoviesList } = useSelector(
    (state) => state.movie
  );

  console.log(englishMoviesList);

  return (
    <>
      {/* {englishMoviesList.length > 0 && <MovieSlider moviesList={englishMoviesList} />} */}
      {englishMoviesList.length > 0 && (
        <MediaScreen movies={englishMoviesList} />
      )}
    </>
  );
};

export default MovieStore;

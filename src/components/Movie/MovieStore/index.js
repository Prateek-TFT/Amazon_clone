import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchContinueWatchingMoviesHandler,
  handleFetchMovies,
} from "../../../store/actions/movie-action";
import { useAuth } from "../../../store/AuthProvider";
import MediaScreen from "../../MediaScreen/MediaScreen";
import ContinueWatchList from "../../ContinueWatch/ContinueWatchList";
import Slick from "../../MediaScreen/slick";
const MovieStore = () => {
  const { englishMoviesList, hindiMoviesList, listOfContinueWatchingMovies } =
    useSelector((state) => state.movie);
  const { user } = useAuth();
  const { uid } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchMovies());
    dispatch(FetchContinueWatchingMoviesHandler(uid));
  }, [dispatch, uid]);

  return (
    <div>
      {listOfContinueWatchingMovies.length > 0 && (
        <ContinueWatchList
          heading="Continue Watching"
          id="watched"
          movies={listOfContinueWatchingMovies}
        />
      )}

      {englishMoviesList.length > 0 && (
        <MediaScreen
          heading="English Movies"
          id="english-movie-list"
          movies={englishMoviesList}
        />
      )}
      {englishMoviesList.length > 0 && (
        <Slick
          // heading="English Movies"
          // id="english-movie-list"
          movies={englishMoviesList}
        />
      )}

      {hindiMoviesList.length > 0 && (
        <MediaScreen
          heading="Hindi Movies"
          id="hindi=movie-list"
          movies={hindiMoviesList}
        />
      )}
    </div>
  );
};

export default MovieStore;

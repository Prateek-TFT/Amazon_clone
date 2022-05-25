import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchWatchedMoviesHandler,
  handleFetchMovies,
} from "../../../store/actions/movie-action";
import { useAuth } from "../../../store/AuthProvider";
import MediaScreen from "../../MediaScreen/MediaScreen";

const MovieStore = () => {
  const { englishMoviesList, hindiMoviesList, continueWatchingMovies } =
    useSelector((state) => state.movie);
  const { user } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchMovies());
    dispatch(FetchWatchedMoviesHandler(user.uid));
  }, [dispatch, user.uid]);
  return (
    <div>
      {englishMoviesList.length > 0 && (
        <MediaScreen id="hindi=movie-list" movies={hindiMoviesList} />
      )}
      {englishMoviesList.length > 0 && (
        <MediaScreen id="english-movie-list" movies={englishMoviesList} />
      )}
      {continueWatchingMovies.length > 0 && (
        <MediaScreen id="watched" movies={continueWatchingMovies} />
      )}
    </div>
  );
};

export default MovieStore;

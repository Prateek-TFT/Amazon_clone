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
      {continueWatchingMovies.length > 0 && (
        <MediaScreen heading={"Continue Watching"} id="watched" movies={continueWatchingMovies} />
      )}
      {englishMoviesList.length > 0 && (
        <MediaScreen heading={"English Movies"} id="english-movie-list" movies={englishMoviesList} />
      )}
      {hindiMoviesList.length > 0 && (
        <MediaScreen heading={"Hindi Movies"} id="hindi=movie-list" movies={hindiMoviesList} />
      )}
    </div>
  );
};

export default MovieStore;

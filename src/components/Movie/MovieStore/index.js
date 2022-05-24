import { useSelector } from "react-redux";
import MediaScreen from "../../MediaScreen/MediaScreen";

const MovieStore = () => {
  const { listOfMovies, englishMoviesList, hindiMoviesList } = useSelector((state) => state.movie);

  return (
    <div>
      {englishMoviesList.length > 0 && (
        <MediaScreen id='english-movie' movies={englishMoviesList} />
      )}
    </div>
  );
};

export default MovieStore;

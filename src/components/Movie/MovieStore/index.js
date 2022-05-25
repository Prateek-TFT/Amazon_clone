import { useSelector } from "react-redux";
import MediaScreen from "../../MediaScreen/MediaScreen";

const MovieStore = () => {
  const { listOfMovies, englishMoviesList, hindiMoviesList } = useSelector(
    (state) => state.movie
  );

  return (
    <div>
      {englishMoviesList.length > 0 && (
        <MediaScreen
          heading="English Movies"
          id="english-movie"
          movies={englishMoviesList}
        />
      )}
      {hindiMoviesList.length > 0 && (
        <MediaScreen
          heading="Hindi Movies"
          id="hindi-movie"
          movies={hindiMoviesList}
        />
      )}
    </div>
  );
};

export default MovieStore;

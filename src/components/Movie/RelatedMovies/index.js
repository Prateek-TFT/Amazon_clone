import React from "react";
import {useSelector} from "react-redux";
<<<<<<< HEAD:src/components/Movie/RelatedMovieList.js
import MediaScreen from "../MediaScreen/MediaScreen";
=======
import MediaScreen from "../../MediaScreen/MediaScreen";
>>>>>>> dev:src/components/Movie/RelatedMovies/index.js
const RelatedMovieList = ({year}) => {

  const {listOfMovies} = useSelector(state => state.movie);

  const relatedMoviesList = listOfMovies && listOfMovies.filter((movie) => {
    return (movie['movie-year'] >= year-3 && movie['movie-year'] <= year+3)
  })
  
<<<<<<< HEAD:src/components/Movie/RelatedMovieList.js
  return <MediaScreen movies={relatedMoviesList} />
=======
  return <MediaScreen movies={relatedMoviesList} />;
>>>>>>> dev:src/components/Movie/RelatedMovies/index.js
};
export default RelatedMovieList;

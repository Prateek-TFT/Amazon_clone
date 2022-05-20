import React from "react";
import {useSelector} from "react-redux";
<<<<<<< HEAD:src/components/Movie/RelatedMovieList.js
import MediaScreen from "../MediaScreen/MediaScreen";
=======
import MediaScreen from "../../MediaScreen/MediaScreen";
>>>>>>> 35bfc5cb6478a44cb54a19d3a984b6dc66957b97:src/components/Movie/RelatedMovies/index.js
const RelatedMovieList = ({year}) => {

  const {listOfMovies} = useSelector(state => state.movie);

  const relatedMoviesList = listOfMovies && listOfMovies.filter((movie) => {
    return (movie['movie-year'] >= year-3 && movie['movie-year'] <= year+3)
  })
  
  return <MediaScreen movies={relatedMoviesList} />;
};
export default RelatedMovieList;

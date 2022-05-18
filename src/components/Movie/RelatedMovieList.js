import React from "react";
import {useSelector} from "react-redux";
import MovieCard from "./MovieCard";
import MovieSlider from "./MovieSlider";
const RelatedMovieList = ({year}) => {

  const {listOfMovies} = useSelector(state => state.movie);

  const relatedMoviesList = listOfMovies && listOfMovies.filter((movie) => {
    return (movie['movie-year'] >= year-3 && movie['movie-year'] <= year+3)
  })
  
  return <MovieSlider moviesList={relatedMoviesList} />;
};
export default RelatedMovieList;

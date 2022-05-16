import React from "react";
import {useSelector} from "react-redux";
import MovieCard from "./MovieCard";
const RelatedMovieList = () => {

  const {listOfMovies} = useSelector(state => state.movie);
  
  return <div></div>;
};
export default RelatedMovieList;

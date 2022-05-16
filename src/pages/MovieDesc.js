import React from 'react'
import Navbar from "../components/Header/Navbar";
import MovieDetails from '../components/Movie/MovieDetails';
import Footer from '../components/Footer/Footer';
function MovieDesc() {
  return (
    <>
      <Navbar />
      <MovieDetails />
      <Footer/>
    </>
  )
}

export default MovieDesc

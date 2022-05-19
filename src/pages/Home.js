import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MainCarousel } from '../components/Carousel/MainCarousel';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import HomeContainer from '../components/Home/HomeContainer';
import MovieStore from '../components/Movie/MovieStore';
import { handleFetchMovies } from '../store/actions/movie-action';
import { useAuth } from '../store/AuthProvider';

const Home = () => {

  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchMovies())
  },[])
  return (
    <>
      <Navbar />
      {user &&
        <>
          <MainCarousel />
          <MovieStore style={{marginBottom : '500px'}} />
        </>
      } 
      {!user && <HomeContainer />}
      {/* <Footer /> */}
    </>
  )
}

export default Home

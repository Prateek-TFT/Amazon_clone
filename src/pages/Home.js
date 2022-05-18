import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MainCarousel } from '../components/Carousel/MainCarousel';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import FifthContainer from '../components/Home/FifthContainer';
import FirstContainer from '../components/Home/FirstContainer';
import FourthContainer from '../components/Home/FourthContainer';
import SecondContainer from '../components/Home/SecondContainer';
import ThirdContainer from '../components/Home/ThirdContainer';
import VideoCard from '../components/Movie/VideoCard';
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
          {/* <MovieStore style={{marginBottom : '500px'}} />
          <MovieStore style={{marginBottom : '500px'}} />
          <MovieStore style={{marginBottom : '500px'}} /> */}

          {/* <VideoCard /> */}
          {/* <Card/> */}
        </>
      } {!user && <>

        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
        <FourthContainer />
        <FifthContainer />
      </>
      }
      {/* <Footer /> */}
    </>
  )
}

export default Home

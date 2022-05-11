import React from 'react';
import { MainCarousel } from '../components/Carousel/MainCarousel';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import FifthContainer from '../components/Home/FifthContainer';
import FirstContainer from '../components/Home/FirstContainer';
import FourthContainer from '../components/Home/FourthContainer';
import SecondContainer from '../components/Home/SecondContainer';
import ThirdContainer from '../components/Home/ThirdContainer';
import MovieStore from '../components/Movie/MovieStore';
import { useAuth } from '../store/AuthProvider';

const Home = () => {

  const { user } = useAuth();
  return (
    <>
      <Navbar />
      {user &&
        <>
          <MainCarousel />
          <MovieStore />

        </>
      } {!user && <>

        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
        <FourthContainer />
        <FifthContainer />
      </>
      }
      <Footer />
    </>
  )
}

export default Home

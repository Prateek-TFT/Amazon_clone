import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import FifthContainer from '../components/Home/FifthContainer';
import FirstContainer from '../components/Home/FirstContainer';
import FourthContainer from '../components/Home/FourthContainer';
import SecondContainer from '../components/Home/SecondContainer';
import ThirdContainer from '../components/Home/ThirdContainer';

const Home = () => {
  return (
    <>
    <Navbar />
    <FirstContainer />
    <SecondContainer />
    <ThirdContainer />
    <FourthContainer />
    <FifthContainer />
    <Footer />
    </>
  )
}

export default Home

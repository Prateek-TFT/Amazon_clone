import React, { useEffect, useState } from "react";
import Navbar from '../../components/Header/Navbar';
import WatchListMovies from '../../components/WatchListMovies'
import RentalMovies from '../../components/RentalMovies'
import styles from "./MyStuff.module.css";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../store/AuthProvider";
import { handleFetchWatchlist } from "../../store/actions/movie-action";


const MyStuff = () => {
  const [isShowList, setIsShowList] = useState(true);
  const toggleHandler = () => setIsShowList(!isShowList);
  const dispatch = useDispatch();
  const {listOfWatchListMovies} = useSelector(state => state.movie);
  const {user} = useAuth();
  const {uid} = user;
  console.log(listOfWatchListMovies)

  useEffect(() => {
    dispatch(handleFetchWatchlist(uid))
  },[uid,dispatch])

  return (
    <>
      <Navbar />
      <div className={styles.mystaff}>
        <div className={styles.navigation}>
          <span className={isShowList ? styles.active : styles.watchlist} onClick={toggleHandler} >
            Watchlist
          </span>
          <span className={!isShowList ? styles.active : styles.rental} onClick={toggleHandler} >
            Purchases & Rentals
          </span>
        </div>
        {isShowList && <WatchListMovies />}
        {!isShowList && <RentalMovies />}
      </div>
      <Footer />
    </>
  );
};

export default MyStuff;

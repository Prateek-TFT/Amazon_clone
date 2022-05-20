import React, { useState } from "react";
import Navbar from '../../components/Header/Navbar';
import WatchListMovies from '../../components/WatchListMovies'
import RentalMovies from '../../components/RentalMovies'
import styles from "./MyStuff.module.css";
import Footer from "../../components/Footer/Footer";


const MyStuff = () => {
  const [isShowList, setIsShowList] = useState(true);
  const toggleHandler = () => setIsShowList(!isShowList);
  return (
    <>
      <Navbar />
      <div className={styles.mystaff}>
        <div className={styles.navigation}>
          <span
            className={isShowList ? styles.active : styles.watchlist}
            onClick={toggleHandler}
          >
            Watchlist
          </span>
          <span
            className={!isShowList ? styles.active : styles.rental}
            onClick={toggleHandler}
          >
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

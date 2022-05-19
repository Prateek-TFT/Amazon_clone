import React, { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/MyStaff.module.css";
import WatchList from "../components/MyStaff/WatchList";
import Rental from "../components/MyStaff/Rental";
const MyStaff = () => {
  const [isShowWatchList, setIsShowWatchList] = useState(true);
  const [isShowRental, setIsShowRental] = useState(false);
  const showWatchListHandler = () => {
    setIsShowWatchList(true);
    setIsShowRental(false);
  };
  const showRentalListHandler = () => {
    setIsShowWatchList(false);
    setIsShowRental(true);
  };
  return (
    <>
      <Navbar />
      <div className={styles.mystaff}>
        <div className={styles.navigation}>
          <span
            className={isShowWatchList ? styles.active : styles.watchlist}
            onClick={showWatchListHandler}
          >
            Watchlist
          </span>
          <span
            className={isShowRental ? styles.active : styles.rental}
            onClick={showRentalListHandler}
          >
            Purchases & Rentals
          </span>
        </div>
        {isShowWatchList && <WatchList />}
        {isShowRental && <Rental />}
      </div>
      <Footer />
    </>
  );
};

export default MyStaff;

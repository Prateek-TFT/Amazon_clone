import React, { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/MyStaff.module.css";
import WatchList from "../components/MyStaff/WatchList";
import Rental from "../components/MyStaff/Rental";
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
        {isShowList && <WatchList />}
        {!isShowList && <Rental />}
      </div>
      <Footer />
    </>
  );
};

export default MyStuff;

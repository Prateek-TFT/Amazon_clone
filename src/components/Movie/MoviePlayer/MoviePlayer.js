import React from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import styles from "../MoviePlayer/MoviePlayer.module.css";
const MoviePlayer = () => {
  const location = useLocation();
  return (
    <div className={styles["player-wrapper"]}>
      <ReactPlayer
        controls
        className={styles["react-player"]}
        url={location.state.link}
        width="100%"
        height="600px"
      />
    </div>
  );
};
export default MoviePlayer;

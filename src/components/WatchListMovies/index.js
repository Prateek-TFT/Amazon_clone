import { Link } from 'react-router-dom';
import styles from './WatchListMovies.module.css';
import emptyWatchList from '../../assets/empty_watchlist.png';
import WatchListCard from './WatchListCard';

const WatchListMovies = ({ movies }) => {
  return (
    <>
      {
        movies?.length > 0 ?
          movies.map((movie, index) => <WatchListCard key={index} movie={movie} />) :
          (
            <div className={styles.WatchListContainer}>
              <div className={styles.emptyWatchListContainer}>
                <img
                  src={emptyWatchList}
                  alt="empty-watchlist"
                  className={styles.emptyWatchListImg}
                />
                <div className={styles.emptyMsg}>
                  You have no TV shows on Your Watchlist
                </div>
                <div className={styles.instruction}>
                  Add <Link to="/">TV shows</Link> and <Link to="/">Movies</Link> that
                  you want to watch later by clicking Add to Watchlist.
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}

export default WatchListMovies;

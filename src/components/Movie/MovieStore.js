import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Spinner from '../UI/Spinner';
import styles from '../../styles/MovieStore.module.css';

const MovieStore = () => {
  const  { listOfMovies , loading , englishMoviesList , hindiMoviesList } = useSelector(state => state.movie);
  console.log(englishMoviesList)
  console.log(hindiMoviesList)
  if(loading) {
    return <Spinner />
  }
  return (
    <div className={styles['movie-store']}>
      
      {
        listOfMovies.length> 0 &&
        listOfMovies.map((movie,index) => <MovieCard key={index} movie={movie} />)
      }

    </div>
  )
}

export default MovieStore

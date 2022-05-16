import { useSelector } from 'react-redux';
import Slider from "react-slick";
import MovieCard from './MovieCard';
import styles from '../../styles/MovieStore.module.css';
import MovieSlider from './MovieSlider';

const MovieStore = () => {
  const  { listOfMovies , englishMoviesList , hindiMoviesList } = useSelector(state => state.movie);

  console.log(englishMoviesList)


  return (
    <div className={styles['movie-container']}>
      {englishMoviesList.length > 0 && <MovieSlider moviesList={englishMoviesList} />}
    </div>
  )
}

export default MovieStore

import { useSelector } from 'react-redux';
import Slider from "react-slick";
import MovieCard from './MovieCard';
import Spinner from '../UI/Spinner';
import styles from '../../styles/MovieStore.module.css';
import {multiCarouselSettings} from '../Carousel/carousel-setting/CarouselSetting';

const MovieStore = () => {
  const  { listOfMovies , loading , englishMoviesList , hindiMoviesList } = useSelector(state => state.movie);


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  console.log(englishMoviesList)


  return (
    <div className={styles['movie-container']}>
      <Slider {...settings}>
          {
            englishMoviesList.length > 0 &&
            englishMoviesList.map((movie , index) => <MovieCard key={index} movie={movie} />)
          }
      </Slider>
    </div>
  )
}

export default MovieStore

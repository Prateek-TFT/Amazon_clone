import Slider from "react-slick";
import MovieCard from "./MovieCard";


const MovieSlider = ({moviesList}) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        rows:2,
        slidesToShow: 4.3,
        slidesToScroll: 2,
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

    return (
        <Slider {...settings}>
            {
                moviesList.map((movie , index) => <MovieCard key={index} movie={movie} />)
            }
        </Slider>
    )
}

export default MovieSlider;
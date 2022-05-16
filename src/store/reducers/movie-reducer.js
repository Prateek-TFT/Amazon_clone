import { 
  FETCH_ALL_MOVIES, FETCH_MOVIE_DETAIL, TOGGLE_LOADING ,

} from '../actions/movie-action';
  

const initialMoviesState = {
  listOfMovies : [],
  englishMoviesList : [],
  hindiMoviesList : [],
  listOfWatchListMovis : [],
  loading : true,
  movieDetail : {}
}

export const movieReducers = (state = initialMoviesState , action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      const englishMovies = action.payload.filter((movie) => movie['audio-lang'] === 'English');
      const hindiMovies = action.payload.filter((movie) => movie['audio-lang'] === 'Hindi');
      return {
        ...state,
        listOfMovies : [...action.payload],
        englishMoviesList : englishMovies,
        hindiMoviesList : hindiMovies,
        loading : false
      }

    case  TOGGLE_LOADING : 
      return {
        ...state,
        loading : !state.loading
      }

    case FETCH_MOVIE_DETAIL : 
      return {
        ...state,
        movieDetail : {...action.payload}
      }
  
    default:
      return state;
  }
}


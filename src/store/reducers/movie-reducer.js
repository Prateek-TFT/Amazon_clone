import { 
  FETCH_ALL_MOVIES, FETCH_MOVIE_DETAIL, SEARCH_MOVIES, TOGGLE_LOADING ,

} from '../actions/movie-action';
  

const initialMoviesState = {
  listOfMovies : [],
  englishMoviesList : [],
  hindiMoviesList : [],
  listOfWatchListMovis : [],
  loading : true,
  movieDetail : {},
  searchMoviesList : []
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

    case SEARCH_MOVIES : 
      if(action.payload.length > 0) {
        // console.log(action.payload)
        // const movies = state.listOfMovies.filter((movie) => movie['movie-name'].toLowerCase().includes(action.payload.toLowerCase()))
        return {
          ...state,
          searchMoviesList : state.listOfMovies.filter((movie) => movie['movie-name'].toLowerCase().includes(action.payload.toLowerCase())),
        }
      }
      return state;
      
  
    default:
      return state;
  }
}


import { 
  FETCH_MOVIES, TOGGLE_LOADING ,

} from '../actions/movie-action';
  

const initialMoviesState = {
  listOfMovies : [],
  englishMoviesList : [],
  hindiMoviesList : [],
  listOfWatchListMovis : [],
  loading : true,
}

export const movieReducers = (state = initialMoviesState , action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      const englishMovies = action.payload.filter((movie) => movie['Audio Lang'] === 'English');
      const hindiMovies = action.payload.filter((movie) => movie['Audio Lang'] === 'Hindi');
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
  
    default:
      return state;
  }
}


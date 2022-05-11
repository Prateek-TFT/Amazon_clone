import { 
  FETCH_MOVIES, TOGGLE_LOADING ,

} from '../actions/movie-action';
  

const initialMoviesState = {
  listOfMovies : [],
  listOfWatchListMovis : [],
  loading : true,
}

export const movieReducers = (state = initialMoviesState , action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        listOfMovies : [...action.payload],
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


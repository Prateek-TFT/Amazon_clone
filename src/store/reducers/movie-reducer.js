import { 
  FETCH_MOVIES ,

} from '../actions/movie-action';
  

const initialMoviesState = {
  listOfMovies : [],
  listOfWatchListMovis : [],
  loading : false,
}

export const movieReducers = (state = initialMoviesState , action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        listOfMovies : [...action.payload]
      }
  
    default:
      return state;
  }
}


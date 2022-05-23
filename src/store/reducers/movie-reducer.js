import {
  FETCH_ALL_MOVIES, FETCH_MOVIE_DETAIL, SEARCH_MOVIES, TOGGLE_LOADING, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, FETCH_WATCHLIST

} from '../actions/movie-action';


const initialMoviesState = {
  listOfMovies: [],
  englishMoviesList: [],
  hindiMoviesList: [],
  listOfWatchListMovies: [],
  loading: true,
  movieDetail: {},
  searchMoviesList: []
}

export const movieReducers = (state = initialMoviesState, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      const englishMovies = action.payload.filter((movie) => movie['audio-lang'] === 'English');
      const hindiMovies = action.payload.filter((movie) => movie['audio-lang'] === 'Hindi');
      return {
        ...state,
        listOfMovies: [...action.payload],
        englishMoviesList: englishMovies,
        hindiMoviesList: hindiMovies,
        loading: false
      }

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading
      }

    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: { ...action.payload }
      }

    case SEARCH_MOVIES:
      return {
        ...state,
        searchMoviesList: state.listOfMovies.filter((movie) => movie['movie-name'].toLowerCase().includes(action.payload.toLowerCase())),
      }

    case FETCH_WATCHLIST:
      return {
        ...state,
        listOfWatchListMovies: action.payload,
      };

    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        listOfWatchListMovies: state.listOfWatchListMovies.filter(
          (movie) => movie._id !== action.payload
        ),
      };

    case ADD_TO_WATCHLIST:
      return {
        ...state,
        listOfWatchListMovies: [action.payload, ...state.listOfWatchListMovies],
      };

    default:
      return state;
  }
}

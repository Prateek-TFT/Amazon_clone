import {
  ADD_TO_WATCHLIST,
  ADD_WATCHED_MOVIES,
  FETCH_ALL_MOVIES,
  FETCH_ALL_WATCHLIST_MOVIES,
  FETCH_MOVIE_DETAIL,
  REMOVE_FROM_WATCHLIST,
  SEARCH_MOVIES,
  TOGGLE_LOADING,
  FETCH_ALL_CONTINUE_WATCHING_MOVIES,
  REMOVE_FROM_CONTINUE_WATCH_MOVIES,
  ADD_TO_CONTINUE_WATCHING,
} from "../actions/movie-action";

const initialMoviesState = {
  listOfMovies: [],
  englishMoviesList: [],
  hindiMoviesList: [],
  listOfWatchListMovis: [],
  listOfContinueWatchingMovies: [],
  loading: true,
  movieDetail: {},
  searchMoviesList: [],
};

export const movieReducers = (state = initialMoviesState, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      const englishMovies = action.payload.filter(
        (movie) => movie["audio-lang"] === "English"
      );
      const hindiMovies = action.payload.filter(
        (movie) => movie["audio-lang"] === "Hindi"
      );
      return {
        ...state,
        listOfMovies: [...action.payload],
        englishMoviesList: englishMovies,
        hindiMoviesList: hindiMovies,
        loading: false,
      };

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: { ...action.payload },
      };

    case SEARCH_MOVIES:
      return {
        ...state,
        searchMoviesList: state.listOfMovies.filter((movie) =>
          movie["movie-name"]
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ),
      };

    case FETCH_ALL_WATCHLIST_MOVIES:
      return {
        ...state,
        listOfWatchListMovies: action.payload,
      };

    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        listOfWatchListMovies: state.listOfWatchListMovis.filter(
          (movie) => movie["_id"] !== action.payload
        ),
      };

    case ADD_TO_WATCHLIST:
      return {
        ...state,
        listOfWatchListMovies: [action.payload, ...state.listOfWatchListMovis],
      };
    case FETCH_ALL_CONTINUE_WATCHING_MOVIES:
      return {
        ...state,
        listOfContinueWatchingMovies: [...action.payload],
      };

    case ADD_TO_CONTINUE_WATCHING : 
      return {
        ...state,
        listOfContinueWatchingMovies : [...state.listOfContinueWatchingMovies,action.payload]
      }

    case REMOVE_FROM_CONTINUE_WATCH_MOVIES:
      return {
        ...state,
      };
    default:
      return state;
  }
};

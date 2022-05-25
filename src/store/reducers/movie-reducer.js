import {
  ADD_TO_WATCHLIST,
  ADD_WATCHED_MOVIES,
  FETCH_ALL_MOVIES,
  FETCH_ALL_WATCHLIST_MOVIES,
  FETCH_MOVIE_DETAIL,
  FETCH_WATCHED_MOVIES,
  REMOVE_FROM_WATCHLIST,
  REMOVE_WATCHED_MOVIES,
  SEARCH_MOVIES,
  TOGGLE_LOADING,
} from "../actions/movie-action";

const initialMoviesState = {
  listOfMovies: [],
  englishMoviesList: [],
  hindiMoviesList: [],
  listOfWatchListMovis: [],
  continueWatchingMovies: [],
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
    case FETCH_WATCHED_MOVIES:
      return {
        ...state,
        continueWatchingMovies: [...action.payload],
      };
    case ADD_WATCHED_MOVIES:
      return {
        ...state,
        continueWatchingMovies: [
          action.payload,
          ...state.continueWatchingMovies,
        ],
      };
    case REMOVE_WATCHED_MOVIES:
      return {
        ...state,
        continueWatchingMovies: state.continueWatchingMovies.filter(
          (movie) => movie["_id"] !== action.payload
        ),
      };
    default:
      return state;
  }
};

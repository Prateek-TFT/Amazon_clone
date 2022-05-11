import {
    ADD_MOVIES,
    ADD_TO_WATCHLIST,
    REMOVE_FROM_WATCHLIST,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT,
  } from '../actions';
  import { combineReducers } from 'redux';
  
  const initialMoviesState = {
    list: [],
    watchlist: [],
    // showWatchlist: false,
  };
  export function movies(state = initialMoviesState, action) {

  
    switch (action.type) {
      case ADD_MOVIES:
        return {
          ...state,
          list: action.movies,
        }; // returning a new array not changing in state
      case ADD_TO_WATCHLIST:
        return {
          ...state,
          watchlist: [action.movie, ...state.watchlist],
        };

      case REMOVE_FROM_WATCHLIST:
        const filteredArray = state.watchlist.filter(
          (movie) => movie.Title !== action.movie.Title
        );
        return {
          ...state,
          watchlist: filteredArray,
        };
      case ADD_MOVIE_TO_LIST:
        return {
          ...state,
          list: [action.movie, ...state.list],
        };
      default:
        return state;
    }
  }
  
  const initialSearchState = {
    results: {},
    showSearchResults: false,
  };
  
  export function search(state = initialSearchState, action) {
    switch (action.type) {
      case ADD_SEARCH_RESULT:
        return {
          ...state,
          results: action.movie,
          showSearchResults: true,
        };
      case ADD_MOVIE_TO_LIST:
        return {
          ...state,
          showSearchResults: false,
        };
      default:
        return state;
    }
  }

  
  export default combineReducers({
    movies,
    search,
  });
  
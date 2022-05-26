// action types
export const FETCH_ALL_MOVIES = "FETCH_ALL_MOVIES";
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";
export const FETCH_ALL_WATCHLIST_MOVIES = "FETCH_ALL_WATCHLIST_MOVIES";
export const TOGGLE_LOADING = "SET_LOADING";
export const FETCH_MOVIE_DETAIL = "FETCH_MOVIE_DETAIL";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const REMOVE_WATCHED_MOVIES = "REMOVE_WATCHED_MOVIES";
export const FETCH_WATCHED_MOVIES = "FETCH_WATCHED_MOVIES";
// action creators

export const fetchWatchedMovies = (movies) => {
  return {
    type: FETCH_WATCHED_MOVIES,
    payload: movies,
  };
};
export const removeWatchedMovies = (movies) => {
  return {
    type: REMOVE_WATCHED_MOVIES,
    payload: movies,
  };
};
export const fetchMovies = (movies) => {
  return {
    type: FETCH_ALL_MOVIES,
    payload: movies,
  };
};

export const fetchMovieDetail = (movie) => {
  return {
    type: FETCH_MOVIE_DETAIL,
    payload: movie,
  };
};

export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING,
  };
};

export const fetchWatchlist = (movies) => {
  return {
    type: FETCH_ALL_WATCHLIST_MOVIES,
    payload: movies,
  };
};

export const addToWatchlist = (movie) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: movie,
  };
};

export const removeFromWatchlist = (movie) => {
  return {
    type: REMOVE_FROM_WATCHLIST,
    payload: movie,
  };
};

export const searchMovies = (data) => {
  return {
    type: SEARCH_MOVIES,
    payload: data,
  };
};
// asyn action function
export const handleFetchMovies = () => {
  const url = "https://movie-78f07-default-rtdb.firebaseio.com/movies.json";
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const movies = [];
      const res = await fetch(url);
      const data = await res.json();
      for (const key in data) {
        movies.push({
          _id: key,
          imdb: data[key].imdb,
          trailerOrClips: data[key].trailer,
          "movie-name": data[key]["movie-name"],
          link: data[key]["link"],
          duration: data[key]["duration"],
          "movie-year": data[key]["movie-year"],
          description: data[key]["description"],
          director: data[key]["director"],
          starring: data[key]["starring"],
          genres: data[key]["genres"],
          subtitles: data[key]["subtitles"],
          "audio-lang": data[key]["audio-lang"],
          producer: data[key]["producer"],
          "content-advisory": data[key]["content-advisrory"],
          image: data[key]["image"],
        });
      }
      dispatch(toggleLoading());
      dispatch(fetchMovies(movies));
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const FetchWatchedMoviesHandler = (id) => {
  const url = `https://app-88579-default-rtdb.firebaseio.com/${id}/continueWatching.json`;
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const movies = [];
      const res = await fetch(url);
      const data = await res.json();
      for (const key in data) {
        movies.push({
          _id: key,
          imdb: data[key].imdb,
          trailerOrClips: data[key].trailer,
          "movie-name": data[key]["movie-name"],
          link: data[key]["link"],
          duration: data[key]["duration"],
          "movie-year": data[key]["movie-year"],
          description: data[key]["description"],
          director: data[key]["director"],
          starring: data[key]["starring"],
          genres: data[key]["genres"],
          subtitles: data[key]["subtitles"],
          "audio-lang": data[key]["audio-lang"],
          producer: data[key]["producer"],
          "content-advisory": data[key]["content-advisrory"],
          image: data[key]["image"],
        });
      }
      dispatch(fetchWatchedMovies(movies));
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const handleFetchMovieDetail = (id) => {
  const url = `https://movie-78f07-default-rtdb.firebaseio.com/movies/${id}.json`;
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch the data from api!");
      }
      const movie = await res.json();
      dispatch(toggleLoading());
      dispatch(fetchMovieDetail(movie));
    } catch (error) {
      console.log(error.message);
    }
  };
};

//function to fetch all watchlist movies
export const handleFetchWatchlist = () => {
  const url = "https://movie-78f07-default-rtdb.firebaseio.com/watchlist.json";
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch all watchlish movies");
      }
      const data = await response.json();
      const movies = [];
      for (const key in data) {
        movies.push({
          _id: key,
          imdb: data[key].imdb,
          trailerOrClips: data[key].trailer,
          "movie-name": data[key]["movie-name"],
          link: data[key]["link"],
          duration: data[key]["duration"],
          "movie-year": data[key]["movie-year"],
          description: data[key]["description"],
          director: data[key]["director"],
          starring: data[key]["starring"],
          genres: data[key]["genres"],
          subtitles: data[key]["subtitles"],
          "audio-lang": data[key]["audio-lang"],
          producer: data[key]["producer"],
          "content-advisory": data[key]["content-advisrory"],
          image: data[key]["image"],
        });
      }
      dispatch(toggleLoading());
      dispatch(fetchWatchlist(movies));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const handleAddToWatchlist = (movie) => {
  const url = "https://movie-78f07-default-rtdb.firebaseio.com/watchlist.json";
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        throw new Error("Failed to add to watchlist");
      }
      const data = await response.json();
      const newWatchlist = { _id: data.name, ...movie };
      dispatch(addToWatchlist(newWatchlist));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const handleDeleteFromWatchlist = (id) => {
  const url = `https://movie-78f07-default-rtdb.firebaseio.com/watchlist.json/${id}.json`;
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to remove from watchlist");
      }
      dispatch(removeFromWatchlist(id));
    } catch (error) {
      console.log(error.message);
    }
  };
};

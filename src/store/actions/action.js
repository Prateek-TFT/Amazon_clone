// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

// action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies,
    };
}

export function addToWatchlist(movie) {
    return {
        type: ADD_TO_WATCHLIST,
        movie,
    };
}

export function removeFromWatchlist(movie) {
    return {
        type: REMOVE_FROM_WATCHLIST,
        movie,
    };
}

export function addMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie,
    };
}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie,
    };
}

export function handleMovieSearch(searchText) {
    const url = `https://movie-78f07-default-rtdb.firebaseio.com/movies/-N1Tfvz_IU0HfIlAKdmB.json`;
    return function (dispatch) {
        fetch(url)
            .then((response) => response.json())
            .then((movie) => {
                console.log('movie', movie);
                // dispatch action to save search results in store
                dispatch(addMovieSearchResult(movie));
            });
    };
}


// action types
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';
export const SET_LOADING = 'SET_LOADING';

// action creators
export const fetchMovies = (movies) => {
    return {
        type : FETCH_MOVIES,
        payload : movies,
    };
}

export const addToWatchlist = (movie) => {
    return {
        type: ADD_TO_WATCHLIST,
        payload : movie,
    };
}

export const setLoading = () => {
    return {
        type : SET_LOADING,
    }
}

export const removeFromWatchlist = (movie) => {
    return {
        type: REMOVE_FROM_WATCHLIST,
        payload : movie,
    };
}

// asyn action function
export const handleFetchMovie = () => {
    const url = `https://movie-78f07-default-rtdb.firebaseio.com/movies/-N1Tfvz_IU0HfIlAKdmB.json`;
    return async (dispatch) => {
        try {
            const res = await fetch(url);
            if(!res.ok) {
                throw new Error("Failed to fetch the data");
            }
            const moviesData = await res.json();
            dispatch(fetchMovies(moviesData))
        } catch (error) {
            console.log(error.message)
        }
    };
}


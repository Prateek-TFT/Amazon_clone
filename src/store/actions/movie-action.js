// action types
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';
export const TOGGLE_LOADING = 'SET_LOADING';

// action creators
export const fetchMovies = (movies) => {
    return {
        type: FETCH_MOVIES,
        payload: movies,
    };
}

export const addToWatchlist = (movie) => {
    return {
        type: ADD_TO_WATCHLIST,
        payload: movie,
    };
}

export const toggleLoading = () => {
    return {
        type: TOGGLE_LOADING,
    }
}

export const removeFromWatchlist = (movie) => {
    return {
        type: REMOVE_FROM_WATCHLIST,
        payload: movie,
    };
}

// asyn action function
export const handleFetchMovies = () => {
    const url = `https://movie-78f07-default-rtdb.firebaseio.com/movies.json`;
    return async (dispatch) => {
        try {
            dispatch(toggleLoading())
            const movies = [];
            const res = await fetch('https://movie-78f07-default-rtdb.firebaseio.com/movies.json');
            const data = await res.json();
            for (const key in data) {
                movies.push({
                    "_id": key,
                    "imdb": data[key].imdb,
                    "trailerOrClips": data[key].trailer,
                    "movie-name": data[key]['movie-name'],
                    "link": data[key]['link'],
                    "duration": data[key]['duration'],
                    "movie-year": data[key]['movie-year'],
                    "description": data[key]['description'],
                    "director": data[key]['director'],
                    "starring": data[key]['starring'],
                    "genres": data[key]['genres'],
                    "subtitles": data[key]['subtitles'],
                    "audio-lang": data[key]['audio-lang'],
                    "producer": data[key]['producer'],
                    "content-advisrory": data[key]['content-advisory'],
                    "image": data[key]['image']

                })
            }
            dispatch(toggleLoading())
            dispatch(fetchMovies(movies))
            console.log(movies)
        } catch (error) {
            console.log(error.message)
        }
    };
}


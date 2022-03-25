





// Action type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURIT = 'ADD_FAVOURITE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'

// Action creaters
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movies) {
    return {
        type: ADD_FAVOURIT,
        movies
    }
}

export function removeFavourite(movie) {
    return {
        type: REMOVE_MOVIE,
        movie
    }
}

export function setShowFavourite(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}


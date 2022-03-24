





// Action type
export const ADD_MOVIES = 'ADD_MOVIES';


// Action creaters
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}
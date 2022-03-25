import { ADD_MOVIES, ADD_FAVOURIT, REMOVE_MOVIE, SET_SHOW_FAVOURITES } from "../actions";


const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export default function movies(state = initialMoviesState, action) {
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }

        case ADD_FAVOURIT:
            return {
                ...state,
                favourites: [action.movies, ...state.favourites]
            }

        case REMOVE_MOVIE:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray
            }

        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
    }
}


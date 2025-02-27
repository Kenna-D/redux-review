const initialState = {
  title: "",
  poster: "",
  rating: null,
  movies: []
};

// Action constant
const SET_MOVIE_INFO = 'SET_MOVIE_INFO';
const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST';

//Action creator
export const setMovieInfo = (title, poster, rating) => {
  return {
    type: SET_MOVIE_INFO,
    payload: {title, poster, rating},
  }
};

export const updateMovieList = (newMovie) => {
  return {
    type: UPDATE_MOVIE_LIST,
    payload: newMovie
  }
};

//Reducer function
const moviesReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_MOVIE_INFO:
      return {...state, ...action.payload}
    case UPDATE_MOVIE_LIST:
      return {...state, title: '', poster: '', rating: null, movies: [...state.movies, action.payload]}
    default: return state 
  }
};

export default moviesReducer;
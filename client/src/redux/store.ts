import {createStore,applyMiddleware} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import movie from "./reducer/movieReducer";
import {IMovie} from "./reducer/movieType";
import {TActionsMovie} from "./action/movieAction";
import logger from 'redux-logger'

export const store = createStore(movie,applyMiddleware(thunk as ThunkMiddleware<IMovie,TActionsMovie>,logger))
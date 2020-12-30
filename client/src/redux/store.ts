import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import movie from "./reducer/movieReducer";


export const store = createStore(movie,applyMiddleware(thunk))
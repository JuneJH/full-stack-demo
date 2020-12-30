import {createStore} from "redux";
import movie from "./reducer/movieReducer"

export const store = createStore(movie)
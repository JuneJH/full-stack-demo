import {IMovie} from "./movieType";
import {movieActions, TActionsMovie} from "../action/movieAction";
import {Movie} from "../../commonType/Movie";
import {SearchParams} from "../../commonType/SearchParams";
import MovieApi from "../../api/MovieApi";


const defaultState: IMovie = {
    condition: {
        page: 1,
        take: 10,
    },
    data: [],
    isLoading: false,
    total: 0
}

function deleteMovie(state: IMovie, id: string):IMovie {
    const newData = state.data.filter(ele => ele.id !== id);
    return {
        ...state,
        data: newData
    }
}

function saveMovie(state: IMovie, movies: Movie[]) {
    return {
        ...state,
        data: movies,
    }
}

function setCondition(state: IMovie, condition:SearchParams):IMovie{
    return {
        ...state,
        ...condition,
    }
}

function setLoading(state:IMovie,isLoading:boolean):IMovie{
    return {
        ...state,
        isLoading,
    }
}

function fetchMovies(){
    return async (dispatch:any,getState:any)=>{
        const result = await MovieApi.find();
        dispatch(movieActions.saveMovie(result.data));
    }
}

export default function movieReducer(state: IMovie = defaultState, action: TActionsMovie): IMovie {

    switch (action.type) {
        case "delete_movie":
            return deleteMovie(state,action.payload);
        case "save_movies":
            return saveMovie(state,action.payload);
        case "set_condition":
            return setCondition(state,action.payload);
        case "set_loading":
            return setLoading(state,action.payload);
        default :
            return state;
    }
}
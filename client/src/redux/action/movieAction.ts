import {Movie} from "../../commonType/Movie";
import {IAction} from "./actionType";
import {SearchParams} from "../../commonType/SearchParams";
import {ThunkAction} from "redux-thunk";
import {IMovie} from "../reducer/movieType"
import MovieApi from "../../api/MovieApi";

type  TSaveActionType = IAction<"save_movies", Movie[]>

function saveMovie(movies: Movie[]): TSaveActionType {
    return {
        type: "save_movies",
        payload: movies,
    }
}

type TSetConditionType = IAction<"set_condition", SearchParams>

function setCondition(condition: SearchParams): TSetConditionType {
    return {
        type: "set_condition",
        payload: condition
    }
}

type TSetLoading = IAction<"set_loading", boolean>

function setLoading(isLoading: boolean): TSetLoading {
    return {
        type: "set_loading",
        payload: isLoading,
    }
}

type TSetTotal = IAction<"set_total", number>

function setTotal(total: number): TSetTotal {
    return {
        type: "set_total",
        payload: total,
    }
}

type TDeleteAction = IAction<"delete_movie", string>

function deleteMovie(id: string): TDeleteAction {
    return {
        type: "delete_movie",
        payload: id
    }
}

function fetchMovie(condition: SearchParams):ThunkAction<Promise<void>,IMovie,any,TActionsMovie>{
    return async (dispatch,getstate)=>{
        dispatch(setLoading(true));
        dispatch(setCondition(condition))
        const state = getstate();
        const result =await MovieApi.find(state.condition);
        dispatch(saveMovie(result.data));
        dispatch(setTotal(result.total));
        dispatch(setLoading(false));
    }
}

function deleteFetchMovie(id: string):ThunkAction<Promise<void>,IMovie,any,TActionsMovie>{
    return  async dispatch=>{
        dispatch(setLoading(true));
        const result = await MovieApi.delete(id);
        if(result.data){
            dispatch(deleteMovie(id))
        }
        dispatch(setLoading(false));
    }

}

export type TActionsMovie = TDeleteAction | TSetLoading | TSetConditionType | TSaveActionType | TSetTotal;

export const movieActions = {
    deleteMovie,
    setLoading,
    setCondition,
    saveMovie,
    setTotal,
    fetchMovie,
    deleteFetchMovie
}
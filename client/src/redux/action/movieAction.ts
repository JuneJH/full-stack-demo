import {Movie} from "../../commonType/Movie";
import {IAction} from "./actionType";
import {SearchParams} from "../../commonType/SearchParams";


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

type TDeleteAction = IAction<"delete_movie", string>

function deleteMovie(id: string): TDeleteAction {
    return {
        type: "delete_movie",
        payload: id
    }
}

export type TActionsMovie = TDeleteAction | TSetLoading | TSetConditionType | TSaveActionType;

export const movieActions = {
    deleteMovie,
    setLoading,
    setCondition,
    saveMovie
}
import {IMovie} from "./movieType";
import {TActionsMovie} from "../action/movieAction";
import {Movie, MovieEdit} from "../../commonType/Movie";
import {SearchParams} from "../../commonType/SearchParams";
import {MovieSwitchValue} from "../../components/MovieTable";


const defaultState: IMovie = {
    condition: {
        page: 1,
        take: 10,
    },
    data: [],
    isLoading: false,
    total: 0,
    totalPage:0,
}

function deleteMovie(state: IMovie, id: string):IMovie {
    const newData = state.data.filter(ele => ele.id !== id);
    return {
        ...state,
        data: newData,
        totalPage: Math.ceil((state.total - 1) / state.condition.take)
    }
}

function saveMovie(state: IMovie, movies: Movie[]) {
    return {
        ...state,
        data: movies,
    }
}

function editMovie(state:IMovie,payload:{movie:MovieEdit,id:string}):IMovie{
    const copyData = [...state.data];
    const newData = copyData.map(item=>{
        if(item.id === payload.id){
            return {...item,...payload.movie};
        }
        return  item;
    })
    return{
        ...state,
        data:newData
    }
}

function setCondition(state: IMovie, condition:SearchParams):IMovie{
    return {
        ...state,
        condition:{
            ...state.condition,
            ...condition
        },
        totalPage: Math.ceil(state.total / (!condition.take ? state.condition.take : condition.take))
    }
}

function setLoading(state:IMovie,isLoading:boolean):IMovie{
    return {
        ...state,
        isLoading,
    }
}

function setTotal(state:IMovie,total:number):IMovie{
    return {
        ...state,
        total:total,
        totalPage: Math.ceil(total / state.condition.take)
    }
}

function switchChange(state:IMovie,payload:{type:MovieSwitchValue,value:boolean,id:string}){
    const movie = state.data.find(value => value.id === payload.id);
    if(!movie){
        return state;
    }
    const copyState = {...state};
    const newData = copyState.data.map(item=>{
        if(item.id === payload.id){
            item[payload.type] = payload.value;
        }
        return item;
    })
    return {
        ...state,
        data:newData,
    }

}

export default function movieReducer(state: IMovie = defaultState, action: TActionsMovie): IMovie {

    switch (action.type) {
        case "delete_movie":
            return deleteMovie(state,action.payload);
        case "save_movies":
            return saveMovie(state,action.payload);
        case "edit_movies":
            return editMovie(state, action.payload);
        case "set_condition":
            return setCondition(state,action.payload);
        case "set_loading":
            return setLoading(state, action.payload);
        case "set_total":
            return setTotal(state, action.payload);
        case "switch_movie":
            return switchChange(state, action.payload);
        default :
            return state;
    }
}
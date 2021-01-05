
import MovieTable, {MovieTableEvent} from "../../components/MovieTable";
import {connect} from "react-redux";
import {IMovie} from "../../redux/reducer/movieType";
import {Dispatch} from "react";
import {movieActions} from "../../redux/action/movieAction";

function mapStateToProps(state:IMovie){
    return state;
}

function mapStateToEvent(dispatch:Dispatch<any>):MovieTableEvent{
    return {
        onSwitchChange(type,value,id){
            dispatch(movieActions.fetchMovieSwitch(type, value, id));
        },
        onDelete(id:string){
           return new Promise<any>(resolve => {
               resolve( dispatch(movieActions.deleteFetchMovie(id)))
           })
        },
        onLoad(){
            dispatch(movieActions.fetchMovie({take:10,page:1}))
        },
        onChangePage(page,pageSize){
            dispatch(movieActions.fetchMovie({page,take:pageSize}))
        }
    }

}

const List = connect(mapStateToProps,mapStateToEvent)(MovieTable);


export default List;
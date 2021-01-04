
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
            console.log("run")
            dispatch(movieActions.fetchMovieSwitch(type, value, id));
        }
    }

}

const List = connect(mapStateToProps,mapStateToEvent)(MovieTable);


export default List;
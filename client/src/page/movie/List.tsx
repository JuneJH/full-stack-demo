
import MovieTable from "../../components/MovieTable";
import {connect} from "react-redux";
import {IMovie} from "../../redux/reducer/movieType";

function mapStateToProps(state:IMovie){
    return state;
}

const List = connect(mapStateToProps)(MovieTable);


export default List;
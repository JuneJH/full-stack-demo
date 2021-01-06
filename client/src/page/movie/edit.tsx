import React, {useEffect} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import MovieApi from "../../api/MovieApi";

interface IEditProps{
    id:string
}
 const Edit: React.FC<RouteComponentProps<IEditProps>> = (props) => {

    return (<div>
        编辑 {props.match.params.id}
    </div>)
}

export default withRouter(Edit)
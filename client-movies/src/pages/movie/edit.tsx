import React, {useLayoutEffect, useState} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import MovieForm from "../../components/MovieForm";
import {Movie, MovieEdit} from "../../commonType/Movie";
import MovieApi from '../../../services/MovieApi'


interface IEditProps {
    id: string
}

const Edit: React.FC<RouteComponentProps<IEditProps>> = (props) => {
    const [movies,setMovies] = useState<Movie>();
    useLayoutEffect(() => {
        MovieApi.findById(props.match.params.id).then(data => {
            if(!data.err){
                setMovies(data.data);
            }
        })
        // eslint-disable-next-line
    },[])

    return (<div>
        <MovieForm
            movie={movies}
            onChange={async (movie) => {
                const result = await MovieApi.edit(props.match.params.id,movie as MovieEdit);
                if(result.data){
                    return []
                }
                return result.err;
            }}/>
    </div>)
}

export default withRouter(Edit)
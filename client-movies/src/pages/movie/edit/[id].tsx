import React, {useLayoutEffect, useState} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import MovieApi from "@/services/MovieApi";
import MovieForm from "@/components/MovieForm";
import {Movie, MovieEdit} from "@/commonType/Movie";

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

    return (<div style={{
        width:"100%",
        height:"100%",
        overflow:"auto"
    }}>
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
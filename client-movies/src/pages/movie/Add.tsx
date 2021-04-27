import MovieApi from '@/services/MovieApi';
import React from 'react';
import MovieForm from "../../components/MovieForm";

export const Add: React.FC = () => {
    return (<div>
        <MovieForm onChange={async (movie)=>{
            const result = await MovieApi.add(movie);
            if(result.data){
                return []
            }
            return result.err;
        }}/>
    </div>)
}
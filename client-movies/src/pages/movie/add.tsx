import React from 'react';
import AddMovie from '@/components/MovieForm'
import movies from '@/models/movies';
import { Movie } from '@/commonType/Movie';
import MovieApi from '@/services/MovieApi';
import { connect } from 'react-redux';

function add(props:any) {
    return (
        <div style={{
            width:"100%",
            height:"100%",
            overflow:"auto"
        }}> 
            <AddMovie onChange={async (movie)=>{
            const result = await MovieApi.add(movie);
            if(result.data){
                return []
            }
            return result.err;
        }}/>
        </div>
    )
}
add.wrappers = ["@/components/Auto"];
export default add
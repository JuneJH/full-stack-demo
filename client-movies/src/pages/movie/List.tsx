import React from 'react'
import MovieTable from '@/components/MovieTable'
import {connect} from 'dva';
const mapPrpos = (state:any)=>{
    return {
        data:state.movies.data,
        isLoading:state.loading.effects["movies/fetchData"],
        condition:state.movies.condition,
        deleteLoading:state.loading.effects["movies/deleteMovie"]
    }
}

const mapDispatch = (dispatch:any)=>{
    return {
        onDelete(id:string){
            dispatch({type:"movies/deleteMovie",payloay:id})
        }
    }
}
const Table = connect(mapPrpos,mapDispatch)(MovieTable);
export default function List() {
    return (
       <div>
            <Table/>
       </div>
    )
}

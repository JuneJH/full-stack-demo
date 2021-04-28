import React from 'react'
import MovieTable from '@/components/MovieTable'
import {connect} from 'dva';
const mapPrpos = (state:any)=>{
    console.log(state)
    return {
        data:state.movies.data,
        isLoading:state.loading.effects["movies/fetchData"],
        condition:state.movies.condition
    }
}

const mapDispatch = (dispatch:any)=>{

}
const Table = connect(mapPrpos,mapDispatch)(MovieTable);
export default function List() {
    return (
       <div>
            <Table/>
       </div>
    )
}

import React from 'react'
import MovieTable from '@/components/MovieTable'
import {connect} from 'dva';
import style from './index.less'
const mapPrpos = (state:any)=>{
    console.log(state)
    return {
        data:state.movies.data,
        total:state.movies.total,
        isLoading:state.loading.effects["movies/fetchData"],
        condition:state.movies.condition,
        deleteLoading:state.loading.effects["movies/deleteMovie"]
    }
}

const mapDispatch = (dispatch:any)=>{
    return {
        onFeatch(){
            dispatch({type:"movies/changeCondition",payloay:{take:10,page:1}})
            dispatch({type:"movies/fetchData"})
        },
        onDelete(id:string){
            dispatch({type:"movies/deleteMovie",payloay:id})
        },
        onSwitchChange(type: any,value: any,id: any){
            dispatch({type:"movies/editMovie",payloay:{type,id,value}})
        },
        onChangePage(page: any,take: any){
            dispatch({type:"movies/changeCondition",payloay:{take,page}})
            dispatch({type:"movies/fetchData"})
        }
    }
}
const Table = connect(mapPrpos,mapDispatch)(MovieTable);
export default function List() {
    return (
       <div className={style.container}>
            <Table/>
       </div>
    )
}

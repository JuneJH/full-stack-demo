import MovieApi from '../services/MovieApi';
export default {
    state: {
        condition: {
            page: 1,
            take: 10,
        },
        data: [],
        total: 0,
        totalPage: 0,
    },
    reducers:{
        changeCondition(state:any,action:any){
            return {
                ...state,
                condition:{
                    ...state.condition,
                    ...action.payloay
                }
            }
        },
        setData(state:any,action:any){
            return {
                ...state,
                ...action.payloay
            }
        }

    },
    effects:{
        *fetchData(action:any,saga:any):any{
            const condition = yield saga.select((state:any)=>state.movies.condition);
            const result = yield saga.call(MovieApi.find,condition)
            if(result.code == 200){
                yield saga.put({type:"setData",payloay:{
                    data: result.data,
                    total: result.total,
                }})
                return true;
            }
            return false;
        },
        *deleteMovie(action:any,saga:any):any{
            const result = yield saga.call(MovieApi.delete,action.payloay);
            yield saga.put({type:"fetchData"})
        },
        *editMovie({payloay:{type,id,value}}:any,saga:any):any{
            const movies = yield saga.select((state:any)=> state.movies.data.find((item:any)=>item.id === id));
            const result = yield saga.call(MovieApi.edit,id,{...movies,[type]:value});
            yield saga.put({type:"fetchData"})
        }
    }
    
}
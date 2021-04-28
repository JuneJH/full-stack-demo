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
    subscriptions:{
        fetch({dispatch}:any){
            dispatch({
                type:"fetchData"
            })

        }
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
            const condition = yield saga.select((state:any)=>state.condition);
            const result = yield saga.call(MovieApi.find,condition)
            if(result.code == 200){
                yield saga.put({type:"setData",payloay:{
                    data: result.data,
                    total: result.total,
                }})
                return true;
            }
            return false;
        }
    }
    
}
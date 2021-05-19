import MovieApi from "@/services/MovieApi";

export default {
    state:null,
    subscriptions:{
        synchronize({dispatch}:any){
            const token = window.sessionStorage.getItem("token");
            dispatch({type:"setToken",payloay:token})
        }
    },
    reducers:{
        logout(state:any,aciton:any){
            window.sessionStorage.removeItem("token")
            return null;
        },
        setToken(state:any,aciton:any){
            return aciton.payloay
        }
    },
    effects:{
        *login({payloay:{username,password}}:any,saga:any):any{
            // 处理登陆的事情
            const result = yield saga.call(MovieApi.login,{username,password})
            if(result.code === 200){
                yield saga.put({type:"setToken",payloay:result.data.token});
                window.sessionStorage.setItem("token",result.data.token);
                return true;
            }
            return false;
        }
    }
}
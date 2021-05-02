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
            if(username === "2019" && password === "123"){
                yield saga.put({type:"setToken",payloay:"token"});
                window.sessionStorage.setItem("token","token123");
                return true;
            }
            return false;
        }
    }
}
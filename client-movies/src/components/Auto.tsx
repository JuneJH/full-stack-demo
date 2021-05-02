import {history,connect} from "umi"

function Auto(props:any){
    if(!props.token){
        history.push("/login");
        return null;
    }
    return props.children;
    
}
const mapProps = (state:any)=>{
    return {
        token:state.login
    }
}
export default connect(mapProps)(Auto)
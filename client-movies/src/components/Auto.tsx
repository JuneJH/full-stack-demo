import {history} from "umi"

export default function (props:any){
console.log("run  atou ")
    return props.children;
    history.push("/login")
}
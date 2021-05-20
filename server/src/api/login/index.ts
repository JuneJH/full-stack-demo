import * as express from 'express';
import axios from 'axios'
import {ResponseEntity} from "../ResponseEntity";

const router = express.Router();


router.post("/login",async (req,res,next)=>{
    const {username,password} = req.body;
    try{
        const reuslt = await axios.post("http://121.36.51.141:9527/login",{username,password});
        if(reuslt.data.code === 200){
            ResponseEntity.success(res, 200, {msg:"登录成功",token:reuslt.headers.authorization,...reuslt.data});
        }else{
            ResponseEntity.error(res, 304, "账号或者密码不正确");
        }
    }catch{
        ResponseEntity.error(res, 304, "账号或者密码不正确");
    }
    
})

export default router;
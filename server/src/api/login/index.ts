import * as express from 'express';
import {ResponseEntity} from "../ResponseEntity";

const router = express.Router();


router.post("/login",async (req,res,next)=>{
    ResponseEntity.success(res, 200, {token:"123",msg:"登录成功"});
})

export default router;
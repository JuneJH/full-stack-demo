import * as express from "express";
import * as multer from "multer";
import * as path from "path";
import {ResponseEntity} from "../ResponseEntity";

const allow = [".jpg",".png",".gif"]
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, "../../public/upload"))
    },
    filename: function (req, file, cb) {
        const extname = path.extname(file.originalname);
        const filename = `${Date.now()}-${Math.floor(Math.random() * 100)}`;
        cb(null, filename + extname);
    }
})

const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1000
    },
    fileFilter:(req,file,cb)=>{
        const extname = path.extname(file.originalname);
        if(allow.includes(extname)) {
            cb(null, true);
        }else{
            cb(new Error("不支持上传该类型文件"))
        }
    }
})
const router4upload = express.Router();

router4upload.post("/", upload.single("poster"), (req, res, next) => {
    ResponseEntity.success(res,200,"/upload/" + req.file.filename)
    console.log(req.file)



})

export default router4upload
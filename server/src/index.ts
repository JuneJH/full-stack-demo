import "reflect-metadata";
import {Movie} from "./entities/Movie";
import {validate} from "class-validator";
import {plainToClass} from "class-transformer";
import "./db/db"

// const  m:any = {};
// m.name = 123;
// m.areas = ["中国大陆"];
// m.timeLong = 123;
// m.types = ["戏剧"]
// // plain Object 转换为Movie对象
// const movie = plainToClass(Movie,m)
// validate(movie).then(err=>{
//     console.log(err)
// })
// console.log(movie)
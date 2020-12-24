import "reflect-metadata";
import {MovieService} from "./service/movieService";


const m: any = {};
m.name = "修改电影名字";


MovieService.find().then(data => {
    console.log("index.js", data)
})

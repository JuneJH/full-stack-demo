import {createConnection} from "typeorm";

import { Movie } from "./Movie"
import {MovieService} from "../service/movieService";

createConnection({
    type: "mysql",
    host: "121.36.51.141",
    port: 3306,
    username: "root",
    password: "root",
    database: "movie",
    entities: [
        Movie
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    console.log("连接成功")
    // here you can start to work with your entities
    const  m = new Movie();
    m.name = "疯狂外星人";
    m.areas = ["中国大陆"];
    m.timeLong = 123;
    m.types = ["戏剧"]
    m.description="好看的电影"
    m.poster="123"

    connection.manager.save(m).then(data=>{
        console.log(data)
    })
}).catch(error => console.log(error));



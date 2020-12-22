import {createConnection} from "typeorm";

import {Movie} from "./Movie"

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
    console.log(connection)
    // here you can start to work with your entities
}).catch(error => console.log(error));
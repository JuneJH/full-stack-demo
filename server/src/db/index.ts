import {createConnection} from "typeorm";
import {Movie} from "../entities/Movie"
async function init(){
    console.log("run")
    const result = await createConnection({
        type: "mysql",
        host: "121.36.51.141",
        port: 3306,
        username: "root",
        password: "root",
        database: "movie",
        entities:[Movie]
    });
    return result;
}

export default init;
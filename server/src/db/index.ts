import {createConnection} from "typeorm";
import {Movie} from "../entities/Movie"
async function init(){
    const result = await createConnection({
        type: "mysql",
        host: "",
        port: 3306,
        username: "",
        password: "",
        database: "",
        entities:[Movie]
    });
    return result;
}

export default init;
import {createConnection} from "typeorm";
import {Movie} from "../entities/Movie"
import dbConfig from '../../dbConfig'
async function init(){
    const result = await createConnection({
        ...dbConfig,
        entities:[Movie]
    });
    return result;
}

export default init;
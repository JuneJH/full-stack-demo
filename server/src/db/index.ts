import {createConnection} from "typeorm";

async function init(){
    const result = await createConnection();
    return result;
}

export default init;
import "reflect-metadata";
import * as express from "express";
import router from "./api/movie";
import init from "./db";

init().then(connection=>{
    console.log("database link")
})
const app = express();

app.use(express.json());

app.use("/api/movie",router)


app.listen(9527,(() => console.log(`Server listening`)))

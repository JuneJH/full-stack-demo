import "reflect-metadata";
import * as express from "express";
import router from "./api/movie";
import router4upload from "./api/upload/poster"
import init from "./db";
import * as path from "path";

init().then(connection=>{
    console.log("database link")
})
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.use(express.json());

app.use("/api/movie", router);
app.use("/api/upload", router4upload);


app.listen(9527,(() => console.log(`Server listening`)))

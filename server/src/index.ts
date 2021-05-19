import "reflect-metadata";
import * as express from "express";
import router from "./api/movie";
import router4upload from "./api/upload/poster";
import router4login from './api/login'
import init from "./db";
import * as path from "path";
import * as history from "connect-history-api-fallback";

init().then(connection=>{
    console.log("database link")
})
const app = express();
app.use(history());
app.use("/",express.static(path.resolve(__dirname, "./public/dist")));
app.use(express.static(path.resolve(__dirname, "./public")));

app.use(express.json());

app.use("/api/movie", router);
app.use("/api/upload", router4upload);
app.use("/api",router4login)


app.listen(1997,(() => console.log(`Server listening`)))

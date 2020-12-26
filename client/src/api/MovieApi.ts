import axios from "axios";
import {SearchParams} from "../commonType/SearchParams";
import {ResponseSucceedPageType} from "../commonType/ResponseType";
import {Movie} from "../commonType/Movie";

export default class MovieApi {

    public static async add(movie:Movie){
        const {data} = await axios.post("/api/movie", movie);
        return data;
    }
    public static async edit(id:string,movie:Movie){
        const {data} = await axios.patch("/api/movie"+id, movie);
        return data;
    }
    public static async delete(id:string){
        const {data} = await axios.delete("/api/movie"+id);
        return data;
    }

    public static async find(search?:SearchParams):Promise<ResponseSucceedPageType<Movie>>{
        const {data} = await axios.get("/api/movie", {
            params: search
        });
        return data;
    }
};
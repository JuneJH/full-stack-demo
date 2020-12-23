import {Movie} from "../entities/Movie";
import { getManager } from "typeorm";

const entityManager = getManager();
export class MovieService{

    public static async add(movie:Object):Promise<string[]|Movie>{
            const newMovie = Movie.plainToMovie(movie);
            const isError =await newMovie.validator();
            if(isError.length != 0){
                return isError
            }
            return  await entityManager.save(newMovie);
    }
}
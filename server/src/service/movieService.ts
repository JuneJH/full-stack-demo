import {Movie} from "../entities/Movie";
import {SearchParams} from "../entities/SearchParams"
import {getConnection} from "typeorm";

export class MovieService {

    public static async add(movie: Object): Promise<string[] | Movie> {
        const newMovie = Movie.plainToMovie(movie);
        const isError = await newMovie.validator();
        if (isError.length != 0) {
            return isError
        }
        delete newMovie.id;
        const connect = await getConnection();
        return await connect.manager.save(newMovie);
    }

    public static async delete(id: string): Promise<boolean> {
        const connect = await getConnection();
        await connect.manager.delete(Movie, id);
        return true;
    }

    public static async edit(movie: any,id): Promise<string[] | number> {
        const newMovie = Movie.plainToMovie(movie);
        const isError = await newMovie.validator(true);
        if (isError.length != 0) {
            return isError
        }
        if(movie.id){
            delete movie.id
        }
        const connect = await getConnection();
        const result = await connect.manager.update(Movie, id, movie);
        return result.affected ? result.affected : 0;
    }

    public static async findOneById(id: string): Promise<Movie | undefined> {
        const connect = await getConnection();
        return await connect.manager.findOne(Movie, id);
    }

    public static async find(option: Object): Promise<{ data: Movie[], total: number } | string[]> {
        const query: SearchParams = SearchParams.plainToEntity(option);
        const isError = await query.validator();
        if (isError.length != 0) {
            return isError;
        }
        const connect = await getConnection();
        const result = await connect.manager.findAndCount(Movie, query);
        return {data: result[0], total: result[1]};
    }
}
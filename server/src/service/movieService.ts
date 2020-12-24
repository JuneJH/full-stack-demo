import {Movie} from "../entities/Movie";
import {SearchParams} from "../entities/SearchParams"
import {createConnection} from "typeorm";

export class MovieService {

    public static async add(movie: Object): Promise<string[] | Movie> {
        const newMovie = Movie.plainToMovie(movie);
        const isError = await newMovie.validator();
        if (isError.length != 0) {
            return isError
        }
        const connect = await createConnection();
        return await connect.manager.save(newMovie);
    }

    public static async delete(id: string): Promise<boolean> {
        const connect = await createConnection();
        await connect.manager.delete(Movie, id);
        return true;
    }

    public static async edit(movie: Object, id): Promise<string[] | number> {
        const newMovie = Movie.plainToMovie(movie);
        const isError = await newMovie.validator(true);
        if (isError.length != 0) {
            return isError
        }
        const connect = await createConnection();
        const result = await connect.manager.update(Movie, id, movie);
        return result.affected ? result.affected : 0;
    }

    public static async findOneById(id: string): Promise<Movie | undefined> {
        const connect = await createConnection();
        return await connect.manager.findOne(Movie, id);
    }

    public static async find(option?: SearchParams) {
        const connect = await createConnection();
        return await connect.manager.findAndCount(Movie, option)
    }
}
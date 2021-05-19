import axios from "axios";
import { ResponseErrorType, ResponseSucceedPageType, ResponseSucceedType } from "@/commonType/ResponseType";
import { Movie, MovieEdit } from "@/commonType/Movie";
import { SearchParams } from "@/commonType/SearchParams";

// 用户登录
interface IUser {
    username: string
    password: string
}

axios.interceptors.request.use((config) => {
    const token = window.sessionStorage.getItem("token");
    config.headers = {
        ...config.headers,
        token,
    }
    return config;
})
export default class MovieApi {
    public static async login(user: IUser) {
        const { data } = await axios.post("/api/login", user);
        return data;
    }
    public static async add(movie: Movie): Promise<ResponseSucceedType<Movie> | ResponseErrorType<[]>> {
        const { data } = await axios.post("/api/movie", movie);
        return data;
    }
    public static async edit(id: string, movie: MovieEdit) {
        const { data } = await axios.patch("/api/movie/" + id, movie);
        return data;
    }
    public static async delete(id: string) {
        const { data } = await axios.delete("/api/movie/" + id);
        return data;
    }

    public static async find(search?: SearchParams): Promise<ResponseSucceedPageType<Movie>> {
        const { data } = await axios.get("/api/movie", {
            params: search
        });
        return data;
    }

    public static async findById(id: string): Promise<ResponseSucceedType<Movie> | ResponseErrorType<string>> {
        const { data } = await axios.get("/api/movie/" + id);
        return data;
    }

    public static async uploadPoster(formData: any): Promise<ResponseSucceedType<string> | ResponseErrorType<string>> {
        const { data } = await axios.post("/api/upload", formData);
        return data;
    }
};
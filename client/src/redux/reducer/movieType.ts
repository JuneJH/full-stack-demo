import {Movie} from "../../commonType/Movie";
import {SearchParams} from "../../commonType/SearchParams";

type SearchRequire = Required<SearchParams>

export interface IMovie {
    data: Movie[],
    total: number,
    isLoading: boolean,
    condition: SearchRequire
}
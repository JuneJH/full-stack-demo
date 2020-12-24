import { Min } from "class-validator";

export class SearchParams{

    @Min(1, {message: "页面必须大于1"})
    public skip: number = 1;

    @Min(1, {message: "页容量必须大于一个"})
    public take: number = 10;
}
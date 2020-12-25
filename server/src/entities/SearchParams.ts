import {Min} from "class-validator";
import {Base} from "./Base";
import {plainToClass} from "class-transformer";

export class SearchParams extends Base {

    @Min(1, {message: "页面必须大于1"})
    public skip: number = 1;

    @Min(1, {message: "页容量必须大于一个"})
    public take: number = 10;

    /**
     * 将平面对象转换成实体
     * @param plain   平面对象
     */
    public static plainToEntity(plain: Object): SearchParams {
        if (plain instanceof SearchParams) {
            return plain;
        }
        return plainToClass(SearchParams, plain,{
            enableImplicitConversion:true,
        });
    }
}
import {ArrayMinSize, IsArray, IsInt, validate, IsNotEmpty, Max, Min} from "class-validator"
import {plainToClass, Type} from "class-transformer";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Base} from "./Base";

@Entity({name: "movie"})
export class Movie extends Base {

    @PrimaryGeneratedColumn("uuid")
    id?: number;

    @Column({
        length: 100
    })
    @IsNotEmpty({message: "电影名称不能为空"})
    @Type(() => String)
    public name: string;

    @Column("simple-array")
    @IsNotEmpty({message: "电影类型不能为空"})
    @ArrayMinSize(1, {message: "电影类型至少为一个"})
    @Type(() => String)
    @IsArray({message: "电影类型必须为数组"})
    public types: string[];

    @Column("simple-array")
    @IsNotEmpty({message: "地区不能为空"})
    @ArrayMinSize(1, {message: "上映地区至少有一个"})
    @Type(() => String)
    public areas: string[];

    @Column()
    @IsNotEmpty({message: "时长不能为空"})
    @IsInt({message: "时长必须为整数"})
    @Min(1, {message: "时长最小大于一分钟"})
    @Max(9999, {message: "时长不能太长，这不是电视剧"})
    @Type(() => Number)
    public timeLong: number;

    @Column()
    @Type(() => Boolean)
    public isHot: boolean = false;

    @Column()
    @Type(() => Boolean)
    public isComing: boolean = false;

    @Column()
    @Type(() => Boolean)
    public isClassic: boolean = false;

    @Column()
    @Type(() => String)
    public description?: string;

    @Column()
    @Type(() => String)
    public poster?: string;


    /**
     * 将平面对象转换成实体
     * @param plain   平面对象
     */
    public static plainToMovie(plain: Object): Movie {
        if (plain instanceof Movie) {
            return plain;
        }
        return plainToClass(Movie, plain);

    }
}
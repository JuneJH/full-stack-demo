import {ArrayMinSize, IsArray, IsInt, validate, IsNotEmpty, Max, Min} from "class-validator"
import {plainToClass, Type} from "class-transformer";

export class Movie {
    @IsNotEmpty({message:"电影名称不能为空"})
    @Type(()=>String)
    public name:string;

    @IsNotEmpty({message:"电影类型不能为空"})
    @ArrayMinSize(1,{message:"电影类型至少为一个"})
    @Type(()=>String)
    @IsArray({message:"电影类型必须为数组"})
    public types: string[];

    @IsNotEmpty({message:"地区不能为空"})
    @ArrayMinSize(1,{message:"上映地区至少有一个"})
    @Type(()=>String)
    public areas: string[];

    @IsNotEmpty({message: "时长不能为空"})
    @IsInt({message: "时长必须为整数"})
    @Min(1,{message: "时长最小大于一分钟"})
    @Max(9999,{message: "时长不能太长，这不是电视剧"})
    @Type(()=>Number)
    public timeLong: number;

    @Type(()=>Boolean)
    public isHot: boolean = false;

    @Type(()=>Boolean)
    public isComing: boolean = false;

    @Type(()=>Boolean)
    public isClassic: boolean = false;

    @Type(()=>String)
    public description?: string;

    @Type(()=>String)
    public poster?: string;

    public async  validator():Promise<string[]>{
        const result = await  validate(this);
        const re = result.map(ele=>{
            if(ele.constraints){
                return Object.values(ele.constraints);
            }
            return []
        })
        return  re.flat(2);
    };
    public static plainToMovie(obj:Object):Movie{
        if(obj instanceof Movie){
            return obj;
        }
        return  plainToClass(Movie,obj);

    }
}
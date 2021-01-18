# 全栈开发DEMO

> 基于Javascript(Typescript)的全栈开发
> 
> 体验面向对象编程(后端)/函数式编程(React)
> 
> Typescript拥有静态类型检查系统能更好辅助Javascript进行全栈开发
 

## 技术栈

1. 基于Nodejs的express框架

- express框架能够快速构建一个web服务
- express拥有丰富的社区,处理各种需求的中间件

2. 使用typeorm框架操作Mysql数据库

- 更好的支持typescript

3. 使用react全家桶

- 相比vue3.0之前react对typescript支持更好
- 更偏向使用Javascript语言本身的能力

4. 使用antdUI库

## 开发目录结构

> 服务端目录 `server`
> 
> 客服端目录 `client`

### 服务端

```

|——src                               # 资源文件根目录       
|   |——api                           # 书写接口层
|   |   |——movie                     # 电影接口目录
|   |   |——|——index.ts
|   |   |——upload                    # 上传封面
|   |   |——|——poster.ts
|   |   |——ResponseEntity.ts         # 响应接构
|   |——db                            # 数据库管理
|   |   |——index.ts
|   |——entities                      # 实体类
|   |   |——Base.ts                   # 基本实体、拥有检查属性等方法
|   |   |——Movie.ts                  # 电影实体
|   |   |——SearchParams.ts           # 查询实体
|   |——public                        # 前端(react打包目录结构)
|   |   |——build
|   |——service                       # 服务层
|   |   |——movieService.ts
|   |——index.ts                      # 服务入口
|——ormConfig.json                    # 数据库配置
|——package.json                      # 依赖包记录
|——tsconfig.json                     # typescript配置
|——yarn.lock                           


```

### 客户端

> 客户端使用官方脚手架、目录结构略


## 开发

> [使用`typeORM`操作数据库](https://typeorm.biunav.com/zh/)]
> 
> TypeORM 支持 Active Record 和 Data Mapper 模式，这意味着你可以以最高效的方式编写高质量的、松耦合的、可扩展的、可维护的应用程序。
> 
> 使用`mysql`数据库

1. 连接数据库

```js

    import {createConnection} from "typeorm";
    import {Movie} from "../entities/Movie"
    async function init(){
        const result = await createConnection({
            type: "mysql",
            host: "",
            port: 3306,
            username: "",
            password: "",
            database: "",
            entities:[Movie]
        });
        return result;
    }
    
```

> `express`框架搭建后端服务器
> 
> 
> 
>


2. 入口文件

```js
    
    import "reflect-metadata";
    import * as express from "express";
    import router from "./api/movie";
    import router4upload from "./api/upload/poster"
    import init from "./db";
    import * as path from "path";
    import * as history from "connect-history-api-fallback";
    
    init().then(connection=>{
        console.log("database link")
    })
    const app = express();
    app.use(history());
    app.use("/",express.static(path.resolve(__dirname, "./public/build")));
    app.use(express.static(path.resolve(__dirname, "./public")));
    
    app.use(express.json());
    
    app.use("/api/movie", router);
    app.use("/api/upload", router4upload);
    
    
    app.listen(9527,(() => console.log(`Server listening`)));

```

3. 前端

> `react`、`redux`、`react-router`、`antd`


- 供之后全栈参考
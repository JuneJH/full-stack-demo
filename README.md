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

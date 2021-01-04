import {Table, Switch, Image} from 'antd';
import React from "react";
import {IMovie} from "../redux/reducer/movieType";
import {ColumnsType} from "antd/lib/table";
import {Movie} from "../commonType/Movie";
export enum MovieSwitchValue {
    isHot = "isHot",
    isComing = "isComing",
    isClassic = "isClassic",
}
export interface MovieTableEvent{
    onSwitchChange:(type:MovieSwitchValue,value:boolean,id:string)=>void
}

export default class MovieTable extends React.Component<IMovie & MovieTableEvent> {
    private getColumns(): ColumnsType<Movie> {
        return [{
            dataIndex: "poster",
            title: "封面",
            key:"poster",
            render: text => {
                return <Image
                    width={70}
                    src={text}
                />
            }
        }, {
            title: "名称",
            dataIndex: "name",
            key:"name",
        }, {
            dataIndex: "areas",
            title: "地区",
            key: "areas",
        }, {
            dataIndex: "isClassic",
            title: "是否是经典",
            key: "isClassic",
            render: (text,movie) => {
                return (<Switch checked={text} onChange={(checked,event)=>{
                    this.props.onSwitchChange(MovieSwitchValue.isClassic,checked,movie.id as string);
                }}/>)
            }
        }, {
            dataIndex: "isComing",
            title: "是否正在上映",
            key: "isComing",
            render: (text,movie) => {
                return (<Switch checked={text} onChange={(checked)=>{
                    this.props.onSwitchChange(MovieSwitchValue.isComing,checked,movie.id as string);
                }}/>)
            }
        }, {
            dataIndex: "isHot",
            title: "是否热门",
            key: "isHot",
            render: (text,movie) => {
                return (<Switch checked={text} onChange={checked => {
                    this.props.onSwitchChange(MovieSwitchValue.isHot,checked,movie.id as string);
                }}/>)
            }
        }, {
            dataIndex: "timeLong",
            title: "时长",
            key:"timeLong",
            render: (text) => {
                return `${text}分钟`
            }
        }, {
            dataIndex: "types",
            title: "电影类型",
            key:"types",
            render: (text: Movie[]) => {
                return text.join(", ")
            }
        }, {
            dataIndex: "description",
            key:"description",
            title: "描述"
        }]

    }

    render() {
        return (<Table dataSource={this.props.data} columns={this.getColumns()}/>);
    }
}
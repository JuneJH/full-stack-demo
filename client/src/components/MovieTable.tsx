import {Table, Switch, Image} from 'antd';
import React from "react";
import {IMovie} from "../redux/reducer/movieType";
import {ColumnsType} from "antd/lib/table";
import {Movie} from "../commonType/Movie";


export default class MovieTable extends React.Component<IMovie> {
    private getColumns(): ColumnsType<Movie> {
        return [{
            dataIndex: "poster",
            title: "封面",
            render: text => {
                return <Image
                    width={70}
                    src={text}
                />
            }
        }, {
            title: "名称",
            dataIndex: "name",
        }, {
            dataIndex: "areas",
            title: "地区",
            key: "areas",
        }, {
            dataIndex: "isClassic",
            title: "是否是经典",
            key: "isClassic",
            render: (text) => {
                return (<Switch defaultChecked={text}/>)
            }
        }, {
            dataIndex: "isComing",
            title: "是否正在上映",
            key: "isComing",
            render: (text) => {
                return (<Switch defaultChecked={text}/>)
            }
        }, {
            dataIndex: "isHot",
            title: "是否热门",
            key: "isHot",
            render: (text) => {
                return (<Switch defaultChecked={text}/>)
            }
        }, {
            dataIndex: "timeLong",
            title: "时长",
            render: (text) => {
                return `${text}分钟`
            }
        }, {
            dataIndex: "types",
            title: "电影类型",
            render: (text: Movie[]) => {
                return text.join(", ")
            }
        }, {
            dataIndex: "description",
            title: "描述"
        }]

    }

    render() {
        return (<Table dataSource={this.props.data} columns={this.getColumns()}/>);
    }
}
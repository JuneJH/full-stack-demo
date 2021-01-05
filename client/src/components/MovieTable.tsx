import {Table, Switch, Image, Button, Modal} from 'antd';
import React from "react";
import {IMovie} from "../redux/reducer/movieType";
import {ColumnsType} from "antd/lib/table";
import {Movie} from "../commonType/Movie";
import {NavLink} from "react-router-dom"

export enum MovieSwitchValue {
    isHot = "isHot",
    isComing = "isComing",
    isClassic = "isClassic",
}

export interface MovieTableEvent {
    onSwitchChange: (type: MovieSwitchValue, value: boolean, id: string) => void,
    onDelete: (id: string) => Promise<void>,
    onLoad: () => void,
    onChangePage: (newPage: number,pageSize: number) => void
}

type TState = {
    deleteModel: boolean,
    deleteMovieId: string,
    deleteLoading: boolean,
}

export default class MovieTable extends React.Component<IMovie & MovieTableEvent, TState> {
    state = {
        deleteModel: false,
        deleteLoading: false,
        deleteMovieId: "",
    }

    componentDidMount() {
        if (this.props.onLoad) {
            this.props.onLoad();
        }
    }

    private async deleteMovie() {
        return await this.props.onDelete(this.state.deleteMovieId);
    }

    private getColumns(): ColumnsType<Movie> {
        return [{
            dataIndex: "poster",
            title: "封面",
            key: "poster",
            render: text => {
                return <Image
                    width={70}
                    src={text}
                />
            }
        }, {
            title: "名称",
            dataIndex: "name",
            key: "name",
        }, {
            dataIndex: "areas",
            title: "地区",
            key: "areas",
        }, {
            dataIndex: "isClassic",
            title: "是否经典",
            key: "isClassic",
            render: (text, movie) => {
                return (<Switch checked={text} onChange={(checked, event) => {
                    this.props.onSwitchChange(MovieSwitchValue.isClassic, checked, movie.id as string);
                }}/>)
            }
        }, {
            dataIndex: "isComing",
            title: "正在上映",
            key: "isComing",
            render: (text, movie) => {
                return (<Switch checked={text} onChange={(checked) => {
                    this.props.onSwitchChange(MovieSwitchValue.isComing, checked, movie.id as string);
                }}/>)
            }
        }, {
            dataIndex: "isHot",
            title: "是否热门",
            key: "isHot",
            render: (text, movie) => {
                return (<Switch checked={text} onChange={checked => {
                    this.props.onSwitchChange(MovieSwitchValue.isHot, checked, movie.id as string);
                }}/>)
            }
        }, {
            dataIndex: "timeLong",
            title: "时长",
            key: "timeLong",
            render: (text) => {
                return `${text}分钟`
            }
        }, {
            dataIndex: "types",
            title: "电影类型",
            key: "types",
            render: (text: Movie[]) => {
                return text.join(", ")
            }
        }, {
            dataIndex: "description",
            key: "description",
            title: "描述"
        }, {
            title: "操作",
            dataIndex: "id",
            render: text => {
                return (<>
                    <NavLink to="/edit">
                        <Button type="primary" size="small" style={{fontSize: 12, marginRight: 10}}>编辑</Button>
                    </NavLink>
                    <Button type="primary" danger size="small" style={{fontSize: 12}}
                            onClick={() => {
                                this.setState({
                                    ...this.state,
                                    deleteModel: true,
                                    deleteMovieId: text
                                })
                            }}>删除</Button>
                </>)
            }
        }]
    }

    render() {
        return (
            <>
                <Table dataSource={this.props.data} columns={this.getColumns()}
                       loading={this.props.isLoading}
                       sticky={{offsetHeader:0}}
                       size="small"
                       pagination={{
                           current: this.props.condition.page,
                           pageSize: this.props.condition.take,
                           total: this.props.total,
                           pageSizeOptions:['2','5','10','20'],
                           showSizeChanger:true,
                           defaultPageSize:this.props.condition.take,
                           onChange:(page:number,pageSize?:number)=>{
                               this.props.onChangePage(page,pageSize!);
                           }
                       }}

                />
                <Modal
                    title="删除"
                    cancelText="取消删除"
                    okText="确定"
                    okType="danger"
                    visible={this.state.deleteModel}
                    onOk={async () => {
                        this.setState({
                            ...this.state,
                            deleteLoading: true,
                        })
                        await this.deleteMovie();
                        this.setState({
                            ...this.state,
                            deleteLoading: false,
                            deleteModel: false,
                            deleteMovieId: "",
                        })
                    }}
                    confirmLoading={this.state.deleteLoading}
                    onCancel={() => {
                        this.setState({
                            ...this.state,
                            deleteModel: !this.state.deleteModel,
                        })
                    }}
                >
                    <p style={{color:"red"}}>确定删除？</p>
                </Modal>
            </>
        );
    }
}
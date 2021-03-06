import {Table, Switch, Image, Button, Modal} from 'antd';
import React from "react";
import {ColumnsType} from "antd/lib/table";
import {Movie} from "../commonType/Movie";
import {NavLink} from "react-router-dom"
import style from './index.less'
export enum MovieSwitchValue {
    isHot = "isHot",
    isComing = "isComing",
    isClassic = "isClassic",
}

export interface MovieTableEvent {
    onSwitchChange: (type: MovieSwitchValue, value: boolean, id: string) => void,
    onDelete: (id: string) => Promise<void>,
    onLoad: () => void,
    onChangePage: (newPage: number, pageSize: number) => void
}

type TState = {
    deleteModel: boolean,
    deleteMovieId: string,
}

export default class MovieTable extends React.Component<any & MovieTableEvent, TState> {
    state = {
        deleteModel: false,
        deleteMovieId: "",
    }

    componentDidMount() {
        this.props.onFeatch();
    }
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
            ellipsis:true,
        }, {
            dataIndex: "areas",
            title: "地区",
            ellipsis:true,
            render: (text: []) => {
                return text.join(", ")
            },
        }, {
            dataIndex: "isClassic",
            title: "是否经典",
            render: (text, movie) => {
                return (<Switch checked={text} onChange={(checked, event) => {
                    this.props.onSwitchChange(MovieSwitchValue.isClassic, checked, movie.id as string);
                }}/>)
            }
        }, {
            dataIndex: "isComing",
            title: "正在上映",
            render: (text, movie) => {
                return (<Switch checked={text} onChange={(checked) => {
                    this.props.onSwitchChange(MovieSwitchValue.isComing, checked, movie.id as string);
                }}/>)
            }
        }, {
            dataIndex: "isHot",
            title: "是否热门",
            render: (text, movie) => {
                return (<Switch checked={text} onChange={checked => {
                    this.props.onSwitchChange(MovieSwitchValue.isHot, checked, movie.id as string);
                }}/>)
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
            ellipsis:true,
            render: (text: []) => {
                return text.join(", ")
            }
        }, {
            dataIndex: "description",
            ellipsis:true,
            title: "描述"
        }, {
            title: "操作",
            dataIndex: "id",
            render: text => {
                return (<>
                    <NavLink to={"/movie/edit/" + text}>
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
                       scroll={{y:"calc(100vh - 220px)",scrollToFirstRowOnChange:true,}}
                       rowKey="id"
                       pagination={{
                           current: this.props.condition.page,
                           size:"default",
                           pageSize: this.props.condition.take,
                           total: this.props.total,
                           defaultPageSize: this.props.condition.take,
                           onChange: (page: number, pageSize?: number) => {
                               this.props.onChangePage(page, pageSize!);
                           }
                       }}

                />
                <Modal
                    title="删除"
                    cancelText="取消删除"
                    okText="确定"
                    okType="danger"
                    visible={this.state.deleteModel}
                    onOk={ () => {
                        this.props.onDelete(this.state.deleteMovieId)
                        this.setState({
                            deleteModel: !this.state.deleteModel,
                        })
                      }}
                    confirmLoading={this.props.deleteLoading}
                    onCancel={() => {
                        this.setState({
                            ...this.state,
                            deleteModel: !this.state.deleteModel,
                        })
                    }}
                >
                    <p style={{color: "red"}}>确定删除？</p>
                </Modal>
            </>
        );
    }
}
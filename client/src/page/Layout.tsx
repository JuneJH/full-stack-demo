import React from 'react';
import {NavLink, Route} from "react-router-dom";
import {Add} from "../page/movie/Add";
import List from "../page/movie/List";
import "../style/layout.css"
import {BarChartOutlined, FileAddOutlined} from '@ant-design/icons';

import {Layout,Menu} from 'antd';
import {Edit} from "./movie/edit";
import Home from "./Home";
import {RouteComponentProps} from "react-router";

const {Header, Sider, Content} = Layout;

const LayoutContainer: React.FC<RouteComponentProps> = (props) => {
    return (
        <div className="container">
            <Layout>
                <Header>
                    <NavLink to="/">后台管理系统</NavLink>
                </Header>
                <Layout>
                    <Sider>
                        <Menu
                            theme={"dark"}
                            selectedKeys={props.location.pathname as any}
                            inlineIndent={30}>
                            <Menu.Item key="/list" icon={<BarChartOutlined />}><NavLink to="/list" exact={true}>电影列表</NavLink></Menu.Item>
                            <Menu.Item key="/add" icon={<FileAddOutlined />}><NavLink to="/add" exact>添加电影</NavLink></Menu.Item>
                        </Menu>
                    </Sider>
                    <Content>
                        <div className="content">
                            <Route path="/" exact component={Home}/>
                            <Route path="/list" exact component={List}/>
                            <Route path="/add" exact component={Add}/>
                            <Route path="/edit" exact component={Edit}/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
};

export default LayoutContainer;
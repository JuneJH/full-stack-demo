import React from 'react';
import {NavLink, Route} from "react-router-dom";
import {Add} from "../page/movie/Add";
import {List} from "../page/movie/List";
import "../style/layout.css"

import {Layout,Menu} from 'antd';

const {Header, Sider, Content} = Layout;

const LayoutContainer: React.FC = () => {
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
                        inlineIndent={30}>
                            <Menu.Item><NavLink to="/list" exact={true}>列表</NavLink></Menu.Item>
                            <Menu.Item><NavLink to="/Add" exact>添加</NavLink></Menu.Item>
                        </Menu>
                    </Sider>
                    <Content>
                       <div className="content">
                           <Route path="/list" component={List}/>
                           <Route path="/Add" component={Add}/>
                       </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default LayoutContainer;
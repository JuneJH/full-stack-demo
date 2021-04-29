import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component<any> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const pathname = this.props.location.pathname
    if(pathname === "/login") return this.props.children;
    return (
      <Layout style={{height:"100%"}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" style={{height:60}}>后台管理系统</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
            <Menu.Item key="/movie/list" icon={<VideoCameraOutlined />}>
              <Link to="/movie/list">电影列表</Link>
            </Menu.Item>
            <Menu.Item key="/movie/add" icon={<VideoCameraOutlined />}>
               <Link to="/movie/add">添加电影</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              学生列表
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              padding: 15,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
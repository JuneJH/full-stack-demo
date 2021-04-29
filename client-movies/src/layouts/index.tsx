import React from 'react'
import { Layout, Menu ,Row,Col,Button} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link,history } from 'umi';
import style from './index.less'

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
      
          <Header style={{padding:0}}>
          <div className={style.logo}>
            <Row justify="space-between">
              <Col>
                <h2 style={{color:"inherit"}}>个人系统后台管理系统</h2>
              </Col>
              <Col>
                <Button type="link" style={{color:"inherit"}} onClick={()=>{
                  history.push("/login")
                }}>退出</Button>
              </Col>
            </Row>
          </div>
          </Header>
       
        <Layout className="site-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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
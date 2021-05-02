import React from "react";
import style from "./index.css";
import { Form, Input, Button,message} from "antd";
import {history,connect} from 'umi'
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
function Login(props:any) {
  if(props.isLogin){
    history.push("/");
    return null;
  }
    const onFinish = (values:any)=>{
       props.onLogin({...values})
    }
  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
          <h1>登录</h1>
        <Form {...layout}
        onFinish={onFinish}
        size={"large"}
        >
          <Form.Item label="用户"
          name="username"
          rules={[{required:true,message:"请输入用户名"}]}>
            <Input />
          </Form.Item>
          <Form.Item label="密码"
          name="password"
          rules={[{required:true,message:"请输入密码"}]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 20, offset: 4 }}>
            <Button type="primary" htmlType="submit" style={{width:"100%"}}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapProps = (state:any)=>{
  return {
    isLogin:state.login
  }
}
const mapDispatch = (dispatch:any)=>{
  return {
    async onLogin(login:any){
      const result =await dispatch({type:"login/login",payloay:{...login}});
      if(result){
        history.push("/")
      }else{
        message.error("用户名或者密码错误")
      }
    }
  }
}
export default connect(mapProps,mapDispatch)(Login)

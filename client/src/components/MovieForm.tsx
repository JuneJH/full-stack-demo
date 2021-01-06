import React, {Component} from 'react';
import {Form, Input, Button, Checkbox, Switch, InputNumber, message} from 'antd';
import UploadImg from "./UploadImg";
import TextArea from "antd/lib/input/TextArea";
import {RouteComponentProps, withRouter} from "react-router";
import {Movie} from "../commonType/Movie";

interface IMovieFormProps {
    onChange: (formData: Movie) => Promise<[]>,
}

class MovieForm extends Component<IMovieFormProps & RouteComponentProps> {
    render() {
        return (
            <Form
                labelCol={{span: 4, offset: 0}}
                wrapperCol={{span: 18, offset: 1}}
                style={{width: 400}}
                onFinish={async (value) => {
                    const result = await this.props.onChange(value);
                    if(result.length === 0){
                        message.success("添加成功",1,()=>{
                            this.props.history.push("/list")
                        })
                    }else{
                        result.forEach(err=>{
                            message.error(err)
                        })
                    }
                }}
            >
                <Form.Item
                    label="电影名称"
                    name="name"
                    rules={[{required: true, message: '电影名称不能为空'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="封面"
                    name="poster"
                >
                    <UploadImg/>
                </Form.Item>

                <Form.Item
                    label="地区"
                    name="areas"
                >
                    <Checkbox.Group options={["中国大陆", "中国台湾", "中国香港", "美国", "印度", "泰国", "日韩"]}/>
                </Form.Item>

                <Form.Item
                    label="是否经典"
                    name="isClassic"
                >
                    <Switch/>
                </Form.Item>

                <Form.Item
                    label="正在上映"
                    name="isComing"
                >
                    <Switch/>
                </Form.Item>

                <Form.Item
                    label="是否热门"
                    name="isHot"
                >
                    <Switch/>

                </Form.Item>

                <Form.Item
                    label="时长"
                    name="timeLong"
                >
                    <InputNumber min={1} max={999}/>
                </Form.Item>

                <Form.Item
                    label="电影类型"
                    name="types"
                >
                    <Checkbox.Group options={["喜剧", "戏剧", "动作", "爱情", "动漫", "纪录", "武打"]}/>
                </Form.Item>

                <Form.Item
                    label="描述"
                    name="description"
                >
                    <TextArea rows={4}/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{span: 18, offset: 5}}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}


export default withRouter(MovieForm);

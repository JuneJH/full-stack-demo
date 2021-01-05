import {Component} from "react";
import {message, Modal, Upload} from "antd";
import {UploadFile} from "antd/lib/upload/interface";
import {PlusOutlined} from '@ant-design/icons';
import MovieApi from "../api/MovieApi";

interface IUploadProps {
    value: string,
    onChange: (url: string) => void
}

interface IUploadState {
    isPreview: boolean
}

export default class UploadImg extends Component<IUploadProps, IUploadState> {
    state = {
        isPreview: false,
    }

    private getFileList(): UploadFile<any>[] {
        if (this.props.value) {
            return [{
                uid: this.props.value,
                url: this.props.value,
                name: this.props.value,
            }]
        }
        return [];
    }

    private getUploadBtn() {
        if (!this.props.value) {
            return (<div>
                <PlusOutlined/>
                <div style={{marginTop: 8}}>Upload</div>
            </div>)
        }
        return null;
    }

    private handlePreview() {
        this.setState({
            ...this.state,
            isPreview: true,
        })
    }

    render() {
        return (<>
            <Upload
                action="/api/upload"
                fileList={this.getFileList()}
                listType="picture-card"
                name="poster"
                onPreview={this.handlePreview.bind(this)}
                onRemove={() => {
                    this.props.onChange("")
                }}
                customRequest={async (item) => {
                    const form = new FormData();
                    form.append(item.filename, item.file);
                    const result = await MovieApi.uploadPoster(form);
                    if (result.err) {
                        message.error('上传失败,请重试');
                    } else {
                        this.props.onChange(result.data)
                    }
                }}
            >
                {this.getUploadBtn()}

            </Upload>
            <Modal
                visible={this.state.isPreview}
                title="预览"
                footer={null}
                onCancel={() => {
                    this.setState({
                        ...this.state,
                        isPreview: false,
                    })
                }}
            >
                <img alt="example" style={{width: '100%'}} src={this.props.value}/>
            </Modal>
        </>)
    }
}
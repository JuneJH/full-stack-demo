import React, {Component} from 'react';
import Upload from "../components/UploadImg"

class Home extends Component {
    state={
        value:"",
    }
    render() {
        return (
            <div>
                <Upload value={this.state.value} onChange={(url)=>{
                    this.setState({...this.state, value:url})
                }}/>
            </div>
        );
    }
}

export default Home;
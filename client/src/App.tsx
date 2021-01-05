import React from 'react';
import {store} from "./redux/store";
import Layout from "./page/Layout";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={Layout}/>
            </BrowserRouter>
        </Provider>);
}


export default App;

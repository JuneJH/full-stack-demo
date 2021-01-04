import React from 'react';
import {movieActions} from "./redux/action/movieAction"
import {store} from "./redux/store";
import Layout from "./page/Layout";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

store.dispatch(movieActions.fetchMovie({take: 10, page: 1})).then(data => {

});

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={Layout}/>
            </BrowserRouter>
        </Provider>);
}


export default App;

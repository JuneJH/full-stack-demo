import React from 'react';
import {movieActions} from "./redux/action/movieAction"
import {store} from "./redux/store";
import {Layout} from "./page/Layout";
import {BrowserRouter, Route} from "react-router-dom";

store.dispatch(movieActions.fetchMovie({take:2,page:2})).then(data=> {

});

const App:React.FC = ()=>{
    return (<BrowserRouter>
        <Route path="/" component={Layout}/>
    </BrowserRouter>);
}


export default App;

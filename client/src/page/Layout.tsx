import React from 'react';
import {NavLink, Route} from "react-router-dom";
import {Add} from "../page/movie/Add";
import {List} from "../page/movie/List";

export const Layout: React.FC = () => {
    return (<div>
        <header>
            <ul>
                <li> <NavLink to="/list" exact={true}>列表</NavLink></li>
                <li> <NavLink to="/Add" exact>添加</NavLink> </li>
            </ul>
        </header>
        <div style={
            {
                height: 200,
                backgroundColor: "#008c8c"
            }
        }>
            <Route path="/list" component={List}/>
            <Route path="/Add" component={Add}/>
        </div>
    </div>);
}
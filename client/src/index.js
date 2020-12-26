import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieApi from "./api/MovieApi";

MovieApi.add({
    name:"新世界",
    areas:["韩国"],
    types:["喜剧","搞笑"],
    isHot:true,
    isClassic:true,
    isComing:true,
    timeLong:123,
    description:"黄正在",
    poster:"123"
}).then(data=>{console.log(data)})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

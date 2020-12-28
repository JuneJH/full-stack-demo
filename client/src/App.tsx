import React from 'react';
import MovieApi from "./api/MovieApi"
import {Movie} from "./commonType/Movie";


const m ={


}
MovieApi.edit("97afbf78-04a3-4b94-b0fa-3fd15670f776",m).then(r => console.log("修改结果",r))
function App() {

  return (
    <div>
        hellow word
    </div>
  );
}

export default App;

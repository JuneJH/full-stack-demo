import React from 'react';
import {movieActions} from "./redux/action/movieAction"
import {store} from "./redux/store";

console.log("初始化",store.getState())
store.subscribe(() => console.log(store.getState()));
store.dispatch(movieActions.setCondition({page: 100, take: 20}));
store.dispatch(movieActions.setLoading(true));
function App() {

  return (
    <div>
        hello word
    </div>
  );
}

export default App;

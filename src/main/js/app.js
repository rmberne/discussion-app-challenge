import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import ThreadsIndex from "./components/threads_index";
import ThreadsNew from "./components/threads_new";
import ThreadsShow from "./components/threads_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/threads/new" component={ThreadsNew}/>
            <Route path="/threads/:id" component={ThreadsShow}/>
            <Route path="/" component={ThreadsIndex}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>,
    document.querySelector("#react")
);
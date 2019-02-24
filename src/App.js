
import React, {Component} from 'react';
import {  BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import {createStore} from "./libs/myRedux";
import {countNum} from "./reducers/index";
import {Provider, connect} from "./libs/my-react-redux";
import HomePage from "./components/home";
const store = createStore(countNum);
const init = store.getState();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

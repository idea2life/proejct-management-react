import React from 'react';
import './App.css';
import {PrivateRoute} from './components/PrivateRoute.js';
import Home from './views/Home';
import Plan from './views/Plan';
import Login from './views/Login';
import Signup from './views/Signup';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import {store} from './store';
export const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router history={history}>
          <PrivateRoute exact path = "/" component={Plan} />
          <Route path = "/home" component = {Home} />
          <Route path = "/plan" component = {Plan} />
          <Route path = "/login" component = {Login} />
          <Route path = "/signup" component = {Signup} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

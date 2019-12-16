/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
// core components
import Admin from "layouts/Admin.js";
import "assets/css/material-dashboard-react.css?v=1.8.0";
import {PrivateRoute} from './components/PrivateRoute.js';
import Login from './views/Login';
import Signup from './views/Signup';
import {store} from './store';
import history from './history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path = "/" component={Admin} />
        <Route path="/admin" component={Admin} />
        <Route path = "/login" component = {Login} />
        <Route path = "/signup" component = {Signup} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);

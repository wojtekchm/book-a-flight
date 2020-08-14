import React from "react";
import "../style/main.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./Login";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;

import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { OrderPage } from "./components/OrderPage/OrderPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomePage} exact={true} />
        <Route path="/order" component={OrderPage}></Route>
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

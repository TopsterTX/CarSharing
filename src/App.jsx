import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Aside } from "./components/Aside/Aside";
import { OrderPage } from "./components/OrderPage/OrderPage";
import { HomePage } from "./components/HomePage/HomePage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Aside />
        <Switch>
          <Route path="/home" render={() => <HomePage />} />
          <Route path="/order" render={() => <OrderPage />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

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
          <Route to="/home" component={HomePage} />
          {/* <Route to='/order' component={Order}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

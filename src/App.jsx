import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Aside } from "./components/Aside/Aside";
import { OrderPage } from "./components/OrderPage/OrderPage";
import { HomePage } from "./components/HomePage/HomePage";
import "./App.scss";

function App() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <BrowserRouter>
      <div className="page">
        <Aside isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav}/>
        <Switch>
          <Route to="/home" render={() => <HomePage isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav}/>} />
          {/* <Route to='/order' component={Order}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

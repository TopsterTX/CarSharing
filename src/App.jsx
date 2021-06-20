import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;

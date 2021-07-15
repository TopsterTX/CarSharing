import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Aside } from "./components/Aside/Aside";
import "./App.scss";
import { AppRouter } from "./components/AppRouter/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Aside />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Main } from "./components/Main/Main";
import { Aside } from "./components/Aside/Aside";
import { Slider } from "./components/Slider/Slider";
import "./App.scss";

function App() {
  return (
    <div className="page">
      <Main />
      <Aside />
      <Slider />
    </div>
  );
}

export default App;

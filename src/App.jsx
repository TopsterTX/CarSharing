import React from "react";
import { Main } from "./components/HomePage/Main/Main";
import { Aside } from "./components/HomePage/Aside/Aside";
import { Slider } from "./components/HomePage/Slider/Slider";
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

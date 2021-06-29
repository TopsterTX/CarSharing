import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Context } from "./context";
import "./index.scss";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
console.log(store.getState());

const state = {
  isOpenNav: false,
  setIsOpenNav(bool) {
    this.isOpenNav = bool;
  },
  isSliderHide: false,
  setIsSliderHide(bool) {
    this.isSliderHide = bool;
  },
};

ReactDOM.render(

      <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
      </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
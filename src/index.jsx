import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

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

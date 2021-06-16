import React from "react";
import { Menu } from "../../Aside/menu/Menu";
import {Location} from './location/Location'
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__block">
          <Menu className="burger__menu burger__menu--header" />
          <h2 className="header__title">Need for drive</h2>
        </div>
        <Location/>   
      </div>
    </header>
  );
};

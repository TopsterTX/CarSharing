import React from "react";
import BurgerMenu from "../../../Aside/BurgerMenu/BurgerMenu";
import { Location } from "./Location/Location";
import "./Header.scss";

export const Header = ({className}) => {
  return (
    <header className={`header ${className}`} >
      <div className="header__container">
        <div className="header__block">
          <BurgerMenu
            className="burger-menu burger-menu--header"
          />
          <h2 className="header__title">Need for drive</h2>
        </div>
        <Location />
      </div>
    </header>
  );
};

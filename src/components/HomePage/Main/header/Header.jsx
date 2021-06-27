import React from "react";
import { BurgerMenu } from "../../../Aside/BurgerMenu/BurgerMenu";
import { Location } from "./Location/Location";
import "./Header.scss";

export const Header = ({type}) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__block">
          <BurgerMenu
            className="burger-menu burger-menu--header"
            id="menu-header"
            type={type}
          />
          <h2 className="header__title">Need for drive</h2>
        </div>
        <Location />
      </div>
    </header>
  );
};

import React from "react";
import {BurgerMenu} from "../../../Aside/BurgerMenu/BurgerMenu";
import { Location } from "./Location/Location";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export const Header = ({ className }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header__container">
        <div className="header__block">
          <BurgerMenu className="burger-menu burger-menu--header" />
          <NavLink to="/" className="header__title">
            Need for drive
          </NavLink>
        </div>
        <Location />
      </div>
    </header>
  );
};

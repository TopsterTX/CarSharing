import React from "react";
import { BurgerMenu } from "../../../Aside/BurgerMenu/BurgerMenu";
import { Location } from "./Location/Location";
import "./Header.scss";

export const Header = ({ isOpenNav, setIsOpenNav }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__block">
          <BurgerMenu isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} className='burger-menu burger-menu--header'/>
          <h2 className="header__title">Need for drive</h2>
        </div>
        <Location />
      </div>
    </header>
  );
};

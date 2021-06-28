import React, {useState} from "react";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Language } from "./Language/Language";
import { Navigation } from "./Navigation/Navigation";
import "./Aside.scss";

export const Aside = ({isOpenNav, setIsOpenNav}) => {

  

  return (
    <aside className="aside">
      <div className="aside__container">
        <BurgerMenu className="burger-menu burger-menu--aside" setIsOpenNav={setIsOpenNav} isOpenNav={isOpenNav}/>
        <Language className="language" />
        <Navigation isOpenNav={isOpenNav}/>
      </div>
    </aside>
  );
};

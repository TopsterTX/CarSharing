import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Language } from "./Language/Language";
import Navigation from "./Navigation/Navigation";
import "./Aside.scss";

export const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__container">
        <BurgerMenu className="burger-menu burger-menu--aside" />
        <Language className="language" />
        <Navigation />
      </div>
    </aside>
  );
};

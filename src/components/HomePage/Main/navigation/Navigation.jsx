import React from "react";
import { Language } from "../../Aside/language/Language";
import { Social } from "./social/Social";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <nav className="navigation" id="nav">
      <div className="navigation__wrapper">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              ПАРКОВКА
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              СТРАХОВКА
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              БЕНЗИН
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              ОБСЛУЖИВАНИЕ
            </a>
          </li>
          <Social />
        </ul>
        <Language className="language language--navigation" />
      </div>
    </nav>
  );
};

import React from "react";
import { Language } from "../../Aside/Language/Language";
import { Social } from "./Social/Social";
import "./Navigation.scss";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const navigation = useSelector((state) => state.navigation);

  return (
    <nav
      className={navigation.isOpenNav ? "navigation active" : "navigation"}
      id="nav"
    >
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

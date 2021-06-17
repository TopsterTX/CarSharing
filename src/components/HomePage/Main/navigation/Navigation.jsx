import React from "react";
import { Language } from "../../Aside/language/Language";
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
          <section className="navigation__social">
            <span className="navigation__icon navigation__icon--telegram"></span>
            <span className="navigation__icon navigation__icon--facebook"></span>
            <span className="navigation__icon navigation__icon--instagram"></span>
          </section>
        </ul>
        <Language className='language language--navigation'/>
      </div>
    </nav>
  );
};

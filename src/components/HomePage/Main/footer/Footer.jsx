import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <a href="tel:84952342244" className="footer__tel">
          8 (495) 234-22-44
        </a>
        <small className="footer__copyright">
          &copy; 2016-2019 «Need for drive»
        </small>
      </div>
    </footer>
  );
};

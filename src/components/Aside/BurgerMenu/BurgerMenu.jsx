import React, { useRef } from "react";
import "./BurgerMenu.scss";

export const BurgerMenu = ({ className, setIsOpenNav, isOpenNav }) => {
  const burgerMenu = useRef();

  const menuBurgerHandler = (e) => {
    setIsOpenNav(!isOpenNav);
    burgerMenu.current.classList.toggle("active");
  };

  return (
    <button
      className={className}
      ref={burgerMenu}
      onClick={() => menuBurgerHandler()}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

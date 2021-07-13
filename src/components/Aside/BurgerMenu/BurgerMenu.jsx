import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../../../redux/ActionCreators/Navigation/navigation";
import { sliderHide } from "../../../redux/ActionCreators/Slider/slider";
import "./BurgerMenu.scss";

export const BurgerMenu = ({ className}) => {
  const burgerMenu = useRef();

  const dispatch = useDispatch();
  const navigation = useSelector((state) => state.navigation);
  const slider = useSelector((state) => state.slider);

  const menuBurgerHandler = () => {
    dispatch(toggleNav(!navigation.isOpenNav));
    burgerMenu.current.classList.toggle("active");
    dispatch(sliderHide(!slider.isHide));
    document.body.classList.toggle("--lock");
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
